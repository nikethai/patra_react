import React,{useState} from "react";
import {} from "react-bootstrap";

import "./Test3.css";
import SenderDiv from "./SenderDiv/SenderDiv";
import ReceiveDiv from "./ReceiveDiv/ReceiveDiv";

export default function (props) {

  const[sender,setSender] = useState(["Tao la nam","Tao deo muon di voi Sam"]);
  const[receiver,setReceiver] = useState(["Ke me may","Bien di cho tao"]);

  console.log(props);

  const GLO_SUC =
    "https://i.kym-cdn.com/photos/images/original/001/852/407/036.gif";
  return (
    <div>
      {/* Hello world */}
      <div className="row rounded-lg overflow-hidden shadow">
        {/* Users box*/}
        {/* Chat Box*/}
        <div className="col-12 px-0">
          <div className="px-4 py-5 chat-box bg-white">
            {/* Sender Message*/}
            {/* {sender} */}
            <SenderDiv message="Hello from the other side" />
            {/* Reciever Message*/}
            <ReceiveDiv message="FPTU TPHCM" />
            {/* Typing area */}
            <form action="#" className="bg-light">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Type a message"
                  aria-describedby="button-addon2"
                  className="form-control rounded-0 border-0 py-4 bg-light"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon2"
                    type="submit"
                    className="btn btn-link"
                  >
                    <i className="fa fa-paper-plane" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
