import React from "react";

function Create() {
    return (
        <div>
            <div className="valid__content">
                <div>
                    <h2 className="h2__text"> Create your free account </h2>
                </div>
                <div>
                    <form className="valid__form">
                        <p>First name</p> <input className="input" type="text" name="fname"/>
                        <p>Last name</p> <input className="input" type="text" name="lname"/>
                        <p>Email Address</p> <input className="input" type="text" name="email"/>
                        <p>Password</p> <input className="input" type="password" name="pass"/>
                    </form>
                </div>
                <div className="valid__bottom">
                    <div className="marg">
                        <button className="button__valid">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
