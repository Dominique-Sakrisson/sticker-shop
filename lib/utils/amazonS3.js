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
const keyName = 'text from sms';

const newBucket = s3.createBucket(params, function (err,data) {
    if(err) console.log(err, err.stack);
    else console.log('bucket created successfully', data.Location);
});

// newBucket.then(data =>{
//     const objectParams = {Bucket: bucketName, Key: keyName, Body: 'heyyyyy' }
// } );


module.exports = {
    newBucket
};

// //create bucket name
// const bucketName = 'noded-sdk-sticker-' + uuid.v4();
// //create name for uploaded object key
// const keyName = 'yeahyeahyeah.txt';

// //create prmoise on s3 service object
// const bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// // Handle promise fulfilled/rejected states
// bucketPromise.then(
//     function(data) {
//       // Create params for putObject call
//       const objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
//       // Create object upload promise
//       const uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
//       uploadPromise.then(
//         function(data) {
//           console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//         });
//   }).catch(
//     function(err) {
//       console.error(err, err.stack);
//   });
