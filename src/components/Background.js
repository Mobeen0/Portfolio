import Particles from 'react-tsparticles';
import particlesConfig from './config/particlesConfig';
import particlesConfig2 from './config/particlesConfig2';
import './styleSheet/Background.css';


function Background(props) {

  if(props.black){
    return(
      <Particles params = {particlesConfig} />
    )
  }
  else{
    return(
      < Particles params = {particlesConfig}/>
    )
  }
}

export default Background;