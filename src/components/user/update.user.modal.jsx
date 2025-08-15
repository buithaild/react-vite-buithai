import { Button, notification, Modal } from "antd"
import Input from "antd/es/input/Input"
import { useState } from "react"
import { createUserAPI } from "../../services/api.service"

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(true)
    const handleSubmitBtn = async () => {
        true
        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tao user thanh cong!"
            })
            resetAndCloseModal()
            // await loadUser()
        } else {
            notification.error({
                message: "create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }
    return (
        <Modal
            title="Update User"
            open={isModalOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <span>Full Name</span>
                <Input
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value) }}
                />
            </div>
            <div>
                <span>Email</span>
                <Input
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
            </div>
            <div>
                <span>Password</span>
                <Input.Password
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
            </div>
            <div>
                <span>Phone number</span>
                <Input
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }}
                />
            </div>
        </Modal>
    )
}

export default UpdateUserModal