import React from "react";
import "./detail.css"
import Template from "../../template/template";

export default class Detail extends React.Component{

    render() {
        const content = (
            <div>
                <div className={"post-detail"}>
                    <div className={"post-title"}> </div>
                    <div className={"post-info"}> </div>
                    <div className={"post-body"}> </div>
                    <div className={"copyright"}> </div>
                    <div className={"tags"}> </div>
                    <div className={"share"}> </div>
                    <div className={"pre-next"}> </div>
                </div>
                <div className={"comments"}> </div>
            </div>
        );
        return (
            <Template curPage={"detail"} content={content}/>
        );
    }
}