import React, { Children } from 'react'
import '../scss/Categories.scss'

const Categories = ({title, children}) => (
    <main className="categories">
        <h3 className="categories__title">
            {title}
        </h3>
        {children}
    </main>
)

export default Categories