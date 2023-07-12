import TechSkill from "./TechSkill";




const Skills = () => {
    const skills = [{
        link:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        description:"JavaScript"
    },
    {
        link: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        description:"ReactJS"
    }
    ,{
        link:"https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
        description:"NextJS"
    },{
        link:"https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png",
        description:"NodeJS"
    },
    {
        link:"https://jsurt.github.io/jacks-portfolio/images/color-express-icon%20(1).png",
        description:"ExpressJs"
    },
    {
        link:"https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png",
        description:"Sequelize"
    }
    ];
    return (
        <div className="w-1/2 lg:w-4/6 h-auto lg:grid-rows-1 lg:grid-cols-6 grid-cols-3 grid-rows-2 grid gap-5 lg:gap-10">
            {skills.map(skill => (
                <TechSkill skill={skill} key={skill.description}/>
                ))
            }
           
        </div>
    );
}

export default Skills;