import {FaHome} from 'react-icons/fa';
import {IoMdContact} from 'react-icons/io';
import {GoProjectRoadmap} from 'react-icons/go'
import {SlUser} from 'react-icons/sl';

let gap = {marginRight:'2%'};

const menuBarItems = [{
    name:'Home',
    icon:<FaHome style = {gap}/>,
    path: '/',
    iconName: 'FaHome'
},
{
    name:'Projects',
    icon:<GoProjectRoadmap style = {gap} />,
    path: '/Project',
    iconName: 'GoProjectRoadmap'
},
{
    name:'Contact',
    icon: <IoMdContact style = {gap} />,
    path: '/Contact',
    iconName:'IoMdContact'
},
]

export default menuBarItems;