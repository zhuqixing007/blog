import React from "react";
import {Layout, Menu} from "antd";
import {MenuUnfoldOutlined, MenuFoldOutlined, ContainerOutlined,
    EditOutlined, UploadOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import "./adminTemplate.css";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function logout() {
    return { type: "LOGOUT"};
}
function windowResize() {
    return { type: "RESIZE"};
}
function mapStateToProps(state) {
    return {
        windowSize: state.windowSize,
        loginState: state.login.loginState,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({logout, windowResize}, dispatch);
}
class AdminTemplate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            curTab: "1",
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.props.windowResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.props.windowResize);
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    loginBtn(e) {
        if(this.props.loginState){
            this.props.logout();
            e.preventDefault();
        }
    }
    render() {
        return (
            <div style={{width: this.props.windowSize.width,
                height: this.props.windowSize.height,
                margin: "0 auto",}}>
                <div className={"admin"} style={{width: "100%", height: "100%"}}>
                    <Layout>
                        <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className={"user"}>
                                <div className={"user-icon"}> </div>
                                <Link to={"/admin"}>
                                    <button className={"loginBtn"} onClick={(e) => this.loginBtn(e)}> {this.props.loginState?"logout":"login"} </button>
                                </Link>
                            </div>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={this.props.curPage}>
                                <Menu.Item key="1" icon={<ContainerOutlined />}>
                                    <Link to={{pathname: "/admin/all"}}
                                          style={{textDecoration: "none",
                                                  width: "100%", height: "100%"}}>
                                        所有文章
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<EditOutlined />}>
                                    <Link to={{pathname: "/admin/new"}}
                                          style={{textDecoration: "none",
                                              width: "100%", height: "100%"}}>
                                        新建文章
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<UploadOutlined />}>
                                    <Link to={{pathname: "/admin/upload"}}
                                          style={{textDecoration: "none",
                                              width: "100%", height: "100%"}}>
                                        配图上传
                                    </Link>
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
                                    minHeight: this.props.windowSize.height-85,
                                    margin: 10,
                                }}
                            >
                                {this.props.content}
                            </Layout.Content>
                        </Layout>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminTemplate);