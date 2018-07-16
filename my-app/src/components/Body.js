import React from "react";

export class Body extends React.Component {
    constructor(props) {
        super();
        this.state = {

            initName: props.initName
        };

    }


    onChangeName() {
        this.props.changeName(this.state.initName);
    }

    onHandleChange(event) {
        this.setState({
            initName: event.target.value
        });
    }

    render() {
        return (
            <div>

                <input type="text" value={this.state.initName}
                    onChange={(event) => this.onHandleChange(event)} />
                <button onClick={this.onChangeName.bind(this)}>Change Name</button>
            </div>
        );
    }
};