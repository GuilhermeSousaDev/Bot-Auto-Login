const puppeteer = require('puppeteer');

class Puppeteer {
    async initialize() {
        const browser = await puppeteer.launch({ headless: false });

        const page = await browser.newPage();

        await page.goto('https://github.com/login');

        await page.waitForSelector('input[name="login"]');
        await page.type('input[name="login"]', process.env.APP_USERNAME, { delay: 100 });
        await page.waitForSelector('input[name="password"]');
        await page.type('input[name="password"]', process.env.APP_PASSWORD, { delay: 100 });
        await page.keyboard.press('Enter');

        await browser.close();
    }
}

module.exports = new Puppeteer();