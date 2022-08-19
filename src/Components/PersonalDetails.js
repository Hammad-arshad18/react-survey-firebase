import {StyledButton} from "../StyledComponents/ButtonComponent";
import '../App.css';


function PersonalDetails(props) {
    return (
        <div className={"personal-details container"}>
            <div className="row justify-content-center">
                <div className="col-md-6 col-10">
                    <h1 className="heading-content text-center">Personal Details</h1>
                    <form autoComplete={"off"}>
                        <div className="form-group">
                            <label htmlFor="uname" className="form-text">Name</label>
                            <input type="text" name={"uname"} className="form-control" placeholder={"Enter Name"}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="uemail" className="form-text">Email</label>
                            <input type="email" name={"uemail"} className="form-control" placeholder={"Enter Email"}/>
                        </div>
                        <StyledButton onClick={props.submitHandler} className={"btn btn-primary"}>Submit</StyledButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PersonalDetails;