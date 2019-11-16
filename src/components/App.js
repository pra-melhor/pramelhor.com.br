import React, { Component } from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom"
// import Home from '../pages/Home'
// import Coaching from '../pages/Coaching'
// import Produtos from '../pages/Produtos'
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
                // TODO: run with router
                {/* <Router>
                <div className="navigation">
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Coaching">Coaching</Link>
                    </li>
                    <li>
                        <Link to="/Produtos">Produtos</Link>
                    </li>
                    </ul>

                    <hr />

                    <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/Coaching">
                        <Coaching />
                    </Route>
                    <Route path="/Produtos">
                        <Produtos />
                    </Route>
                    </Switch>
                </div>
                </Router> */}
            </main>
        )
    }
}
