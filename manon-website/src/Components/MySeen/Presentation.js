import React from 'react'
import myseenvideo01 from "../../assets/myseenvideo01.mp4";
import './MySeen.scss';

const Presentation = () => {
  return (
    <div className="component">
      <h1 className="bigTitlePresentation">Manager</h1>
      <div className='group'>
        <div className="text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looŸking at its layout.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="videoGroup">
          <video
            src={myseenvideo01}
            className="video"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Presentation