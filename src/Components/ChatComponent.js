import React from "react";
import "./ChatComponent.css";
import manIcon from "../Components/img/man-img.png"
import womanIcon from "./img/women-img.png"
import Send from "./img/send-message.png"
import { useState } from "react"

function ChatComponent() {
  const [height, setHeight] = useState("")
  const [isOpen, setIsOpen] = useState('false')

  const onToggle = () => setIsOpen(s=>!s)
  function handleInput(event) {
    setHeight(event.target.height);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }


  return (
    <div div className="chat">
      <div className="chat-container">
      <div className="item">
        <div className="chat-title" onClick={onToggle}>
          <h2>Chat</h2>
        </div>
        <div className={isOpen?"chat-body":"chat-body close"} >
          <div className="man box">
            <img src={manIcon} className="icon" alt="peopleImage" />
            <p className="centr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
          </div>
          <div className="woman box">
            <img src={womanIcon} className="icon" alt="peopleImage" />
            <p className="centr">Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="man box">
            <img src={manIcon} className="icon" alt="peopleImage" />
            <p className="centr">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <div className="woman box ">
            <img src={womanIcon} className="icon" alt="peopleImage" />
            <p className="centr"> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="massage">
            <textarea
              name="massage"
              placeholder=" massage..."
              value={height}
              onInput={handleInput}
              className="reverse"
            />

          <button className="subBtn" type="submit">
              <img src={Send} alt="SendIcon" />
            </button>
          </div>
  </div>
        </div>
        </div>
</div>

    



    




  )
}
export default ChatComponent;