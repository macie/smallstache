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

    describe('should render template with', function() {
        it('data object', function() {
            var template = 'Do {{ who }} feel {{ how }}?';
            var data = {who: 'I', how: 'lucky'};
            var quote = new Smallstache(template);

            var result = quote.render(data);

            expect(result).toEqual('Do I feel lucky?');
        });
    });
});
