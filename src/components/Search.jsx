import React from 'react'
import '../scss/Search.scss'

const nameSearch= '¿Que quieres ver hoy?'
const Search = () => (
    <section className="search">
        <h2 className="serach__name">{nameSearch}</h2>
        <input type="text" className="search__input" placeholder="Searching..." />
    </section>
)

export default Search