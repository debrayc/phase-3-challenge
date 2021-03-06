const { getItems, shopperOrders, realShoppers } = require("./database/database.js")

const getItemsInSection = section => {
    let line = `|--------------+---------+`
    let header = `| Product Name | Section |`
    let items = getItems(section)
    items.map(( item ) => {
        console.log( line )
        console.log( header )
        console.log( line )
        console.log( `| ` + item.product_name + ` | ` + item.section + ` |` )
        console.log( line )
    })
}

const getShopperOrders = shopper_id => {
    let line = `|----------+------------|`
    let header = `| order id | total cost |`
    let items = shopperOrders( shopper_id )
    items.map((item) => {
        console.log( line )
        console.log( header )
        console.log( line )
        console.log( `| ` + item.product_name + ` | ` + item.section + ` |` )
        console.log( line )
    })
}

const getRealShoppers = () => {
let line = `|--------------+------------------|`
let header = `| shopper name | number of orders |`
    let items = realShoppers()
    items.map(( item ) => {
        console.log( line )
        console.log( header )
        console.log( line )
        console.log( `| ` + item.shopper_name + ` | ` + item.number_of_orders + ` |` )
        console.log( line )
    })
}

let argument = process.argv[1]
let parameter = process.argv[2]
switch (argument) {
    case 'product-list':
        getItemsInSection( parameter )
        break;
    case 'shopper-orders':
        getShopperOrders( parameter )
        break;
    case 'real-shoppers':
        realShoppers()
        break;
}