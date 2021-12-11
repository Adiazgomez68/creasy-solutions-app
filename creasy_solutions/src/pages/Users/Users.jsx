import * as React from 'react';
import Header from '../../components/Header';
import UsersList from './UsersList';
import UsersForm from './UsersForm';

import {GET_USERS} from '../../graphql/users/queries';
import { useQuery } from '@apollo/client';

const Users = () => {
    const { data, error, loading } = useQuery(GET_USERS);

    if (loading) return <p> Loading... </p> 

    if (error) return <p> Error... {error.message} </p>
    console.log(data);
    return(
        <>  
            <div style={{marginBottom: '250px'}}>
                <Header/>

                <UsersList
                    data={data}
                    // sModalEdit={this.handleShowModalEdit}
                />

                {/* <UsersForm
                    data={this.state.data}
                    modalEdit={this.state.showModalEdit}
                    handleChange={this.handleChange}
                    hModalEdit={this.handleHideModalEdit}
                />   */}                  
            </div>
        </>
    )
}

/* class Users extends React.Component {
    state = {
        data: rows,
        showModalEdit: false,
    }

    handleShowModalEdit = () => {
        this.setState({showModalEdit: true})
    }
    handleHideModalEdit = () => {
        this.setState({showModalEdit: false})
    }

    handleChange = (e) => {
        this.setState({    
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { data, error, loading } = useQuery(GET_USERS);

        if (loading) return <p> Loading... </p> 

        if (error) return <p> Error... {error.message} </p>

        return (
            
        );
    }
} */

export default Users;
