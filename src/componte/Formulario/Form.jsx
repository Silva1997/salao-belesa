// import React from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";

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
  const [dado,setDado]=useState()


  const variant = Form.useWatch("variant", form);

  function alterarData(date){
    setDado(date)

  }
  function handleSelecionar(value) {
    console.log("Valor selecionado", value);
  }

  function Envira() {
    console.log(form.getFieldsValue(), "Dados");
    form.resetFields();
  }
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || "outlined"}
      //   style={{
      //     width:'374px',
      //     maxWidth: 600,
      //   }}

      className=" xs-min:pl-4 xs-min:pr-4 xs-min:w-[374px] md:w-[60rem]  xl:w-[72rem] "
      initialValues={{
        variant: "outlined",
      }}
    >
      {/* <Form.Item label="Form variant" name="variant">
        <Segmented options={["outlined"]} />
      </Form.Item> */}

      <Form.Item
        label={<p className="text-white">Nome</p>}
        name="Input"
        rules={[
          {
            required: true,
            message: "Por favor preencha os dados!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={<p className="text-white">Numero</p>}
        name="Por favor preencha os dados!"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <InputNumber
          maxLength={9}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        label={<p className="text-white">Messagem</p>}
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
        label={<p className="text-white">Selecione o serviço</p>}
        name="Select"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Select onChange={handleSelecionar}>
          <Select.OptGroup label="Cabelo" key={1}>
            <Select.Option value="80,00" key={"A1"}>
              Corte + Escova
            </Select.Option>
            <Select.Option value="50,00" key={"A2"}>
              Hidratação
            </Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="Manicure" key={2}>
            <Select.Option value="62,00" key={"A3"}>
              Esmaltação de Gel de Mão
            </Select.Option>
            <Select.Option value="73,00" key={"A4"}>
              Blindagem
            </Select.Option>
          </Select.OptGroup>
        </Select>
      </Form.Item>

      <Form.Item
  label={<p className="text-white">Data marcação</p>}
        name="DatePicker"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <DatePicker onChange={alterarData} format={"DD-MM-YYYY"} value={dado} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button
        className="xs-min:w-56"
          onClick={(e) => {
            e.preventDefault();
            Envira();
          }}
          type="primary"
          htmlType="submit"
        >
          Encomendar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
