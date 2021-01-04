import React, { useState } from "react"
import Navbar from './components/navbar'
import Catalogo from './components/catalogo'
import Filter from './components/filter'

function App() {
  const [products, setProducts] = useState([])
  const [condition] = useState("")
  const [price] = useState("")


  const onSearch = (data) => {
    setProducts(data)
    console.log(data)

  }

    const filterCondition = (event,data) => {
      console.log(event.target.value)
      if (event.target.value === ""){
        setProducts(data.products)
      } else {
        setProducts(
       products.filter((product) => product.condition.indexOf(event.target.value)>=0)
        )
      }
    }


    const filterPrice = (event) => {
      console.log(event.target.value)
      const sort = event.target.value
      if (sort === "mayor") {
     setProducts(
       products.slice().
       sort((a, b) => { return a.price < b.price})
     )
   } else {
     setProducts(
       products.slice().
       sort((a, b) => { return a.price > b.price })
     )
     }
    }


    return (
      <div>
        <Navbar
          onSearch={onSearch}
        />
        <Filter
        count={products.length}
        condition={condition}
        price={price}
        filterCondition={filterCondition}
        filterPrice={filterPrice}
        />
      <Catalogo
       onSearch={products}
      />
      </div>
    )
  }

export default App
