import React, { useState, useContext } from "react";
import { loginUser } from "../../api/fetch_user";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import "./LoginForm.scss";

const LoginForm = (props) => {
  const { user, saveUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const history = useHistory();

  const submitForm = async (ev) => {
    ev.preventDefault();
    setError("");

    try {
      const { email, password } = ev.target;
      const form = {
        email: email.value,
        password: password.value,
      };

      const userdb = await loginUser(form);
      console.log("USERLOGINUSER", userdb.data.user);
      saveUser(userdb.data.user);
      history.push("/profile")
    } catch (error) {
      console.log("Error -> Login", error);
      setError(error.message);
    }
  };
  return (
    <div >
      <form onSubmit={submitForm} >
        <div className="content">
          <div className="img_login_img">
            <img className="image" src="https://i.imgur.com/TH0Hwv4.png" />
          </div>
          <input className="content_input" type="email" name="email" placeholder="E-mail" />
          <input className="content_input" type="password" name="password" placeholder="Password" />
          <button className="css-button-rounded--green-login " type="submit">Login</button>


        </div>
      </form>

    </div>
  );
};



export default LoginForm;



