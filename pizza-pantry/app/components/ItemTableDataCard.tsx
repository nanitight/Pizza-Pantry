'use client' ;
import React from 'react'
import AddToList from './AddToList';
import { ItemFromDB } from '../interfaces/defaults';

const ItemTableDataCard :React.FC<Partial<ItemFromDB>> = ({
    name,category,quantity,unit
}) => {
  return (
    <>
  <tr>
                        <td className="font-mono">{unit}</td>
                        <td className="font-semibold">{name}</td>
                        <td>{category}</td>
                        <td className="text-center">
                            <div className="badge badge-success badge-outline">{quantity}</div>
                        </td>
                        <td className="text-center space-x-2">
                            <button className="btn btn-sm btn-ghost tooltip" data-tip="Update Item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 18.07a4.99 4.99 0 0 1-1.308 1.493l-4.137 1.15s-2.585.72-2.906-.328c-.321-1.048 1.15-2.585 1.15-2.585l1.15-4.137a4.99 4.99 0 0 1 1.493-1.308L16.862 4.487Z" /></svg>
                            </button>
                            <button className="btn btn-sm btn-ghost tooltip text-error" data-tip="Delete Item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0-.91-6.75m1.527-6.524 5.22-.647 1.696.182-5.22.647M6.88 12l.74 4.5M6 9h12" /></svg>
                            </button>
                        </td>
                    </tr>
                    
                    {/* <tr>
                        <td className="font-mono">A-1002</td>
                        <td className="font-semibold">Organic Cotton T-Shirt (Large)</td>
                        <td>Apparel</td>
                        <td className="text-center">
                            <div className="badge badge-warning badge-outline">3</div>
                        </td>
                        <td className="text-center space-x-2">
                            <button className="btn btn-sm btn-ghost tooltip" data-tip="Update Item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 18.07a4.99 4.99 0 0 1-1.308 1.493l-4.137 1.15s-2.585.72-2.906-.328c-.321-1.048 1.15-2.585 1.15-2.585l1.15-4.137a4.99 4.99 0 0 1 1.493-1.308L16.862 4.487Z" /></svg>
                            </button>
                            <button className="btn btn-sm btn-ghost tooltip text-error" data-tip="Delete Item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0-.91-6.75m1.527-6.524 5.22-.647 1.696.182-5.22.647M6.88 12l.74 4.5M6 9h12" /></svg>
                            </button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td className="font-mono">B-2050</td>
                        <td className="font-semibold text-error/80">Premium Leather Wallet</td>
                        <td>Accessories</td>
                        <td className="text-center">
                            <div className="badge badge-error badge-outline">0</div>
                        </td>
                        <td className="text-center space-x-2">
                            <button className="btn btn-sm btn-ghost tooltip" data-tip="Update Item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 18.07a4.99 4.99 0 0 1-1.308 1.493l-4.137 1.15s-2.585.72-2.906-.328c-.321-1.048 1.15-2.585 1.15-2.585l1.15-4.137a4.99 4.99 0 0 1 1.493-1.308L16.862 4.487Z" /></svg>
                            </button>
                            <button className="btn btn-sm btn-ghost tooltip text-error" data-tip="Delete Item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0-.91-6.75m1.527-6.524 5.22-.647 1.696.182-5.22.647M6.88 12l.74 4.5M6 9h12" /></svg>
                            </button>
                        </td>
                    </tr> */}
  </>
  )
}

export default ItemTableDataCard