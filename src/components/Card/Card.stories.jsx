import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Card from "./Card.jsx";

export default {
  title: "Card",
  component: Card,
};

export const Primary = () => {
  <Card isCardDisabled={true} isCheckboxVisible={true} />;
  const isCardDisabled = boolean("isCardDisabled", true);
  const isCheckboxVisible = boolean("isCheckboxVisible", true);

  return (
    <Card
      isCardDisabled={isCardDisabled}
      isCheckboxVisible={isCheckboxVisible}
    ></Card>
  );
};
