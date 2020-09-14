import React from "react";
import Template from "../../template/template";
import "./tags.css"

export default class Tags extends React.Component{
    render() {
        const content = (
            <div className={"tags"}>
                <div className={"tags-head"}>
                    <span>标签云</span>
                </div>
                <div className={"tags-counter"}>
                    <span>目前共计1个标签</span>
                </div>
                <div className={"tags-item"}>
                    <span>React</span>
                </div>
            </div>
        );
        return (
            <Template curPage={"tags"} content={content}/>
        );
    }
}