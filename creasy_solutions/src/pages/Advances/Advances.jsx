import * as React from 'react';
import Header from '../../components/Header';
import AdvancesList from './AdvancesList';
import {GET_ADVANCES} from '../../graphql/advances/queries' 
import { useQuery, useLazyQuery } from '@apollo/client';
import ProjectsList from '../Projects/ProjectsList';
import { useEffect, useState} from 'react';



const Advances = () =>{
    
    var projectId = "61ab78ee04ce1b25287fd0d9";


    const { loading, error, data } = useQuery(GET_ADVANCES, {
        variables:{filter : {id_project:projectId}}
    });
  
    if (loading) return <p> Loading... </p> 


    if (error) return <p> Error... {error.message} </p>

    const filtered = data.advancesMany;
    
    console.log(filtered);



  /*   function cambio(pId){
        projectId = pId;
        console.log(projectId);
    }  */

   /*  state = { projectId: "" }
        cambio = (childData) => {
         this.setState({projectId: childData})
    }
 */
    

    
  

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