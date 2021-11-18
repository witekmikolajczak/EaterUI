import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Checkbox } from "../Checkbox/Checkbox.jsx";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { isCheckboxVisible } = props;
  const { isCardDisabled } = props;

  return (
    <div
      // Setting Card overlay effect:
      className={
        isCardDisabled
          ? `${classNames(styles.overlay, styles.card)}`
          : styles.card
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>Primary text</h3>
          <p>Secondary text</p>
        </div>

        {/* Setting Checkbox visibility: */}
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
  isCardDisabled: PropTypes.bool,
};
export default Card;
