import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { LoginModal, RegisterModal } from "..";
import "./AnimatedModal.scss"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    
  },
}));



export default function AnimatedModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { user } = useContext(UserContext);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      {!user ? (
        <Button size="large" variant="outlined" color="#7c9252" onClick={handleOpen}>
          Regístrate o inicia sesión
        </Button>
      ) : null}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}

        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className="content_animated">
          <div className={classes.paper} >
          <div className="img_login">
            <img src="https://cdn.discordapp.com/attachments/909826188384555079/909826308853338112/unknown.png" />
          </div>
        <div>
            {!user ? (
              <Link
                to="/registermodal"
                onClick={() => (window.location.href = "/")}
              >
                <button className="css-button-rounded--green " onClick={<RegisterModal />}>Register</button>
              </Link>
            ) : null}


            {user ? null : (
              <Link
                to="/loginmodal"
                onClick={() => (window.location.href = "/")}
              >
                <button className="css-button-rounded--green " onClick={<LoginModal />}>Login</button>
              </Link>
            )}
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
