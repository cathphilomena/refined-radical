import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import './portfolio.css'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
    const [projects, setProjects] = useState(data);
    const categories = data.map(item =>item.category);
    const uniqueCategories = ['all', ...new Set(categories)];
    const filterProjectsHandler = (category) => {
        if(category === 'all') {
            setProjects(data);
            return;
        }
        const filterProjects = data.filter(project => project.category === category);
        setProjects(filterProjects)
    }
  return (
    <section id='portfolio'>
        <div className="container">
            <h2>Portfolio</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi a temporibus dolorum perspiciatis. Doloremque aliquam quibusdam nihil recusandae saepe illo, esse sed blanditiis aut ea aperiam, reiciendis culpa corporis amet?</p>
            <div className="portfolio__container">
                <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
                <Projects projects={projects}/>
            </div>
        </div>
    </section>
  )
}

export default Portfolio