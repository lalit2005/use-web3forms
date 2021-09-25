const useWeb3forms = require('use-web3forms');

// import isomorphic-unfetch so that a fetch polyfill is added to the global scope
require('isomorphic-unfetch');

const { submit } = useWeb3forms({
  apikey: 'YOUR_ACCESS_KEY_HERE',
  onError: (msg, err) => {
    console.log(msg, '\n', err);
  },
  onSuccess: (msg, data) => {
    console.log(msg, '\n', data);
  },
});

submit({
  name: 'John Doe',
  email: 'john@doe.com',
  message: 'Hello, World!',
});
