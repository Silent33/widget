import React from 'react';
import Item from './Item';

const containerStyle = {
    width: '90%',
    margin: '0 auto',
};

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div style={containerStyle}>
                {
                    this.props.items.map(item => (
                        <Item
                            key={item.id.toString()}
                            title={item.title}
                            id={item.id}
                            price={item.price}
                        />)
                    )
                }
            </div>
        );
    }
}
export default ItemList;