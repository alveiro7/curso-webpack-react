import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarourelItem'
import useTvShowsApi from '../hooks/useTvShowsApi'

import '../scss/Home.scss'




const Home = ({myList, trends, originals}) => {

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
            <Categories title="Mi lista">
                <Carousel>{renderList(myList)}</Carousel>
            </Categories>

            <Categories title="Tendencias">
                <Carousel>{renderList(trends)}</Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>{renderList(originals)}</Carousel>
            </Categories>
        )
    </>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null) (Home)// connect(props, actions)
