import React from "react"
import Layout   from '../components/layout'
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/bc.css"
import Art from "../images/art.png"
import "../styles/bootstrap.min.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Styles from "../styles/artifical.css"
import { Link } from "gatsby"

import "../styles/home.css"
import "../styles/grid.scss"
import "../styles/reboot.scss"
import "../styles/type.scss"
import Git from "../images/git.png"
//import CNC from "../images/cnc.png"
import JS from "../images/js.jpg"
import C from "../images/c.jpg"
import Ana from "../images/ana.png"
import NODE from "../images/node.png"
import ans from "../images/ans.png"
import KUB from "../images/kub.png"
import Linux from "../images/linux.png"
import Docker from "../images/docker.png"
import MS from "../images/ms.png"
import PMS from "../images/pms.png"

const BC = () => {
	return (
		<body>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		
		<div>
		    <div class="Rectangle-67 bc d-flex justify-content-center align-items-center">
		        <div class="SliderData">
		            <h1 class="Artificial-Intelligence">
		            BLOCKCHAIN SPECIALIST
		            <br/>
		            </h1>
		            <p class="ppp">
		                "A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN,"
		                <br/>
		                "FINTECH AND SMART CONTRACTS"
		            </p> 
		        </div>
		    </div>
		    <div class="line2">
		        <h1 class="program">Program Structure</h1>
		            "Four Quarters of Blockchain Course Work"

		    </div>
		    <br/>
		    <br/>
		</div>

			<div class="container my-container Q-Con">
			    <div class="row">
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 b1">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    1
			                    </h4>
			                    <p class="para">Foundations of Blockchain</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 b2">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    2
			                    </h4>
			                    <p class="para">Smart Contract Development</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 b3">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    3
			                    </h4>
			                    <p class="para">Dapp Development</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 b4">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    4
			                    </h4>
			                    <p class="para">Advanced Blockchain Topics</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
			<div class="container my-container main-container">
			    <div class="box-mega-container cloud">
			        <hr/>
			        <div class="row">
			            <div class="col-sm-12">
			                
			                    
			                    <div class="bc-circle-line"></div> 
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Digital Money, Bitcoin and Blockchain</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/1.872d8124.jpg"/>
			                                    "In this module, students will get an introduction to digital money, bitcoin and the blockchain. Students will learn about trestles systems and proof of work. Students will also learn the difference between private, consortium, and public blockchain networks. This module will also provide an introduction to hashing and cryptography."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            <div class="verticle-circle circle-left">
			                                <div class="circle A,1 transparent b-1-t">
			                                    <span>1A</span>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B1 transparent b-1-t">
			                                    <span>1B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Crypto Tokens</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic/org/static/media/block2.290d4fc9.png"/>
			                                    "In this module, students will learn about crypto tokens, how intrinsic tokens come into existence, how bitcoins, ripples, ethereal, and NXT come into existence. Students will also learn the difference between utility and security tokens. This module will also cover the legal implications of token classification. Students will also learn the eight categories of tokens. In this module, students will learn how to create their own utility tokens."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Blockchain Revolution</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block3.53121172.jpg"/>
			                                    "In this module, students will learn how permissionless systems work. Students will also learn about enterprise blockchain and the future of finance. This module will cover how blockchain can disrupt industries including finance, banking, insurance, and even music."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            <div class="verticle-circle circle-left">
			                                <div class="circle A,1 transparent b-1-t">
			                                    <span>1C</span>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle A2 transparent b-1-t">
			                                    <span>1D</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Introduction to Decentralized Apps</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block4.0cfabd8d.jpg"/>
			                                    "In this module, students will learn about Ethereum, Decentralized Apps, Smart Contracts, and the EVM. Students will learn the benefits of the Ethereum Decentralized Platform and the fourth generation blockchain."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle ">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle E,1 transparent b-1-t">
			                                    <span>1E</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Ethereum and Hyperledger Fabric Basics</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block5.d5d5fbd6.png"/>
			                                    "In this module, students will learn about blockchain nodes and how to run them. Students will also learn about the Ethereum ecosystem, Mist, and Faucets. After this completing this module, students will be able to compile, deploy and instantiate contracts. Students will also have an understanding of the different stages of a contract deployment."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle F1 transparent b-1-t">
			                                    <span>1F</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Crypto Mining and Operations</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block6.634b2a32.png"/>
			                                    "In this module students will learn the process by which Bitcoins are mined and what roles do miners play in creation of Bitcoins. The details of this module would help students understand in great details how various mining strategies are applied by various miners and the powerful hardware custom built for mining. The students would also learn about the role of consensus in mining and the 51% attacks, how the incentives of mining attract miners and the energy consumption and ecological impact of mining."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle A,2 grey b-2-t ">
			                                    <span>2A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Introduction to Smart Contracts</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block7.5bb5c30d.png"/>
			                                    "In this module students will be introduced to the programming and development side of Blockchain, especially that of Ethereum. The students will learn how to use a Remix IDE to program in Solidity. The students will go over various Blockchain concepts again such as Blockchain Basics, Blockchain Transactions, and Blockchain Blocks. The students will learn the infrastructural concepts of the Ethereum Blockchain, such as The Ethereum Virtual Machine, how Ethereum Accounts are formed and how Ethereum Transactions occur. They will also go over other concepts like Gas, Storage, Memory and the Stack, Instruction Set, Message Calls, Delegatecall / Callcode and Libraries, Logs, Creating contracts, and Self-destruct."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B2 grey b-2-t ">
			                                    <span>2B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Solidity in Depth</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block8.6e443ae4.jpg"/>
			                                    "In this module students will take an in depth look at Solidity language and learn about concepts like mapping, data types, events, operators, parameters, control structures, and error handling.Students will also begin creating Solidity contracts, event handling and layout of memory and storage variables."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle A,3 grey b-3-t ">
			                                    <span>3A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">HTML, CSS, and JavaScriptCrash Course</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block9.683843d4.jpeg"/>
			                                    "In this module the students finally move over to Dapp development. To accomodate Dapp development students will be given a crash course in HTML, CSS, and JavaScript and taught about various concepts of javascript in depth to help understand the interaction of Solidity and Web3.js"
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B3 grey b-3-t ">
			                                    <span>3B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Blockchain WebApplications</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block10.08a68de2.jpg"/>
			                                    "The students will now be ready to develop a front-end for Solidity contracts. They’ll be taught about the Basics of React, REST API’s, in Node.js, Using Nginx to host Single Page Apps, and using Docker to deploy web apps in the cloud."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle C,3 grey b-3-t ">
			                                    <span>3C</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Web3 & Truffle</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block11.8c4b61b5.png"/>
			                                    "In this module the students will learn how to to work with Web3 & Truffle. They’ll also learn about toolkit to aid development of decentralised applications. This course introduces the two most currently relevant and covers everything from installation and setup to custom configuration and scripting. Building an interface to interact with a smart contract.Setting up event-driven interfaces. It also exposes the students to Adapting Truffle’s default behavior and Writing functional tests for smart contract."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle A4 grey b-3-t ">
			                                    <span>4A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">BaaS (Blockchain-as-a-Service)</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="/static/media/block12.348d9f40.jpg"/>
			                                    "The students will begin to finally finish off will very high level concepts in Solidity and Blockchain, such as BaaS (Blockchain-as-a-Service). Working with Azure Blockchain as a Service, Deploy an Ethereum Consortium network on Azure, DevOps for Blockchains on Azure, Trying out the Visual Studio Code extension for Smart Contracts, and Building Dapps with Visual Studio."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle B,4 grey b-3-t ">
			                                    <span>4B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">The Art of Initial Coin Offering (ICO)</h4>
			                                <p class="para-data">
			                                    
			                                    "In this module the students will move over the the business side of Blockchain and learn about ICO. They will learn what is an ICO, how to create and verify Your Altcoin, What are steps in launching a ICO, how to write an ICO White Paper and how to do ICO marketing?"
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="pack-container pack-right">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="verticle-circle circle-right">
			                                <div class="circle C4 grey b-3-t ">
			                                    <span>4C</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Blockchain Projects for Islamic Finance -A Match Made in Heaven</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block14.4bf7254c.jpg"/>
			                                    "In the last module of this course the students will also get an opportunity to look at the Blockchain Projects for Islamic Finance. They will learn about developing Sharia-Compliant Financial and Blockchain Products, applications of Smart Contracts in Islamic Finance, private Chains in Islamic Banking, Emirates “Cheque Chain”, Islamic Trade Finance, Capital Markets-Musharaka Mutanaqisa (Diminishing Partnerships), as well as Automatic Sharia Compliance and Commodity Murabaha."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                        </div>
			                    </div>
			            </div>
			        </div>
			    </div>
            </div>
		</body>
	)
}

export default BC