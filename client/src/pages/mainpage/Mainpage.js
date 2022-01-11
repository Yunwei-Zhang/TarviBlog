import { React, Component } from 'react';
import './Mainpage.css';
import 'antd/dist/antd.css';
import { Col, Row, Timeline } from 'antd';
import { FacebookOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import img from '../../assets/images/img_mp_title.png'
import img_car1 from '../../assets/images/img_mp_carousel1.png'
import img_car2 from '../../assets/images/img_mp_carousel2.png'
import img_car3 from '../../assets/images/img_mp_carousel3.png'
import img_car4 from '../../assets/images/img_mp_carousel4.png'
import img_car5 from '../../assets/images/img_mp_carousel5.png'
import img_car6 from '../../assets/images/img_mp_carousel6.png'
class Mainpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time_current: '',
            date_current: '',
            resumename: "Tarvi Chen",
            resumefutrue: "Dreamer",

            className_edu1: 'none',
            className_edu2: 'none',
            classname_card: 'none',

            items_skills: [
                { id: 1, name: "ACCOUNTING", color: "yellow", per: 60, des: "accounting ability" },
                { id: 2, name: "ECOMOMIC", color: "aquamarine", per: 80, des: "no other choice..." },
                { id: 3, name: "JAVA", color: "orange", per: 20, des: "int a = basic java coding ability" },
            ],
            items_languages: [
                { id: 1, name: "CHINESE", color: "aquamarine", per: 100, des: "born with it" },
                { id: 2, name: "ENGLISH", color: "yellow", per: 50, des: "I..I am a p.p...pig :)" },
                { id: 3, name: "KOREAN", color: "yellow", per: 70, des: "my special talent!" },
            ],
            items_otherskills: [
                { id: 1, name: "EAT", color: "orange", per: 30, des: "love eating but..." },
                { id: 2, name: "SLEEP", color: "aquamarine", per: 90, des: "sleep everyday keep doctor away!" },
                { id: 3, name: "PLAY", color: "yellow", per: 75, des: "also good at playing" },
                { id: 4, name: "DRIVING", color: "yellow", per: 55, des: "not like a beginner" },
                { id: 4, name: "BOWELING", color: "orange", per: 15, des: "a fake pig!" },
            ],
        }
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
        setInterval(() => (

            this.setState(
                {
                    date_current: new Date().getFullYear() + '/' + new Date().getMonth() + 1 + '/' + new Date().getDate(),
                    time_current: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
                }

            )
        ), 1000);
    }

    handleScroll() {
        if (document.documentElement.scrollTop > 1800) {
            this.setState({
                className_edu1: 'mp_edu_txt1',
                className_edu2: 'mp_edu_txt4',
            })
        }
        if (document.documentElement.scrollTop > 3000) {
            this.setState({
                classname_card: 'mp_skill_card_percentage_content'
            })
        }
        console.log(document.documentElement.scrollTop)
    }

    setResumeDetails1() {
        this.setState({
            resumename: "Wenwen Chen",
            resumefutrue: "Big Big Pig"
        })
    }
    setResumeDetails2() {
        this.setState({
            resumename: "Tarvi Chen",
            resumefutrue: "Dreamer"
        })
    }

    render() {
        return (
            <div className='mp_bg'>

                <div className='mp_title'>
                    <img className='mp_title_img' src={img} Use alt=""></img>
                    <div className='mp_title_txt'>
                        Tarvi's Blog
                        <p className='mp_title_txt2'>Tarvi - Chen wenwen</p>
                    </div>
                </div>

                <div className='mp_bg_cube'>
                    <div className='mp_time'>
                        <p className='mp_time_date'>{this.state.date_current}</p>
                        <p className='mp_time_time'>{this.state.time_current}</p>
                    </div>

                    <div className='mp_resume'>
                        <p className='mp_resume_title'>ABOUT ME</p>
                        <div className='mp_resume_cube' onMouseEnter={() => this.setResumeDetails1()} onMouseLeave={() => this.setResumeDetails2()}>
                            <p className='mp_resume_subtitle'>Hey guys, I am <p className='mp_resume_subtitle_highlight'>{this.state.resumename}</p>, an economic student, more like a <p className='mp_resume_subtitle_highlight'>{this.state.resumefutrue}</p></p>
                            <br />
                            <p className='mp_resume_txt'>
                                It's me, I am a very cute girl (yellow duck?). I was born in China, so that I am currently living in Australia and also China Mainland.
                                I am an economic bachelor student and will study master of unsure major. Everything is not uncertain in my next traveling and I am happy for
                                any related jov oppotunity
                            </p>
                            <p className='mp_resume_txt' style={{ marginTop: "25px" }}>
                                Oh, I forget it, stranger, If we can meet in a small cafe, an ancient street, or even just school, lets share
                                our story and have a tea together waiting for the night falls
                            </p>
                        </div>
                    </div>

                    <div className='mp_carousels'>
                        <p className='mp_carousels_title'>MORE...</p>
                        <div className='mp_carousels_content1'>
                            <Carousel className='mp_carousels_content2'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img_car1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p className='mp_carousels_txt'>Panda</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img_car2}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p className='mp_carousels_txt'>I Am A Duck</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img_car3}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p className='mp_carousels_txt'>Korean Resaurant</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img_car4}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p className='mp_carousels_txt'>My Cat - Double Milk</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img_car5}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p className='mp_carousels_txt'>With My Boyfriend</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img_car6}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <p className='mp_carousels_txt'>Back To Home</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>

                    <div className='mp_edu'>
                        <p className='mp_edu_title'>EDUCATION</p>
                        <Timeline mode="alternate">
                            <Timeline.Item color="white">
                                <p className={this.state.className_edu1} style={{"--edutxt1": "red"}}>
                                    I Was Born
                                    <p className='mp_edu_txt2'>XiangShan, ZheJiang, China</p>
                                    <p className='mp_edu_txt3'>1998.8.15 -</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu2} style={{"--edutxt1": "burlywood"}}>
                                    WenFeng School
                                    <p className='mp_edu_txt2'>NingBo, ZheJiang, China</p>
                                    <p className='mp_edu_txt3'>2004.9 - 2013.6</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu1} style={{"--edutxt1": "orange"}}>
                                    NingBo WaiShi School
                                    <p className='mp_edu_txt2'>NingBo, ZheJiang, China</p>
                                    <p className='mp_edu_txt3'>2013.9 - 2015.6</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu2} style={{"--edutxt1": "yellow"}}>
                                    BICC
                                    <p className='mp_edu_txt2'>Toronto, Canada</p>
                                    <p className='mp_edu_txt3'>2015.9 - 2018.6</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu1} style={{"--edutxt1": "aquamarine"}}>
                                    UNSW
                                    <p className='mp_edu_txt2'>Sydnet, Australia</p>
                                    <p className='mp_edu_txt3'>2019.2 - now</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu2} style={{"--edutxt1": "green"}}>
                                    Future?
                                    <p className='mp_edu_txt2'>where?</p>
                                    <p className='mp_edu_txt3'>when?</p>
                                </p>
                            </Timeline.Item>
                        </Timeline>
                    </div>

                    <div className='mp_skill_cube'>
                        <p className='mp_skill_title'>SKILLS</p>
                        <Row gutter={[32, 20]}>
                            {this.state.items_skills.map((item, index) => (
                                <Col span={8}>
                                    <div className='mp_skill_card'>
                                        <p style={{ "--cardtitlecolor": item.color }} className='mp_skill_card_name'>{item.name}</p>
                                        <p className='mp_skill_card_des'>{item.des}</p>
                                        <div className='mp_skill_card_percentage'>
                                            <p className='mp_skill_card_percentage_txt'>{item.per}%</p>
                                            <div style={{ "--cardper": item.per, "--cardtitlecolor": item.color }} className={this.state.classname_card}></div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <p className='mp_skill_title'><br />LANGUAGES</p>
                        <Row gutter={[32, 20]}>
                            {this.state.items_languages.map((item, index) => (
                                <Col span={8}>
                                    <div className='mp_skill_card'>
                                        <p style={{ "--cardtitlecolor": item.color }} className='mp_skill_card_name'>{item.name}</p>
                                        <p className='mp_skill_card_des'>{item.des}</p>
                                        <div className='mp_skill_card_percentage'>
                                            <p className='mp_skill_card_percentage_txt'>{item.per}%</p>
                                            <div style={{ "--cardper": item.per, "--cardtitlecolor": item.color }} className={this.state.classname_card}></div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                        <p className='mp_skill_title'><br />OTHER SECRET SKILLS</p>
                        <Row gutter={[32, 20]}>
                            {this.state.items_otherskills.map((item, index) => (
                                <Col span={8}>
                                    <div className='mp_skill_card'>
                                        <p style={{ "--cardtitlecolor": item.color }} className='mp_skill_card_name'>{item.name}</p>
                                        <p className='mp_skill_card_des'>{item.des}</p>
                                        <div className='mp_skill_card_percentage'>
                                            <p className='mp_skill_card_percentage_txt'>{item.per}%</p>
                                            <div style={{ "--cardper": item.per, "--cardtitlecolor": item.color }} className={this.state.classname_card}></div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div className='mp_sig'>
                        <p className='mp_sig_title'>Tarvi. Chen</p>
                        <p className='mp_sig_txt1'>“The purpose of our lives is to be happy.”</p>
                        <p className='mp_sig_txt2'>— Dalai Lama</p>
                    </div>

                    <div className='mp_footer'>
                        <p className='mp_footer_txt1'>© Copyright 2022 - Tarvi's Blog All rights reserved.</p>
                        <p className='mp_footer_txt2'>- Designed by Andy Zhang</p>
                        <FacebookOutlined className='mp_footer_icons' onClick={() => window.open("https://www.facebook.com/tarvi.chen.1")} />
                        <GithubOutlined className='mp_footer_icons' onClick={() => window.open("https://github.com/Yunwei-Zhang")} />
                        <InstagramOutlined className='mp_footer_icons' onClick={() => window.open("https://www.instagram.com/tarvi.chen.1/?hl=en")} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Mainpage;