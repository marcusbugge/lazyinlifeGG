import React, { useEffect } from "react";
import "./about.css";
import pic1 from "../../../assets/syhm.png";
import pic2 from "../../../assets/tysker.png";
import pic3 from "../../../assets/avarosa.png";
import pic4 from "../../../assets/emil.png";
import logo from "../../../assets/logo.png";
import arrow from "../../../assets/arrow.png";
import { useState } from "react";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

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
            <h1>ESTABILISHED IN 2020</h1>
          </div>
          <div className="text-holder">
            {" "}
            <p>
              Based in Norway, Lazy in Life is a competitive esports
              organization with dedicated teams in Valorant, Overwatch, and
              League of Legends. Our relentless pursuit of excellence has been
              rewarded with significant achievements, including a prestigious
              victory in the Telialigaen, and a hard-fought 2nd place finish in
              the playoffs.
            </p>
            <p>
              Committed to growth and innovation, we are actively working to
              expand our presence and sharpen our competitive edge. With a focus
              on nurturing talent and building a community of fans and players,
              our vision is to rise through the ranks and ultimately become one
              of the most prominent and respected esports organizations in
              Norway.
            </p>
            <p>
              Join us on our journey to redefine the gaming landscape and make
              our mark on the esports world. Our past success is just the
              beginning; we're ready to achieve even more!
            </p>
          </div>
        </div>
        <div className="pictures-cnt">
          <img className="pic3" src={pic3} alt="pic1" data-aos="fade-left" />
          <img className="pic2" src={pic2} alt="pic1" data-aos="fade-left" />
          <img
            className="pic1"
            src={pic1}
            alt="pic1"
            onClick={() => openModal(pic1)}
            data-aos="fade-left"
          />

          <img className="pic4" src={pic4} alt="pic1" data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
}
