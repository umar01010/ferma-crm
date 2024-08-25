import React from 'react'
import { HeaderProps } from '../../../components/Header/HeaderProps'
import UsersSearch from "../Users/UsersSearch/UsersSearch"
import ProductsTable from './ProductsTable/ProductsTable'

const Products = () => {
    return (
        <div>
            <HeaderProps text="Продукты" />
            <UsersSearch />
            <ProductsTable />
        </div>
    )
}

export default Products
