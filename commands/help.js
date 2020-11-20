const config = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Help Menu',
    execute(msg, args) {
        msg.channel.send({embed: {
            title: "Help Menu",
            description: 'Bot commands are listed below:',
            fields: [{
                name:`${config.Prefix}about`,
                value:"Bot's developer info"
            },
            {
                name:`${config.Prefix}help`,
                description:"This Message"
            },
            {
                name:`${config.Prefix}markisgod`,
                description:"Mark Is God"
            },
            {
                name:`${config.Prefix}ping`,
                description:"Pong"
            }
            ]
        }})
    },
};
