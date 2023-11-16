import { Pagination } from 'antd';
import { useState } from "react";

const CardPagi = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={50} />;
};

export default CardPagi;