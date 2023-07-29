
import puppeteer, { ConsoleMessage } from 'puppeteer';

(async () => {
    const wsChromeEndpointurl = 'ws://127.0.0.1:9222/devtools/browser/f2c0992f-7ca6-4708-bb0b-65b2cd40732f';
    const browser = await puppeteer.connect({
        browserWSEndpoint: wsChromeEndpointurl,
    });

    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 7000;
    page.setDefaultTimeout(timeout);

    
    const targetPage = page;
    await targetPage.setViewport({ "width": 917, "height": 969 })
    await targetPage.goto("https://labs.zetachain.com/swap");

    
    // page
    // .on('console', message => console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    // .on('pageerror', ({ message }) => console.log(message))
    // .on('response', response =>
    //   console.log(`${response.status()} ${response.url()}`))
    // .on('requestfailed', request =>
    //   console.log(`${request.failure().errorText} ${request.url()}`))

    // Listen for Page mouse move
    targetPage.on("console", consoleObj => {
        console.log(typeof(consoleObj))
        console.log(JSON.stringify(consoleObj))
        console.log(consoleObj)
    });

    // In Console of Chrome:
    // monitorEvents(document.body, 'mouse')
    // unmonitorEvents(document.body, 'mouse')
})().catch(err => {
    console.error(err);
    process.exit(1);
});
