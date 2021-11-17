import React from "react";
import PropTypes from "prop-types";

import { Checkbox } from "../Checkbox/Checkbox.jsx";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { isCheckboxVisible } = props;
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>Primary text</h3>
          <p>Secondary text</p>
        </div>
        {isCheckboxVisible && (
          <div className={styles.checkbox}>
            <Checkbox />
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  isCheckboxVisible: PropTypes.bool,
};
export default Card;
