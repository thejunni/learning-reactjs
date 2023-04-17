import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Ini Footer</h1>
                {this.props.letters()}
            </div>
        )
    }
}

export default Footer;