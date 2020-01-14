import React from 'react'
import wit from '../pages/wit.js'
import "./header.css"
import { Link } from "gatsby";
import piaic from "../images/logo.png"
import but from "./htmbutton.png"

const Header = () => {
	return (

		
		<header>
		<div class ="LOG"><img src={piaic}/></div>
		<nav>
		<ul>
		<li><Link to="/howitworks">How It Works</Link></li>
		<li><a href="#">Apply</a></li>
		<li class="sub-menu" ><a href="#">Available Programs</a>
		<ul>
		<li><Link to="/artificalintelligence"> Artificial Intelligence </Link></li>
		<li><Link to="/cloud-native"> Cloud Native </Link></li> 
		<li><Link to="/block-chain"> BlockChain </Link></li> 
		<li><Link to="/iot"> Internet Of Things </Link></li>
		</ul>  
		</li>
		<li class="sub-menu" ><a href="#">About</a>
		<ul>
		<li><Link to="/about"> The President </Link></li>
		<li><a href="#"> Management Committee</a></li> 
		</ul>
		</li>
		<li><Link to="/wit">Wit</Link></li>
		</ul>
		</nav>
		<div class="menu-toggle"><img src={but}/></div>
		</header>
	
)

}

export default Header