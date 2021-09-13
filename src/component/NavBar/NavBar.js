import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar() {
    return (
        <div className="nav--container">
            <ul className="lists">
            <Link to="/">
                <li>
                    Home
                </li>
                </Link>
                <Link to="/student">
                <li>
                    Student
                </li>
                </Link>
                <Link to="/course">
                <li>
                    Course
                </li>
                </Link>
                <Link to="/teacher">
                <li>
                    Teacher
                </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar
