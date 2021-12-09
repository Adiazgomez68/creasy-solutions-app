import * as React from 'react';
import Button from '@mui/material/Button';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Header from '../components/Header';

import '../styles/Profile.css';

class Profile extends React.Component {
    render() {
        return(
            <>
                <Header/>

                <div className="box-profile">
                    <div className="form">
                        <h2> Profile </h2>

                        <Form>
                            <Form.Group id="info">
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Names
                                </Form.Label>
                                <InputGroup className="names mb-2">
                                    <InputGroup.Text id='icon'> <PersonOutlineIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" autoComplete="off" placeholder="Names" />
                                </InputGroup>

                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Lastnames
                                </Form.Label>
                                <InputGroup className="lastnames mb-2">
                                    <InputGroup.Text id='icon'> <PersonOutlineIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" autoComplete="off" placeholder="Lastnames" />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="ident" style={{marginLeft: '54px'}}>
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Identification
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <ContactMailOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="number" autoComplete="off" placeholder="Identification" />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="mail" style={{marginLeft: '54px'}}>
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    E-mail
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <EmailOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="email" autoComplete="off" placeholder="E-mail" />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group id="pass" style={{marginLeft: '54px'}}>
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text id='icon'> <LockOutlinedIcon color="action"/> </InputGroup.Text>
                                    <FormControl id="inlineFormInputGroup" type="password" placeholder="Password" />
                                </InputGroup>
                            </Form.Group>
                        </Form>

                        <Button id="save" > Save </Button>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;