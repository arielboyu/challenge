import React from 'react'
import ProductCard from './productcard'

export default function ProducList ({ products })  {

  return (
    <div className="container mt-1 mb-5 pt-5 pb-1">
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
    { products.map(({address, thumbnail, title, price,available_quantity, condition, permalink }) => {
            return <ProductCard
            thumbnail={thumbnail}
            title={title}
            price={price}
            condition={condition}
            available_quantity={available_quantity}
            permalink={permalink}
            address={address}
            />
          })}
      </div>
  </div>
  );
};
