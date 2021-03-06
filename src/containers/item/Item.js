import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const cardHeaderStyleTitle = {
    cursor: 'text',
    width: '300px',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    height: 'auto',
    wordWrap: 'break-word',
    padding: '10px'
};
const cardHeaderStylePrice = {
    fontFamily: 'Roboto',
    cursor: 'text',
    width: '100px',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    height: 'auto',
    wordWrap: 'break-word',
    borderLeft: '2px solid #ccc',
    padding: '10px'
};

const cardStyle = {
    boxShadow: 'none',
}

const containerStyle = {
    display: 'flex',
}

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={containerStyle}>
                <Card style={cardStyle}
                    onClick={this.handleClick}>
                    <CardHeader
                        actAsExpander={true}
                        style={cardHeaderStyleTitle}
                        title={this.props.title}
                    />
                    <Divider />
                </Card>
                <Card style={cardStyle}
                    onClick={this.handleClick}>
                    <CardHeader
                        actAsExpander={true}
                        style={cardHeaderStylePrice}
                        title={'$' + this.props.price}
                    />
                    <Divider />
                </Card>
            </div >
        );
    }
}
export default Item;