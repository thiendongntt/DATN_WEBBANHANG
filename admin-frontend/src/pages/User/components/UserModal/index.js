import { Form, Input, Modal, notification } from "antd";
import { useEffect, useMemo, useState } from "react";
import { phoneReg } from "../../../../utils/validations";

const UserModal = ({ data, onClose }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (errorMessage)
      return notification.error({
        placement: "topRight",
        message: "Lỗi!",
        description: errorMessage,
        duration: 3,
      });
  }, [errorMessage]);

  const initValues = useMemo(() => data, [data]);

  return !!data ? (
    <Modal
      title="Thông tin người dùng"
      visible={!!data}
      centered
      wrapClassName="form_staff"
      footer={null}
      onCancel={onClose}
      destroyOnClose
    >
      <Form
        name="form_staff"
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        scrollToFirstError
        initialValues={initValues}
      >
        <Form.Item
          label="Tên"
          name="first_name"
          rules={[{ required: true, message: "Nhập tên nhân viên" }]}
        >
          <Input disabled placeholder="Nhập họ nhân viên..." />
        </Form.Item>
        <Form.Item
          label="Tên"
          name="last_name"
          rules={[{ required: true, message: "Nhập tên nhân viên" }]}
        >
          <Input disabled placeholder="Nhập tên nhân viên..." />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Email không chính xác" },
            { required: true, message: "Nhập email nhân viên" },
          ]}
        >
          <Input disabled placeholder="Nhập email nhân viên..." />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            {
              pattern: phoneReg,
              message: "The input is not valid phone number!",
              whitespace: true,
            },
            { required: true, message: "Nhập số điện thoại nhân viên" },
          ]}
        >
          <Input disabled placeholder="Nhập số điện thoại nhân viên..." />
        </Form.Item>
        <Form.Item
          name="address"
          label="Địa chỉ"
          rules={[{ required: true, message: "Nhập địa chỉ nhân viên" }]}
        >
          <Input disabled placeholder="Nhập địa chỉ nhân viên..." />
        </Form.Item>
      </Form>
    </Modal>
  ) : null;
};

export default UserModal;
