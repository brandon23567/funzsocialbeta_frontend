import React from 'react'
import "./Landing.css";
import { Link } from "react-router-dom";
import Image1 from "../../assets/img/blog-1.jpg";
import Image2 from "../../assets/img/blog-2.jpg";
import Image3 from "../../assets/img/blog-3.jpg";


const Landing = () => {
    return (
        <div className='outer_main_landingpage_container'>
        
            <section class="smart-scroll">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-dark">
                        <a class="navbar-brand heading-black" href="index.html">
                            FunzSocial
                        </a>
                        <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span data-feather="grid"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#features">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#pricing">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#faq">Join Community</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#blog">Signin</a>
                                </li>
                                <li class="nav-item">
                                    <Link to="" className='nav-link page-scroll d-flex flex-row align-items-center text-primary'>
                                        <em data-feather="layout" width="18" height="18" class="mr-2"></em>
                                        Signup
                                    </Link>
                                    {/* <a class="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="#">
                                        <em data-feather="layout" width="18" height="18" class="mr-2"></em>
                                        Signup
                                    </a> */}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <section class="py-7 py-md-0 bg-hero" id="home">
                <div class="container">
                    <div class="row vh-md-100">
                        <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                            <h1 class="heading-black text-capitalize">The newest and best social media platform</h1>
                            <p class="lead py-3">
                                This is the new generation of social media made for the people by the people.
                                Long gone are the days where we rely on these big tech coporations, here our platform is 
                                user first and user focused
                            </p>
                            <button class="btn btn-primary d-inline-flex flex-row align-items-center">
                                Get started now
                                <em class="ml-2" data-feather="arrow-right"></em>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-6 pb-7" id="features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 mx-auto text-center">
                            <h2 class="heading-black">Funz social offers u everything you love and more....</h2>
                            <p class="text-muted lead">
                                Its the same social media that everyone loves to use to communicate with their loved ones, but without
                                the greed of big tech coporations involved and any illegal dealing going on from behind the scence. This is 
                                user focused, where you are the MAIN CHARACTER
                            </p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-10 mx-auto">
                            <div class="row feature-boxes">
                                <div class="col-md-6 box">
                                    <div class="icon-box box-primary">
                                        <div class="icon-box-inner">
                                            <span data-feather="edit-3" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Share updates with friends and families</h5>
                                    <p class="text-muted">
                                        Keep up to date with all your friends and family members that way you are never accused of never keeping
                                        in touch and look cool while doing it aas well
                                    </p>
                                </div>
                                <div class="col-md-6 box">
                                    <div class="icon-box box-success">
                                        <div class="icon-box-inner">
                                            <span data-feather="monitor" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Upload your videos and shorts</h5>
                                    <p class="text-muted">
                                        These days shorts and reels have become popular but on other platforms they have been over-ruled by useless
                                        crap, so here is a new platform without any of the hassle. You can watch your cat videos in peace
                                    </p>
                                </div>
                                <div class="col-md-6 box">
                                    <div class="icon-box box-danger">
                                        <div class="icon-box-inner">
                                            <span data-feather="layout" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Beautiful Design & Layouts</h5>
                                    <p class="text-muted">
                                        I believe in the concept that less is more. This platform is more focused on the user experience and how 
                                        the user feels. Everything is where you need it in a simple format you are already used to that way you 
                                        can get up to speed
                                    </p>
                                </div>
                                <div class="col-md-6 box">
                                    <div class="icon-box box-info">
                                        <div class="icon-box-inner">
                                            <span data-feather="globe" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Available globally</h5>
                                    <p class="text-muted">
                                        Like other social media platforms, our platform is available to everyone globally around the world. Where 
                                        you are from doesn't matter, our platform and our community welcomes you with open arms
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-6">
                        <div class="col-md-6 mr-auto">
                            <h2>Funzsocial isn't just another platform</h2>
                            <p class="mb-5">
                                It is a new and unique experience that you can enjoy without worrying about another big organization having your 
                                data and doing god know's what with it. Here you can do everything they can but much cooler. Become one of the 
                                new cool people and join the platform and our community today. IT'S TOTALLY FREE
                            </p>
                            <a href="#" class="btn btn-light">
                                Try the live demo
                            </a>
                        </div>
                        <div class="col-md-5">
                            <div class="slick-about">
                                <img src={Image1} class="img-fluid rounded d-block mx-auto" alt="Work 1"/>
                                <img src={Image2} class="img-fluid rounded d-block mx-auto" alt="Work 2"/>
                                <img src={Image3} class="img-fluid rounded d-block mx-auto" alt="Work 3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="py-6">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 mr-auto">
                            <h5>About Funzsocial</h5>
                            <p class="text-muted">
                                Funzsocial is a new social media platform built by me and me alone. Why? These platforms already out there 
                                are just beyond saving, they has lost their identity and have lost contact with the most important part 
                                about a social media platform. It's users and that is why i am dedicated to funzsocial. It will always put 
                                it's user's first before anything and anyone else. That is this company's mission.
                            </p>
                            <ul class="list-inline social social-sm">
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-facebook"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-twitter"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href=""><i class="fa fa-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Legal</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Refund policy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Partner</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Refer a friend</a></li>
                                <li><a href="#">Affiliates</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h5>Help</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Log in</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 text-muted text-center small-xl">
                            &copy; 2024 Funzsocial - All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>

            <div class="scroll-top">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
            </div>

            <div class="switcher-wrap">
                <div class="switcher-trigger">
                    <span class="fa fa-gear"></span>
                </div>
                <div class="color-switcher">
                    <h6>Color Switcher</h6>
                    <ul class="mt-3 clearfix">
                        <li class="bg-teal active" data-color="default" title="Default Teal"></li>
                        <li class="bg-purple" data-color="purple" title="Purple"></li>
                        <li class="bg-blue" data-color="blue" title="Blue"></li>
                        <li class="bg-red" data-color="red" title="Red"></li>
                        <li class="bg-green" data-color="green" title="Green"></li>
                        <li class="bg-indigo" data-color="indigo" title="Indigo"></li>
                        <li class="bg-orange" data-color="orange" title="Orange"></li>
                        <li class="bg-cyan" data-color="cyan" title="Cyan"></li>
                        <li class="bg-yellow" data-color="yellow" title="Yellow"></li>
                        <li class="bg-pink" data-color="pink" title="Pink"></li>
                    </ul>
                </div>
            </div>
        
        
        </div>
    )
}

export default Landing