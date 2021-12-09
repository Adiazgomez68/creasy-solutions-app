import * as React from 'react';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import '../../styles/ADetails.css';

class AdvanceDetails extends React.Component {
    render() {
        return(
            <>
                <Header/>
                
                <form className="form-details">
                    <fieldset className="field">
                        <legend id="leg1" style={{width: '130px', color: '#D10CD8'}}> Added advances </legend>
                        <p id="adv">
                            <div id='box-items'>
                                <div style={{width: '100%'}}>
                                    <label htmlFor="advance"> Id: </label> <br />
                                    <input type="text" name="advance" disabled id="advance"/> <br />
                                </div>
                                <div style={{marginLeft: '35px', width: '100%'}}>
                                    <label style={{marginLeft: '0'}} htmlFor="progress"> Progress date: </label> <br />   
                                    <input type="date" name="progress" id="progress"/> <br />
                                </div>
                            </div> <br />

                            <label htmlFor="proName" style={{marginTop: '12px'}}> Project name: </label> <br />
                            <textarea name="proName" id="proName" rows="5"></textarea> <br />

                            <label htmlFor="description" style={{marginTop: '12px'}}> Description of the advance: </label> <br />
                            <textarea name="description" id="description" rows="5"></textarea> <br />
                        </p>
                    </fieldset>

                    <br /><br />
                    <div className='observation'>
                        <label htmlFor="lOb"> Leader observations: </label> <br />
                        <textarea placeholder='Type here your observations' name="lOb" id="lOb" rows="5"></textarea> <br />
                    </div>

                    <Link to="/advances" style={{textDecoration: 'none'}}> <Button id="btn-1"> Back </Button> </Link>
                    <Button id="btn-2"> Save </Button>
                </form>
            </>
        )
    }
}

export default AdvanceDetails;