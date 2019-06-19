'use strict';


module.exports = {

    login : (req, res) => {
        const { body: { email, password } } = req;
        const puppeteer = require('puppeteer');

        const options = {
        path: 'a-header.png',
        fullPage: true
        }

        puppeteer.launch().then(async browser => {
        const page = await browser.newPage();

        await page.goto('https://ecolex.a3hrgo.com');

        await page.type('input#Login', email);
        await page.type('input#Password', password);

        const a = await page.click('input.btnLogin');
        await page.screenshot(options);
        await browser.close();
        });

    }
};