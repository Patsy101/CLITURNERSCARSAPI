const mongoose = require('mongoose');

// Map global promise - to get rid of warning
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/turnerscarsapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importing Model
const Customer = require('./models/customer.js');

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer)
    .then((createdCustomer) => {
      console.info('New Customer Added:', createdCustomer);
      mongoose.connection.close(); // Close the database connection when done
    })
    .catch((error) => {
      console.error('Error adding customer:', error);
      mongoose.connection.close(); // Close the database connection in case of an error
    });
};

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
    .then((customers) => {
      console.info(customers);
      console.info(`${customers.length} matches`);
      mongoose.connection.close(); // Close the database connection when done
    })
    .catch((error) => {
      console.error('Error finding customer:', error);
      mongoose.connection.close(); // Close the database connection in case of an error
    });
};

// Export addCustomer and findCustomer methods
module.exports = { addCustomer, findCustomer };

// const mongoose = require('mongoose');

// //Map global promise -to get rid of warning
// mongoose.Promise = global.Promise;
// //connecting to database
// const db = mongoose.connect('mongodb://localhost:27017/turnerscarsapi', {
//   useMongoClient: true,
//   useUnifiedTopology: true,
// });

// //Importing Model
// const Customer = require('./models/customer.js');

// //Add Customer
// const addCustomer = (customer) => {
//   Customer.create(customer).then((customer) => {
//     console.info('New Customer Added');
//     db.close();
//   });
// };
// //Find Customer
// const findCustomer = (name) => {
//   //Make case insensitive
//   const search = new RegExp(name, 'i');
//   Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
//     (customer) => {
//       console.info(customer);
//       console.info(`${customer.length} matches`);
//       db.close();
//     }
//   );
// };

// //Export All methods
// module.exports = { addCustomer, findCustomer };
