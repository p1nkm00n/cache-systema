const cache_systema = require('cache-systema');
const websocket_framework = require('websocket-framework');
const debug = require('debug');
const fs_extra = require('fs-extra');
const react = require('react');
const web3_utils = require('web3-utils');
const xml2js = require('xml2js');
const validator = require('validator');
const moment = require('moment');
const body_parser = require('body-parser');
const firebase = require('firebase');
const cheerio = require('cheerio');

const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log('Users:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
getUsers();

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('customEvent', (message) => {
  console.log(`Received: ${message}`);
});
emitter.emit('customEvent', 'Hello World with Event Emitter');

const timerId = setTimeout(() => console.log('You will see this message after 3 seconds'), 3000);
clearTimeout(timerId);

// Get the list of all available networks from an Ethereum node
web3.eth.net.getNetworkIds().then(networkIds => {
  console.log('Network IDs:', networkIds);
}).catch(err => {
  console.error('Error getting network IDs:', err);
});

// Generate a random alphanumeric string of a specified length
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log('Random String:', generateRandomString(10));

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

// Listen for new blocks mined on the Ethereum network
web3.eth.subscribe('newBlockHeaders', (err, block) => {
  if (!err) {
    console.log('New block:', block);
  } else {
    console.error('Error subscribing to new blocks:', err);
  }
});