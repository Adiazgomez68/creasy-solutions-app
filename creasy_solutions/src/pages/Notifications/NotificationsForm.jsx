import * as React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter
} from "reactstrap";

class NotificationsForm extends React.Component {
    render() {
        console.log(this.props.id);
        return(
            <>
                <Modal isOpen={this.props.showEdit} style={{ marginTop: '130px' }}>
                    <ModalHeader>
                        <div>
                            <h3>Modify Applicant State</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id:</label>
                            <input className="form-control" name="notif" readOnly type="text" onChange={this.props.handleChange} value={this.props.id.id} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>Applicant:</label>
                            <input className="form-control" readOnly name="applicant" type="text" onChange={this.props.handleChange} value={this.props.student.student} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>Project name:</label>
                            <input className="form-control" readOnly name="pName" type="text" onChange={this.props.handleChange} value={this.props.project.project} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>Entry date::</label>
                            <input className="form-control" readOnly name="entry" type="text" onChange={this.props.handleChange} value={this.props.entrydate.entrydate} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label>Egress date::</label>
                            <input className="form-control" readOnly name="egress" type="text" onChange={this.props.handleChange} value={this.props.egressdate.egressdate} />
                        </FormGroup>
                        <FormGroup style={{marginTop: '-12px'}}>
                            <label> State: </label>
                            <select className="form-control" name="state" onChange={this.props.handleChange} value={this.props.state.state}>
                                <option value="" selected disabled hide style={{ display: 'none' }}> Select applicant state </option>
                                <option value="Accepted"> Accepted </option>
                                <option value="Rejected"> Rejected </option>
                            </select>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" > Modify </Button>
                        <Button color="danger" onClick={() => window.location.href = '/notifications'}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default NotificationsForm;