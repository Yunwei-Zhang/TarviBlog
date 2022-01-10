import { React, Component } from 'react';
import './Mainpage.css';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import img from '../../assets/images/img_mp_title.png'
class Mainpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classname_card: 'none',
            items_skills: [
                { id: 1, name: "SKILL1", color:"aqua", per:15, des:"xxxxxxxxxxxxxxxxxxxxxx" },
                { id: 2, name: "SKILL2", color:"red", per:100, des:"xxxxxxxxxxxxxxxxxxx" },
                { id: 3, name: "SKILL3", color:"orange", per:70, des:"xxxxxxxxxxxxxxxxxxx" },
                { id: 4, name: "SKILL4", color:"green", per:30, des:"xxxxxxxxxxxxxxxxxxx" },
                { id: 5, name: "SKILL5", color:"green", per:40, des:"xxxxxxxxxxxxxxxxxxx" },
            ],
        }
    }

    handleScroll() { 
        if (document.documentElement.scrollTop > 500) {
           this.setState({
            classname_card: 'mp_skill_card_percentage_content'
           })
         } 
       }
    
       componentDidMount() {
         window.onscroll = () => this.handleScroll()
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
                    <div className='mp_skill_cube'>
                        <p className='mp_skill_title'>skills</p>
                        <Row gutter={[32, 20]}>
                            {this.state.items_skills.map((item, index) => (
                                <Col span={8}>
                                    <div className='mp_skill_card'>
                                        <p style={{"--cardtitlecolor":item.color}} className='mp_skill_card_name'>{item.name}</p>
                                        <p className='mp_skill_card_des'>{item.des}</p>
                                        <div className='mp_skill_card_percentage'>
                                            <p className='mp_skill_card_percentage_txt'>asdasd</p>
                                            <div style={{"--cardper":item.per,"--cardtitlecolor":item.color}} className={this.state.classname_card}></div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default Mainpage;