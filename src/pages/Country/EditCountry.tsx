import React, { useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";
import { useUpdateCoutryMutation } from "../../redux/api/country.api";

interface Props {
  open: boolean;
  onClose: () => void;
  defaultValues: {
    id: string;
    name: string;
    capital: string;
    image: string;
  } | null;
}

const EditCountry: React.FC<Props> = ({ open, onClose, defaultValues }) => {
  const [form] = Form.useForm();
  const [updateCountry, { isLoading }] = useUpdateCoutryMutation();

  useEffect(() => {
    if (defaultValues) {
      form.setFieldsValue(defaultValues);
    }
  }, [defaultValues]);

  const onFinish = (values: any) => {
    if (!defaultValues) return;
    updateCountry({ id: defaultValues.id, body: values }).then(() => {
      onClose();
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Edit Country"
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnClose
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="capital"
          label="Capital"
          rules={[{ required: true, message: "Capital is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image URL"
          rules={[{ required: true, message: "Image URL is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" loading={isLoading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCountry;
