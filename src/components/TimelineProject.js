//import persprojectsInfo from './config/personalProjInfo';
import projectsInfo from './config/projectsInfo';
import githubLogo from '../assets/github-mark-white.png'
import { FaGithub } from "react-icons/fa";

import './styleSheet/timelineProject.css';

function TimelineProject(props){

    return(
        <div className = "timeline">
            {
                projectsInfo.map((item,index)=>{
                    if(index%2 ===0){
                        return(
                        <div className = "containerTimeline leftCont" style = {{animationDelay:`${index*0.4}s`}}>
                            <img className = "timelineImgL" src = {item.logo} />
                            <div className = "text-box">
                                <h2>{item.name}</h2>
                                <small>{item.date}</small>
                                <p>{item.description}</p>
                                <span className = "left-container-arrow"></span>
                                <span className = "timelineLinkL"> Link {'  '} <FaGithub /></span>
                            </div>
                        </div>
                        )
                    }
                    else{
                        return(
                        <div className = "containerTimeline rightCont" style = {{animationDelay:`${index * 0.4}s`}}>
                            <img className = "timelineImgR" src = {item.logo} />
                            <div className = "text-box">
                                <h2>{item.name}</h2>
                                <small>{item.date}</small>
                                <p>{item.description}</p>
                                <span className = "right-container-arrow"></span>
                                <span className = "timelineLinkR"> Link <FaGithub /></span>
                            </div>
                        </div>                    
                        )
                    }
                })
            }
            
        </div>
    )
}

export default TimelineProject;