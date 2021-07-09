import React from 'react'
import Layout from '../components/Layout';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarourelItem'
import useTvShowsApi from '../hooks/useTvShowsApi'

import '../scss/Home.scss'


const API = 'http://localhost:3000/initialState'

const Home = () => {
    const videos = useTvShowsApi(API)

    const renderList = (list = []) => {
        return (
        <>
            {list.map((item) => (
                <CarouselItem key={item.id} {...item} />
            ))}
        </>
        )
    }
    return (
    <>
        <Search />
        {videos.mylist && videos.mylist.length > 0 && (
            <Categories title="Mi lista">
                <Carousel>{renderList(videos.mylist)}</Carousel>
            </Categories>
        )}
        {videos.trends && videos.trends.length > 0 && (
        <Categories title="Tendencias">
            <Carousel>{renderList(videos.trends)}</Carousel>
        </Categories>
        )}
        {videos.originals && videos.originals.length > 0 && (
            <Categories title="Originales">
            <Carousel>{renderList(videos.originals)}</Carousel>
        </Categories>
        )}
    </>
    )
}

export default Home;