import * as React from 'react';
import Header from '../../components/Header';
import NotificationsList from './NotificationsList';
import NotificationsForm from './NotificationsForm';

const rows = [
    {id: '1c4kfr6jdt649rvm49g5ty4', applicant: 'Pedro Luis', projectName: 'Development of a system for the teaching of the english language in Colombia', entryDate: '2018/10/22', egressDate: '2020/08/14', state: 'Accepted'},
    {id: '1c4kfr6jdt649rvm49g5ty4', applicant: 'Pedro Luis', projectName: 'Development of a system for the teaching of the english language in Colombia', entryDate: '',           egressDate: '',           state: 'Pending'},
    {id: '1c4kfr6jdt649rvm49g5ty4', applicant: 'Pedro Luis', projectName: 'Development of a system for the teaching of the english language in Colombia', entryDate: '2018/10/22', egressDate: '2020/08/14', state: 'Accepted'},
    {id: '1c4kfr6jdt649rvm49g5ty4', applicant: 'Pedro Luis', projectName: 'Development of a system for the teaching of the english language in Colombia', entryDate: '',           egressDate: '',           state: 'Pending'},
    {id: '1c4kfr6jdt649rvm49g5ty4', applicant: 'Pedro Luis', projectName: 'Development of a system for the teaching of the english language in Colombia', entryDate: '2018/10/22', egressDate: '2020/08/14', state: 'Accepted'},
    {id: '1c4kfr6jdt649rvm49g5ty4', applicant: 'Pedro Luis', projectName: 'Development of a system for the teaching of the english language in Colombia', entryDate: '',           egressDate: '',           state: 'Rejected'},
    {id: '1c4kfr6jdt649rvm49g5ty4', applicant: 'Pedro Luis', projectName: 'Development of a system for the teaching of the english language in Colombia', entryDate: '2018/10/22', egressDate: '2020/08/14', state: 'Accepted'}
];

class Notifications extends React.Component {
    state = {
        data: rows,
        modalEdit: false,
    }
    
    handleShowModalEdit = () => {
        this.setState({modalEdit: true})
    }
    handleHideModalEdit = () => {
        this.setState({modalEdit: false})
    }

    handleChange = (e) => {
        this.setState({    
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div style={{marginBottom: '250px'}}>
                <Header/>

                <NotificationsList
                    rows={rows}
                    sModalEdit={this.handleShowModalEdit}
                />

                <NotificationsForm
                    data={this.state.data}
                    showEdit={this.state.modalEdit}
                    hModalEdit={this.handleHideModalEdit}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Notifications;