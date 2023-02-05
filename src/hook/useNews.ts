
import {useState,useEffect} from 'react';
import { getNews } from '../helpers/getNews';
import { Article } from '../interface/interface';

// export const getTitle = (title:string = '') => {
//     const [loading, setloading] = useState(true);
//     const [note, setNote ] = useState({});

//     const getNote = async() => {
//         const data:Article[] = await getNews('',1,title);
//         if(data.length > 0) {
//             setNote(data[0])
//         }else{
//             setNote({})
//         }
//         setloading(false)
//     }
//     useEffect(() => {
//       getNote()
//     }, [])

//     return {
//         loading,
//         note
//     }
    
// }

export const useArticle = () => {
    const [loading, setloading] = useState(true);
    const [articles, setArticles ] = useState<Article[]>([]);
    
    const getNote = async() => {
        const data:Article[] = await getNews();
        
        setArticles(data);
        setloading(false);
    }
    useEffect(() => {
      getNote();
    }, [])

    return {
        loading,
        articles,
    }
    
}
export const useBusiness = () => {
    const [loading, setloading] = useState(true);
    const [business, setBusiness ] = useState<Article[]>([]);

    const getNote = async() => {
        const data:Article[] = await getNews('business');
        setBusiness(data)
        setloading(false)
    }
    useEffect(() => {
      getNote()
    }, [])

    return {
        loading,
        business
    }
    
}
