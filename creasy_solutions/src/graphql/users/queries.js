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

const AUTHENTICATION = gql`
    query Auth($filter: FilterFindOneusersInput) {
        UserOne(filter: $filter) {
            email,
            password,
            state
        }
    }
`

export {GET_USERS, AUTHENTICATION};