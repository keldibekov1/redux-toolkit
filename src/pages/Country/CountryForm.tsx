import React from "react";
import { Button, Form, Input } from "antd";
import { useCreateCoutryMutation } from "../../redux/api/country.api";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const App: React.FC = () => {
  const [createCountry] = useCreateCoutryMutation();

  const onFinish = (values: any) => {
    const { name, capital, image } = values.Country;
    const newCountry = {
      name,
      capital,
      image,
    };

    console.log("Yangi country:", newCountry);
    createCountry(newCountry);
  };

  return (
    <div className="container mx-auto mt-15 flex justify-center">
      <div className="w-[400px]">
        <Form
          {...layout}
          layout="vertical"
          name="country-form"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["Country", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["Country", "capital"]}
            label="Capital"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["Country", "image"]}
            label="Image URL"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;