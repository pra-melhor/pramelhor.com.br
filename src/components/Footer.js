import React from 'react'

export default function Footer() {

    return (
        <footer data-aos="fade-down" data-aos-duration="1000" className="footer">
            <div className="footer__list">
                <aside className="footer__item">
                    <h2 className="subtitle">Projeto pra Melhor</h2>
                    <p className="text">Management 3.0, DevOps, Design Sprint, Alinhamento entre expectativas e prazos, Agile Coach e TDD, além de práticas que visam a integração entre time e resultados</p>
                </aside>

                <aside className="footer__item">    
                    <h2 className="subtitle">Links</h2>  
                    <ul>
                        <li><a href="#" className="footer__link">Produtos</a></li>
                        <li><a href="#" className="footer__link">Coaching</a></li>
                        <li><a href="#" className="footer__link">Team member</a></li>
                        <li><a href="#" className="footer__link">Quem somos</a></li>
                    </ul>
                </aside>

                <aside className="footer__item">
                    <h2 className="subtitle">Social</h2>

                    <ul>
                        <li>
                            <img className="footer__img" src="img/twitter.svg" alt="Twitter"/>
                            <a href="#" className="footer__link footer__link--icon" target="_blank" rel="noopener">Twitter</a>
                        </li>
                        <li>
                            <img className="footer__img" src="img/github.svg" alt="Github"/>
                            <a href="#" className="footer__link footer__link--icon" target="_blank" rel="noopener">Github</a>
                        </li>
                        <li>
                            <img className="footer__img" src="img/youtube.svg" alt="Youtube"/>
                            <a href="#" className="footer__link footer__link--icon" target="_blank" rel="noopener">Youtube</a>
                        </li>
                    </ul>
                </aside>
            </div>
        </footer>
    )
}