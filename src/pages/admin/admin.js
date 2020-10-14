import React from "react";
import Login from "./login";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function windowResize() {
    return { type: "RESIZE"};
}
function mapStateToProps(state) {
    return {
        windowSize: state.windowSize,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({windowResize}, dispatch);
}

class Admin extends React.Component {
    componentDidMount() {
        window.addEventListener("resize", this.props.windowResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.props.windowResize);
    }
    render() {
        return (
            <div style={{width: this.props.windowSize.width,
                height: this.props.windowSize.height,
                margin: "0 auto",}}>
                <Login />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);