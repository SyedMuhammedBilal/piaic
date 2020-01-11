import React from "react"
import Layout   from '../components/layout'
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/iot.css"
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
		    <div class="Rectangle-67 iot d-flex justify-content-center align-items-center">
		        <div class="SliderData">
		            <h1 class="Artificial-Intelligence">
		            Internet of Things and 
		            <br/>
		            AI Specialist 
		            </h1>
		            <p class="">
		                "A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE
                         BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF
                         INTERNET OF THINGS AND AI"
		                <br/>
		                
		            </p> 
		        </div>
		    </div>
		    <div class="line2">
		        <h1 class="program">Program Structure</h1>
		            "Six Quarters of IOT Course Work"

		    </div>
		    <br/>
		    <br/>
		</div>

			<div class="container my-container Q-Con">
			    <div class="row">
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 i1">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    1
			                    </h4>
			                    <p class="para">Introduction to IoT and Rust Programming</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 i2">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    2
			                    </h4>
			                    <p class="para">Embedded Rust and Real-time Programming</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 i3">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    3
			                    </h4>
			                    <p class="para">Micro Services Development for IoT Edge</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 i4">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    4
			                    </h4>
			                    <p class="para">Voice Computing for Device Control</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 i5">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    5
			                    </h4>
			                    <p class="para">Artificial Intelligence for Internet of Things (IoT)</p>
			                </div>
			            </div>
			        </div>
			        <div class="col-sm-6 col-md-3 col-12 col-lg-3 col-lg-3 quarter-row">
			            <div class="Rectangle-68 i6">
			                <div>
			                    <h4 class="quarter">
			                    Quarter
			                    6
			                    </h4>
			                    <p class="para">Blockchain and IOTA Technologies for IoT</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>

			<div class="container my-container main-container">
			    <div class="box-m-container cloud">
			        <hr/>
			        <div class="row">
			            <div class="col-sm-12">
			                
			                    
			                    <div class="bc-circle-line iot-line"></div> 
			                    
			                    <div class="pack-container pack-left">
			                        <div class="pack">
			                            <div class="horizontal-circle">
			                                <div class="circle">
			                                    
			                                    <span class="line-2"></span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">What Is IoT?</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/1.872d8124.jpg"/>
			                                    "This course will start by providing a definition of the term. We will talk about how various trends have enabled the Internet of Things, and how it changes the way programming is done. We will also discuss some of the ramifications that IoT is having on society today."
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            
			                            <div class="verticle-circle circle-left">
			                                <div class="circle A,1 transparent it-1-t ">
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
			                                <div class="circle B1 transparent it-1-t ">
			                                    <span>1B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Embedded Systems</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic/org/static/media/block2.290d4fc9.png"/>
			                                    "In this module we explore some of the details involved in the design and implementation of IoT devices. Unlike traditional computer-based systems, IoT devices are “embedded” within other devices in order to provide enhanced functionality without exposing the user to the complexities of a computer. The users interact with the device in a natural way, similar to their interactions with any other objects in the world. In this module we will discuss the structure of embedded systems and describe these interactions with the physical world."
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
			                                <h4 class="heading">Hardware and Software for IoT</h4>
			                                <p class="para-data">
			                                    
			                                    "IoT devices are implemented using both hardware and software components. Dedicated hardware components are used to implement the interface with the physical world, and to perform tasks which are more computationally complex. Microcontrollers are used to execute software that interprets inputs and controls the system. This module discusses the roles of both the hardware and software components in the system. "
			                                    <br/>
			                                    <br/>
			                                </p>
			                            </div>
			                            <div class="verticle-circle circle-left">
			                                <div class="circle C,1 transparent it-1-t ">
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
			                                <div class="circle D1 transparent it-1-t ">
			                                    <span>1D</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Networking and the Internet for IoT</h4>
			                                <p class="para-data">
			                                    
			                                    "This course will start by providing a definition of the term. We will talk about how various trends have enabled the Internet of Things, and how it changes the way programming is done. We will also discuss some of the ramifications that IoT is having on society today."
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
			                                <div class="circle E,1 transparent it-1-t ">
			                                    <span>1E</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Edge and Cloud Computing for IoT</h4>
			                                <p class="para-data">
			                                    
			                                    "In IoT architecture, edge computing is a distributed computing paradigm which brings computer data storage closer to the location where it is needed. Computation is largely or completely performed on distributed device nodes. Edge computing pushes applications, data and computing power (services) away from centralized cloud points to locations closer to the user. Edge computing does not need contact with any centralized cloud, although in IoT archetectures it interacts with one."
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
			                                <div class="circle F1 transparent it-1-t ">
			                                    <span>1F</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Version Control with Git</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block6.634b2a32.png"/>
			                                    " You won't find a top programmer, web developer, or AI enginner who doesn't use version control. Because it helps you produce better results and makes collaboration easy. Around the world, in teams large and small, Git is an essential part of the tool chain. We will start learning our learning process by covering Git and Github."
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
			                                <div class="circle G,1 transparent it-1-t ">
			                                    <span>1G</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Fundamentals of Rust Programming</h4>
			                                <p class="para-data">
			                                    
			                                    "This module explores key Rust concepts in depth, such as ownership, the type system, error handling, and fearless concurrency. This Rust programming language introduction will also show you how to:
                                                - Grasp important concepts unique to Rust, like ownership, borrowing, and 
                                                lifetimes
                                                - Use Cargo, Rust’s built-in package manager, to build and maintain your code, 
                                                including downloading and building dependencies
                                                - Effectively use Rust’s zero-cost abstractions and employ your own
                                                You’ll learn to develop reliable code that’s speed and memory efficient, while avoiding the infamous and arcane programming pitfalls common at the systems level. 
                                                "
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
			                                <div class="circle 2 transparent it-2-t ">
			                                    <span>2</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Embedded Rust and Real-time Systems Programming</h4>
			                                <p class="para-data">
			                                    
			                                    " A hands-on module teaches the Rust programming language in the context of embedded systems. As well as giving students a full grounding in the Rust programming language, this module teaches delegates how to program a modern embedded microcontroller using real-time development tools. The examples and exercises are tuned to the practical requirements of embedded microcontroller programming. What will you learn?
                                                The syntax and semantics of the Rust language for embedded programming
                                                The principles of embedded software programming and real-time programming
                                                How to program an embedded microcontroller in Rust
                                                A practical introduction to real-time development tools
                                                How to debug a Rust program on an STM32F3 Discovery device
                                                How to access memory-mapped peripherals using Rust
                                                How to write interrupt handlers in Rust
                                                An introduction to Real Time For the Masses (RTFM) framework
                                                An introduction to low power software design
                                                Best practices for embedded programming
                                                "
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
			                                <div class="circle A,3 transparent it-3-t ">
			                                    <span>3A</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Introduction to Linux and Bas</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/block9.683843d4.jpeg"/>
			                                    " Linux containers are poised to take over the world; we will start this module with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started."
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
			                                <div class="circle B3 transparent it-3-t ">
			                                    <span>3B</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"></h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src={Docker}/>
			                                    " This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required."
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
			                                <div class="circle C,3 transparent it-3-t  ">
			                                    <span>3C</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Fundamentals of Kubernetes for Edge and Cloud Computing</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/Kubernetes.69f90ad5.png"/>
			                                    " The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter we will teach you to use Kubernetes to deploy container-based distributed IoTapplications. "
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
			                                <div class="circle D3 transparent it-3-t ">
			                                    <span>3D</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Developing Cloud Native IoT Microservices </h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/nodejs.2742d7d2.png"/>
			                                    " This module teaches you how to build microservices using Node.js and WebAssembly/Rust. It starts by introducing Node's powerful traits and shows you how they map to the features of microservices using JavaScript and WebAssembly/Rust. You'll explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module we are going to show you how easy it is to create a RESTful web service using Node.js, WebAssembly/Rust and the Express microframework. We will also learn gRPC and GraphQL based microservices. By the end of the module, you'll be able to use JavaScript/WebAssembly to build a Node microservice and know how to test it, hook it up to a database, and automate the development process."
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
			                                <div class="circle E,3 transparent it-3-t ">
			                                    <span>3E</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading">Fundamentals of KubeEdge</h4>
			                                <p class="para-data">
			                                    <img alt align="left" class="my-thumbnail" src="https://www.piaic.org/static/media/kubeEdge.c5ca174a.png"/>
			                                    "The key goal for KubeEdge is extending Kubernetes ecosystem from cloud to edge. KubeEdge provides a containerized edge computing platform, which is inherently scalable. The rise of AI makes edge computing more important. Complex models trained in the cloud are deployed at the edge for inferencing. In this module we will go through the fundaments of KubeEdge technology.     "
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
			                                <div class="circle 4 transparent it-4-t ">
			                                    <span>4</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Voice Computing for Device Control</h4>
			                                <p class="para-data">
			                                    
			                                    " In this module we will learn to control IoT devices with the Google Assistant by building apps that integrate Smart functionality.          "
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
			                                <div class="circle 5 transparent it-5-t  ">
			                                    <span>5</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Artificial Intelligence (AI) for Internet of Things (IoT)</h4>
			                                <p class="para-data">
			                                    
			                                    " Before implementing deep-learning algorithms in this quarter, we will first familiarize ourselves with mathematical blocks of neural networks theory. We going to start by getting our hands dirty writing some simple TensorFlow 2.0 code in Rust. And then move on to advanced deep learning concepts applicable to IoT projects. This module will also cover some essential advantages of TensorFlow 2.0 to convince you it’s the deep-learning library of choice."
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
			                                <div class="circle 6 transparent it-6-t ">
			                                    <span>6</span>
			                                </div>
			                            </div>
			                            <div class="box-container">
			                                <h4 class="heading"> Blockchain and IOTA Technologies for IoT (Optional) </h4>
			                                <p class="para-data">
			                                    
			                                    "In last optional quarter we will discuss and implement an emerging aspect of the blockchain economy, machine-to-machine (M2M) transactions. We will cover, how machines can use IOTA blockchain to become autonomous market participants with their own bank accounts. We will then merge these blockcain concepts with artificial intelligence (AI) concepts learned in the previous quarters. These combine IoT, AI and Blockchain technologies allow machines in the Internet of Things to be able to lease themselves out, schedule and pay for their own maintenance, purchase their own replacement parts and keep their own transactional records, using blockchain."
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