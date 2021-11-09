// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./client.js";

// Set the parameters
const params = {
  Bucket: 'tagiordano2021t3', // The name of the bucket. For example, 'sample_bucket_101'.
  Key: 'sample_upload.txt', // The name of the object. For example, 'sample_upload.txt'.
  Body: 'This is my first attempt. Hi!', // The content of the object. For example, 'Hello world!".
  ACL: 'public-read'
};

const run = () => {
  s3Client
    .send(new CreateBucketCommand({ Bucket: params.Bucket}))
    .then((data) => {
      console.log("Successfully created a bucket called ", data.Location);
    })
    .then(() => {
      return s3Client.send(new PutObjectCommand(params));
    })
    .then(() => {
      console.log(
        "Successfully created " +
          params.Key +
          " and uploaded it to " +
          params.Bucket +
          "/" +
          params.Key
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

run();
