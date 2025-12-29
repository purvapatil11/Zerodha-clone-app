import React from 'react'

const Brokerage = () => {
  return (
    <div className='container mt-5 border-top'>
      <div className='row'>
      <div className='col-8 mt-5'>
        <h2 className='text-center mb-3' style={{color:"#6699ff"}}>Brokerage calculator</h2>
        <ul style={{lineHeight:"2.5", fontSize:"16px"}} className='text-muted'>
          <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order</li>
          <li>Digital contract notes will be sent via e-mail</li>
          <li>Physical copies of contract name, if required, shall be charged ₹20 per contract note.Courier charges apply</li>
          <li>For NRI account(non-PIS), 0.5% or ₹100 per executed order for equity(whichever is lower)</li>
          <li>For NRI account(PIS), 0.5% or ₹200 per executed order for equity(whichever is lowered)</li>
          <li>If the account is in debt balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order</li>
        </ul>
      </div>
      <div className='col-4 mt-5'>
        <h2 className='text-center mb-3' style={{color:"#6699ff"}}>List of charges</h2>

      </div>
    </div>
    </div>
  )
}

export default Brokerage