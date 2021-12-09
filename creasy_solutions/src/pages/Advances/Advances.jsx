import * as React from 'react';
import Header from '../../components/Header';
import AdvancesList from './AdvancesList';

const rows = [
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', progressDate: '2021-11-25'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', progressDate: '2021-11-25'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', progressDate: '2021-11-25'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', progressDate: '2021-11-25'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', progressDate: '2021-11-25'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', progressDate: '2021-11-25'}
];  

class Advances extends React.Component {
    render() {
        return(
            <div style={{marginBottom: '250px'}}>
                <Header/>

                <AdvancesList
                    rows={rows}
                />
            </div>
        )
    }
}

export default Advances;