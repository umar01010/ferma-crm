import React from "react";
import "./Header.css";
import { RxAvatar } from "react-icons/rx";
// import { GrLanguage } from "react-icons/gr";

export const HeaderProps = ({ text }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__main">
                    <div className="header__left">
                        <div className="header__title">{text}</div>
                    </div>
                    <div className="header__right">
                        <div className="header__language">
                            {/* <GrLanguage className="header__logo-lang" /> */}
                            <select className="header__lang-select">
                                <option value="ru">Ru</option>
                            </select>
                        </div>
                        <div className="header__profile">
                            <RxAvatar className="header__avatar" />
                            <div className="header__bio">
                                <div className="header__name">Ali Umarov</div>
                                <div className="header__job">Admin</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};