const AWS = require('aws-sdk');
const uuid = require('uuid');

const ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;

const BUCKET_NAME= 'dom-bucket-uigh';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
})

const params ={
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration:{
        LocationConstraint : 'us-west-1'
    }
};

// const newBucket = s3.createBucket(params, function (err,data) {
//     if(err) console.log(err, err.stack);
//     else console.log('bucket created successfully', data.Location);
// });

// const addToBucket = ({itemName, itemPrice, quantity}) => s3.putObject({itemName, itemPrice, quantity});



    const addToBucket = () => {
        return async(itemId, itemName, itemPrice, quantity) =>  await new AWS.S3({apiVersion: '2006-03-01'}).putObject({Bucket: BUCKET_NAME, Key: keyName, 
        Body:` item Id:${itemId}, Item Name: ${itemName}, Item Price: ${itemPrice}, Item Quantity${quantity}`}).promise()};
        // uploadPromise.then((data) => {
        //     console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
        //   });
    
// .catch(err) {
// });
module.exports = {
    addToBucket,
};

