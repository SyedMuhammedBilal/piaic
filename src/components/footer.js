import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import "../styles/footer.css"
import "../styles/Copyright.css"
import "../styles/home.css"
import "../styles/AiStyles.css"
import "../styles/reboot.scss"
import PClogo from "../images/panacloudfootericon.png"

console.log(PClogo)
const FooterPage = () =>{
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author
					rights
					powered
				}
			}
		}
	`)

	return(
		<div class="copyright-cont d-flex">
		<div class="copy-text">
		    <b>{data.site.siteMetadata.rights}</b>
		</div>
		<div class="footer-logo">
		<div class="footer-panacloudlogo-cont">
		    <a href="https://www.panacloud.ai/" target="_blank" rel="noopener noreferrer">
		    <b>{data.site.siteMetadata.powered}</b>
		    <img src={PClogo} alt="panacloudlogo" />
		    </a>
		</div>
		</div>
		</div>
		)
}
export default FooterPage