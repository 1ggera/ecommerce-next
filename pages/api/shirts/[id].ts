import { NextApiRequest, NextApiResponse } from 'next'
import DB from "@database"

const allProducts = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  //capturo el id aplicando 'NextApiRequest' y 'NextApiResponse' en la 'request'
  const id = request.query.id 

  const entry = await db.getById(id as string)

  response.statusCode = 200
  response.setHeader( 'Content-type', 'application/json' )
  response.end(JSON.stringify({ data: entry }))
}

export default allProducts;