import React from "react";
import "./admin.css"
import {Form, Input, Button} from "antd";
import 'antd/dist/antd.css';
import {EyeTwoTone, EyeInvisibleOutlined, KeyOutlined} from "@ant-design/icons"

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            loginDisplay: "block",
            adminDisplay: "none",
        };
        this.formRef = React.createRef();
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
    handelLogin() {
        const formValues = this.formRef.current.getFieldValue();
        const password = formValues["password"];
        if(password){
            this.setState({
                loginDisplay: "none",
                adminDisplay: "block",
            });
        }

    }

    render() {
        return (
            <div style={{width: this.state.width,
                         height: this.state.height,
                         margin: "0 auto",}}>
                <div className={"loginModal"} style={{display: this.state.loginDisplay, width: "100%", paddingTop: 100}}>
                    <div className={"welcome"}>
                        <span>请输入密码登录后台管理</span>
                    </div>
                    <div className={"login"}>
                        <Form ref={this.formRef}>
                            <Form.Item name={"password"} rules={[{required: true}]}>
                                <Input.Password
                                    size={"large"}
                                    placeholder="password"
                                    prefix={<KeyOutlined />}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                            </Form.Item>
                            <Form.Item style={{textAlign: "center"}}>
                                <Button style={{width: 150, height: 40}}
                                        type={"primary"}
                                        htmlType={"submit"}
                                        onClick={this.handelLogin.bind(this)}>登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className={"admin"} style={{display: this.state.adminDisplay, width: "100%", height: "100%", border: "1px solid red"}}>
                    admin
                </div>
            </div>
        );
    }
}