import React from 'react'
import wit from '../pages/wit.js'
import "./header.css"
import piaic from "../images/logo.png"
import but from "./htmbutton.png"

const Header = () => {
	return (

		
		<header>
		<div class ="LOG"><img src={piaic}/></div>
		<nav>
		<ul>
		<li><a href="#" class="active">Home</a></li>
		<li><a href="#">Apply</a></li>
		<li class="sub-menu" ><a href="#">Available Programs</a>
		<ul>
		<li><a href="#"> Artificial Intelligence </a></li>
		<li><a href="#"> CN and MWD </a></li> 
		<li><a href="#"> Block Chain </a></li> 
		<li><a href="#"> Internet Of Things </a></li>
		</ul>  
		</li>
		<li class="sub-menu" ><a href="#">About</a>
		<ul>
		<li><a href="#"> The President </a></li>
		<li><a href="#"> Management Committee</a></li> 
		</ul>
		</li>
		<li><a href="wit">Wit</a></li>
		</ul>
		</nav>
		<div class="menu-toggle"><img src={but}/></div>
		</header>
	
)

}

export default Header