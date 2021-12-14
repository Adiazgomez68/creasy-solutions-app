import * as React from 'react';
import {useState} from 'react';
import Header from '../../components/Header';
import UsersList from './UsersList';
import UsersForm from './UsersForm';
import { emptyState } from '../../miscellaneous/formValidations';
import { succesModify, succesDelete } from '../../miscellaneous/operationsRes';

import { useQuery, useMutation } from '@apollo/client';
import {GET_USERS} from '../../graphql/users/queries';
import { UPDATE_USER, DELETE_USER } from '../../graphql/users/mutations';


const Users = () => {    

    //State
    
    const [form, setForm] = useState({
        names: '',
        lastnames: '',
        identification: '',
        email: '',
        typeUser: '',
        state: ''
    });
    const [modalEdit, setModalEdit] = useState(false); 

    //Methods

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
   
    const handleShowModalEdit = (datas) => {
        setModalEdit(true);
        setForm(datas);
    }

    const handleHideModalEdit = () => {
        setModalEdit(false);
    }

    //Mutation GraphQL

    const [updateUser] = useMutation(UPDATE_USER);

    const modify = (datas) => {

        let {state, identification} = datas;

        updateUser({
            variables: {record: {state:state}, filter: {identification: identification}}
        });    

        handleHideModalEdit();
        succesModify();

    }

    const [deleteUser] = useMutation(DELETE_USER);

    const remove = (id) => {

        succesDelete();
        deleteUser({
            variables: {filter: {identification: id}}
        })

    }


    //Query GraphQL

    const { data, error, loading } = useQuery(GET_USERS);

    if (loading) return <p> Loading... </p> 

    if (error) return <p> Error... {error.message} </p>

    return(
        <>  
            <div style={{marginBottom: '250px'}}>
                <Header/>

                <UsersList
                    data={data}
                    showME={handleShowModalEdit}
                    remove={remove}
                />

                <UsersForm
                    modalEdit={modalEdit}
                    form={form}
                    handleChange={handleChange}
                    hideME={handleHideModalEdit}
                    modify={modify}
                />                    
            </div>
        </>
    )
}

export default Users;