
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://poc_fitpay:9842164730@poc.9v84r.mongodb.net/fitpay?retryWrites=true&w=majority`, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});
