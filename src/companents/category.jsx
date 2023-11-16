import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import CategoryImg from "../assets/image/category.png";
import CategoryData from '../utils/categoryData';
import { Link, } from "react-router-dom"

const Category = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Space>
        <Button className='category__btn' onClick={showDrawer}>
          <img src={CategoryImg} alt="category image" />
          <p className="category__text">Категории</p>
        </Button>
      </Space>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="category__list">
          {
            CategoryData.map(item => (
              <Link to={item.path} key={item.id} className="category__item">
                <div className="category__icon">
                  {item.icon}
                </div>
                <p className="category__title">
                  {item.title}
                </p>
              </Link>
            ))
          }
        </div>
      </Drawer>
    </>
  );
};
export default Category;