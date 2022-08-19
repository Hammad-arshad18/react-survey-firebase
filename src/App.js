import React, {Component} from 'react';
import PersonalDetails from "./Components/PersonalDetails";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    personalDetailsFormHandler=(event)=>{
        event.preventDefault();
    }

    render() {
        return (
            <div className={"container-fluid"}>
                {/*    Form Section     */}
                <PersonalDetails submitHandler={this.personalDetailsFormHandler}/>
            </div>
        );
    }
}

export default App;

