import React from "react";
import {Button, Form, Input} from "antd";
import {EyeTwoTone, EyeInvisibleOutlined, KeyOutlined} from "@ant-design/icons";
import "./login.css"
import 'antd/dist/antd.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function login() {
    return {type: "LOGIN"};
}
function mapStateToProps(state) {
    return {loginState: state.login.loginState};
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({login}, dispatch);
}

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }
    handelLogin() {
        const formValues = this.formRef.current.getFieldValue();
        const password = formValues["password"];
        if(password){
            this.props.login();
        }
    }

    render() {
        return (
            <div className={"loginModal"} style={{width: "100%", height: "100%", paddingTop: 100}}>
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
                                    onClick={() => this.handelLogin()}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);