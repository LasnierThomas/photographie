import React, { useState } from "react";
import { animauxGallery } from "./AnimauxGallery";
import Navigation from "../Components/Navigation";
import Navigation2 from "../Components/Navigation2";
import "../styles/index.scss";
import { FaWindowClose } from "react-icons/fa";

const Animaux = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  
document.oncontextmenu = function () {
  return false;
};

  return (
    <>
      <Navigation />
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <FaWindowClose className="stop" onClick={() => setModel(false)}>
          {" "}
        </FaWindowClose>
      </div>
      <section className="allGalery">
        <p className="text">Vous pouvez agrandir les photographies en cliquant dessus </p>
        <div className="gallery">
          {animauxGallery.map((item, index) => {
            return (
              <div className="image" key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} />
              </div>
            );
          })}
        </div>
      </section>
      <Navigation2 />
    </>
  );
};

export default Animaux;
