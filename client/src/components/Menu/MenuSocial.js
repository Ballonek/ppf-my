import React from 'react'
import { fb, li, ig, tw } from '../../assets/social'

const MenuSocial = () => {

    return <div className="menu-social">
        <a href="https://www.facebook.com/ppfmedia/" target="_blank" rel="noopener noreferrer"><img src={fb} alt='Facebook social icon'></img></a>
        <a href="https://cz.linkedin.com/company/ppf-media" target="_blank" rel="noopener noreferrer"><img src={li} alt='LinkedIn social icon'></img></a>
        <a href="https://twitter.com/PPFmediaCZ" target="_blank" rel="noopener noreferrer"><img src={tw} alt='Twitter social icon'></img></a>
        <a href="https://www.instagram.com/ppfmedia/" target="_blank" rel="noopener noreferrer"><img src={ig} alt='Instagram social icon'></img></a>
    </div>;
}

export default MenuSocial;