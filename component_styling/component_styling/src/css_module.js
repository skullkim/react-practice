import React from 'react';
// import styles from './css_module.module.css';
import styles from './css_module_scss.module.scss';

const CssModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            Hi, I'm <span className="something">CSS module</span>
        </div>
    )
}

export default CssModule;