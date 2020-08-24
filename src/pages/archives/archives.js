import React from "react";
import Template from "../../template/template";

export default class Archives extends React.Component{
    render() {
        const content = (
            <div>
                archives
            </div>
        );
        return (
            <Template curPage={"archives"} content={content}/>
        );
    }
}