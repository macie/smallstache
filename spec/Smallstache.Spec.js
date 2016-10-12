var Smallstache = require('../Smallstache.js');

describe('A Smallstache', function() {
    it('should take raw template', function() {
        var template = 'Once upon the {{ time }}...';

        var result = new Smallstache(template);

        expect(result.template).toEqual(template);
    });

    describe('should render', function() {
        it('template with text', function() {
            var template = 'Do {{ who }} feel {{ how }}?';
            var data = {who: 'I', how: 'lucky'};
            var quote = new Smallstache(template);

            var result = quote.render(data);

            expect(result).toEqual('Do I feel lucky?');
        });

        it('template with numbers', function() {
            var template = 'e^{{ exp }} = {{ product }}';
            var data = {exp: 2, product: 7.39};
            var equation = new Smallstache(template);

            var result = equation.render(data);

            expect(result).toEqual('e^2 = 7.39');
        });

        it('template with date', function() {
            var template = 'Now is {{ now }}';
            var now = new Date();
            var date = {now: now};
            var equation = new Smallstache(template);

            var result = equation.render(date);

            expect(result).toEqual('Now is ' + now);
        });

        it('template with whitespaces in tags', function() {
            var template = 'Ring-{{ say }}-{{say}}-{{say }}-{{  say}}eringe{{ say  }}!';
            var fox = {say: 'ding'};
            var quote = new Smallstache(template);

            var result = quote.render(fox);

            expect(result).toEqual('Ring-ding-ding-ding-dingeringeding!');
        });

        it('template with partial object', function() {
            var template = '{{ sth }} ipsum {{ else }} sit {{ what }}';
            var filler = {sth: 'Lorem'};
            var text = new Smallstache(template);

            var result = text.render(filler);

            expect(result).toEqual('Lorem ipsum {{ else }} sit {{ what }}');
        });
    });
});
