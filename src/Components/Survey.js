import {StyledButton} from "../StyledComponents/ButtonComponent";

function Survey(props) {
    return <div className={"container"}>
        <div className="row justify-content-center my-2">
            <div className="col-md-8 col-10">
                <div className="mx-0 mx-sm-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                                <p>
                                    <strong>Your opinion matters</strong>
                                </p>
                                <p>
                                    Have some ideas how to improve our product?
                                    <strong>Give us your feedback.</strong>
                                </p>
                            </div>

                            <hr/>

                            <form className="px-4" action="">
                                <p className="text-center"><strong>Your rating:</strong></p>

                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example1"/>
                                    <label className="form-check-label" htmlFor="radio2Example1">
                                        Very good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example2"/>
                                    <label className="form-check-label" htmlFor="radio2Example2">
                                        Good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example3"/>
                                    <label className="form-check-label" htmlFor="radio2Example3">
                                        Medicore
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example4"/>
                                    <label className="form-check-label" htmlFor="radio2Example4">
                                        Bad
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example5"/>
                                    <label className="form-check-label" htmlFor="radio2Example5">
                                        Very bad
                                    </label>
                                </div>

                            </form>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                                <p>
                                    <strong>Your opinion matters</strong>
                                </p>
                                <p>
                                    Have some ideas how to improve our product?
                                    <strong>Give us your feedback.</strong>
                                </p>
                            </div>

                            <hr/>

                            <form className="px-4" action="">
                                <p className="text-center"><strong>Your rating:</strong></p>

                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example1"/>
                                    <label className="form-check-label" htmlFor="radio2Example1">
                                        Very good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example2"/>
                                    <label className="form-check-label" htmlFor="radio2Example2">
                                        Good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example3"/>
                                    <label className="form-check-label" htmlFor="radio2Example3">
                                        Medicore
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example4"/>
                                    <label className="form-check-label" htmlFor="radio2Example4">
                                        Bad
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example5"/>
                                    <label className="form-check-label" htmlFor="radio2Example5">
                                        Very bad
                                    </label>
                                </div>

                            </form>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                                <p>
                                    <strong>Your opinion matters</strong>
                                </p>
                                <p>
                                    Have some ideas how to improve our product?
                                    <strong>Give us your feedback.</strong>
                                </p>
                            </div>

                            <hr/>

                            <form className="px-4" action="">
                                <p className="text-center"><strong>Your rating:</strong></p>

                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example1"/>
                                    <label className="form-check-label" htmlFor="radio2Example1">
                                        Very good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example2"/>
                                    <label className="form-check-label" htmlFor="radio2Example2">
                                        Good
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example3"/>
                                    <label className="form-check-label" htmlFor="radio2Example3">
                                        Medicore
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example4"/>
                                    <label className="form-check-label" htmlFor="radio2Example4">
                                        Bad
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="exampleForm"
                                           id="radio2Example5"/>
                                    <label className="form-check-label" htmlFor="radio2Example5">
                                        Very bad
                                    </label>
                                </div>
                                <div className="mx-2">
                                    <StyledButton className={"btn btn-primary"}>Submit</StyledButton>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Survey;