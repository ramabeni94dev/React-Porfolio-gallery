import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import "./GalleryApp.css"; // Importa tus estilos CSS aquí
import { Container, Row, Col } from "react-bootstrap";

function GalleryApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });

  const items = [
    {
      type: "image",
      source: "src/assets/img/flyers/0fUwpaD2v5Mgk7OInqX4Xn;1215x2160.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/4hQF04mugaAcTwuMysHJmJ;1080x1920.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/9Qs5AnRWCPYeeqdygaYplQ;731x1300.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/a5vygOntLOLgaeJy8IOpPc;1080x1920.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/dkn3QARk6qMfj3kCofnPVO;1080x1920.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/dUYoyo5T0puf5PIfvKnXbc;1080x1920.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/dx1Zv8MfkpsfujrYv2UeW4;1080x1920.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/fJ9DbTgSGNfc3Dvyk0eJ1C;1080x1920.png",
    },
    {
      type: "image",
      source: "src/assets/img/flyers/grLufThffn9b2ecvKgtyz8;1080x1920.png",
    },
    {
      type: "video",
      thumbnail: "src/assets/videos/Captura de pantalla 2023-08-29 120546.png",
      source: "src/assets/videos/PREMOVIE ELLA 05.11.mp4",
    },
    {
      type: "video",
      thumbnail: "src/assets/videos/Captura de pantalla 2023-08-29 120840.png",
      source: "src/assets/videos/PREMOVIE GREYGOOSE 08.10.mp4",
    },
    {
      type: "video",
      thumbnail: "src/assets/videos/Captura de pantalla 2023-08-29 120748.png",
      source: "src/assets/videos/PREMOVIE ELLA 08.03.mp4",
    },
    {
      type: "video",
      thumbnail: "src/assets/videos/Captura de pantalla 2023-08-29 120546.png",
      source: "src/assets/videos/PREMOVIE ELLA 05.11.mp4",
    },
    {
      type: "video",
      thumbnail: "src/assets/videos/Captura de pantalla 2023-08-29 120840.png",
      source: "src/assets/videos/PREMOVIE GREYGOOSE 08.10.mp4",
    },
    {
      type: "video",
      thumbnail: "src/assets/videos/Captura de pantalla 2023-08-29 120748.png",
      source: "src/assets/videos/PREMOVIE ELLA 08.03.mp4",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(null);

  const openModal = (index) => {
    const item = items[index];
    setIsModalOpen(true);
    setModalContent(item);
    setCurrentItemIndex(index); // Store the index of the opened item
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const nextItem = () => {
    if (currentItemIndex !== null) {
      const nextIndex = (currentItemIndex + 1) % items.length;
      setModalContent(items[nextIndex]);
      setCurrentItemIndex(nextIndex);
    }
  };

  const prevItem = () => {
    if (currentItemIndex !== null) {
      const prevIndex = (currentItemIndex - 1 + items.length) % items.length;
      setModalContent(items[prevIndex]);
      setCurrentItemIndex(prevIndex);
    }
  };

  useEffect(() => {
    if (modalContent && modalContent.type === "video") {
      const modalContentAspectRatio = 16 / 9; // Relación de aspecto del video
      const maxWidth = window.innerWidth * 0.8; // Ancho máximo permitido
      const maxHeight = window.innerHeight * 0.8; // Alto máximo permitido

      let calculatedWidth = maxWidth;
      let calculatedHeight = maxWidth / modalContentAspectRatio;

      if (calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
        calculatedWidth = maxHeight * modalContentAspectRatio;
      }

      setVideoDimensions({ width: calculatedWidth, height: calculatedHeight });
    }
  }, [modalContent]);

  return (
    <>
      <h1 className="titulo">FILMMAKING</h1>
      <Container fluid>
        <Row>
          {items.map((item, index) => (
            <Col key={item.id} xs={12} sm={6} md={4}>
              <div className="gallery-item" onClick={() => openModal(index)}>
                {item.type === "image" ? (
                  <img src={item.source} alt={`Item ${item.id}`} />
                ) : (
                  <div className="video-thumbnail">
                    <img src={item.thumbnail} alt={`Video ${item.id}`} />
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          },
          content: {
            border: "none",
            background: "transparent",
            padding: "0",
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "auto",
            maxWidth: "80%",
            maxHeight: "80%",
          },
        }}
      >
        {modalContent && (
          <div className="lightbox-content">
            {modalContent.type === "image" ? (
              <img src={modalContent.source} alt={`Lightbox Item`} />
            ) : (
              <ReactPlayer
                url={modalContent.source}
                controls
                width={videoDimensions.width}
                height={videoDimensions.height}
                playing
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload", // Evita el botón de descarga
                    },
                  },
                }}
                style={{
                  backgroundColor: "black", // O cambia a 'transparent' si deseas fondo transparente
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
            <button className="prev-button" onClick={prevItem}>
              ‹ {/* Flecha hacia la izquierda */}
            </button>
            <button className="next-button" onClick={nextItem}>
              › {/* Flecha hacia la derecha */}
            </button>

            <button className="close-button" onClick={closeModal}>
              &#x2716;
            </button>
          </div>
        )}
      </ReactModal>
    </>
  );
}

export default GalleryApp;
