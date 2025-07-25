const SkillCard = ({skill}) => {

  if (skill.skills.length > 0) {
    return (
      <div className='logo_container hidden_2'>
        <div className='logo_container_2'>
          <img className='logo_image' src={skill.image}/>
        </div>
  
        <h2 className='skill_name'>{skill.name}</h2>

        <div className='skills_list'>
          {skill.skills.map(element => 
            <span key={element} className='particular_skills'>{element}</span>
            )}
        </div>
      </div>
    )
  } else {
    return (
      <div className='logo_container_2 hidden_2'>
        <h2 className='skill_name'>{skill.name}</h2>

        <img className='logo_image' src={skill.image}/>
      </div>
    )
  }
}

export default SkillCard