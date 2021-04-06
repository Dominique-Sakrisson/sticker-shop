const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio.js');
const { addToBucket } =  require('../utils/amazonS3.js');

module.exports = class OrderService {
  static async create({ itemId, itemName, itemPrice, quantity }){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${quantity} ${itemName}`
    );
    await addToBucket({itemId, itemName, itemPrice, quantity});
    return await Order.insert({ itemId, itemName, itemPrice, quantity });
  }
  static async getAll(){
    return await Order.getOrders(); 
  }
  static async getById(id){
    return await Order.getOrderById(id);
  }
  static async updateOrder(id, quantity){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Updating the #${id} order quantity to ${ quantity.quantity }`
    );
    return await Order.updateOrder(id, quantity);
  }
  static async deleteOrder(id){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Removed order #${id} `
    );
    return await Order.deleteOrder(id);
  }
  static async deleteOrderDanger(){
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `Removed all orders `
    );
    return await Order.deleteAllOrderDanger();
  }
};
