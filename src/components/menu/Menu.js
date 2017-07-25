import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';


const MenuItem = ({active, children, to}) => (
    <Link to={to}  className={`menu-item`}>
        {children}
    </Link>
)

const Menu = (props, context) => {

    return (
        <div>
            <div className="logo">
                RosaMia??
            </div>
            <div className="menu">
                <MenuItem to={'/'}  >홈</MenuItem>
                <MenuItem to={'/about'} >소개</MenuItem>
                <MenuItem to={'/??'} >??(Not )x</MenuItem>
            </div>
        </div>
    );
};

export default Menu;