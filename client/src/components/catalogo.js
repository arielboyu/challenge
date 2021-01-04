import React, { useState, useEffect } from "react"
import ProductCard from "./productcard"
import Pagination from "./pagination"
import ProdList from './prodList'


export default function Catalogo({ onSearch }) {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [prodPerPage] = useState(15)



  useEffect(() => {
    setProducts(onSearch)
    console.log(onSearch)
  }, [onSearch])

 // Paginacion
  const indexOfLastProd = currentPage * prodPerPage
  const indexOfFirstProd = indexOfLastProd - prodPerPage
  const currentProd = products.slice(indexOfFirstProd, indexOfLastProd)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
  <div className="container mt-5 mb-5 pt-5 pb-2">
       <ProdList products={currentProd} />
       <Pagination
        prodPerPage={prodPerPage}
        totalProd={products.length}
        paginate={paginate}
      />
    </div>
  )
}
