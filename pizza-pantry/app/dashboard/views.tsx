"use client"
import React, { useEffect, useState } from 'react'
import { ClerkUser, EditingOperation, ItemFromDB } from '../interfaces/defaults'
import { GetItemResults } from '../interfaces/api'
import { useAPIRequster } from '../re-use/ApiRequester'
import Link from 'next/link'
import EditItemModal from '../components/EditItemModal'
import ItemTableDataCard from '../components/ItemTableDataCard'
import { defaultModalId } from '../data/defaults'
import { getItems } from '../lib/db'


const DashboardView : React.FC<EditingOperation>= ({}) => {
    const [items,setItems] = useState<ItemFromDB[]>({} as ItemFromDB[])
    const [apiResults,setResults] = useState<GetItemResults>({} as GetItemResults)
    const [currItem,setCurrItem] = useState<ItemFromDB>({} as ItemFromDB)
    const [currUser,setCurrUser] = useState<ClerkUser>({} as ClerkUser)
    const {loading,setLoading,loadingScreen} = useAPIRequster() ;
    const getId = ():string => {
        return currItem && currItem._id?currItem._id.toString():defaultModalId ;
        }

        
    const fetchItems = async ()=>{
        setLoading(true) ;

        const apiResults : GetItemResults = await getItems() ;
        if (!apiResults.err)
            setItems(apiResults.success) ;
        setResults(apiResults) ;
        setLoading(false) ;
        }

    useEffect(()=>{fetchItems()},[]) ;
        console.log("selected: ",currItem)
  return (
    <div className="p-4 bg-base-100 max-h-1">
        <h1 className="text-3xl font-bold mb-4 text-primary">Inventory Stock Tracker</h1>
{
        loading ? loadingScreen : 
        <>

          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

            <div className="flex items-center space-x-2 w-full md:w-auto">
                <label className="input input-bordered flex items-center gap-2 flex-grow">
                    <input type="text" className="grow" placeholder="Search/filter item name or category" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.536a5.75 5.75 0 1 1 1.06-1.06l2.083 2.083a.75.75 0 0 1-1.06 1.06l-2.083-2.083Zm-4.215-.285a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z" clipRule="evenodd" /></svg>
                </label>
                
                <select defaultValue={"select"} className="select select-bordered w-full max-w-xs md:w-auto">
                    <option disabled value={"select"}>Sort By</option>
                    <option>Name</option>
                    <option>CreatedDate</option>
                    <option>Quantity</option>
                </select>
            </div>

            <Link className="btn btn-primary w-full md:w-auto"  href={"/dashboard/add"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Create New Item
            </Link>
        </div>
          <div className="overflow-x-auto">
            {
                    items && items.length>0 ? <>
                    {
                          /*Modal*/  
                          }
                           {/* <input type="checkbox" id={getId()} className="modal-toggle" />
    <div className={`modal ${getId() !== defaultModalId? "modal-open" :"" }`} role="dialog">
    <div className="modal-box">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">This modal works with a hidden checkbox!</p>
    </div>
    <label className="modal-backdrop" htmlFor={getId()}>Close</label>
    </div> */}
                          <EditItemModal id={getId()} item={currItem} user={currUser} />

                      <table className="table table-zebra w-full">
                              <thead>
                                  <tr>
                                      <th className="w-1/12">Unit</th>
                                      <th className="w-4/12">Item Name</th>
                                      <th className="w-2/12">Category</th>
                                      <th className="w-1/12 text-center">Stock</th>
                                      <th className="w-4/12 text-center">Actions</th>
                                  </tr>
                              </thead>
                                
                              <tbody>
                                { items.map((obj, i)=> 
                                      <ItemTableDataCard  key={i} obj ={obj} select={setCurrItem}
                                      />
                                    )
                                }
                                  
                              </tbody>
                          </table>
                          </>
                    : 
                    <h2 className='link-error'> {apiResults.err&&apiResults.err.length> 0? apiResults.err: "Nothing In Inventory"}</h2>
                  }

        </div>
   
        </>
}
    </div>
  )
}

export default DashboardView