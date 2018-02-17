import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {setItem, getItems, totalPrice} from './ItemService';
import ItemList from './ItemList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const titleInputStyle = {
    display: 'inline-block',
    width: '270px',
    marginRight: '40px'
}
const priceInputStyle = {
    display: 'inline-block',
    width: '100px',
    marginLeft: '10px'
}
const cardStyle = {
    width: '500px',
    fontFamily: 'Roboto',
}
const textFieldContainerStyle = {
    margin: '30px 0',
}
const sortImg = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '10px'
}

const btnStyle = {
    display: 'inline-block'
}

const totalContainerStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
}

const totalText = {
    display: 'inline-block',
    width: '100px',
}

const totalNumber = {
    display: 'inline-block',
    marginLeft: '240px'
}

const itemsStyle = {
    height: 'auto',
    overflow: '-webkit-paged-y',
}

const sortImgContainer = {
    display: 'flex',
    marginLeft: '20px'
}

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: localStorage.length,
            expanded: false,
            title: '',
            price: '',
            messagePrice: '',
            items: getItems(),
            errorStyle: '',
            totalPrice: totalPrice(),
            sort: false,
            reverseSort: false
        };
    }

    componentWillMount() {
        getItems(this.state.sort, this.state.reverseSort)
        totalPrice()
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
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

    postItem = () => {
        let price = Number(parseFloat(this.state.price).toFixed(2))
        setItem(this.state.counter, this.state.title, price.toFixed(2))
        this.setState({
            title: '',
            price: '',
            counter: this.state.counter + 1,
            items: getItems(),
            totalPrice: totalPrice()
        })
    }

    isValid = () => {
        let price = Number(parseFloat(this.state.price).toFixed(2))
        if (!isNaN(price)) {
            if (this.state.title.trim() && this.state.price.trim()) {
                return true
            }
        }
    }

    keydownHandler = (e) => {
        if (this.isValid()) {
            if (e.keyCode === 13) {
                this.postItem()
            }
        }
    }

    onClickHendler = () => {
        if (this.isValid()) {
            this.postItem()
        }
    }

    handleSort = () => {
        this.setState({
            sort: !this.state.sort,
            reverseSort: false,
            items: getItems(!this.state.sort, this.state.reverseSort)
        })
    }

    handleReverseSort = () => {
        this.setState({
            reverseSort: !this.state.reverseSort,
            sort: false,
            items: getItems(this.state.sort, !this.state.reverseSort)
        })
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
                    <div style={sortImgContainer}>
                        <img
                            src='https://cdn3.iconfinder.com/data/icons/text-icons-1/512/BT_sort_az-256.png'
                            alt='sort'
                            style={sortImg}
                            onClick={this.handleSort}>
                        </img>
                        <img
                            src='https://cdn3.iconfinder.com/data/icons/text-icons-1/512/BT_sort_za-256.png'
                            alt='sort'
                            style={sortImg}
                            onClick={this.handleReverseSort}>
                        </img>
                    </div>
                    <div style={itemsStyle}>
                        <ItemList
                            items={this.state.items} />
                    </div>
                    <div style={textFieldContainerStyle}>
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
                        <FloatingActionButton
                            onClick={this.onClickHendler}
                            mini={true}
                            style={btnStyle} >
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
                    <div style={totalContainerStyle}>
                        <div style={totalText}>TOTAL</div>
                        <div style={totalNumber}>${this.state.totalPrice.toFixed(2)}</div>

                    </div>
                </CardText>
            </Card>
        );
    }
}
export default ItemContainer;