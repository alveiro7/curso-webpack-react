import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarourelItem'
import Footer from '../components/Footer'

const API = 'https://pokeapi.co/api/v2/'

const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Categories title="Mi Lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                
            </Carousel>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                
            </Carousel>
        </Categories>
        <Carousel />
        <Footer />
    </div>
)

export default App