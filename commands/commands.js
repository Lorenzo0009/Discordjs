module.exports = {
    name: 'ola',
    description: 'prefix command',
    execute(message) {
        let str = 'hello world';
        message.channel.send(str);
    },
};