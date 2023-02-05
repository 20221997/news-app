import { useArticle } from '../hook/useNews';
import { NewsContext } from './NewsContext';

export interface props {
  children: JSX.Element | JSX.Element[]
}

export const NewsContextProvider = ({children}:props) => {
  
  const {loading,articles} = useArticle();
  
  return (
   <NewsContext.Provider value={{loading,articles}}>
    {children}
   </NewsContext.Provider> 
  )
}