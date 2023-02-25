import { FaQuoteRight } from 'react-icons/fa';

const PersonArticle = ({id, image, name, title, quote, position}) =>{
    return (
        <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
        </article>
    )
}

export default PersonArticle;