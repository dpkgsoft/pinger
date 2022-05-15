# What is Pinger?
Pinger is program which used  in VasyaBot Chat Manager to ping sites or IP.

## How to use it in VasyaBot Chat Manager?
At first, bot's VK placement is https://vk.com/vasyabotcmdev.
Please send a request to join and write us: https://vk.me/dpkgsoft

Than you can invite bot to some chats and use command `!whois <domain>`, for example `!whois 1.1.1.1` or `!whois xorek.cloud`. You can use other prefix if you set it.

# How to install Piner?
You need NodeJS 16.x and git installed.

1. Clone this repository: `git clone https://github.com/dpkgsoft/pinger /opt/pinger`
2. Cd to directory `cd pinger /opt/pinger`
3. Install required dependencies: `npm install`
4. Clone the `pinger.service` file to `/etc/systemd/system`: `cp pinger.service /etc/systemd/system`
5. Reload the daemon: `systemctl daemon-reload`
6. Start the pinger: `systemctl start pinger`

## How to use?
Now pinger is available at http://localhost:3000/

To ping something use `ping` endpoint: `http://localhost:3000/ping/1.1.1.1`

# How to add my node to VasyaBot?
At first, you need to install NGINX, create reverse proxy for bot.
```
...
location  / {
    proxy_reverse http://localhost:3000;
}
...
```
Also you need SSL certificate. You can obtain a free one from Let's Encrypt.

And, finally, contact us using https://vk.me/dpkgsoft. Tell us:
- URL of Pinger (for example, https://pinger.dpud.dev/). Note that it is **public**.
- Location of the Pinger. We need city and the country. For example, *Moscow, Russia*.

We'll add your instance to the bot.

**Note** that you have to check this repository for updates and update your instance. If we find that your Pinger instance can't answer on some new method, we can delete your instance from database.