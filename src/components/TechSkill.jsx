


const TechSkill = ({skill}) => {
    return (
        <div className = "h-full hover:rotate-12 duration-500 justify-self-center">
            <img className="h-full w-auto " src={skill.link} alt={skill.description}/>
        </div>
    );
}

export default TechSkill;