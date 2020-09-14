import React from "react";
import Template from "../../template/template";
import "./archives.css"

export default class Archives extends React.Component{
    render() {
        const content = (
            <div className={"archives"}>
                <div className={"post-overview"}>
                    <div className={"post-counter"}>
                        <span/>
                        <span className={"archives-title"}>目前共计{"18"}篇日志，继续努力！</span>
                    </div>
                    <div className={"article-archives"}>
                        <div className={"year"}>
                            <span/>
                            <span className={"archives-title"}>2020</span>
                        </div>
                        <div className={"article"}>
                            <span/>
                            <span className={"archives-title"}> 09-01 公告</span>
                        </div>
                    </div>
                </div>
                <div className={"page-nav"}></div>
            </div>
        );
        return (
            <Template curPage={"archives"} content={content}/>
        );
    }
}