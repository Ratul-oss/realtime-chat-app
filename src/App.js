import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import db from "./firebase";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";

const App = () => {
  // for setting the user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // for adding and taking messages from user
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  // for logging out the user
  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.clear("user");
    });
  };

  useEffect(() => {
    db.collection("messages").onSnapshot((snapShot) => {
      let temp = [];
      temp = snapShot.docs.map((doc) => ({
        id: doc.id,
        message: doc.data(),
      }));
      setMessage(temp);
    });
  }, []);

  return (
    <>
      {/* if we have the user, it will render the chat.js page otherwise the login page will be shown */}
      {user ? (
        <Router>
          <Switch>
            <Route path="/" exact>
              <Chat
                setInput={setInput}
                input={input}
                setMessage={setMessage}
                message={message}
                logOut={signOut}
                user={user}
              />
              {/* the chatting page */}
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
};

export default App;
