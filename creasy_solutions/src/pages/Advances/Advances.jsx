import * as React from 'react';
import Header from '../../components/Header';
import AdvancesList from './AdvancesList';
import {GET_ADVANCES} from '../../graphql/advances/queries' 
import { useQuery } from '@apollo/client';
import ProjectsList from '../Projects/ProjectsList';



const Advances = () =>{

    var projectId = "61ab78ee04ce1b25287fd0d9";

  /*   function cambio(pId){
        projectId = pId;
        console.log(projectId);
    }  */

   /*  state = { projectId: "" }
        cambio = (childData) => {
         this.setState({projectId: childData})
    }
 */
    const { loading, error, data } = useQuery(GET_ADVANCES, {
        variables:{filter : {id_project:projectId}}
    });
  
    if (loading) return <p> Loading... </p> 
    const filtered = data.advancesMany;

    console.log(filtered);

    if (error) return <p> Error... {error.message} </p>



        return(
            <> 
            <div style={{marginBottom: '250px'}}>
                <Header/>

               {/*  <div style={{display: "none"}}>
                    <ProjectsList passDataToAdvances ={this.cambio}/>
                </div> */}

                <AdvancesList
                    filtered={filtered}
                    projectId={projectId}
                />
            </div>
            </>
        )
   
}

export default Advances;