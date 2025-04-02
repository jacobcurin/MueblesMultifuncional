import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    paddingTop: "10px",
    paddingBottom: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "linear-gradient(to bottom, #f5ebe0, #d5bda3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    boxSizing: "border-box",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#4a3f35",
    textShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  description: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#5a4d42",
    maxWidth: "700px",
  },
  sliderContainer: {
    width: "100%",
    maxWidth: "800px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

function AcercaDe() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    "/assets/images/fondo.jpg",
    "/assets/images/fondo.jpg",
    "/assets/images/fondo.jpg",
  ];

  return (
    <section style={styles.container}>
      <div style={styles.section}>
        <h2 style={styles.title}>Acerca de Nosotros</h2>
        <p style={styles.description}>
          En Muebles Multifuncional, combinamos arte y diseño para crear muebles únicos que reflejen el carácter y estilo de nuestros clientes.
        </p>
      </div>

      {/* Contenedor del Carrusel */}
      <div style={styles.sliderContainer}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Imagen ${index + 1}`} style={styles.image} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AcercaDe;
