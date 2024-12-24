// import React from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Segmented,
} from "antd";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || "outlined"}
    //   style={{
    //     width:'374px',
    //     maxWidth: 600,
    //   }}

    className=" xs-min:w-[374px] md:w-[60rem]  xl:w-[72rem] "
      initialValues={{
        variant: "outlined",
      }}
    >
      {/* <Form.Item label="Form variant" name="variant">
        <Segmented options={["outlined"]} />
      </Form.Item> */}

      <Form.Item
        label="Nome"
        name="Input"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Numero"
        name="InputNumber"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <InputNumber
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        label="Messagem"
        name="TextArea"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

    

      <Form.Item
        label="Select"
        name="Select"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Select />
      </Form.Item>

     

     

      <Form.Item
        label="Horario"
        name="DatePicker"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

    

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button  type="primary" htmlType="submit">
          Encomendar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
