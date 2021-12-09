import * as React from 'react';
import SignUpForm from './SignUpForm';

import '../../styles/SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignUp extends React.Component {
    render() {
        return (
            <>
                <SignUpForm/>
            </>
        )
    }
}

export default SignUp;