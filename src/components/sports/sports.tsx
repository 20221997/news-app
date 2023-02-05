import {useState,useEffect} from 'react';
import { getNews } from '../../helpers/getNews';
import { Article } from '../../interface/interface';

export const Sports = () => {
    const [loading, setloading] = useState(true);
    const [sports, setSports ] = useState<Article[]>([]);

    const getSports = async() => {
        const data:Article[] = await getNews('sports');
        setSports(data);
        setloading(false);
    }
    useEffect(() => {
        getSports()
    }, []);
  // console.log(sports)
    return (
        <section className='popularPost'>
            <h1>sports</h1>
        </section>
    )
}
