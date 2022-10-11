import discord

class MyClient(discord.Client):
    async def on_ready(self):
        print("Logged in as ", self.user)

    async def on_message(self, message):
        if message.author == self.user:
            return
        if message.content == 'ping':
            await message.channel.send('pong')

intents = discord.Intents.default()
intent.message_content = True
client MyClient intents=intents
client.run('token')