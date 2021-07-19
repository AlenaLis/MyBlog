import React from "react";
import "./Prof.scss";
import prof from "../../assets/images/prof_photo.png";
const Prof = () => {
    return (
        <div>
            <div className="prof__content">
                <div>
                    <h2 className="h2__text"> Profile </h2>
                </div>
                <div className="prof__cont">
                    <div className="prof__cont__photo">
                        <span className="line">
                            <div>
                                <img src={prof}/>
                            </div>
                            <div>
                                <button className="photo">Change photo</button>
                            </div>
                            <div>
                                <p>Delete photo</p>
                            </div>
                        </span>
                    </div>
                    <div className="prof_edit">
                        <form className="prof__form">
                            <div className="form__content">
                                <div>
                                    <p>First name</p>
                                    <input className="input" type="text" name="fname"/>
                                </div>
                                <div>
                                    <p>Last name</p>
                                    <input className="input" type="text" name="lname"/>
                                </div>
                            </div>
                            <div className="form__content__second">
                                <p>Description</p>  <td align="right" valign="top"><input className="input__desc" type="text" name="desc"/></td>
                            </div>
                            <div>
                                <button className="save__button">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prof;
