import {gql} from "@apollo/client"

const CREATE_ADVANCE = gql `

mutation createOneAdvance($record: CreateOneadvancesInput!){
    advancesCreateOne(record: $record ){
      record{
        id_project
        progressDate
        description
        observation
      }
    }
  }

`

const UPDATE_DESCRIPTION = gql `

mutation actualizar_descripcion(
    $_id: MongoID!, 
    $record: UpdateByIdadvancesInput!) {
    advancesUpdateById(_id: $_id, record: $record) {
      record {
        description
      }
    }

`

export {CREATE_ADVANCE, UPDATE_DESCRIPTION}