import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { AnimatedModal, Searchbar } from "../../components";
import "./Nav.scss";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (

    <nav className="navContent">

      <div className="animated">
        <div className="logo_div">
          <img src="https://i.imgur.com/rOzxzMT.png" alt="logo" className="logo_img"/>
        </div>
        <div className="logo_Divmodal">
          <AnimatedModal />
          {<div className="hello">{!user ? <p></p> : <p>Hola: {user.name}</p>}</div>}
          {user ? (
            <Link to="/profile">

              <button className="buttonProfile">Mi perfil</button>
            </Link>
          ) : null}
          {user ? (
            <Link to="/logout" onClick={() => window.location.href = "/"}>
              <button className="buttonLogout">Logout</button>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="navButton">
        <div className="buttonLink">
          <Link to="/" className="navButton_text" >
            <p > Home</p>
          </Link>
          <Link to="/bonsais" className="navButton_text">
            <p > Bonsais</p>
          </Link>
          <Link to="/cactus" className="navButton_text">
            <p > Cactus</p>
          </Link>
          <Link to="/trees" className="navButton_text">
            <p > Árboles</p>
          </Link>
          <Link to="/carnivorousplants" className="navButton_text">
            <p >Carnívoras</p>
          </Link>
        </div>
        <div>
        <Link to="/searchmodal" className="search" >
            <img src="https://i.imgur.com/43FwbeX.png" alt="logolupa" className="lupa_img" />
          </Link>
        </div>
      </div>

      {/*   <>
          {!user ? (
            <Link to="/register">
              <button>Register</button>
            </Link>
          ) : null}
        </> */}

      {/* // : (
            // <Link to="/login">
            // <button>Login</button>
            // </Link>
            //)
          } */}

    </nav>

  );
};

export default Nav;
