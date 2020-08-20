import React, {Component} from "react";
import Template from "../template/template";

class Home extends Component{
    // React中一个重要的概念就是组件，组件可以分为函数组件和类组件
    // 这里创建了一个类组件，继承Component，这是一个最基本类组件的模板
    render() {
        // return返回的是前端视图，在react中，前端视图都在组件的return中编辑，这一点区别于传统前端开发
        return (
            <Template />
        );
    }
}

export default Home; // 将组件暴露给外部，使得组件可以被外部访问调用