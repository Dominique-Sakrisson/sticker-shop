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

const addToBucket = ({itemName, itemPrice, quantity}) => s3.putObject({itemName, itemPrice, quantity});

module.exports = {
    addToBucket,
};

