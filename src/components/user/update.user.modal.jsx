import { notification, Modal } from "antd"
import Input from "antd/es/input/Input"
import { useEffect, useState } from "react"
import { updateUserAPI } from "../../services/api.service"

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen,
        dataUpdate, setDataUpdate, loadUser } = props

    // next: dataUpdate != prev dataUpdate
    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
            setId(dataUpdate._id)
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        true
        const res = await updateUserAPI(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cap nhat thanh cong!"
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setId("")
        setPhone("")
        setDataUpdate(null)
    }


    return (
        <Modal
            title="Update User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <span>ID</span>
                <Input
                    value={id}
                    disabled
                />
            </div>
            <div >
                <span>Full Name</span>
                <Input
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value) }}
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