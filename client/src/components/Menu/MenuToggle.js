import React from 'react'
import hambac from '../../assets/hambac.svg'

import { setLanguage, withTranslation } from 'react-multi-lang'

const MenuToggle = ({clickHandler, t}) => {
  return <div>{
    // <button onClick={() => setLanguage(t('nextLang'))} className='menu-button-lang'>
    //   {t('nextLang')}
    // </button>
    }<button onClick={clickHandler} className='menu-button-container'>
      <img className='menu-button-img' src={hambac} alt="Menu" />
    </button>
  </div>;

}

export default withTranslation(MenuToggle);