import { IncomingMessage, ServerResponse } from "http"
import DB from "@database"

//las funciones de next siempre reciben 'request' y 'response' en el segundo argumento. Como en Node
const allShirts = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB() //creo el objeto DB
  const allEntries = await db.getAll() //le adhiero todos los datos con el método y lo guardo en una variable
  const length = allEntries.length //tambien obtengo la longitud de items de mi api

  response.statusCode = 200 //indico q todo va bien
  response.setHeader( 'Content-type', 'application/json' ) //aviso q el contenido de la consulta es un json
  response.end(JSON.stringify({ data: allEntries, length })) //la respues será: todas las entradas y la longitud de items
}

export default allShirts;