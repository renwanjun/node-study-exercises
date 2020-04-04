const events = require('events');
const net = require('net');
const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
channel.clients = {}
channel.subscriptions = {}
channel.on('join', () => {
    console.log('welcome')
})

channel.emit('join')