import React from "react";
import '../App.css?inline';
import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/sample 4.jpeg";
import image2 from "../assets/sample 6.jpeg";

function Section() {
  return (
    <div className="section-container">
      <div className="sec-text">
        <h1>
          What Book Are <span>You Looking For?</span>
        </h1>
        <p>
          Not Sure What To Read Next? Explore Our Catalogue Of Public Domain
          Books With Our Editors
        </p>
        <button>
          Exolore Now <FaArrowRight />
        </button>
      </div>

      <div className="section-img">
        <div className="img1">
          <img src={image1} alt="book cover" />
        </div>
        <div className="img2">
          <img src={image2} alt="book cover" />
        </div>
      </div>
    </div>
  );
}

export default Section;
