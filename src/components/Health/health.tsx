import {useState,useEffect} from 'react';
import { getNews } from '../../helpers/getNews';
import { Article } from '../../interface/interface';

export const Health = () => {
  const [loading, setloading] = useState(true);
  const [health, setHealth ] = useState<Article[]>([]);

  const getHealth = async() => {
    const data:Article[] = await getNews('health');
    setHealth(data);
    setloading(false);
  }
  useEffect(() => {
    getHealth()
  }, []);
  // console.log(entertainment)
  return (
    <h1>Health</h1>
  )
}
