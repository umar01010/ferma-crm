import React from "react";
import "./UsersTableProps.css";
export const UsersTableProps = (UsersTableProps) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="Props_number">{UsersTableProps.number}</td>
            <td className="Props_fuulname">{UsersTableProps.fuulname}</td>
            <td className="Props_telephone">{UsersTableProps.telephone}</td>
            <td className="Props_roles">{UsersTableProps.roles}</td>
            <td className="Props_icon">{UsersTableProps.icon}</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};
