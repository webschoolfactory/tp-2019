var assert = require('assert');

describe('DuckDuckGo search', function() {
    it('searches for WebdriverIO', function() {
        browser.url('http://localhost:5000/');
        var title = browser.getTitle();
        console.log('Title is: ' + title);
        assert.strictEqual(title, 'Home - Hackathon Starter');
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });
});