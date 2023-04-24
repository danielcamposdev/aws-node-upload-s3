import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const s3 = new S3Client({ region: process.env.AWS_REGION });

// const awsConfig = {
//   accessKeyId: process.env.ACCESS_KEY_ID,
//   secretAccessKey: process.env.SECRET_ACCESS_KEY,
// };

const bucketName = process.env.AWS_S3_BUCKET_NAME;
const fileName = "";
const filePath = "";

// aws.config.update(awsConfig);

const file = fs.readFileSync(filePath);

const parameters = {
  Bucket: bucketName,
  Key: fileName,
  Body: file,
};

const command = new PutObjectCommand(parameters);

s3.send(command)
  .then((data) => console.log("Upload realizado com sucesso ", data))
  .catch((error) =>
    console.log("Houve um erro ao relizar o upload -> ", error)
  );
