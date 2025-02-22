import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./AboutAutors.css";

const autors = [
  {
    name: "Giovanni Amorim",
    orcid: "0009-0001-7933-1552",
    institution: "University of Brasília (UnB), Department of Computer Science",
    city: "Brasília, DF",
    country: "Brazil",
    email: "giovanni.amorim.ti@gmail.com",
    linkedin: "https://www.linkedin.com/in/giovanniamorim"
  },
  {
    name: "Edna Dias Canedo",
    orcid: "0000-0002-2159-339X",
    institution: "University of Brasília (UnB), Department of Computer Science",
    city: "Brasília, DF",
    country: "Brazil",
    email: "ednacanedo@unb.br",
    linkedin: "https://www.linkedin.com/in/edna-dias-canedo-b29162b9"
  }
];

export default function AboutAutors() {
  return (
    <div className="about-gam-container">
      <h1 className="about-gam-title">About the Autors</h1>
      <div className="about-gam-cards-container">
        {autors.map((dev, index) => (
          <div key={index} className="about-gam-card">
            <h2>{dev.name}</h2>
            <p>{dev.institution}</p>
            <p>{dev.city}, {dev.country}</p>
            <p>ORCID: <a href={`https://orcid.org/${dev.orcid}`} target="_blank" rel="noopener noreferrer">{dev.orcid}</a></p>
            <p>Email: <a href={`mailto:${dev.email}`}>{dev.email}</a></p>
            <a href={dev.linkedin} className="about-gam-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
