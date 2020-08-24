import React from "react";
import Template from "../../template/template";

export default class About extends React.Component{
    render() {
        const content = (
            <div>
                about
            </div>
        );
        return (
            <Template curPage={"about"} content={content}/>
        );
    }
}