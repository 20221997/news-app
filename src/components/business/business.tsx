
import { useBusiness } from "../../hook/useNews";
import { Snipper } from "../snipper/Snipper";

export const Business = () => {
  const {loading,business} =useBusiness();
  if(loading) return <Snipper/>
  return (
    <section className='popularPost life'>
      {
        business.map(({title,urlToImage,content}) => (
          <div key={title} >
            <img src={urlToImage} alt='image' style={{width:'300px'}} />
            <div>
              <h3>{title}</h3>
              <hr />
              <p>{content}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}
