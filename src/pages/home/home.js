import React from "react";
import Template from "../../template/template";
import "./home.css"

class Home extends React.Component{

    render() {
        const content = (
            <div style={{width: "100%", height: "100%"}}>
                <div className={"articles"}>
                    <ul>
                        <li>
                            <div className={"article-title"}>
                                <span>A03-零基础React博客项目-制作导航栏和站点概览</span>
                            </div>
                            <div className={"article-info"}>
                                发表于 2020-08-20 |  更新于: 2020-08-20 |  分类于 A-React博客项目 |  评论数: 0 |  阅读次数: 9 |  字数统计: 2.4k
                            </div>
                            <div className={"article-brief"}>
                                <p>今日总览今天实现了：1. 页面尺寸跟随浏览器窗口大小自适应，2.导航栏标签，3. 站点概览标签。效果图如下 从本教程开始，我不会将完整的代码展示出来，我只会讲解每次改动的代码，如果想要参考完整的代码可以访问这个链接：https://github.com/zhuqixing007/blog 页面尺寸 ...</p>
                            </div>
                            <div className={"article-more"}><p><span>阅读全文</span></p></div>
                        </li>
                        <li>article2</li>
                    </ul>
                </div>
                <div className={"pages"}>
                    <span className={"pre"}>{"<"}</span>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>...</li>
                        <li>4</li>
                    </ul>
                    <span className={"next"}>{">"}</span>
                </div>
            </div>
        );
        return (
            <Template curPage={"home"} content={content}/>
        );
    }
}

export default Home;