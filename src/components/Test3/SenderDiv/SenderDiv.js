import React from "react";

export default function (props) {
  const GLO_SUC =
    "https://i.kym-cdn.com/photos/images/original/001/852/407/036.gif";
  return (
    <div className="media w-50 mb-3">
      <img src={GLO_SUC} alt="user" width={50} className="rounded-circle" />
      <div className="media-body ml-3">
        <div className="bg-light rounded py-2 px-3 mb-2">
          <p className="text-small mb-0 text-muted">{props.message}</p>
        </div>
        <p className="small text-muted">12:00 PM | Aug 13</p>
      </div>
    </div>
  );
}
