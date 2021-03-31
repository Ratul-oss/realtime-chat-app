import React from "react";
import MessageField from "../components/Chat/messageField/MessageField";
import Nav from "../components/Chat/nav/Nav";
import Message from "../components/Chat/Message/Message";

const Chat = ({ user, logOut, message, setInput, input }) => {
  return (
    <>
      <main>
        <Nav logOut={logOut} user={user} />
        <Message message={message} user={user} />
        <MessageField setInput={setInput} input={input} user={user} />
      </main>
    </>
  );
};

export default Chat;
