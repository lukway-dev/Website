import Project from './Project'

const projects = [
  {
    id: 1,
    title: 'Página Personal',
    image: 'images/projects/personal_web/home.png',
    path: '/portfolio/website',
    redirect: 'https://www.lukway.site',
    github: 'https://github.com/Lukway-developer/Website'
  }, {
    id: 2,
    title: 'Memory Game',
    image: 'images/projects/memory_cards_game/menu.png',
    path: '/portfolio/memory_game',
    redirect: 'https://memorycards-game.web.app/',
    github: 'https://github.com/Lukway-developer/MemoryCardsGame'
  }, {
    id: 3,
    title: 'JavaScript Quiz',
    image: 'images/projects/javascript_quiz/home.png',
    path: '/portfolio/javascript_quiz',
    redirect: 'https://javascript--quiz.herokuapp.com/',
    github: 'https://github.com/Lukway-developer/JavaScript-Quiz'
  }
]

const ProjectContainer = () => {
  return (
    <div className='projects_container'>
      {projects.map(project => (
        <Project
          key={project.id}
          title={project.title}
          image={project.image}
          path={project.path}
          redirect={project.redirect}
          github={project.github}
        />
      ))}
    </div>
  )
}

export default ProjectContainer
