import React from 'react'

const RightImage = ({imageURL, productName, productDescription,learnMore}) => {
  return (
    <div className='container'>
        <div className='row p-5'>
            <div className='col-4 mt-5'>
                <h3 className='text-muted mb-3'>{productName}</h3>
          <p>{productDescription}</p>
          <div className='mb-5'>
         <a href={learnMore}>learn More
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
         </a>
        </div>
          </div>
          <div className='col-2'></div>
            <div className='col-6 mt-2'>
            <img src={imageURL}></img>
          </div>
            
        </div>
    </div>
  )
}

export default RightImage