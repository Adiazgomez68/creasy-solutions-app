import { gql } from '@apollo/client';

const GET_USERS = gql`
    query getUsers($filter: FilterFindManyusersInput) {
        UserMany(filter: $filter) {	
            names,
            lastnames,
            identification,
            email,
            typeUser,
            state   
        }
    }
`

export {GET_USERS};