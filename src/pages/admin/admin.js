import React from "react";
import Login from "./login";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AdminTemplate from "./adminTemplate";

function logout() {
    return { type: "LOGOUT"};
}
function mapStateToProps(state) {
    return {
        loginState: state.login.loginState,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({logout}, dispatch);
}

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.handelResize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handelResize.bind(this));
    }
    handelResize(){
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }


    render() {
        let view;
        switch (this.props.loginState) {
            case false: view = <Login />;break;
            case true: view = <AdminTemplate />;break;
            default:
        }
        return (
            <div style={{width: this.state.width,
                height: this.state.height,
                margin: "0 auto",}}>
                {view}
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);