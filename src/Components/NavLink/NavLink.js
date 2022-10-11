import React from 'react';

const NavLink = ({route}) => {
    return (
        <li className='mr-6 text-xl p-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default NavLink;