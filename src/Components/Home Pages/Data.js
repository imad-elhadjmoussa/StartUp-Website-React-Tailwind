import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

// Links
export const links=['About','Featurs','Team','Reviwes','Contacts'];

// Animations
export const perantVartion = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition:{
            staggerChildren:0.2,
        }
    },
    exit: {
        scale: 0,
        opacity: 0
    }
}

export const childrenVartion={
    hidden:{
        y:-10,
        opacity:0,
    },
    visible:{
        y:0,
        opacity:1,
    },
}


//Socail Icons
export const icons=[
    {
        id:1,
        icon:<FacebookRoundedIcon/>,
        link:'https://www.facebook.com'
    },
    {
        id:2,
        icon:<InstagramIcon/>,
        link:'https://www.instagram.com',
    },
    {
        id:3,
        icon:<XIcon/>,
        link:'https://www.x.com'
    },
    {
        id:4,
        icon:<YouTubeIcon/>,
        link:'https://www.youtube.com'
    }
]
