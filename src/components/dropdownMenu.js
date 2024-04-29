import React from "react";

import { Menu } from "antd";

const items = [
  {
    key: "sub1",
    label: "COUNTRY NAME",
    children: [
      {
        key: "1",
        label: "Option 1",
      },
      {
        key: "2",
        label: "Option 2",
      },
      {
        key: "3",
        label: "Option 3",
      },
    ],
  },
];

const DropdownMenu = () => {
  return (
    <Menu
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default DropdownMenu;
