// import { Link } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import { Article } from "../../interface/interface"
import { Snipper } from "../snipper/Snipper";

interface props {
    article:Article
}

const classes = {
    card:    'card',
    imgcard: 'card__img-card',
    image:   'card__img-card__image',
    text:    'card__text',
    title:   'card__text__title',
    author:  'card__text__author',
}

export const CardHome = ({ article }: props) => {
    const {urlToImage, title, author,publishedAt} = article;
    const {loading} = useContext(NewsContext);
    if(loading) return <Snipper />

    return (
        <div className={classes.card}>
            <div className={classes.imgcard}>
                <img className={classes.image} src={urlToImage} alt={title} />
            </div>
            <div className={classes.text}>
                <h3 className={classes.title}>{title}</h3>
                {/* <Link to={`/SinglePage/${id}`}> */}
                {/* <h1 className='titleBg'>{url}</h1> */}
                {/* </Link> */}
                <div className={classes.author}>
                    <span>by {author}</span>
                    <span>{publishedAt}</span>
                </div>
            </div>
        </div>  
    )
}
