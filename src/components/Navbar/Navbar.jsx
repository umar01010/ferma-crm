import React from 'react'
import "./Navbar.css"
import NavbarLink from "./NavbarLink";

// Images
import Logo from "../../assets/Images/Logo.svg"
import { BsBuildings } from "react-icons/bs";
import { PiNutBold } from "react-icons/pi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BsPlusSquareDotted } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="navbar_title">
                Menu
            </div>

            <ul className="navbar_wrapper">
                <NavbarLink href={"/"} icon={<MdOutlinePeopleAlt />} text={"Пользователи"} />
                <NavbarLink
                    href={"/products"}
                    icon={<PiNutBold />}
                    text={"Продукты"}
                />
                <NavbarLink
                    href={"/clients"}
                    icon={<BsFillPersonLinesFill />}
                    text={"Клиенты"}
                />
                <NavbarLink
                    href={"/deliverymans"}
                    icon={<TbTruckDelivery />}
                    text={"Курьеры"}
                />
                <NavbarLink
                    href={"/orders"}
                    icon={<BsPlusSquareDotted />}
                    text={"Заказы"}
                />
            </ul>

        </div>
    )
}

export default Navbar
