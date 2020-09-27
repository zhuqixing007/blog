import React from "react";
import {Layout, Menu} from "antd";
import {MenuUnfoldOutlined, MenuFoldOutlined, ContainerOutlined,
    EditOutlined, UploadOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import "./adminTemplate.css";
import All from "./all";
import New from "./new";
import Upload from "./upload";

export default class AdminTemplate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            collapsed: false,
            curTab: "1",
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.handelResize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handelResize.bind(this));
    }
    handelResize(){
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    switchTab(tab) {
        this.setState({
            curTab: tab,
        });
    }
    render() {
        let content;
        switch (this.state.curTab) {
            case "1": content = <All height={this.state.height}/>;break;
            case "2": content = <New height={this.state.height}/>;break;
            case "3": content = <Upload height={this.state.height}/>;break;
            default:
        }
        return (
            <div style={{width: this.state.width,
                height: this.state.height,
                margin: "0 auto",}}>
                <div className={"admin"} style={{width: "100%", height: "100%"}}>
                    <Layout>
                        <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                                <Menu.Item key="1" icon={<ContainerOutlined />} onClick={() => this.switchTab("1")}>
                                    所有文章
                                </Menu.Item>
                                <Menu.Item key="2" icon={<EditOutlined />} onClick={() => this.switchTab("2")}>
                                    新建文章
                                </Menu.Item>
                                <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => this.switchTab("3")}>
                                    配图上传
                                </Menu.Item>
                            </Menu>
                        </Layout.Sider>
                        <Layout className="site-layout">
                            <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: this.toggle,
                                })}
                                <span style={{fontSize: "22px", userSelect: "none"}}> Carpe Diem 后台管理</span>
                            </Layout.Header>
                            <Layout.Content
                                className="site-layout-background"
                                style={{
                                    minHeight: this.state.height-85,
                                    margin: 10,
                                }}
                            >
                                {content}
                            </Layout.Content>
                        </Layout>
                    </Layout>
                </div>
            </div>
        );
    }
}