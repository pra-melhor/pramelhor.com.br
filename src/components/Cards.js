import React from 'react'

export default function Cards() {
    
    return (
        <section className="cards">
            <h2 className="title">Pessoas e Sistemas</h2>
            <h3 className="subtitle">pra melhor desenvolvimento</h3>

            <div className="cards__list">
                <aside data-aos="flip-right" data-aos-duration="800" className="cards__item">
                    <img className="cards__icon" src="img/watch.svg" alt="Relógio"/>
                    <h3 className="title">Precisão</h3>
                    <p className="text">Fazer a coisa certa, essa é a principal missão detro do time. Fazer do jeito certo é como vamos evoluir para conseguir.</p>
                </aside>

                <aside data-aos="flip-down" data-aos-duration="800" className="cards__item">
                    <img className="cards__icon" src="img/arrows.svg" alt="Foco"/>
                    <h3 className="title">Propósito</h3>
                    <p className="text">De forma positiva, na direção certa, com a atitude necessária, guiado pelos valores e máxima atenção aos detalhes</p>
                </aside>

                <aside data-aos="flip-left" data-aos-duration="800" className="cards__item">
                    <img className="cards__icon" src="img/email.svg" alt="Entregue"/>
                    <h3 className="title">Pronto</h3>
                    <p className="text">Com pequenas entregas e frequentes, o time vai aprendendo rápido e indo pra melhor a cada etapa</p>
                </aside>
            </div>
        </section>
    )
}