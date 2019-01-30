import React, { Component } from 'react'

import Header from './Header'
import Banner from './Banner'
import Cards from './Cards'
import Services from './Services'
import Footer from './Footer'
import AOS from 'aos'
import '../scss/main.scss'
import 'aos/dist/aos.css'

AOS.init()

export default class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <main>
                <Header />
                <Banner />
                <Cards />
                <Services />
                <Footer />
            </main>
        )
    }
}
