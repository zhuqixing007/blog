import React from "react";
import Template from "../../template/template";

export default class Categories extends React.Component{
    render() {
        const content = (
            <div>
                categories
            </div>
        );
        return (
            <Template curPage={"categories"} content={content}/>
        );
    }
}