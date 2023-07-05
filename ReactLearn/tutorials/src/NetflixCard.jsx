import React from "react";
import Images from "./Images";

function Card(props) {
  return (
    <>
      <div>
        <div className="cards">
          <div className="card">
            {/* <img src={props.imgsrc} alt="mypic" className="card_image" /> */}
            <Images imgsrc={props.imgsrc} />
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
              <a href={props.links} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
