import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.less';
export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <ul className='nav__list'>
                    <li className="nav__item nav__item--blue"><Link to='/about'>About</Link></li>
                    <li className="nav__item nav__item--pink"><Link to='/experience'>Experience</Link></li>
                    <li className="nav__item nav__item--green"><Link to='/skills'>Skills</Link></li>
                </ul>
            </div>
        );
    }
}