import React, { useEffect, FC } from "react";
import { Image, Tag, Typography, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { getUsers } from "../store/userReducer";
import { IMyUser } from "../store/storeTypes";

export const UsersTable: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const login = useAppSelector((state) => state.login.login);

  const fetchTablePhotos = async () => {
    try {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await resp.json();

      if (!resp.ok) {
        throw new Error("Cannot fetch");
      }
      dispatch(getUsers(data));
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchTablePhotos();
  }, []);

  const columns = [];

  ["id", "email", "username", "street", "zipcode"].forEach((p) => {
    columns.push({
      title: p,
      dataIndex: p,
      key: p,
      /* sorter(a, b) =>  */
    });
  });

  const name = {
    title: "name",
    dataIndex: "name",
    key: "name",
    sorter: (a: IMyUser, b: IMyUser) => a.name.length - b.name.length,
    render: (text: string) => (
      <Typography.Text copyable color="green">
        {text}
      </Typography.Text>
    ),
  };

  const city = {
    title: "city",
    dataIndex: "city",
    key: "city",
    filters: [
      {
        text: "Gwenborough",
        value: "Gwenborough",
      },
      {
        text: "Wisokyburgh",
        value: "Wisokyburgh",
      },
      {
        text: "McKenziehaven",
        value: "McKenziehaven",
      },
    ],
    onFilter: (value: string, item: IMyUser) => item.city.includes(value),
    render: (text: string) => <Tag color="green">{text}</Tag>,
  };

  const mainColumn = [name, ...columns, city];

  if (login === "usersTable") {
    return (
      <div>
        <Table dataSource={users} columns={mainColumn} />
      </div>
    );
  }
};
