import SkillItem from "./SkillItem";
import { SiMysql, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiReact, SiNodedotjs, SiGit, SiBootstrap, SiSass } from "react-icons/si";

export default function Skills(){
    const iconSize = '3.5em'
    return(
        <section>
        <h2>Technologies</h2>
        <div className="skills">
            <SkillItem icon={<SiHtml5 
                        size={iconSize}
                        color={'#D84A24'}
                        />} 
                        name="Html5"/>

            <SkillItem icon={<SiCss3 
                        size={iconSize}
                        color={'#0077BB'}
                        />} 
                        name="CSS3"/>

            <SkillItem icon={<SiJavascript 
                        size={iconSize} 
                        color={'#E0CC1A'}
                        />} 
                        name="JavaScript"
                        />

            <SkillItem icon={<SiMongodb 
                        size={iconSize}
                        color={'#3D9536'}
                        />} 
                        name="mongoDb"/>

            <SkillItem icon={<SiReact 
                        size={iconSize}
                        color={'#52D3F1'}
                        />} 
                        name="React"/>

            <SkillItem icon={<SiMysql 
                        size={iconSize}
                        color={'#006388'}
                        />} 
                        name="MySQL"/>
                        
            <SkillItem icon={<SiNodedotjs 
                        size={iconSize}
                        color={'#5B9653'}
                        />} 
                        name="Node.js"/>

            <SkillItem icon={<SiGit 
                        size={iconSize}
                        color={'#F44E27'}
                        />} 
                        name="Git"/>

            <SkillItem icon={<SiBootstrap 
                        size={iconSize}
                        color={'#7852B2'}
                        />} 
                        name="Bootstrap"/>

            <SkillItem icon={<SiSass 
                        size={iconSize}
                        color={'#CF649A'}
                        />} 
                        name="Sass"/>
            
        </div>
        </section>
    )
}
