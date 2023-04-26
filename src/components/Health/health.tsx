import {useState,useEffect} from 'react';
import { getNews } from '../../helpers/getNews';
import { Article } from '../../interface/interface';

export const Health = () => {
  const [loading, setloading] = useState(true);
  const [health, setHealth ] = useState<Article[]>([]);
  console.log("🚀 ~ file: health.tsx:8 ~ Health ~ health:", health)

  const getHealth = async() => {
    const data:Article[] = await getNews('health');
    setHealth(data);
    setloading(false);
  }
  useEffect(() => {
    getHealth()
  }, []);

  return (
    <>
      <p>{loading}...</p>
    </>
  )
}
