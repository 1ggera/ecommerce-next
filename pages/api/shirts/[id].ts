import { NextApiRequest, NextApiResponse } from "next"
import DB from "@database"

const allProducts = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  //capturo el id aplicando 'NextApiRequest' y 'NextApiResponse' en la 'request'
  const id = request.query.id 

  //por medio del ID me traigo el item y lo guardo en una const
  const shirt = await db.getById(id as string)

  // muestro el item q traje con el ID como parte de la respuesta

  // response.statusCode = 200
  // response.setHeader( 'Content-type', 'application/json' )
  // response.end(JSON.stringify({ data: entry }))

  // o Tambien puedo devolverlo como
  response.status(200).json(shirt)
}

export default allProducts;