const mongoose = require('mongoose');

//Map global promise -to get rid of warning
mongoose.Promise = global.Promise;
//connecting to database
const db = mongoose.connect('mongodb://localhost:27017/turnerscarsapi', {
  useMongoClient: true,
});

//Importing Model
const Customer = require('./models/customer.js');

//Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info('New Customer Added');
    db.close();
  });
};
//Find Customer
const findCustomer = (name) => {
  //Make case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    }
  );
};
