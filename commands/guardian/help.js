const { Command } = require('discord-akairo');
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commands', 'info'],
            channel: 'guild'
        });
    }

    async exec(message) {

        const prefix = message.guild.prefix;

        const commands = [
            `*The prefix is currently **\`${prefix}\`***\n`,
            `*The following commands are available, running them displays more information and parameters:* **\`config\` \`prefix\` \`help\` \`limits\` \`recent\` \`reset\`**`
        ];

        const info = [
            `*Owner: <@709672019842826270>*\n*[Main Server](https://discord.gg/RFDtRAg)*\n*[Bot Invite](https://discord.com/api/oauth2/authorize?client_id=711750383600664586&permissions=8&scope=bot)*\n`
        ];

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Guardian')
            .setDescription('**__Information__**\n*Owner: <@709672019842826270>*\n*[Main Server](https://discord.gg/RFDtRAg)*\n*[Bot Invite](https://discord.com/api/oauth2/authorize?client_id=711750383600664586&permissions=8&scope=bot)*\n')
            .addField('**__Commands__**', commands.join('\n'));

        message.channel.send(embed);
    }
}

module.exports = HelpCommand;
