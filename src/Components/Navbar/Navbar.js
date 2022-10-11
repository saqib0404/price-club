import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Order', path: '/order' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]
    return (
        <nav className='bg-purple-200'>
            <div onClick={() => setOpen(!open)} className='bg-purple-200 h-10 w-10 ml-auto md:hidden'>
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <ul className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-10' : 'top-[-500px]'}`}>
                {
                    routes.map(route => <NavLink
                        key={route.id}
                        route={route}
                    ></NavLink>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;