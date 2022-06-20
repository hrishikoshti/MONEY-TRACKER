import React from 'react'
import '../resources/DefaultLayout.css'

function DefaultLayout(props) {
  return (
    <div className='layout'>
        <div className="header d-flex justify-content-between align-items-center">
            <div>
            <h1 className="logo">MONEY TRACKER</h1>
            </div>

            <div>
          <h1 className='username'>Username</h1>
        </div>

        
        </div>
        

        <div className='content'>
        {props.children}
        </div>

    </div>
  )
}

export default DefaultLayout