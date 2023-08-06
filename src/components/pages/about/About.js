import React from "react";
import "./about.css";
import pic1 from "../../../assets/syhm.png";
import pic2 from "../../../assets/tysker.png";
import pic3 from "../../../assets/avarosa.png";
import pic4 from "../../../assets/emil.png";
import logo from "../../../assets/logo.png";
import arrow from "../../../assets/arrow.png";
import { useState } from "react";
import Modal from "react-modal";

export default function About() {
   const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState(null);

  function openModal(imgSrc) {
    setModalImgSrc(imgSrc);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="aboutpage">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.0)", 
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Image Modal"
      >
        <img
          src={modalImgSrc}
          alt="Full screen"
          style={{ width: "100%", height: "100%" }}
        />
        <button onClick={closeModal}>close</button>
      </Modal>

      <div className="content-about">
        <div className="text-cnt">
          <img src={logo} alt="logo" />
          <h1 className="tae">LAZY IN LIFE</h1>
          <div className="founded-cnt">
            <h1>FOUNDED IN 2020</h1>
          </div>
          <p>
            A esports team based in Norway with teams witin Valorant, Overwatch
            and League of Legends.
          </p>
        </div>
        <div className="pictures-cnt">
          <img
            className="pic1"
            src={pic1}
            alt="pic1"
            onClick={() => openModal(pic1)}
          />
          <img className="pic2" src={pic2} alt="pic1" />
          <img className="pic3" src={pic3} alt="pic1" />
          <img className="pic4" src={pic4} alt="pic1" />
        </div>
      </div>
    </div>
  );
}
