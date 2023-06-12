# DiscordRustDropBot

This is a simple Discord bot written in Node.js that alerts users in a specific channel about Rust drops. Whenever a Rust drop occurs, the bot will send a notification containing the relevant information to the designated channel.

The bot will filter discord messages and checks if it finds the match "drop".
.env file is removed to hide token

## Setup

To use this bot, you will need the following:

- Node.js installed on your machine.
- Discord.js library installed. You can install it using `npm install discord.js`.
- A Discord bot token. You can create a bot and obtain its token through the Discord Developer Portal.

## Installation

1. Clone or download this repository to your local machine.
2. Open a terminal or command prompt and navigate to the project's directory.
3. Install the required dependencies by running the following command:

```
npm install
```

4. Rename the `.env.example` file to `.env`.
5. Open the `.env` file and replace `"YOUR_BOT_TOKEN"` with your actual bot token.

## Usage

1. Invite the bot to your Discord server using the invite link generated in the Discord Developer Portal.
2. Create a channel in your Discord server where you want the Rust drop alerts to be sent.
3. Run the bot by executing the following command in your terminal or command prompt:

```
node bot.js
```

4. The bot should now be online and ready to send Rust drop alerts to the designated channel whenever they occur.

## Customization

If you want to customize the bot further, you can modify the following:

- **Prefix**: By default, the bot uses the prefix `!` for commands. You can change it by editing the `prefix` variable in `bot.js`.
- **Alert Message**: The message sent by the bot when a Rust drop occurs can be customized in the `sendAlert()` function in `bot.js`. Modify the content of the `message` variable to suit your preferences.

## Support

If you encounter any issues or have any questions, feel free to [open an issue](https://github.com/Rebindium/DiscordRustDropBot/issues) in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it as per the terms of the license.
