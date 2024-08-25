import React from "react";
import "./ProductsTable"
export const ProductsTableProps = (ProductsTableProps) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className="Props_number">{ProductsTableProps.number}</td>
                        <td className="Props_fuulname">{ProductsTableProps.name}</td>
                        <td className="Props_telephone">{ProductsTableProps.quantity}</td>
                        <td className="Props_roles">{ProductsTableProps.prise}</td>
                        <td className="Props_icon">{ProductsTableProps.icon}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
