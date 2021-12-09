import * as React from 'react';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import '../../styles/PDetails.css';

class ProjectDetails extends React.Component {
    render() {
        return(
            <>
                <Header/>
                
                <form className="form-details">
                    <fieldset className="fd1">
                        <legend id="leg1"> Project details </legend>
                        <p id="c1">
                            <label htmlFor="project"> Id: </label> <br />
                            <input type="text" name="project" disabled id="project"/> <br />

                            <label htmlFor="badget" style={{marginTop: '10px'}}> Badget: </label> <br />
                            <input type="number" name="badget" id="badget"/> <br />

                            <label htmlFor="general" style={{marginTop: '12px'}}> General objective: </label> <br />
                            <textarea name="general" id="general" rows="5"></textarea> <br />

                            <label htmlFor="sDate" style={{marginTop: '2px'}}> Start date: </label> <br />
                            <input type="date" name="sDate" id="sDate"/> <br />
                        </p>
                        <p id="c2">
                            <label htmlFor="pName"> Project name: </label> <br />
                            <textarea name="pName" id="pName" rows="4" style={{height: '110px'}}></textarea> <br />                    

                            <label htmlFor="specific" style={{marginTop: '4px'}}> Specific objective: </label> <br />
                            <textarea name="specific" id="specific" rows="5"></textarea> <br />                    

                            <label htmlFor="fDate" style={{marginTop: '4px'}}> Finish date: </label> <br />
                            <input type="date" name="fDate" id="fDate"/> <br />
                        </p>
                    </fieldset>

                    <br /><br />
                    <fieldset className="fd2" >
                        <legend id="leg2"> Project leader data </legend>
                        <p id="c1">
                            <label htmlFor="identDoc"> Identification document: </label> <br />
                            <input type="number" name="identDoc" id="identDoc"/> <br />

                            <label htmlFor="nLeader" style={{marginTop: '10px'}}> Names: </label> <br />
                            <input type="text" name="nLeader" id="nLeader"/> <br />
                        </p>
                    </fieldset>

                    <br /><br />
                    <fieldset className="fd3" >
                        <legend id="leg3"> Project state </legend>
                        <p id="cs">
                            <label htmlFor="pState"> State: </label> <br />
                            <select type="text" name="pState" id="pState"> 
                                <option value="1"> Inactive </option>
                                <option value="2"> Active </option>
                            </select><br />

                            <label htmlFor="pPhase" style={{marginTop: '10px'}}> Project phase: </label> <br />
                            <select type="text" name="pPhase" id="pPhase">
                                <option selected disabled hide style={{ display: 'none' }}> Select phase project </option> 
                                <option value="1"> Started </option>
                                <option value="2"> In progress </option>
                                <option value="3"> Finished </option>
                            </select><br />
                        </p>
                    </fieldset>

                   <Link to="/projects" style={{textDecoration: 'none'}}> <Button id="btn-1"> Back </Button> </Link>
                    <Button id="btn-2"> Save </Button>
                </form>
            </>
        )
    }
}

export default ProjectDetails;