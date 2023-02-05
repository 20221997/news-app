// import {useState} from 'react';
import { Snipper } from '../components';
import { useArticle } from '../hook/useNews';

export const General = () => {
  // const [error, setError ] = useState(null);

  const {loading, articles} = useArticle();
  if(loading) return <Snipper/>
  return (
    <>
      <h1>general</h1>
      {
        // articles.map(({title,publishedAt,urlToImage,author,description}) => (
        //   <div key={title}>
        //     <span>{publishedAt}</span>
        //     <div>
        //       <img src={urlToImage} alt={title} />
        //     </div>
        //     <span>{author}</span>
        //     <p>{description}</p>
        //     <button>read more</button>
        //   </div>
        // ))
      }
    </>
  )
}
