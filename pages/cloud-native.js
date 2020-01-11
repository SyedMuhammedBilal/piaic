import React from "react"
import Layout   from '../components/layout'
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/cnc.css"
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

const CNC = () => {
	return (
		<body>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		
		<div>
		    <div class="Rectangle-67 cl-b d-flex justify-content-center align-items-center">
		        <div class="SliderData">
		            <h1 class="Artificial-Intelligence">
		            Cloud Native and Mobile Web Computing Specialist
		            <br/>
		            </h1>
		            <p class="">
		                "A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS."
		                <br/>
		                "GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING."
		            </p> 
		        </div>
		    </div>
		    <div class="line2">
		        <h1 class="program">Program Structure</h1>
		            "A four-quarter cloud computing program."

		    </div>
		    <br/>
		    <br/>
		</div>

			<div class="container my-container Q-Con">
			    <div class="row">
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 c1">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    1
			                    </h4>
			                    <p class="para">Cloud Native Computing Foundations</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 c2">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    2
			                    </h4>
			                    <p class="para">Developing Cloud Native Microservices</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 c3">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    3
			                    </h4>
			                    <p class="para">Kubernetes in Practice</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 c4">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    4
			                    </h4>
			                    <p class="para">AWS Application Development</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
			<div class="container my-container main-container">
			    <div class="box-mega-container">
			        <hr/>
			        <div class="row">
			            <div class="col-sm-12">
			                
			                    <h1 class="sec-head-2">Detailed Program Structure</h1>
			                    <div class="circle-line"></div> 
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Introduction to Cloud Native Computing</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={C}/>
			                                    "Cloud native computing uses open-source software stacks to deploy applications as microservices, packaging each part into its own container and dynamically orchestrating those containers to optimize resource utilization. In the last 15 years, cloud application delivery has moved from being bound to physical servers to running on virtual machines with a full operating system and now to containers with Docker, where developers can specify every aspect of deployment."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            <div class="verticle-circle circle-left">
			                                <div class="circle A,1 transparent cl-1-t">
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
			                                <div class="circle B1 transparent cl-1-t">
			                                    <span>1B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Introduction to Linux and Bashusing Python</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Linux}/>
			                                    "Linux containers are poised to take over the world; we will start our course with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started."
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
			                                <h4 class="heading">Docker Deep Dive</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Docker}/>
			                                    "This course provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            <div class="verticle-circle circle-left">
			                                <div class="circle A,1 transparent cl-1-t">
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
			                                <div class="circle A2 transparent cl-1-t">
			                                    <span>1D</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">JavaScript/TypeScript Programming</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={JS}/>
			                                    "JavaScript is the default language of the web and the first universal programming language. In this module, students will dig through all the genuinely elegant parts of JavaScript, including syntax, objects, functions, inheritance, arrays, methods, etc. This module will build a solid foundation in functional and object-oriented programming using JavaScript (ES 2016) and TypeScript using Node.js. Assuming no prior programming experience on the part of the student, this module starts by focusing on the fundamentals of composing code with JavaScript. Introduction to only server based JavaScript/TypeScript is covered i.e. Node.js. Students will also learn about the syntax and structure of the language including operators and expressions, control structures, methods, and arrays using Node."
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
			                                <div class="circle B,2 grey cl-2-t">
			                                    <span>2A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Developing Microservices using Node.js and Express</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={NODE}/>
			                                    "This module includes how to build microservices using Node.js. It starts by introducing Node’s powerful traits and shows students how they map to the features of microservices using JavaScript. Students will explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will see how easy it is to create a RESTful web service using Node.js, TypeScript and the Express micro-framework. Students will also learn gRPC and GraphQL based microservices. By the end of the module, students will be able to use JavaScript/Typescript to build a Node microservice and know how to test it, hook it up to a database, and automate the development process."
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
			                                <div class="circle C2 grey cl-2-t">
			                                    <span>2B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Version Control with Git </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Git}/>
			                                    "You won’t find a top programmer, cloud developer, or AI engineer who doesn’t use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github."
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
			                                <div class="circle B,2 grey cl-2-t">
			                                    <span>2C</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Cloud Automation using Ansible </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={ans}/>
			                                    "Ansible is an open-source IT automation engine which can remove drudgery from work life and will also dramatically improve the scalability, consistency, and reliability of your IT environment. In this module, students will start to explore how to automate repetitive cloud administration tasks using Ansible."
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
			                                <div class="circle B3 grey1 cl-3-t">
			                                    <span>3A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Kubernetes in Practice</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={KUB}/>
			                                    "The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
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
			                                <div class="circle C,3 grey1 cl-3-t">
			                                    <span>4A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Cloud Native Application Development</h4>
			                                <p class="para-data">
			                                    
			                                    "In this quarter we will develop an understanding of core cloud native services, uses, and architecture best practices. We will develop proficiency in developing, deploying, and debugging cloud native applications using Istio, Knative, Prometheus, NATS, and TiKV, etc. We will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications, and ability to write code using cloud native security best practices."
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

export default CNC