import React from "react";
import "./UsersSearch.css";
import { Link } from "react-router-dom";
import TeModalFilter from "../UsersTable/TeModalFilter/TeModalFilter";
import { IoSearchSharp } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";

const UsersSearch = () => {
  return (
    <section>
      <div className="container">
        <div className="users_search_wrapper">
          <div className="users_search_left">
            <div className="users_search_input_container">
              <IoSearchSharp className="search-icon" />
              <input className="users_search_inp" placeholder="Поиск" />
            </div>
            <TeModalFilter />
          </div>

          <Link to="/addnewuser">
            <button className="users_search_right_add_button">
              <FiPlusCircle className="users_search_right_add_icon" /> Добавить
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UsersSearch;
