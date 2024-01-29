import './about.css'
import about from "../../assets/about.jpg"
import Card from '../../components/Card'
import data from './data.js'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div class="about__image-bg"></div>
            <div class="about__image-lg">
                <img src={about} alt="About Image"/>
            </div>
            <div class="about__image-sm">
                <img src={about} alt="About Image"/>
            </div>
          </div>
        <div className="about__right">
          <h2>About</h2>
          <div className='about__cards'>
            {
              data.map(item =>(
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h3>{item.title}</h3>
                </Card>
              ))
            }
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quam. Ducimus placeat, cumque architecto culpa assumenda impedit error sapiente aperiam qui recusandae quas, voluptatibus maxime voluptates cupiditate labore alias magni!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, saepe.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum distinctio nisi optio quae, at aspernatur ipsa provident laborum, aliquid eveniet dolorum, natus autem aperiam ex adipisci molestias? Fuga, eum!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, ab!</p>
        </div>
      </div>
    </section>
  )
}

export default About