import React from "react"



 export default function  Filter ({count,condition,filterCondition,filterPrice,price})  {
 return (
    <div className="filter" style={{ background:"grey"}}  >
    <div className="filter-result" style={{ color:"white"}} Products >Se encontraron {count} Productos</div>
         <div  style={{ color:"white"}} >
           Filtrar{" "}
           <select
           value={condition}
           onChange={filterCondition}
           >
            <option value="">-</option>
            <option value="used">Usado</option>
            <option value="new">Nuevo</option>
           </select>
         </div>
         <div  style={{ color:"white"}} >
          Ordenar{" "}
          <select
          value={price}
          onChange={filterPrice}
          >
            <option value="">-</option>
            <option value="mayor">Mayor Precio</option>
            <option value="menor">Menor Precio</option>
          </select>
        </div>
         </div>

 )
}
