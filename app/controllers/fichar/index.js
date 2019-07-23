'use strict';

const { generateResponse } = require('../../utils');
const puppeteer = require('puppeteer');

module.exports = {

    login : ({ body: { nif, password } }, res) => {

        puppeteer.launch().then(async browser => {
            const page = await browser.newPage();

            await page.goto('https://ecolex.a3hrgo.com');

            await page.type('input#Login', nif);
            await page.type('input#Password', password);

            const [finalResponse, nothing ] = await Promise.all([
                page.waitForResponse((response) => {
                    return response.url() === 'https://ecolex.a3hrgo.com/Account/Login?ReturnUrl=%2F';
                }),
                page.click('input.btnLogin')
            ]);

            if (finalResponse.status() === 302) {
                console.log('Login OK');
                generateResponse(res)({ ok: true, message: 'Login OK' });
            } else {
                console.log('Login ERROR');
                generateResponse(res)({ ok: false, message: 'Login KO' });
            }

            await Promise.all([
                page.goto('https://ecolex.a3hrgo.com/Fichajes/CrearFichajes/0'),
                page.waitForNavigation({ waitUntil: 'load' })
            ]);
        
            // do report
            await page.click('button#btnGuardar');
            console.log('Fichaje OK');
        
            await browser.close()
            
        });

    }
};