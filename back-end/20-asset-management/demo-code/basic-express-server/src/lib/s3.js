'use strict';

const fs = require('fs-extra');
const aws = require('aws-sdk');

const amazonS3 = new aws.S3();

const s3 = module.exports = {};

s3.pUpload = (path, key) => {
  const uploadOptions = {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    ACL: 'public-read',
    Body: fs.createReadStream(path),
  };

  return amazonS3.upload(uploadOptions)
    .promise()
    .then((response) => {
      //! Vinicio - here, I know that the file is on S3
      return fs.remove(path) //! Vinicio - Here I am deleting the file
        .then(() => response.Location) //! Vinicio - here I am returning back the url
        .catch(error => Promise.reject(error));
    })
    .catch((uploadError) => {
      return fs.remove(path)
        .then(() => Promise.reject(uploadError))
        .catch(() => Promise.reject(uploadError));
    });
};

s3.pRemove = (key) => {
  const removeOptions = {
    Key: key,
    Bucket: process.env.AWS_BUCKET,
  };

  // Vinicio - this is returning a promise
  return amazonS3.deleteObject(removeOptions).promise();
};
