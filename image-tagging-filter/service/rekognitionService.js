const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1'
})

const rekognition = new AWS.Rekognition()

const detectLabels = (bucket, key) => {
    return new Promise((res, rej) => {
        rekognition.detectLabels({
            Image: {
                S3Object: {
                    Bucket: bucket,
                    Name: key
                }
            },
            MinConfidence: 80,
            MaxLabels: 6
        }, (err, data) => {
            if (err) {
                return (rej(err));
            }
            const labels = data.Labels.map(label => label.Name)
            return res(labels)
        })
    })
}

module.exports = {
    detectLabels: detectLabels
}