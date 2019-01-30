import React from 'react'

export default function Services() {
    
    return (
        <section className="services">
            <h2 className="title">Serviços</h2>
            <h3 className="subtitle">Sistema ou pessoal, pra melhor vai ficar</h3>
            
            <div data-aos="zoom-in-right" data-aos-duration="800" className="services__list">
                <aside className="services__item">
                    <img className="services__img" src="img/coaching.jpeg" alt="Ponte, que representa uma melhor travessia"/>
                    <h3 className="title">Coaching</h3>
                    <p className="text">Processo de coaching pessoal, auxilia na travessia entre o estado atual e o estado desejado sendo alinhados com seus valores e princípios. Atinja suas metas!</p>
                    <a className="btn btn-saiba-mais" href="#">Saiba mais</a>
                </aside>

                <aside data-aos="zoom-in-left" data-aos-duration="800" className="services__item">
                    <img className="services__img" src="img/team-member.jpeg" alt="Faça parte do time"/>
                    <h3 className="title">Team Member</h3>
                    <p className="text">Fazendo parte do time, você vai receber uma mãozinha para seu dia-a-dia ser mais agil. Participando da evolução, você terá um profissional de resultados.</p>
                    <a className="btn btn-saiba-mais" href="#">Saiba mais</a>
                </aside>
            </div>
        </section>
    )
}