import Card from '../../components/Card'
import './portfolio.css'

const Project = ({project}) => {
  return (
    <Card className='portfolio__project'>
        <div className="portfolio__project-image">
            <img src={project.image}/>
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>

    </Card>
  )
}

export default Project