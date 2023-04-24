const aws = require("aws-sdk");
const fs = require("fs");
require("dotenv").config();

const awsConfig = {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
};

console.log(awsConfig);

aws.config.update(awsConfig);

const s3 = new aws.S3();

const fileName = "04381611144-IRPF-2021-2020-origi-imagem-declaracao.pdf";
const filePath = "";

const bucketName = process.env.S3_BUCKET_NAME;
const file = fs.readFileSync(filePath);

const parameters = {
  Bucket: bucketName,
  Key: fileName,
  Body: file,
};

s3.upload(parameters, (err, data) => {
  if (err) {
    console.log("Erro -> ", err);
    return;
  }

  console.log("Success -> ", data.Location);
});
