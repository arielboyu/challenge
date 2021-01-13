import React from 'react'

export default function ProductCard({title, price, address, thumbnail, available_quantity, condition, permalink }) {



    return (
      <div className="col mb-4 mt-4">
      <div class="card">
      <img className="card-img"  style={{  width: "340px", height: "200px" }} src={thumbnail} alt="Card image cap" ></img>
      <div class="card-body"  style={{ background: "white" }}  >
        <h5 class="card-title">{title}</h5>
        <p class="card-text" style={{fontSize:"23px"}} >Estado: {condition}</p>
        <p class="card-text" style={{fontSize:"23px"}} >Stock: {available_quantity}</p>
        <p class="card-text" style={{fontSize:"23px"}} ><ion-icon name="logo-usd"></ion-icon>  {price}</p>
        <p class="card-text" style={{fontSize:"23px"}} ><ion-icon name="navigate-circle-outline"></ion-icon>  {address.city_name}</p>
      </div>
      <div class="card-body d-flex " style={{ backgroundImage: "url(https://i.pinimg.com/564x/29/a0/10/29a010af85c39654fd79feee868e7ca0.jpg)"}} >
        <a href={permalink} class=" ml-auto "><button type="button" class="btn1 btn-info ml-auto "><ion-icon name="add-outline"></ion-icon> info</button></a>
      </div>
    </div>
    </div>
    )
}
