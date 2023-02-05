// import {useState,useEffect} from 'react';
// import { getNews } from '../../helpers/getNews';
// import { Article } from '../../interface/interface';
import {useContext} from 'react';
import { NewsContext } from '../../context/NewsContext';

export const Entertainment = () => {
  const db = useContext(NewsContext);
  console.log(db);
  // const [loading, setloading] = useState(true);
  // const [entertainment, setEntertainment ] = useState<Article[]>([]);

  // const getEntertainment = async() => {
  //   const data:Article[] = await getNews('entertainment');
  //   setEntertainment(data);
  //   setloading(false);
  // }
  // useEffect(() => {
  //   getEntertainment()
  // }, []);
  // console.log(entertainment)
  return (
    <section className='music'>
      <h1>Entertainment </h1>
    </section>
  )
}
