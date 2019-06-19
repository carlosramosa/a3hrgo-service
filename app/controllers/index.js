'use strict';

const { generateResponse } = require('../utils');

module.exports = {

    login : (req, res) => {
        const { body: { email, password } } = req;
        const puppeteer = require('puppeteer');

        puppeteer.launch().then(async browser => {
        const page = await browser.newPage();

        await page.goto('https://ecolex.a3hrgo.com');

        await page.type('input#Login', email);
        await page.type('input#Password', password);

        //let ok;

        const [finalResponse, nothing ] = await Promise.all([
            page.waitForResponse((response) => {
                return response.url() === 'https://ecolex.a3hrgo.com/Account/Login?ReturnUrl=%2F';
            }),
            await page.click('input.btnLogin')
        ]);

        if (finalResponse.status() === 302) {
            console.log('Login OK');
            generateResponse(res)({ ok: true, message: 'Login OK' });
        } else {
            console.log('Login ERROR');
            generateResponse(res)({ ok: false, message: 'Login KO' });
        }

        await browser.close()
        
        // const options = {
        // path: 'a-header.png',
        // fullPage: true
        // }
        // await page.screenshot(options);
        // await browser.close();
        });

    }
};