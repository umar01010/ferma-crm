import React from "react";
import "./UsersTable.css";
import { UsersTableProps } from "./UsersTableProps";
import { LuEye } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";
import { IoChevronDownOutline } from "react-icons/io5";
import Pagination from "@mui/material/Pagination";

const UsersTable = () => {
  return (
    <div>
      <section>
        <div className="users_table">
          <div className="table">
            <table>
              <thead>
                <tr className="users_table_tr">
                  <th className="users_table_number">№</th>

                  <th className="users_table_fuulname">
                    Ф.И.О.
                    <button className="table_btn">
                      <IoChevronDownOutline className="downoutline" />
                    </button>
                  </th>
                  <th className="users_table_telephone">
                    Телефон
                    <button className="table_btn">
                      <IoChevronDownOutline className="downoutline" />
                    </button>
                  </th>
                  <th className="users_table_roles">
                    Роли{" "}
                    <button className="table_btn">
                      <IoChevronDownOutline className="downoutline" />
                    </button>
                  </th>
                  <th className="users_table_actions">Actions </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <UsersTableProps number="1" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <UsersTableProps number="2" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <UsersTableProps number="3" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <UsersTableProps number="4" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <UsersTableProps number="5" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <UsersTableProps number="6" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <UsersTableProps number="7" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <UsersTableProps number="8" />
                  </td>
                  <td>
                    <UsersTableProps fuulname="Janibek Maxatov" />
                  </td>
                  <td>
                    <UsersTableProps telephone="+99699 807 01 16" />
                  </td>
                  <td>
                    <UsersTableProps roles="Курьер" />
                  </td>
                  <td className="td_icon">
                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuEye className="table__icon" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <LuPencil className="table__pen" />
                        </CardActionArea>
                      }
                    />

                    <UsersTableProps
                      icon={
                        <CardActionArea
                          variant="outlined"
                          className="table__btn"
                        >
                          <RiDeleteBinLine className="table__delete" />
                        </CardActionArea>
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content_teble">
            <div className="total_content">Всего 121 штука</div>
            <Pagination
              count={50}
              variant="outlined"
              shape="rounded"
              className="custom-pagination"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersTable;
