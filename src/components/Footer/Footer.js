import React from 'react';
import Styles from './Footer.module.scss';

export default () => (
    <footer>
        <div className={Styles.Download}>
            <h4>
                Download App
            </h4>
            <div>
                <a href='#' title='Apple Store'>
                    <i className='fa fa-apple'></i>
                </a>
                <a href='#' title='Google Play Store'>
                    <i className='fa fa-play'></i>
                </a>

            </div>
        </div>
        <div className={Styles.Info}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div>
                <a href='#' title='Lorem Ipsum Dolor Sit'>Lorem ipsum dolor sit</a>
                <a href='#' title='Lorem Ipsum Dolor Sit'>Lorem ipsum dolor sit</a>
                <a href='#' title='Lorem Ipsum Dolor Sit'>Lorem ipsum dolor sit</a>
            </div>
        </div>
        <div className={Styles.Connect}>
            <h4>
                Connect with Us
            </h4>
            <div>
                <a href='#' title='Twitter'>
                    <i className='fa fa-twitter'></i>
                </a>
                <a href='#' title='Facebook'>
                    <i className='fa fa-facebook'></i>
                </a>
                <a href='#' title='Instagram'>
                    <i className='fa fa-instagram'></i>
                </a>
            </div>
        </div>
    </footer>
)