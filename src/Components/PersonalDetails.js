import {StyledButton} from "../StyledComponents/ButtonComponent";
import '../App.css';


function PersonalDetails(props) {
    return (
        <div className={"personal-details container"}>
            <div className="row justify-content-center">
                <div className="col-md-6 col-10">
                    <h1 className="heading-content text-center">Personal Details</h1>
                    <form onSubmit={props.submitHandler} autoComplete={"off"}>
                        <div className="form-group">
                            <label htmlFor="uname" className="form-text">Name</label>
                            <input type="text" required id={"uname"} name={"uname"} className="form-control"
                                   placeholder={"Enter Full Name"}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="uemail" className="form-text">Email</label>
                            <input type="email" required id={"uemail"} name={"uemail"} className="form-control"
                                   placeholder={"Enter Email Address"}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="uphone" className="form-text">Phone No</label>
                            <input type="tel" required id={"uphone"} name={"uphone"}
                                   pattern={"[0-9]{2}-[0-9]{3}-[0-9]{7}"} className="form-control"
                                   placeholder={"Enter Phone Number e.g 92-332-8432678"}/>
                        </div>
                        <StyledButton className={"btn btn-primary"}>Next</StyledButton>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PersonalDetails;