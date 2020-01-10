import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Styles from "./header.module.css"
import Logo from "../images/logo.png"


const HeaderPage = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					howitwork
					about
					avail
					apply
					wit
				}
			}
		}
	`)

	return (
	<header>
		<div>
			<Link to="/"><img className={Styles.logo} src={Logo} /></Link>
			<nav>
				<a href="#" id="Responsive-Logo"></a>
				<ul>
					<li><Link to="/howitworks">{data.site.siteMetadata.howitwork}</Link></li>
					<li><a href="#">{data.site.siteMetadata.apply}</a></li>
					<li><Link to="/artificalintelligence">{data.site.siteMetadata.avail}</Link></li>
					<li><Link to="/about">{data.site.siteMetadata.about}</Link></li>
					<li><Link to="/wit">{data.site.siteMetadata.wit}</Link></li>
				</ul>
			</nav>
		</div>
	</header>
	)
}

export default HeaderPage