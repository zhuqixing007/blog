import React from "react";
import Template from "../../template/template";
import "./categories.css"

export default class Categories extends React.Component{
    render() {
        const content = (
            <div className={"categories"}>
                <div className={"title"}>
                    <span>文章分类</span>
                </div>
                <div className={"counter"}>
                    <span>目前共计{"2"}个分类</span>
                </div>
                <div className={"article-cate"}>
                    <ul>
                        <li>分类1</li>
                        <li>分类2</li>
                    </ul>
                </div>
            </div>
        );
        return (
            <Template curPage={"categories"} content={content}/>
        );
    }
}