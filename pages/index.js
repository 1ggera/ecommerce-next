import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
  
const Home = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('/api/shirts')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
      //.then(console.log)
      //.then((json) => (json))
  }, [])

  return (
    <div>
      <Navbar />
      <div><h1>Hello al ecommerce Multi</h1></div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}
  
export default Home