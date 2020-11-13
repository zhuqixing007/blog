import React from "react";
import {Button, Input, message} from "antd";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";


class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            categories: [],
            tags: [],
            body: "",
        };
        this.mdParser = new MarkdownIt();
    }

    handleChange (e, name) {
        switch (name) {
            case "title": this.setState({title: e.target.value});break;
            case "categories": this.setState({categories: e.target.value.split(",")});break;
            case "tags": this.setState({tags: e.target.value.split(",")});break;
            case "body": this.setState({body: e.text});break;
            default: break;
        }
    }
    handleSubmit() {
        if(!this.props.loginState){
            message.error("当前未登录，不能进行操作！");
            return;
        }
        if(!this.state.title || !this.state.categories){
            message.error("标题和分类不能为空！");
            return;
        }
        const time = new Date();
        let maxId = 1;
        for(let i=0;i<this.props.articles.length;i++){
            maxId = this.props.articles[i].id>maxId?this.props.articles[i].id:maxId;
        }
        const article = {
            id: maxId+1,
            title: this.state.title,
            date: {
                year: time.getFullYear(),
                month: time.getMonth()+1,
                date: time.getDate(),
                hour: time.getHours(),
                min: time.getMinutes(),
            },
            categories: this.state.categories,
            tags: this.state.tags,
            body: this.state.body,
        }
        this.props.add(article);
        this.setState({
            title: "",
            categories: [],
            tags: [],
            body: "",
        });
        message.success("添加成功！");
    }
    render() {
        return (
            <form className={"content-new"} style={{width: "100%", height: "100%"}}>
                <div className={"post-info"}>
                    <div className={"post-info-item"}>
                        <span>文章标题：</span>
                        <Input style={{ width: 300 }} required={true}
                               value={this.state.title}
                               onChange={(e) => this.handleChange(e,"title")}/>
                    </div>
                    <div className={"post-info-item"}>
                        <span>分类：</span>
                        <Input style={{ width: 120 }} required={true}
                               value={this.state.categories}
                               onChange={(e) => this.handleChange(e,"categories")}/>
                    </div>
                    <div className={"post-info-item"}>
                        <span>标签：</span>
                        <Input style={{ width: 120 }}
                               value={this.state.tags}
                               onChange={(e) => this.handleChange(e, "tags")}/>
                    </div>
                </div>
                <div className={"post-body"} style={{height: this.props.windowSize.height-165}}>
                    <MdEditor style={{width: "100%", height:"100%"}}
                              value={this.state.body}
                              renderHTML={(text) => this.mdParser.render(text)}
                              onChange={(e)=>this.handleChange(e,"body")}
                    />
                </div>
                <div className={"commit"} style={{height:30, textAlign: "center",marginTop: 5}}>
                    <Button type={"primary"} onClick={() => this.handleSubmit()}>提交</Button>
                </div>
            </form>
        );
    }
}

export default Editor;