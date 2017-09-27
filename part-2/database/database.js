const pgp = reqire('pg-promise')()
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

const getItems = section => db.any(`SELECT product_name, section FROM products WHERE section=${section}`)
const shopperOrders = shopper_id => db.any(`SELECT order.id, SUM(products.price) FROM orders JOIN cart ON orders.cart_id = cart.cart_id JOIN products ON cart.item_id = products.id
JOIN shoppers ON shoppers.id = orders.shopper_id WHERE shoppers.id = ${shopper_id} GROUP BY orders.id`)
const realShoppers = () => db.any(`SELECT shopper_name, no_of_orders FROM shoppers RIGHT JOIN orders`)

module.exports = {
    getItems,
    shopperOrders,
    realShoppers
}