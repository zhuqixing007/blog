import React from "react";
import Template from "../../template/template";

export default class Tags extends React.Component{
    render() {
        const content = (
            <div>
                tags
            </div>
        );
        return (
            <Template curPage={"tags"} content={content}/>
        );
    }
}