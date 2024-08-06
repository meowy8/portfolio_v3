import React from "react";
import styles from "../app/page.module.scss";

const Skill = ({ icon, name, hue }) => {
  return (
    <div className={styles.skill}>
      <div
        className={styles.tooltip}
        style={{ backgroundColor: `hsl(${hue}, 92%, 20%)` }}
      >
        <span>{name}</span>
      </div>
      {icon}
    </div>
  );
};

export default Skill;
