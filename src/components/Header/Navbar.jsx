import React from 'react';

const Navbar = ({activeNavItemIndex, setActiveNavItemIndex}) => {
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Landings']

    return (
        <ul className='flex justify-between navbar'>
            {navItems.map((item, index) => {
                return (
                    <li key={index} className={index === activeNavItemIndex ? "isActive" : void 0}
                        onClick={() => setActiveNavItemIndex(index)}><a>{item}</a></li>
                )
            })}
        </ul>
    );
};

export default Navbar;