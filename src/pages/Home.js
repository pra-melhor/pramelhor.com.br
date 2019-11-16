import React, { Component } from 'react'

import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <main>
                <Banner />
                <Cards />
                <Services />
                <Footer />
            </main>
        )
    }
}
