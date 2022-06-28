import React from 'react'
// https://i.imgur.com/7D7I6dI.png
function SellersCard({seller}) {

  return (
    <div className='container'>
    <div style={{width:"500px"}}>
      <a href className="card" >
        <img src={seller&&seller.photo ? `Image/${seller.photo}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className="card__thumb" src={seller&&seller.photo ? `Image/${seller.photo}`: "https://bootdey.com/img/Content/avatar/avatar7.png"}  alt="" />
            <div className="card__header-text">
              <h3 className="card__title">{seller.name}</h3>            
              <span className="card__status">1 hour ago</span>
            </div>
          </div>
          <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        </div>
      </a>      
  </div>
  </div>
  )
}

export default SellersCard