import * as React from 'react';
import Header from '../../components/Header';
import ProjectsList from './ProjectsList';

const rows = [
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', state: 'Inactive'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', state: 'Active'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', state: 'Inactive'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', state: 'Active'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', state: 'Inactive'},
    {id: '1c4kfr6jdt649rvm49g5ty1', projectName: 'Development of a system for the teaching of the english language in Colombia', state: 'Active'}
];  

class Projects extends React.Component {
    render() {
        return(
            <div style={{marginBottom: '130px'}}>
                <Header/>

                <ProjectsList
                    rows={rows}
                />
            </div>
        )
    }
}

export default Projects;