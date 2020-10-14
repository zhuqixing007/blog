import React from "react";
import {Button, Input} from "antd";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import 'react-markdown-editor-lite/lib/index.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {message} from "antd";
import AdminTemplate from "./adminTemplate";

function add(article) {
    return {
        type: "ADD",
        article: article,
    }
}
function mapStateToProps(state){
    return {
        loginState: state.login.loginState,
        articles: state.articles.articles,
        windowSize: state.windowSize,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({add},dispatch);
}

class New extends React.Component{

    render() {
        const content = 0;
        return (
            <AdminTemplate content={content} curPage={"2"}/>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(New);