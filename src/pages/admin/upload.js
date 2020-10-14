import React from "react";
import AdminTemplate from "./adminTemplate";

export default class Upload extends React.Component{
    render() {
        const content = (
            <div> upload </div>
        );
        return (
            <AdminTemplate content={content} curPage={"3"}/>
        );
    }
}