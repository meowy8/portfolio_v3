import React from "react";
import styles from "../app/page.module.scss";

const Skill = ({ icon, name }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.tooltip}>
        <span>{name}</span>
      </div>
      {icon}
    </div>
  );
};

export default Skill;
