import Project from './Project'

const projects = [
  {
    id: 1,
    title: 'Página Personal',
    image: 'images/projects/personal_web/home.png',
    aboutProjectUrl: '/portfolio/website',
    seeProjectUrl: 'https://www.lukway.site',
    githubUrl: 'https://github.com/Lukway-developer/Website',
    figmaUrl: 'https://www.figma.com/file/cdmRwlCSVUAXvK5QMUmlGT/Personal-Website?node-id=0%3A1',
    projectIcon: 'images/projects/icons/lukway_icon.svg'
  }, {
    id: 2,
    title: 'Memory Game',
    image: 'images/projects/memory_cards_game/menu(large).png',
    aboutProjectUrl: '/portfolio/memory_game',
    seeProjectUrl: 'https://memorycards-game.web.app/',
    githubUrl: 'https://github.com/Lukway-developer/MemoryCardsGame',
    figmaUrl: 'https://www.figma.com/file/LaObvOfVjClb4JT4I788EL/Memory-Game?node-id=0%3A1',
    projectIcon: 'images/projects/icons/memory_game_icon.svg'
  }, {
    id: 3,
    title: 'Skala Ecommerce',
    image: 'images/projects/skala_ecommerce/home.png',
    aboutProjectUrl: '/portfolio/skala_ecommerce',
    seeProjectUrl: 'https://lukway-developer.github.io/Skala',
    githubUrl: 'https://github.com/Lukway-developer/Skala',
    figmaUrl: 'https://www.figma.com/file/zcXf5DkPIK7DPDnYGy42xr/Skala-Ecommerce?node-id=0%3A1',
    projectIcon: 'images/projects/icons/skala_icon.svg'
  }, {
    id: 4,
    title: 'JavaScript Quiz',
    image: 'images/projects/javascript_quiz/home.png',
    aboutProjectUrl: '/portfolio/javascript_quiz',
    seeProjectUrl: 'https://javascript--quiz.herokuapp.com/',
    githubUrl: 'https://github.com/Lukway-developer/JavaScript-Quiz',
    figmaUrl: 'https://www.figma.com/file/Lp7nUuVhHTc4U8t6PTzqWa/JavaScript-Quizz?node-id=0%3A1',
    projectIcon: 'images/projects/icons/javascript_quiz_icon.svg'
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
          aboutProjectUrl={project.aboutProjectUrl}
          seeProjectUrl={project.seeProjectUrl}
          figmaUrl={project.figmaUrl}
          githubUrl={project.githubUrl}
          projectIcon={project.projectIcon}
        />
      ))}
    </div>
  )
}

export default ProjectContainer
