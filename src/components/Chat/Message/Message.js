import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import db from "../../../firebase";

const Message = ({ message, user }) => {
  // for deleting a message
  const deleteMessage = (id) => {
    db.collection("messages").doc(id).delete();
  };

  return (
    <div className="message">
      <div className="container">
        {typeof message !== Array
          ? message.map((data, index) => {
              return (
                <div key={index}>
                  <div
                    className={
                      data.message.name === user.displayName
                        ? `singlemessage users_message`
                        : "singlemessage"
                    }
                  >
                    <div className="userImg">
                      <img src={data.message.avatar} alt={data.message.name} />
                    </div>
                    <div className="message_desc">
                      <span>{data.message.name}</span>: {data.message.message}
                    </div>

                    {/* so this button will be show if he is the genuine logged user */}
                    {user.displayName === data.message.name ? (
                      <div className="deletebutton">
                        <IconButton
                          onClick={() => deleteMessage(data.id)}
                          title="delete message"
                          style={{
                            border: "2px solid white",
                            color: "red",
                            background: "white",
                            padding: "3px",
                            margin: "0px 20px",
                          }}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    ) : null}
                  </div>
                  <span
                    style={{ color: "black", textShadow: "1px 1px 2px black" }}
                  >
                    {data.message.time}, {data.message.date}
                  </span>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Message;
