import React from 'react'

const LeftImage = ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className='container'>
      <div className='row p-5'>
        <div className='col-6 p-3'>
          <img src={imageURL}/>
        </div>
        <div className='col-2'></div>
        <div className='col-4 mt-5'>
          <h3 className='text-muted mb-3'>{productName}</h3>
          <p>{productDescription}</p>
          <div className='mb-5'>
          <a href={tryDemo}>Try Demo 
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <a href={learnMore} style={{marginLeft:"50px"}}>learn More
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          </div>
          <div className='mb-5'>
          <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'></img></a>
          <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstorebadge.svg'></img></a></div>
        </div>
        
      </div>
    </div>
  )
}

export default LeftImage