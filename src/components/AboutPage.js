import aboutInfo from './config/aboutInfo';
import skillInfo from './config/skillInfo';
import About from './About';
import GitHubCalendar from 'react-github-calendar';

import './styleSheet/AboutPage.css';

function AboutPage(props) {
    let copySkill = skillInfo;


  return (
    <>
        <div>
            {aboutInfo.map((item,index)=>(
                    <About toAdd = {item} mobileOrientation = {props.mobileOrientation} />
            ))}
        </div>

        <div style={{display:'flex',justifyContent:'center', background:'rgba(128,128,128,0.8)'}}>
            <GitHubCalendar username = "mobeen0"/>
        </div>

        <div className ="traintrack">
            <ul>
            {
                skillInfo.map((item,index)=>(
                    <li  className = "skillItem">
                        {item.skillname}
                    </li>
                ))
            }
            {
                copySkill.map((item,index)=>(
                    <li  className = "skillItem">
                        {item.skillname}
                    </li>
                ))
            }
            </ul>
        </div>
    </>
  )
}

export default AboutPage;