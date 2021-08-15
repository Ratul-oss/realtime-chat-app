import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const Nav = ({ user, logOut }) => {
  const { displayName, email, photoURL } = user;

  const OpenNav = () => {
    document.querySelector(".userInfos").style.transform = "translateX(0)";
    document.querySelector(".message_field").style.display = "none";
  };

  const CloseNav = () => {
    document.querySelector(".userInfos").style.transform = "translateX(-100%)";
    document.querySelector(".message_field").style.display = null;
  };

  return (
    <>
      <nav>
        <h2 className="nav_title">Chat</h2>
        <ul className="nav_item">
          <li>
            <img onClick={OpenNav} src={photoURL} alt={displayName} />
          </li>
        </ul>

        <ul className="userInfos">
          <div className="closebutton">
            <Button onClick={CloseNav} variant="contained" color="secondary">
              <CloseIcon />
            </Button>
          </div>
          <h2>You are currently Logged in as:</h2>
          <li>
            <img src={photoURL} alt={displayName} />
          </li>
          <li>
            <h2> {displayName} </h2>
          </li>
          <li> {email} </li>
          <li>
            <Button onClick={logOut} variant="contained" color="primary">
              Sign Out
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
