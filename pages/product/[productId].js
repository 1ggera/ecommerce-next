//ruta dinámica q permite traer elementos desde el ID
import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const { query:{ productId } } = useRouter()

  return (
    <div>Esta es la página del producto: {productId}</div>
  )
}

export default ProductItem