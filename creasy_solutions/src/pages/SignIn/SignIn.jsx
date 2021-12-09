import * as React from "react";
import SignInForm from "./SignInForm";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/SignIn.css';

class SignIn extends React.Component {
    render() {
        return (
            <>
                <SignInForm/>
            </>            
        )
    }
}

export default SignIn;