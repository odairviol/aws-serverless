const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1'
})

const sqs = new AWS.SQS()

const QUEUE_SQS = 'https://sqs.us-east-1.amazonaws.com/416247748472/post-processing-image-queue';

const putMessage = message => {
    return new Promise((res, rej) => {
        sqs.sendMessage({
            QueueUrl: QUEUE_SQS,
            MessageBody: JSON.stringify(message)
        }, (err, data) => {
            if (err) {
                return rej(err);
            }
            return res(data);
        });
    });
}

module.exports = {
    putMessage: putMessage
}