// Load the SDK for JavaScript
var AWS = require('aws-sdk');

const ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;
const BUCKET_NAME= 'dom-bucket-uigh';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
})

const uploadToBucket = ({itemId, itemName, itemPrice, quantity}) => {
    const objectParams = {
        Bucket: BUCKET_NAME, 
        Key: `item ${Math.round(Math.random(itemId * 100)).toString()}`, 
        Body: `item name:${itemName}, 
item price:${itemPrice}, 
item quantity:${quantity} \n`, 
        ACL:'public-read'};
    return s3.putObject(objectParams).promise();
};

module.exports = {
    uploadToBucket
};
