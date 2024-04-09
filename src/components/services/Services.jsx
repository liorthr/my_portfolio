import React from "react";
import "./services.css";
import Image1 from "../../assets/stack/js-logo.svg";
import Image2 from "../../assets/stack/node-logo.svg";
import Image3 from "../../assets/stack/htmlcss-logo.svg";
import Image4 from "../../assets/stack/icons8-python (1).svg";
import Image5 from "../../assets/stack/icons8-react-js (2).svg";
import Image6 from "../../assets/stack/icons8-postgresql (2).svg";
import Image7 from "../../assets/stack/icons8-linux-96.png";
import Image8 from "../../assets/stack/icons8-firebase-96.png";
import Image9 from "../../assets/stack/icons8-rest-api-100.png";


const data = [
  {
    id: 1,
    image: Image1,
    title: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "NodeJS",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "HTML / CSS",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 4,
    image: Image4,
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing el        aenean commodo ligula eget.",
  },
  {
    id: 5,
    image: Image5,
    title: "React JS",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscig elit         aenean commodo ligula eget.",
  },
  {
    id: 6,
    image: Image6,
    title: "PostgreSQL",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 7,
    image: Image7,
    title: "Linux",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 8,
    image: Image8,
    title: "Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 9,
    image: Image9,
    title: "API Rest",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title" style={{color: 'black'}}>{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
