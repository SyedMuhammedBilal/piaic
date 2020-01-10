import React from 'react'
import HeaderPage from './header'
import FooterPage from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.css'

const Layout = (props) => {
	return (
	    <div className={layoutStyles.container}>
	        <HeaderPage/>
		    {props.children}
		    <FooterPage />
	    </div>
	)
}

export default Layout