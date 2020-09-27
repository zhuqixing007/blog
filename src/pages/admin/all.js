import React from "react";
import {Button, Input, Select} from "antd";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import "./all.css"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function get(articles) {
    return {
        type: "GET",
        articles: articles
    };
}
function del(article) {
    return {
        type: "DELETE",
        article: article,
    };
}
function mapStateToProps(state){
    return {
        articles: state.articles.articles,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({get, del}, dispatch);
}

class All extends React.Component{
    render() {
        const {articles, del}= this.props;
        return (
            <div className={"content-all"}>
                <div className={"filter"}>
                    <div className={"filter-item"}>
                        <span>分类：</span>
                        <Select style={{ width: 120 }} >
                            <Select.Option value="1">分类1</Select.Option>
                            <Select.Option value="2">分类2</Select.Option>
                        </Select>
                    </div>
                    <div className={"filter-item"}>
                        <span>标签：</span>
                        <Select style={{ width: 120 }} >
                            <Select.Option value="1">标签1</Select.Option>
                            <Select.Option value="2">标签2</Select.Option>
                        </Select>
                    </div>
                    <div className={"filter-item"}>
                        <span>日期：</span>
                        <Select  style={{ width: 100 }} >
                            <Select.Option value="1">2019</Select.Option>
                            <Select.Option value="2">2020</Select.Option>
                        </Select>
                        <span> 年 </span>
                        <Select style={{ width: 70 }} >
                            {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => {
                                return (
                                    <Select.Option key={m.toString()} value={m.toString()}>{m.toString()}</Select.Option>
                                );
                            })}
                        </Select>
                        <span> 月 </span>
                    </div>
                    <div className={"filter-item"}>
                        <Button type={"primary"}>重置筛选条件</Button>
                    </div>
                    <div className={"filter-item"}>
                        <Input.Search placeholder={"输入关键词直接搜索"} style={{ width: 200 }}/>
                    </div>
                </div>
                <div className={"post-list"} style={{height: this.props.height-135}}>
                    <table className={"post-table"}>
                        <thead>
                        <tr className={"table-head"}>
                            <th>标题</th>
                            <th>发布时间</th>
                            <th>分类</th>
                            <th>标签</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            articles.map((article => {
                                return (
                                    <tr className={"table-item"} key={article.id}>
                                        <td>{article.title}</td>
                                        <td>{article.date.year+"-"+article.date.month+"-"+
                                             article.date.date+" "+article.date.hour+":"+
                                             article.date.min}</td>
                                        <td>{article.categories.join(",")}</td>
                                        <td>{article.tags.join(",")}</td>
                                        <td>
                                            <span className={"post-edit"}><EditOutlined /></span>
                                            <span className={"post-del"} onClick={() => del(article)}><DeleteOutlined /></span>
                                        </td>
                                    </tr>
                                );
                            }))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(All);