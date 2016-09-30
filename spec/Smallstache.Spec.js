var Smallstache = require('../Smallstache.js');

describe('A Smallstache', function() {
    it('should take raw template', function() {
        var template = 'Once upon the {{ time }}...';

        var result = new Smallstache(template);

        expect(result.template).toEqual(template);
    });

    xit('should take class selector', function() {
        var template = '.js-list-item';

        var result = new Smallstache(template);

        expect(result.template).toEqual(template);
    });
});
