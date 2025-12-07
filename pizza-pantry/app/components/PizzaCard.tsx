import React from 'react'

const PizzaCard = () => {
  return (<div className="card bg-base-200 shadow">
  <div className="card-body">
    <h2 className="card-title">Mozzarella</h2>
    <p>Current: 12 kg</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm">Update</button>
    </div>
  </div>
</div>
  )
}

export default PizzaCard