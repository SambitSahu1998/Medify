import React from "react";
import styles from "../module/Specialisation.module.css";
import bloodTestIcon from "../image/specialisation/bloodTestIcon.png";
import cardiologyIcon from "../image/specialisation/cardiologyIcon.png";
import dentistryIcon from "../image/specialisation/dentistryIcon.png";
import laboratoryIcon from "../image/specialisation/laboratoryIcon.png";
import mriResonanceIcon from "../image/specialisation/mriResonanceIcon.png";
import piscologistIcon from "../image/specialisation/piscologistIcon.png";
import primaryCareIcon from "../image/specialisation/primaryCareIcon.png";
import xrayIcon from "../image/specialisation/xrayIcon.png";

const Specialisation = () => {
  const cardsData = [
    { id: 1, title: "Dentistry", imageUrl: dentistryIcon },
    { id: 2, title: "Primary Care", imageUrl: primaryCareIcon },
    { id: 3, title: "Cardiology", imageUrl: cardiologyIcon },
    { id: 4, title: "MRI Resonance", imageUrl: mriResonanceIcon },
    { id: 5, title: "Blood Test", imageUrl: bloodTestIcon },
    { id: 6, title: "Piscologist", imageUrl: piscologistIcon },
    { id: 7, title: "Laboratory", imageUrl: laboratoryIcon },
    { id: 8, title: "X-Ray", imageUrl: xrayIcon },
  ];

  return (
    <div className={styles.specialisation}>
      <h2 className={styles.headingTitle}>Find By Specialisation</h2>
      <div className={styles.cardsGrid}>
        {cardsData.map((card) => (
          <div className={styles.card} key={card.id}>
            <img src={card.imageUrl} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
      <button className={styles.viewAll}>View All</button>
    </div>
  );
};

export default Specialisation;
