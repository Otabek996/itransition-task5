import React from "react";

import { Dropdown, Space } from "antd";

const menuActiveChanger = (e) => {
  items.forEach((element) => {
    element.disabled = false;
  })

  e.disabled = true;

  console.log(e);
};

const items = [
  {
    label: "1st menu item",
    key: "1",
    disabled: true,
  },
  {
    label: "2nd menu item",
    key: "2",
    disabled: false,
  },
  {
    label: "3rd menu item",
    key: "3",
    disabled: false,
  },
];

const menuProps = {
  items,
  onClick: menuActiveChanger,
};

const DropdownMenu = () => (
  <Space wrap>
    <Dropdown.Button menu={menuProps}>Dropdown</Dropdown.Button>
  </Space>
);

export default DropdownMenu;
