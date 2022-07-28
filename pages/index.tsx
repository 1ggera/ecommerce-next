import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
  
const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/shirts')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div><h1>Hello al ecommerce Multi</h1></div>
      {productList.map((product) => (
        <div>
          <h3>Remera modelo {product.image}</h3>
          <p>
            Precio: {product.price}
            <br />
            Descripción: {product.attributes.description}
          </p>
        </div>
        
      ))}
    </div>
  )
}
  
export default Home