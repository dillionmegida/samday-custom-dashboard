import React, { Fragment } from 'react';
import Styles from './Layout.module.css';

import Dock from '../Dock/Dock';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default props => {
    return (
        <Fragment>
            <div className={Styles.Container}>
                <Dock />
                <div className={Styles.RightContent}>
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}