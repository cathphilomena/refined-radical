import faqs from './data'
import './faqs.css'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section id="faqs">
        <div className="container">
          <h2>FAQs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, non unde aspernatur illo accusantium distinctio cum sunt temporibus nemo, voluptatum dolor aliquid magni vel in dolores praesentium suscipit error consequuntur!</p>
          <div className='faqs__container'>
            {
              faqs.map(faq => (
                <FAQ key={faq.id} faq={faq}/>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default FAQs