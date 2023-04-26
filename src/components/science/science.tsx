import {useState,useEffect} from 'react';
import { getNews } from '../../helpers/getNews';
import { Article } from '../../interface/interface';

export const Science = () => {
  const [loading, setloading] = useState(true);
  const [science, setScience ] = useState<Article[]>([]);
  console.log("🚀 ~ file: science.tsx:8 ~ Science ~ science:", science)
  const getScience = async() => {
    const data:Article[] = await getNews('science');
    setScience(data);
    setloading(false);
  }
  useEffect(() => {
    getScience()
  }, []);
  
  if(loading){
   return <p>{loading}...</p>
  }
  // console.log(entertainment)
  return (
    <h1>science</h1>
  )
}
