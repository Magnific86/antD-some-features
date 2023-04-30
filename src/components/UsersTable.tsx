import { useEffect, FC, useState } from "react"
import { Tag, Typography, Table, Modal, Slider } from "antd"
import { useAppDispatch, useAppSelector } from "../store/storeHooks"
import { IMyUser } from "../store/storeTypes"
import { QuestionCircleTwoTone } from "@ant-design/icons"
import { getUsers } from "../store/reducers/userReducer"

export const UsersTable: FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.users.users)
  const login = useAppSelector((state) => state.login.login)
  const [modal, setModal] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(10)

  const fetchTablePhotos = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await resp.json()

      if (!resp.ok) {
        throw new Error("Cannot fetch")
      }
      dispatch(getUsers(data))
    } catch (e) {
      console.error(e.message)
    }
  }

  useEffect(() => {
    fetchTablePhotos()
  }, [])

  const columns = []

  ;["id", "email", "username", "street", "zipcode"].forEach((p) => {
    columns.push({
      title: p,
      dataIndex: p,
      key: p,
    })
  })

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
  }

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
  }

  const mainColumn = [name, ...columns, city]

  const handleTotal = (value: number) => {
    setTotal(value)
  }

  if (login === "usersTable") {
    return (
      <>
        <div>
          <div className="flex justify-center items-start">
            <Typography.Title>Users Table</Typography.Title>
            <QuestionCircleTwoTone
              style={{ width: 50, fontSize: "1.5rem", paddingLeft: 20 }}
              onClick={() => setModal(true)}
            />
          </div>
          <Slider min={1} max={20} defaultValue={total} onChange={handleTotal} style={{ width: "20%" }} />
        </div>
        <div>
          <Modal open={modal} onOk={() => setModal(false)} onCancel={() => setModal(false)}>
            <p>
              Если добавили пользователя вручную, в разделе формы, он будет находится на следущей странице из-за
              пагинации, также можно изменить пагинацию вручную и регулировать кол-во юзеров на одной странице.
            </p>
          </Modal>
        </div>

        <Table
          pagination={{
            pageSize: total,
          }}
          dataSource={users}
          columns={mainColumn}
        />
      </>
    )
  }
}
