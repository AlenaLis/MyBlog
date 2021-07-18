import React from "react";

function Valid() {
    return (
        <div>
            <div className="valid__content">
                <div>
                    <h2 className="h2__text"> Log in to your account </h2>
                </div>
                <div>
                    <form className="valid__form">
                        <p>Email Address</p> <input className="input" type="text" name="email"/>
                        <p>Password</p> <input className="input" type="password" name="pass"/>

                    </form>
                </div>
                <div className="valid__bottom">
                    <div>
                        <button className="button__valid">Create Account</button>
                    </div>
                    <div>
                        <p> Don’t have a Times account? Create one</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Valid;
