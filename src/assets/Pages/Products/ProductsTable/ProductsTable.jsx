import React from 'react'
import { ProductsTableProps } from './ProductsTableProps'
import { LuEye } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { CardActionArea } from "@mui/material";
import { IoChevronDownOutline } from "react-icons/io5";

const ProductsTable = () => {
    return (
        <section>
            <div className="users_table">
                <div className="table">
                    <table>
                        <thead>
                            <tr className="users_table_tr">
                                <th className="users_table_number">№</th>

                                <th className="users_table_fuulname">
                                    Наименование
                                    <button className="table_btn">
                                        <IoChevronDownOutline className="downoutline" />
                                    </button>
                                </th>
                                <th className="users_table_telephone">
                                    Количество
                                    <button className="table_btn">
                                        <IoChevronDownOutline className="downoutline" />
                                    </button>
                                </th>
                                <th className="users_table_roles">
                                    Цена (сом)
                                    <button className="table_btn">
                                        <IoChevronDownOutline className="downoutline" />
                                    </button>
                                </th>
                                <th className="users_table_actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <ProductsTableProps number="1" />
                                </td>
                                <td>
                                    <ProductsTableProps name="С1" />
                                </td>
                                <td>
                                    <ProductsTableProps quantity="10 000" />
                                </td>
                                <td>
                                    <ProductsTableProps prise="3 500" />
                                </td>
                                <td className="td_icon">
                                    <ProductsTableProps
                                        icon={
                                            <CardActionArea
                                                variant="outlined"
                                                className="table__btn"
                                            >
                                                <LuEye className="table__icon" />
                                            </CardActionArea>
                                        }
                                    />

                                    <ProductsTableProps
                                        icon={
                                            <CardActionArea
                                                variant="outlined"
                                                className="table__btn"
                                            >
                                                <LuPencil className="table__pen" />
                                            </CardActionArea>
                                        }
                                    />

                                    <ProductsTableProps
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
                                    <ProductsTableProps number="1" />
                                </td>
                                <td>
                                    <ProductsTableProps name="С1" />
                                </td>
                                <td>
                                    <ProductsTableProps quantity="10 000" />
                                </td>
                                <td>
                                    <ProductsTableProps prise="3 500" />
                                </td>
                                <td className="td_icon">
                                    <ProductsTableProps
                                        icon={
                                            <CardActionArea
                                                variant="outlined"
                                                className="table__btn"
                                            >
                                                <LuEye className="table__icon" />
                                            </CardActionArea>
                                        }
                                    />

                                    <ProductsTableProps
                                        icon={
                                            <CardActionArea
                                                variant="outlined"
                                                className="table__btn"
                                            >
                                                <LuPencil className="table__pen" />
                                            </CardActionArea>
                                        }
                                    />

                                    <ProductsTableProps
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
            </div>
        </section >
    )
}

export default ProductsTable
