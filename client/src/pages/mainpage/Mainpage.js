import { React, Component } from 'react';
import './Mainpage.css';
import 'antd/dist/antd.css';
import { Col, Row, Timeline } from 'antd';
import { FacebookOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

import img from '../../assets/images/img_mp_title.png'
import img_car1 from '../../assets/images/img_mp_carousel1.png'
import img_car2 from '../../assets/images/img_mp_carousel2.png'
import img_car3 from '../../assets/images/img_mp_carousel3.png'
import img_car4 from '../../assets/images/img_mp_carousel4.png'
import img_car5 from '../../assets/images/img_mp_carousel5.png'
import img_car6 from '../../assets/images/img_mp_carousel6.png'

import img_ani1_1 from '../../assets/images/favimages/ani1_1.jpg'
import img_ani1_2 from '../../assets/images/favimages/ani1_2.jpg'
import img_ani1_3 from '../../assets/images/favimages/ani1_3.jpg'
import img_ani1_4 from '../../assets/images/favimages/ani1_4.jpg'
import img_ani1_5 from '../../assets/images/favimages/ani1_5.jpg'
import img_ani1_6 from '../../assets/images/favimages/ani1_6.jpg'

import img_ani2_1 from '../../assets/images/favimages/ani2_1.png'
import img_ani2_2 from '../../assets/images/favimages/ani2_2.png'
import img_ani2_3 from '../../assets/images/favimages/ani2_3.png'
import img_ani2_4 from '../../assets/images/favimages/ani2_4.png'
import img_ani2_5 from '../../assets/images/favimages/ani2_5.png'
import img_ani2_6 from '../../assets/images/favimages/ani2_6.png'
import img_ani2_7 from '../../assets/images/favimages/ani2_7.png'
import img_ani2_8 from '../../assets/images/favimages/ani2_8.png'
import img_ani2_9 from '../../assets/images/favimages/ani2_9.png'
import img_ani2_10 from '../../assets/images/favimages/ani2_10.png'
import img_ani2_11 from '../../assets/images/favimages/ani2_11.png'
import img_ani2_12 from '../../assets/images/favimages/ani2_12.png'
import img_ani2_13 from '../../assets/images/favimages/ani2_13.png'
import img_ani2_14 from '../../assets/images/favimages/ani2_14.png'

import img_ani3_1 from '../../assets/images/favimages/ani3_1.png'
import img_ani3_2 from '../../assets/images/favimages/ani3_2.png'
import img_ani3_3 from '../../assets/images/favimages/ani3_3.png'

import img_ani4_1 from '../../assets/images/favimages/ani4_1.jpg'
import img_ani4_2 from '../../assets/images/favimages/ani4_2.jpg'
import img_ani4_3 from '../../assets/images/favimages/ani4_3.jpg'

import img_ani5_1 from '../../assets/images/favimages/ani5_1.png'
import img_ani5_2 from '../../assets/images/favimages/ani5_2.png'

import img_ani6_1 from '../../assets/images/favimages/ani6_1.jpg'
import img_ani6_2 from '../../assets/images/favimages/ani6_2.jpg'
import img_ani6_3 from '../../assets/images/favimages/ani6_3.jpg'
import img_ani6_4 from '../../assets/images/favimages/ani6_4.jpg'

import Card from 'react-animated-3d-card'
class Mainpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time_current: '',
            date_current: '',
            resumename: "Tarvi Chen",
            resumefutrue: "Dreamer",
            items_selectedfavs:[],

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
            items_favs: [
                { id: 1, name: "Animal", icon: "fas fa-cat" },
                { id: 2, name: "Food", icon: "fas fa-pizza-slice" },
                { id: 3, name: "Countries", icon: "fas fa-plane" },
                { id: 4, name: "Movie", icon: "fas fa-film" },
                { id: 5, name: "Toy", icon: "fas fa-piggy-bank" },
                { id: 6, name: "Games", icon: "fas fa-gamepad" },
            ],
            //all the favourite cards content
            items_fav_1:[
                {id:1, name:"My Own Cat", src: img_ani1_1},
                {id:2, name:"Homeless Cat", src: img_ani1_2},
                {id:3, name:"My BF's Dog", src: img_ani1_3},
                {id:4, name:"Panda", src: img_ani1_4},
                {id:5, name:"In Dog Cafe", src: img_ani1_5},
                {id:6, name:"Pig", src: img_ani1_6},
            ],
            items_fav_2:[
                {id:1, name:"Brunch", src: img_ani2_1},
                {id:2, name:"Oil Shrimp", src: img_ani2_2},
                {id:3, name:"Mango Coco", src: img_ani2_3},
                {id:4, name:"Chuancai", src: img_ani2_4},
                {id:5, name:"Western Rest - Bentley", src: img_ani2_5},
                {id:6, name:"BF's Cooked Food", src: img_ani2_6},
                {id:7, name:"Zaocha", src: img_ani2_7},
                {id:8, name:"Ramen", src: img_ani2_8},
                {id:9, name:"Sashimi", src: img_ani2_9},
                {id:10, name:"Watermalen Juice", src: img_ani2_10},
                {id:11, name:"Seafood - Abalone", src: img_ani2_11},
                {id:12, name:"Japanese rest - Yayoi", src: img_ani2_12},
                {id:13, name:"Korean rest - DonDon", src: img_ani2_13},
                {id:14, name:"Mershmallow", src: img_ani2_14},
            ],
            items_fav_3:[
                {id:1, name:"Syndey - Sweagull In Beach", src: img_ani3_1},
                {id:2, name:"Canberra - Cold Street", src: img_ani3_2},
                {id:3, name:"Sichuan - Golden Mask", src: img_ani3_3},
            ],
            items_fav_4:[
                {id:1, name:"Anime - One Piece", src: img_ani4_1},
                {id:2, name:"Korean - 1988", src: img_ani4_2},
                {id:3, name:"Netflix - Alice", src: img_ani4_3},
            ],
            items_fav_5:[
                {id:1, name:"Dolls", src: img_ani5_1},
                {id:2, name:"Toys", src: img_ani5_2},
            ],
            items_fav_6:[
                {id:1, name:"Wangzhe", src: img_ani6_1},
                {id:2, name:"CSGO", src: img_ani6_2},
                {id:3, name:"PUBG", src: img_ani6_3},
                {id:4, name:"Sea of Thieves", src: img_ani6_4},
            ],
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
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
        if (document.documentElement.scrollTop > 2000) {
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

    async setFavCard(i){
        await this.setStateAsync({items_selectedfavs:[]});
        if(i==1)this.setState({items_selectedfavs:this.state.items_fav_1});
        if(i==2)this.setState({items_selectedfavs:this.state.items_fav_2});
        if(i==3)this.setState({items_selectedfavs:this.state.items_fav_3});
        if(i==4)this.setState({items_selectedfavs:this.state.items_fav_4});
        if(i==5)this.setState({items_selectedfavs:this.state.items_fav_5});
        if(i==6)this.setState({items_selectedfavs:this.state.items_fav_6});
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
                                <p className={this.state.className_edu1} style={{ "--edutxt1": "red" }}>
                                    I Was Born
                                    <p className='mp_edu_txt2'>XiangShan, ZheJiang, China</p>
                                    <p className='mp_edu_txt3'>1998.8.15 -</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu2} style={{ "--edutxt1": "burlywood" }}>
                                    WenFeng School
                                    <p className='mp_edu_txt2'>NingBo, ZheJiang, China</p>
                                    <p className='mp_edu_txt3'>2004.9 - 2013.6</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu1} style={{ "--edutxt1": "orange" }}>
                                    NingBo WaiShi School
                                    <p className='mp_edu_txt2'>NingBo, ZheJiang, China</p>
                                    <p className='mp_edu_txt3'>2013.9 - 2015.6</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu2} style={{ "--edutxt1": "yellow" }}>
                                    BICC
                                    <p className='mp_edu_txt2'>Toronto, Canada</p>
                                    <p className='mp_edu_txt3'>2015.9 - 2018.6</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu1} style={{ "--edutxt1": "aquamarine" }}>
                                    UNSW
                                    <p className='mp_edu_txt2'>Sydnet, Australia</p>
                                    <p className='mp_edu_txt3'>2019.2 - now</p>
                                </p>
                            </Timeline.Item>
                            <Timeline.Item color="white" >
                                <p className={this.state.className_edu2} style={{ "--edutxt1": "green" }}>
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

                    <div className='mp_fav'>
                        <div className='mp_fav_title'>WHAT I LIKE</div><i class="fas fa-cat" className='mp_favs_img'></i>
                        <div className='mp_favs_cube'>
                            {this.state.items_favs.map((item, index) => (
                                <div className='mp_favs' onClick={()=>this.setFavCard(item.id)}>
                                    <OverlayTrigger placement="top" overlay={<Tooltip >{item.name}</Tooltip>}>
                                        <div className='mp_favs_img_cube'>
                                            <div className='mp_favs_img'><i class={item.icon}></i></div>
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            ))}
                        </div>
                        <div className='mp_fav_details'>
                            <Row gutter={[32, 20]}>
                            {this.state.items_selectedfavs.map((item,index)=>(
                                <Col span={6}>
                                    <div className='mp_fav_card'>
                                <Card
                                style={{
                                    backgroundColor: 'rgba(255, 0, 0, 0.199)',
                                    width: 'auto',
                                    height: '315px',
                                    cursor: 'pointer',
                                }}>
                                <img style={{ width: "100%", height: "100%" }} src={item.src}></img>
                                <div className='mp_fav_detailstxt'>{item.name}</div>
                                </Card>
                                </div>
                                </Col>
                            ))}
                            </Row>
                        </div>
                    </div>

                    <div className='mp_music'>
                        <div className='mp_music_title'>MUSIC</div>
                    </div>

                    <div className='mp_blog'>
                        <div className='mp_blog_title'>SOME BLOGS</div>
                    </div>

                    <div className='mp_contact'>
                        <div className='mp_contact_title'>CONTACT ME</div>
                    </div>

                    <div className='mp_sig'>
                        <p className='mp_sig_title'>Tarvi. Chen</p>
                        <p className='mp_sig_txt1'>“The purpose of our lives is to be happy.”</p>
                        <p className='mp_sig_txt2'>— Dalai Lama</p>
                        <br />
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