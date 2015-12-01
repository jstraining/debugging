module.exports = {
    'Google search return list of results': function (browser) {
        browser
            .maximizeWindow()
            .url('https://www.google.com.ua');

        browser
            .waitForElementVisible('body', 15000, function () {
                console.log('page is loaded');
            })
            .setValue('#lst-ib', 'nightwatchjs')
            .pause(1000)
            .click('button[class=lsb]')
            .pause(1000)
            .expect.element('div[class=srg]').text.to.contain('Node.js powered End-to-End testing framework');
    },

    'Change google page': function (browser) {
        browser
            .execute(function (data) {
                var results = document.querySelector(data);
                console.info(data);
                results.innerHTML = 'empty list';
            }, ['div[class=srg]'], function (result) {
                console.log(result);
            })
            .expect.element('div[class=srg]').text.to.equal('empty list');
    },

    after: function(browser) {
        browser.end();
    }
};