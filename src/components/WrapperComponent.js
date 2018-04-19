import React from 'react';
import {connect} from 'react-redux';
import {addNewContent} from '../actions/InputAction';

class WrapperComponent extends React.Component {
    render() {
        console.log('asdfsaddf');
        return (
            <div>
                <input
                    type="text"
                    onChange={event => this.props.dispatch(addNewContent(event.target.value))}

                />
                <span> Hello {this.props.inputData}</span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    inputData: state.inputReducer
});

//onChange={event => props.dispatch(action)}

export default connect(mapStateToProps)(WrapperComponent);

