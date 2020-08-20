import React from "react";
import "./template.css"
import { HomeOutlined, AppstoreOutlined, TagOutlined,
    SearchOutlined, UserOutlined, DatabaseOutlined,
    GithubOutlined, MailOutlined} from "@ant-design/icons"

class Template extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this));
    }
    handleResize = e => {
        this.setState({
            width: e.target.innerWidth,
            height: e.target.innerHeight,
        });
    };
    render() {
        return (
            // 这是一个很常见的页面布局，先是左右结构，然后在左边继续分割为上下结构
            // div是html中的块级盒子，他会独自占据一行，因此光是下面的代码并没有达到我们要的布局效果
            // 我们还需要配合css实现页面布局，className就是在写css时的类选择器
            <div style={{height: this.state.height,
                         width: this.state.width,
                         backgroundColor: "rgb(235,235,235)",}}>
                <div className={"fatherBox"}>
                    <div className={"leftBox"}>
                        <div className={"leftTopBox"}>
                            <div className={"site-name"}>
                                <span>Carpe Diem</span>
                            </div>
                            <div className={"site-nav"}>
                                <ul>
                                    <li><span><HomeOutlined /></span><span className={"nav-text"}>首页</span></li>
                                    <li><span><AppstoreOutlined /></span><span className={"nav-text"}>分类</span></li>
                                    <li><span><DatabaseOutlined /></span><span className={"nav-text"}>归档</span></li>
                                    <li><span><TagOutlined /></span><span className={"nav-text"}>标签</span></li>
                                    <li><span><UserOutlined /></span><span className={"nav-text"}>关于</span></li>
                                    <li><span><SearchOutlined /></span><span className={"nav-text"}>搜索</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className={"leftBottomBox"}>
                            <div className={"avatar"}>
                                <span> </span>
                            </div>
                            <div className={"master"}>
                                <span>Mr. Postgraduate</span>
                            </div>
                            <div className={"motto"}>
                                <span>往事不要再提，人生已多风雨</span>
                            </div>
                            <div className={"overview"}>
                                <ul>
                                    <li><span className={"overview-num"}>15</span><span className={"overview-label"}>日志</span></li>
                                    <li><span className={"overview-num"}>7</span><span className={"overview-label"}>分类</span></li>
                                    <li><span className={"overview-num"}>22</span><span className={"overview-label"}>标签</span></li>
                                </ul>
                            </div>
                            <div className={"rss"}>

                            </div>
                            <div className={"music"}>
                                <iframe title="vincent" frameBorder="no" border="0" marginWidth="0" marginHeight="0"
                                        width="100%" height="70px"
                                        src="//music.163.com/outchain/player?type=2&id=3411353&auto=1&height=66" />
                            </div>
                            <div className={"contact"}>
                                <div><span><GithubOutlined /></span><span>GitHub</span></div>
                                <div><span><MailOutlined /></span><span>E-Mail</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={"rightBox"} style={{width: 0.8*this.state.width-210}}>

                    </div>
                </div>
            </div>

        );
    }
}

export default Template;