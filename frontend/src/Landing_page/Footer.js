import React from 'react'

const Footer = () => {
  return (
    <footer  className='border-top'style={{backgroundColor:"rgb(250, 250, 250)"}}>
    <div className='container mt-5'>
      <div className='row mt-5'>
        <div className='col'>
          <img src='media/images/logo.svg' style={{width:"50%"}}></img>
          <p>&copy; 2010 - 2025, Zerodha Broking Ltd.
All rights reserved</p>
        </div>
        <div className='col'>
          <p>Company</p>
          <a href=''>About</a><br/>
          <a href=''>Products</a><br/>
          <a href=''>Pricing</a><br/>
          <a href=''>Refrerral Programme</a><br/>
          <a href=''>Careers</a><br/>
          <a href=''>Zerodha.tech</a><br/>
          <a href=''>Press & media</a><br/>
          <a href=''>Zerodha cares(CSR)</a><br/>
        </div>
        <div className='col'>
          <p>Support</p>
          <a href=''>Contact</a><br/>
          <a href=''>Support portal</a><br/>
          <a href=''>Z-Connect blog</a><br/>
          <a href=''>List of charges</a><br/>
          <a href=''>Downloads & resources</a><br/>
        </div>
        <div className='col'>
          <p>Account</p>
          <a href=''>Open an account</a><br/>
          <a href=''>Fund transfer</a><br/>
          <a href=''>60 day challenge</a><br/>
        </div>
      </div>
      <div className='text-small text-muted' style={{fontSize:"11px"}}>
      <div className='mt-5'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</div>
      <div className='mt-3'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievance</div>
      <div className='mt-3'><a href=''>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></div>
      <div className='mt-3'>Investments in securities market are subject to market risks; read all the related documents carefully before investing</div>
      <div className='mt-3'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month</div>
      <div className='mt-3'>India's largest broker based on networth as per NSE.<a href=''>NSE broker factsheet</a> </div>
      <div className='mt-3'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <a  href=''> create a ticket here.</a></div>
      <div className='mt-3'>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products</div>
    </div>
    </div>
    <div className='container mt-3'>
      <div className='row'>
        <p className='col text-muted' style={{fontSize:"14px"}}>NSE</p>
        <p className='col text-muted' style={{fontSize:"14px"}}> BSE</p> 
        <p className='col text-muted' style={{fontSize:"14px"}}>MCX</p>
        <p className='col text-muted' style={{fontSize:"14px"}}> Terms & conditions</p>
        <p className='col text-muted' style={{fontSize:"14px"}}> Policies & procedures </p>
        <p className='col text-muted' style={{fontSize:"14px"}}>Privacy policy</p>
        <p className='col text-muted' style={{fontSize:"14px"}}> Disclosure </p>
        <p className='col text-muted' style={{fontSize:"14px"}}>For investor's attention</p>
        <p className='col text-muted' style={{fontSize:"14px"}}>Investor charter</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer