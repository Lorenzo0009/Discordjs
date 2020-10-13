/**
 * Comandos [npm init] para criar package.json onde possui as informações do bot
 * [npm install discord.js] baixar a pasta node_modules com as dependencias do discord
 * Criar uma pasta Main do arquivo é onde terá o inicializador do bot!
 * Crie uma config.json é a pasta que tem colocamos o prefix eo token do bot!
 * Comece a codificação do bot exigindo a dependência discord.js 
 * e o arquivo de configuração com o token do bot
 * 
 */

/**essas são as dependencias que usaremos para nos comunicar com o discord! */
const Discord = require("discord.js");
//const para pegar o token que está no config.json
const config = require("./config.json");
const client = new Discord.Client();

/**
 * Metodo para mostrar que o bot está online!
 */
client.on("ready", () => {
    console.log(`${client.user.username} está online!`)
})

/**
 * Metodo para deixar o bot online!
 */
client.on("message", async (message) => {



    if (message.author.bot || message.channel.type === "dm") return;

    /**
     * Prefix !c
     * 
     * ex = !c cmd arg
     * 
     * prefix = !c
     * cmd = comando criado
     * args = args 
     * args é o argumento que vem depois do comando!
     * 
     */

    //Argumento parar definir o prefix do comando do bot!
    const args = message.content.slice(config.prefix.length).trim().split("/ !/c");
    //Comando é uma variavel criado para ser o argumento depois do prefix que é
    const comando = args.shift().toLowerCase();
    /**
     * Exemplo de comando 
     * 
     *     if (comando === `ping`) {
     *     return message.channel.send("Pong!")
     * }
     * 
     *   */
    if (comando === `info`) {
        var msg = "Msg enviada";
        console.log(msg);
        const infoEmbed = new Discord.MessageEmbed().setColor('GREEN')
            .setTitle('┗⎯⎯⎯⎯⎯⎯⎯|🍀|INFORMAÇÕES|🍀|⎯⎯⎯⎯⎯⎯⎯┑')
            .setDescription('`Informações sobre o servidor!`')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setThumbnail(message.author.avatarURL())
            //            .addField('name', '`' + message.guild.name + '`', true)
            .addField('> Participe do **Sorteio** Do Cod Cold War!!', '' + message.guild.channels.cache.get('758469802087415818').toString(), true)
            .addField('> É Membro do YT? Pegue suas **Tags** aqui..', '' + message.guild.channels.cache.get('755565335016636426').toString(), true)
            .addField('> Confira as **Regras**', '' + message.guild.channels.cache.get('747998748659154955').toString(), true)
            .addField('> Membros Founders e Diamantes tem acesso **VIP** ao servidor!!', '' + message.guild.channels.cache.get('754127148377309196').toString(), true)
            .addField('> Se você precisar de **Ajuda** sobre o discord!!', '' + message.guild.channels.cache.get('758458455811293266').toString(), true)
            .addField('> Caso encontre algum erro é só reportar par o **Lorenzo**', "*att Lorenzo!*");;

        return message.channel.send(infoEmbed);

    };
})

// coleque caso use está pasta como Main
// client.login(config.token)