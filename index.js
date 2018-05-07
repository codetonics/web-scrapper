const puppeteer = require('puppeteer');

async function getPage({
    url
}) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    await browser.close();

    return {
        html
    };
}

module.exports = {
    getPage
};