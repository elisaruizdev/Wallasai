import { useState } from 'react';
import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import { Home, Spa, Close } from "@material-ui/icons";
import { Hidden } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import { Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { AnimatedModal, Searchbar } from "../../components";
import { UserContext } from "../../App";
import "./Burger.scss";




const Burger = () => {

    const [open, setOpen] = useState(false)
    const { user } = useContext(UserContext);
    return (
        <div className="container_Burger">
            <div>

                <IconButton >
                    <Spa fontSize="large" onClick={() => setOpen(true)} />
                </IconButton>

                <SwipeableDrawer
                    anchor="top"

                    open={open}
                    onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>

                    <IconButton>
                        <Close onClick={() => setOpen(false)} />
                    </IconButton>

                    <Divider />
                    <List className="nav_content" >
                        <ListItem  >
                            <Link to="/" className="navButton_text_burger" >
                                <p > Home</p>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/bonsais" className="navButton_text_burger">
                                <p > Bonsais</p>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/cactus" className="navButton_text_burger">
                                <p > Cactus</p>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/trees" className="navButton_text_burger">
                                <p > Árboles</p>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/carnivorousplants" className="navButton_text_burger">
                                <p >Carnívoras</p>
                            </Link>
                        </ListItem>
                       
                    </List>
                </SwipeableDrawer>
            </div>

            <div className="logo_Divmodal">
                <AnimatedModal />
                {<div className="hello_burger">{!user ? <p></p> : <p>Hola: {user.name}</p>}</div>}
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
            <Link to="/searchmodal" className="search_Burger" >
                                <img src="https://i.imgur.com/43FwbeX.png" alt="logolupa" className="lupa_img_Burger" />
                            </Link>
        </div>
      

    )

}

export default Burger