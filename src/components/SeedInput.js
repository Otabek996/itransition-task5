import React from "react";

import { InputNumber, Button, Flex } from "antd";

import iconRandom from "../assets/icons/IconRandom.png";

const SeedInput = () => (
  <Flex gap="small" wrap="wrap">
    <InputNumber min={1} max={1000} defaultValue={1} />
    <Button type="primary">
      <img src={iconRandom} alt="Random" />
    </Button>
  </Flex>
);

export default SeedInput;
