import { gql } from '@apollo/client';

const UPDATE_USER = gql`
    mutation updateUser(
        $record: UpdateOneusersInput!, 
        $filter: FilterUpdateOneusersInput
    ) {
        UserUpdateOne(record: $record, filter: $filter) {
            record {
                names,
                lastnames,
                identification,
                email,
                typeUser,
                state
            }
        }
    }
`
const DELETE_USER = gql`
    mutation deleteUser($filter: FilterRemoveOneusersInput) {
        UserRemoveOne(filter: $filter) {
            record {
                names,
                lastnames,
                identification,
                email,
                typeUser,
                state
            }
        }
    }
`

export {UPDATE_USER, DELETE_USER};