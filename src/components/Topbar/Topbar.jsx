import React from 'react'
import './topbar.scss'
import {Person} from '@material-ui/icons';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Taofiq</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span> +601160842028 </span>
                    </div>
                    <div className="itemContainer">
                        <MailOutlineIcon className="icon"/>
                        <span> taofiqaiyelabegan45@gmail.com </span>
                    </div>
                </div>
               


                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line-1"></span>
                        <span className="line-3"></span>
                        <span className="line-3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
