//S3 bucket event trigger that invoke Lambda whenever there is an upload
exports.s3EventHandler = async (event) => {
    console.log('S3 Event Triggered:', event);
  };
  
//CloudWatch event trigger serverless application at intervals  
exports.scheduledEventHandler = async (event) => {
    console.log('Scheduled Event Triggered:', event);
};