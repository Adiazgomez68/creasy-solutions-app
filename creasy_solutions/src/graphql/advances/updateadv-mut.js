import {gql} from "@apollo/client"

const UPDATE_ADV = gql `

mutation actualizar_descripcion(
    $_id: MongoID!, 
    $record: UpdateByIdadvancesInput!) {
    advancesUpdateById(_id: $_id, record: $record) {
      record {
        _id
        progressDate
        description
        description
      }
    }

`

export default UPDATE_ADV