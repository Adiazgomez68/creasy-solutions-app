import * as React from 'react';
import Header from '../../components/Header';
import ProjectsList from './ProjectsList';

import {GET_PROJECTS} from '../../graphql/projects/queries';
import { useQuery } from '@apollo/client';


const Projects = () => {
    const { data, error, loading } = useQuery(GET_PROJECTS);

    if (loading) return <p> Loading... </p> 

    if (error) return <p> Error... {error.message} </p>
    console.log(data);
    return(
        <> 
        <div style={{marginBottom: '250px'}}>
                <Header/>

                <ProjectsList
                    data={data}
                    // sModalEdit={this.handleShowModalEdit}
                />

                
            </div>
        </>
    )
}







/*class Projects extends React.Component {
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
}*/

export default Projects;
