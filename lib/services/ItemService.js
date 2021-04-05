const Item = require('../models/Item');
const { sendSms } = require('../utils/twilio.js');

module.exports = class ItemService {
  static async create({ itemId, itemName, itemPrice, quantity }){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Item received for ${quantity} ${itemName}`
    );
    return await Item.insert({ itemId, itemName, itemPrice, quantity });
  }
  static async getAll(){
    return await Item.getItems(); 
  }
  static async getItemById(id){
    return await Item.getItemById(id);
  }
  static async updateItem(id, quantity){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Updating the #${id} item quantity to ${ quantity.quantity }`
    );
    return await Item.updateItem(id, quantity);
  }
  static async deleteItem(id){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Removed item #${id} `
    );
    return await Item.deleteItem(id);
  }
  static async deleteAllItemsDanger(){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Removed all item `
    );
    return await Item.deleteAllItemsDanger();
  }
};
