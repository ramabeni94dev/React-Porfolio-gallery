import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import "./GalleryApp.css"; // Importa tus estilos CSS aquí
import { Container, Row, Col } from "react-bootstrap";
import items from "./GalleryData";

function GalleryApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isMouseOverLightbox, setIsMouseOverLightbox] = useState(false);

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

  const handleMouseEnterLightbox = () => {
    setIsMouseOverLightbox(true);
  };

  const handleMouseLeaveLightbox = () => {
    setIsMouseOverLightbox(false);
  };

  useEffect(() => {
    if (modalContent && modalContent.type === "video") {
      const modalContentAspectRatio = 9 / 16; // Relación de aspecto del video
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
      <Container>
        <Row className="custom-row-spacing">
          {items.map((item, index) => (
            <Col key={item.id} xs={6} sm={4} md={4}>
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
          <div
            className="lightbox-content"
            onMouseEnter={handleMouseEnterLightbox}
            onMouseLeave={handleMouseLeaveLightbox}
          >
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
            <button
              className={`prev-button ${isMouseOverLightbox ? "visible" : ""}`}
              onClick={prevItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-left"
                viewBox="0 0 16 16"
              >
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>{" "}
              {/* Flecha hacia la izquierda */}
            </button>
            <button
              className={`next-button ${isMouseOverLightbox ? "visible" : ""}`}
              onClick={nextItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>{" "}
              {/* Flecha hacia la derecha */}
            </button>

            <button
              className={`close-button ${isMouseOverLightbox ? "visible" : ""}`}
              onClick={closeModal}
            >
              &#x2716;
            </button>
          </div>
        )}
      </ReactModal>
    </>
  );
}

export default GalleryApp;
