import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./info.module.css"

function Info() {
    return (
        <div className={classes.footer}>
                <li>
                    <NavLink className={classes.info} to="/">Posts</NavLink>
                </li>
                <li>
                    <NavLink className={classes.info} to="/footer">Form</NavLink>
                </li>
                <li>
                    <NavLink className={classes.info} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className={classes.info} to="/contact">Contact</NavLink>
                </li>
        </div>
    );
}

export default Info;

