import React from "react";
import doctorpair from "../image/doctorpair.png";
import dottedPicture from "../image/dottedOverPicture.png";
import styles from "../module/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={styles.heroParagraph}>
          Skip the travel! Find Online
        </p>
        <span className={styles.heroMedical}>
            Medical <span className={styles.heroBlue}>Centers</span>
          </span>
        <p className={styles.heroSubtitle}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <button className={styles.heroButton}>Find Centers</button>
      </div>
      <div className={styles.heroImage}>
        <img src={doctorpair} alt="Not Avaliable" />
        <div className={styles.heroImageDotted}>
          <img src={dottedPicture} alt="Not Available"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
