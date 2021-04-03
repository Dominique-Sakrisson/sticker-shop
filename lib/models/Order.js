const pool = require('../utils/pool.js');

module.exports = class Order {
    id;
    itemId;
    itemName;
    itemPrice;
    quantity;

    constructor(row){
      this.id = row.id;
      this.items = {...row.items};
      // this.itemId = row.item_id;
      // this.itemName = row.item_name;
      // this.itemPrice = row.item_price;
      // this.quantity = row.quantity;
    }
    
    static async insert(order) {
      const {
        rows
      } = await pool.query(
        'INSERT INTO orders (item_id, item_name, item_price, quantity) VALUES ($1, $2, $3, $4) RETURNING *', [order.itemId, order.itemName, order.itemPrice, order.quantity]
      );
      return new Order(rows[0]);
    }
    static async getOrders() {
      try {
        const { rows } = await pool.query(
          'SELECT * FROM orders');
        return rows.map(order =>  new Order(order));
      } catch(error) {
        error;
      }
    }
    static async getOrderById(id) {
      try {
        const { rows } = await pool.query(
          'SELECT * FROM orders WHERE  id = $1 ', [id]);    
        return new Order(rows[0]);
      } catch(error) {
        error;
      }
    }
    static async updateOrder(id, { quantity }) {
      try {
        //maybe shorten to an implicit return
        const { rows } = await pool.query(
          'UPDATE orders SET quantity = $2 WHERE id = $1 RETURNING *', [id, quantity]);   
        return new Order(rows[0]);
      } catch(error) {
        error;
      }
    }
    static async deleteOrder(id) {
      try {
        //maybe shorten to an implicit return
        const { rows } = await pool.query(
          'DELETE from orders WHERE id=$1 RETURNING *', [id]);   
        return new Order(rows[0]);
      } catch(error) {
        error;
      }
    }
    static async deleteAllOrderDanger() {
      try {
        //maybe shorten to an implicit return
        const { rows } = await pool.query(
          'DELETE from orders WHERE id > 2 RETURNING *');   
        return new Order(rows[0]);
      } catch(error) {
        error;
      }
    }
};
