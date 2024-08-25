import React from 'react'
import "./UsersSearch.css"

// Icons
import { IoSearchSharp } from "react-icons/io5";
import { IoOptionsOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";

const UsersSearch = () => {
    return (
        <section>
            <div className="container">
                <div className="users_search_wrapper">
                    <div className="users_search_left">
                        <div className="users_search_input_container">
                            <IoSearchSharp className="search-icon" />
                            <input
                                className="users_search_inp"
                                placeholder="Поиск"
                            />
                        </div>

                        <button variant="contained" className="users_search_left_filter"><IoOptionsOutline />Фильтр</button>
                    </div>

                    <button className="users_search_right_add_button"><FiPlusCircle className='users_search_right_add_icon' /> Добавить</button>
                </div>
            </div>
        </section>
    )
}

export default UsersSearch
