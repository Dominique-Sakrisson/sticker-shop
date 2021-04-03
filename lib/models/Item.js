const pool = require('../utils/pool.js');

module.exports = class Item {
    id;
    itemId;
    itemName;
    itemPrice;
    quantity;

    constructor(row){
      this.id = row.id;
      this.itemId = row.item_id;
      this.itemName = row.item_name;
      this.itemPrice = row.item_price;
      this.quantity = row.quantity;
    }
    
    static async insert(item) {
      // try {
      //   //check if items table has existing item with all of the same property values
      // } catch (error) {
        
      // }
      const {
        rows
      } = await pool.query(
        'INSERT INTO items (item_id, item_name, item_price, quantity) VALUES ($1, $2, $3, $4) RETURNING *', [item.itemId, item.itemName, item.itemPrice, item.quantity]
      );
      return new Order(rows[0]);
    }
    static async getitems() {
      try {
        const { rows } = await pool.query(
          'SELECT * FROM items');
        return rows.map(item =>  new Item(item));
      } catch(error) {
        error;
      }
    }
    static async getItemById(id) {
      try {
        const { rows } = await pool.query(
          'SELECT * FROM items WHERE  id = $1 ', [id]);    
        return new Item(rows[0]);
      } catch(error) {
        error;
      }
    }
    static async updateItem(id, { quantity }) {
      try {
        //maybe shorten to an implicit return
        const { rows } = await pool.query(
          'UPDATE items SET quantity = $2 WHERE id = $1 RETURNING *', [id, quantity]);   
        return new Item(rows[0]);
      } catch(error) {
        error;
      }
    }
    static async deleteItem(id) {
      try {
        //maybe shorten to an implicit return
        const { rows } = await pool.query(
          'DELETE from items WHERE id=$1 RETURNING *', [id]);   
        return new Item(rows[0]);
      } catch(error) {
        error;
      }
    }
    static async deleteAllOrderDanger() {
      try {
        //maybe shorten to an implicit return
        const { rows } = await pool.query(
          'DELETE from items WHERE id > 2 RETURNING *');   
        return new Item(rows[0]);
      } catch(error) {
        error;
      }
    }
};
