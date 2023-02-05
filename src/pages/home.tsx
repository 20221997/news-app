import {useContext} from 'react';
import { CardHome, Snipper } from '../components';
import { NewsContext } from '../context/NewsContext';

const classes = {
  home:'home-content'
}

export const Home = () => {
  const {articles} = useContext(NewsContext);
  return (
    <section className={classes.home}>
      {articles.map(article => (
          <CardHome 
            key={article.title}
            article={article}  
            />
        ))
      }
    </section>
  )
}
