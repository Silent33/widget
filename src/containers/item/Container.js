import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {setItem, getItems} from './ItemService';
import ItemList from './ItemList';

const titleInputStyle = {
    display: 'inline-block',
    width: '300px',
    marginRight: '20px'
}
const priceInputStyle = {
    display: 'inline-block',
    width: '100px',
    marginLeft: '20px'
}
const cardStyle = {
    width: '500px'
}

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: localStorage.length,
            expanded: false,
            title: '',
            price: '',
            items: getItems()
        };
    }

    componentWillMount (){
        getItems()
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleChangeTitle = (event, newTitle) => {
        this.setState({
            title: newTitle,
        });
    }

    handleChangePrice = (event, newPrice) => {
        this.setState({
            price: newPrice,
        });
    }

    keydownHandler = (e) => {
        if (e.keyCode === 13) {
            setItem(this.state.counter, this.state.title, this.state.price)
            this.setState({
                title: '',
                price: '',
                counter: this.state.counter + 1,
                items: getItems()
            })
        }
    }

    render() {
        return (
            <Card 
                expanded={this.state.expanded} 
                onExpandChange={this.handleExpandChange}
                style={cardStyle}>
                <CardHeader
                    title="EXPENSES"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText
                    expandable={true}
                >
                <ItemList
                    items={this.state.items}/>
                    <TextField
                        style={titleInputStyle}
                        hintText="Title"
                        onKeyDown={this.keydownHandler}
                        onChange={this.handleChangeTitle}
                        value={this.state.title}
                    />
                    $
                    <TextField
                        style={priceInputStyle}
                        hintText="Price"
                        onKeyDown={this.keydownHandler}
                        onChange={this.handleChangePrice}
                        value={this.state.price}
                    />
                    <h1>TOTAL ------------</h1>
                </CardText>
            </Card>
        );
    }
}
export default ItemContainer;