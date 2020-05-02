import React from 'react'
import {Link} from 'react-router-dom'

const CourseCard = ({id,title, image, price, profesor}) => (
    <article className="card">
        <h3>CourseCard</h3>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            {/**
             * Un ancla en HTML para redireccionar es con <a> pero recarga la pagina. No es una
             * single page aplication. Por eso Router nos da una nuevo componente que se llama link
             * <a href={`/cursos/${id}`}>
                <img src={image} alt={title} />
                </a>
             */}
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <h4 className="center">{profesor}</h4>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://">$ {price}</a>
            </div>
        </div>
    </article>
)

export default CourseCard