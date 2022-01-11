import { React, Component } from 'react';
import './Mainpage.css';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import { FacebookOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import img from '../../assets/images/img_mp_title.png'
class Mainpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time_current: '',
            date_current: '',
            resumename: "Tarvi Chen",
            resumefutrue: "Dreamer",
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
        if (document.documentElement.scrollTop > 500) {
            this.setState({
                classname_card: 'mp_skill_card_percentage_content'
            })
        }
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
                        <p className='mp_carousels_title'>More...</p>
                        <div className='mp_carousels_content1'>
                            <Carousel className='mp_carousels_content2'>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Mrs Duck</h3>
                                        <p>gagagagaga</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
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

                    <div className='mp_footer'>
                        <p className='mp_footer_txt1'>© Copyright 2022 - Tarvi's Blog All rights reserved.</p>
                        <p className='mp_footer_txt2'>Designed by Andy Zhang</p>
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