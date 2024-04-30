import React from "react";
import { faker } from "@faker-js/faker";

import { Table } from "antd";

import createRandomUser from "../assets/js/usersData";

export default function TableCreator() {
  return <Table dataSource={dataSource} columns={columns} />;
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 3,
});

const dataSource = [
  {
    key: "1",
    id: users[0].userId,
    name: users[0].userName,
    address: users[0].userAddress,
    phoneNumber: users[0].userPhoneNumber,
  },
  {
    key: "2",
    id: users[1].userId,
    name: users[1].userName,
    address: users[1].userAddress,
    phoneNumber: users[1].userPhoneNumber,
  },
  {
    key: "3",
    id: users[2].userId,
    name: users[2].userName,
    address: users[2].userAddress,
    phoneNumber: users[2].userPhoneNumber,
  },
];

const columns = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
];
