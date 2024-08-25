import React from 'react'
import UsersSearch from "../Users/UsersSearch/UsersSearch"
import ProductsTable from "../Products/ProductsTable/ProductsTable"
import "./Products.css"

const Products = () => {
    return (
        <div>
            <div className="products_title">Продукты</div>
            <UsersSearch />
            <ProductsTable />
        </div>
    )
}

export default Products
