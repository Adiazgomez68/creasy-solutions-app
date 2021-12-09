import * as React from 'react';
import Header from '../../components/Header';
import UsersList from './UsersList';
import UsersForm from './UsersForm';

const rows = [
  {names: 'José Miguel', lastnames: 'Támara Ortiz', identification: '123457890', email: 'joseortiz@gmail.com', typeUser: 'Leader', state: 'Authorized'},
  {names: 'José Miguel', lastnames: 'Támara Pérez', identification: '123457890', email: 'joseortiz@gmail.com', typeUser: 'Student', state: 'Authorized'},
  {names: 'José Miguel', lastnames: 'Támara Ortiz', identification: '123457890', email: 'joseortiz@gmail.com', typeUser: 'Administrator', state: 'Pending'},
  {names: 'José Miguel', lastnames: 'Támara Ortiz', identification: '123457890', email: 'joseortiz@gmail.com', typeUser: 'Leader', state: 'Unauthorized'},
  {names: 'José Miguel', lastnames: 'Támara Ortiz', identification: '123457890', email: 'joseortiz@gmail.com', typeUser: 'Administrator', state: 'Unauthorized'},
  {names: 'José Miguel', lastnames: 'Támara Ortiz', identification: '123457890', email: 'joseortiz@gmail.com', typeUser: 'Administrator', state: 'Pending'},
  {names: 'José Miguel', lastnames: 'Támara Ortiz', identification: '123457890', email: 'joseortiz@gmail.com', typeUser: 'Student', state: 'Unauthorized'},
];

class Users extends React.Component {
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
        return (
            <>
                <div style={{marginBottom: '250px'}}>
                    <Header/>

                    <UsersList
                        rows={rows}
                        sModalEdit={this.handleShowModalEdit}
                    />

                    <UsersForm
                        data={this.state.data}
                        modalEdit={this.state.showModalEdit}
                        handleChange={this.handleChange}
                        hModalEdit={this.handleHideModalEdit}
                    />                    
                </div>
            </>
        );
    }
}

export default Users;