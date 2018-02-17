const getItems = (sort , reverseSort) => {
    let items = []
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    if(sort) {
       items.sort((a,b) => {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} ); 
    }
    if(reverseSort) {
       items.sort((a,b) => {return (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0);} );
    }
    return items;
};

const setItem = (counter, title, price) => {
    let items = {
        id: counter,
        title: title,
        price: price
    }
    let itemsString = JSON.stringify(items)
    localStorage.setItem(counter, itemsString)
}

const totalPrice = () => {
    let items = []
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        items.push(JSON.parse(localStorage.getItem(localStorage.key(i))).price);
    }
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += parseFloat(items[i]);
    }
    return sum;

}

export {getItems, setItem, totalPrice}; 