import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import db from "../../../firebase";

const MessageField = ({ input, setInput, user }) => {
  const { displayName, photoURL } = user;

  const TakeData = (event) => {
    setInput(event.target.value);
  };

  const AddData = () => {
    db.collection("messages").doc().set({
      name: displayName,
      message: input,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      avatar: photoURL,
    });
    setInput("");
  };

  const AddMessageOnEnter = (event) => {
    if (event.key === "Enter") {
      AddData();
    }
  };

  return (
    <>
      <div className="message_field">
        <TextField
          id="outlined-basic"
          label="Your message"
          variant="outlined"
          className="TextField"
          autoComplete="off"
          onChange={TakeData}
          value={input}
          onKeyPress={AddMessageOnEnter}
        />
        <Button
          disabled={!input}
          onClick={AddData}
          variant="contained"
          color="primary"
          className="send_button"
        >
          <SendIcon />
        </Button>
      </div>
    </>
  );
};

export default MessageField;
