import React from "react";

import { Menu } from "antd";

export default function DropdownMenuCreator() {
  return (
    <Menu
      style={{
        width: 256,
      }}
      defaultSelectedKeys={[1]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
}

export function getItem(label, key, children) {
  return [key, children, label];
}

const items = [
  getItem("Navigation Three", "firstMenu", [
    getItem("Option 1", "one"),
    getItem("Option 2", "two"),
    getItem("Option 3", "three"),
  ]),
];
