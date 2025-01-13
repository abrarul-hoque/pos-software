import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menu = (
        <>
            <li className="ml-1">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Home
                </NavLink>
            </li>
            <li className="ml-1">
                <NavLink
                    to="/setting"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Setting
                </NavLink>
            </li>
            <li className="ml-1">
                <NavLink
                    to="/sales"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Sales
                </NavLink>
            </li>
            <li className="ml-1">
                <NavLink
                    to="/purchase"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Purchase
                </NavLink>
            </li>
            <li className="ml-1">
                <NavLink
                    to="/transaction"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Transaction
                </NavLink>
            </li>
            <li className="ml-1">
                <NavLink
                    to="/stock"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Stock
                </NavLink>
            </li>
            <li className="ml-1">
                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Reports
                </NavLink>
            </li>
            <li className="ml-1">
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive ? 'bg-blue-700 px-3 py-2 rounded' : ''
                    }>
                    Users
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-blue-900 text-white">
                <div className="navbar-start">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{menu}</ul>
                    </div>
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
