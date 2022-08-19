import React, {Component} from 'react';
import PersonalDetails from "./Components/PersonalDetails";
import Survey from "./Components/Survey";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            phoneNo: null,
            isSubmit: false,
            isNext: false,
        };
    }

    personalDetailsFormHandler = (event) => {
        event.preventDefault();
        const name = event.target.uname.value;
        const email=event.target.uemail.value;
        const phoneNo=event.target.uphone.value;
        this.setState({
            name,email,phoneNo,isNext:true
        },()=>{
            console.log(this.state);
        })

    }

    render() {
        return (
            <div className={"container-fluid"}>

                {this.state.isNext ? <Survey/> : <PersonalDetails submitHandler={this.personalDetailsFormHandler}/>}

            </div>
        );
    }
}

export default App;

