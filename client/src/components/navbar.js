import React, { useState } from "react"


export default  function SearchBar({onSearch}) {
  const [key, setKey] = useState("")

  const url = (`https://tiendaback.herokuapp.com/search?q=${key}`)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(url)
      .then((r) => r.json())
      .then((data) => {
        onSearch(data)
      })
  }
  const handleChange = (e) => {
    setKey(e.target.value)
  }


  return (
      <nav className="navbar navbar-dark "  style={{ height:"70px", backgroundImage: "url(https://comps.canstockphoto.es/compras-patr%C3%B3n-seamless-carrito-eps-vectorial_csp35093781.jpg)"}} >
       <a className="navbar-brand"  style={{ background:"grey"}} >Tienda Virtual</a>
          <form className="form-inline"    onSubmit={handleSubmit}  >
              <input
                  className="form-control mr-sm-2"
                  type="search" placeholder="Buscar" aria-label="Buscar"
                  onChange={handleChange}
              />
              <button className="btn btn-light" type="submit" > <ion-icon name="search-sharp"></ion-icon></button>
          </form>
      </nav>
  )
}
