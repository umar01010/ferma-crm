import React from 'react'
import UsersTable from './UsersTable/UsersTable'
import UsersSearch from './UsersSearch/UsersSearch'
import { HeaderProps } from '../../../components/Header/HeaderProps'

const Users = () => {
    return (
        <div>
            <HeaderProps text="Пользователи" />
            <UsersSearch />
            <UsersTable />
        </div>
    )
}

export default Users
