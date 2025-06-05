import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "60px 20px",
    background: "linear-gradient(to bottom, #f5ebe0, #d5bda3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    boxSizing: "border-box",
  },
  section: {
    textAlign: "center",
    maxWidth: "900px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#4a3f35",
    marginBottom: "20px",
  },
  description: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#5a4d42",
    maxWidth: "700px",
    margin: "0 auto",
  },
  sliderContainer: {
    width: "100%",
    maxWidth: "900px",
  },
  slide: {
    height: "400px",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  slideOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: "20px",
    fontSize: "16px",
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  frase: {
    fontSize: "24px",
    fontStyle: "italic",
    color: "#4a3f35",
    maxWidth: "700px",
    textAlign: "center",
  },
  valoresContainer: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  valorBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    minWidth: "160px",
  },
  valorTexto: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4a3f35",
    textAlign: "center",
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
    autoplaySpeed: 3500,
    arrows: true,
  };

  const slides = [
    {
      src: '/assets/images/sergio_calhueque.jpg',
      texto: "Sergio Calhueque, uno de nuestros primeros clientes, confiando en el diseño a medida.",
    },
    {
      src: '/assets/images/fondo.jpg',
      texto: "Mueble escritorio multifuncional: estilo moderno para espacios reducidos.",
    },
    {
      src: '/assets/images/fondo.jpg',
      texto: "Estantería con compartimentos ocultos, elegancia y practicidad en un solo diseño.",
    },
  ];

  return (
    <section style={styles.container}>
      <div style={styles.section}>
        <h2 style={styles.title}>Acerca de Nosotros</h2>
        <p style={styles.description}>
          En Muebles Multifuncional, combinamos arte y diseño para crear muebles únicos que reflejen el carácter y estilo de nuestros clientes.
        </p>
      </div>

      <div style={styles.sliderContainer}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                ...styles.slide,
                backgroundImage: `url(${slide.src})`,
              }}
            >
              <div style={styles.slideOverlay}>{slide.texto}</div>
            </div>
          ))}
        </Slider>
      </div>

      <p style={styles.frase}>
        “Un mueble no solo llena un espacio... también cuenta tu historia.”
      </p>
    </section>
  );
}

export default AcercaDe;
