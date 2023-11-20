import React from 'react';
import { Button, message, Space } from 'antd';

const ModalComp = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Товар добавлен в корзину',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button className='desc__button' onClick={success}>В Корзину</Button>
      </Space>
    </>
  );
};

  export default ModalComp;