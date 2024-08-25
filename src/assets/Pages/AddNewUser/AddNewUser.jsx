import React from "react";
import "./AddNewUser.css";
import { IoIosReturnLeft } from "react-icons/io";

const AddNewUser = () => {
    return (
        <section>
            <div className="container">
                <div className="new_head">
                    <div className="new_back">
                        <IoIosReturnLeft className="turn" />
                    </div>
                    <div className="new_add">
                        <div className="plus">+</div>
                        <div className="btn">Добавить и сохранить</div>
                    </div>
                </div>

                <div className="add_new_main">
                    <div className="add_new_left">
                        <div className="add_new_logo">
                            <input type="url" name="" id="" />
                        </div>
                        <div className="add_lego_title">Изменить фотку</div>
                    </div>
                    <div className="add_new_right">
                        <div className="add_bio_main">
                            <div className="add_bio1">Данные пользователя</div>
                            <div className="add_bio2">
                                <div className="add_bio_name">Ф.И.О*</div>
                                <div className="inp1">
                                    <div className="name_inp">
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className="inp2">
                                    <div className="add_bio_name">Пароль</div>
                                    <div className="name_inp">
                                        <input type="password" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="add_bio3">
                                <div className="add_bio_name">Номер телефона*</div>
                                <div className="name_inp">
                                    <input type="text" name="" id="" />
                                </div>
                            </div>
                        </div>

                        <hr className="between" />

                        <div className="add_bio_main2">
                            <div className="add_bio1">Роль для доступа</div>
                            <div className="add_bio2">
                                <div className="add_bio_name">Выбрать роль</div>
                                <div className="inp1">
                                    <div className="name_inp">
                                        <select className="choise_select">
                                            <option value="">Администратор</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddNewUser;  
