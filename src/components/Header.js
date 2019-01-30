import React from 'react'

const handleMenu = () => document.querySelector('.navbar').classList.toggle('active')

document.addEventListener('click', event => {
    let navbar = document.querySelector('.navbar')
    let button = document.querySelector('.navbar__button')

    if (button.checked && event.target != button) {
        navbar.classList.toggle('active');
        button.checked = !button.checked
    }
});

export default function Header() {

    return (
        <header className="navigation">
            <h1 data-aos="fade-down" data-aos-duration="1000" className="logo">
                <a href="#" className="logo__text">Pra melhor</a>
            </h1>
            
            <nav className="navbar" role="navigation">
                <input className="navbar__button" type="checkbox" onClick={handleMenu}/>
                <span className="navbar__icon"></span>
                <span className="navbar__icon"></span>
                <span className="navbar__icon"></span>

                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a className="navbar__link current" href="#">Início</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Coaching</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Team</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}