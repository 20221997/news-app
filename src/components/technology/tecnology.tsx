import {useState,useEffect} from 'react';
import { getNews } from '../../helpers/getNews';
import { Article } from '../../interface/interface';

export const Tecnology = () => {
  const [loading, setloading] = useState(true);
  const [tecnology, setTecnology ] = useState<Article[]>([]);

  const getTecnology = async() => {
    const data:Article[] = await getNews('tecnology');
    setTecnology(data);
    setloading(false);
  }
  useEffect(() => {
    getTecnology()
  }, []);
  // console.log(tecnology)
  return (
    <div>
        <h1>Tecnology</h1>
    </div>
  )
}
