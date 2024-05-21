import React, { useState } from "react";
import styles from "../module/SearchComponent.module.css";
import ambulanceIcons from "../image/ambulanceIcon.png";
import doctorIcons from "../image/doctorIcon.png";
import hospitalIcons from "../image/hospitalIcon.png";
import labsIcons from "../image/labsIcon.png";
import medicineIcons from "../image/medicineIcons.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="State" />
        <input type="text" placeholder="City" />
        <button className={styles.searchButton}>
          <SearchOutlinedIcon />
          <span>Search</span>
        </button>
      </div>
      <h2 className={styles.searchHeading}>You May Be Looking For</h2>
      <div className={styles.services}>
        <div
          className={`${styles.serviceCard} ${
            selectedCard === 1 ? styles.selected : ""
          }`}
          onClick={() => handleCardClick(1)}
        >
          <div className={styles.cardContent}>
            <img src={doctorIcons} alt="Doctor Icons" />
            <p>Doctor</p>
          </div>
        </div>
        <div
          className={`${styles.serviceCard} ${
            selectedCard === 2 ? styles.selected : ""
          }`}
          onClick={() => handleCardClick(2)}
        >
          <div className={styles.cardContent}>
            <img src={labsIcons} alt="Labs Icons" />
            <p>Labs</p>
          </div>
        </div>
        <div
          className={`${styles.serviceCard} ${
            selectedCard === 3 ? styles.selected : ""
          }`}
          onClick={() => handleCardClick(3)}
        >
          <div className={styles.cardContent}>
            <img src={hospitalIcons} alt="Hospital Icons" />
            <p>Hospital</p>
          </div>
        </div>
        <div
          className={`${styles.serviceCard} ${
            selectedCard === 4 ? styles.selected : ""
          }`}
          onClick={() => handleCardClick(4)}
        >
          <div className={styles.cardContent}>
            <img src={medicineIcons} alt="Medical Icons" />
            <p>Medical Store</p>
          </div>
        </div>
        <div
          className={`${styles.serviceCard} ${
            selectedCard === 5 ? styles.selected : ""
          }`}
          onClick={() => handleCardClick(5)}
        >
          <div className={styles.cardContent}>
            <img src={ambulanceIcons} alt="Ambulance Icons" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
