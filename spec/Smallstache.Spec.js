var Smallstache = require('../Smallstache.js');

describe('A Smallstache', function() {
    it('should take raw template', function() {
        var template = 'Once upon the {{ time }}...';

        var result = new Smallstache(template);

        expect(result.source).toEqual(template);
    });

    describe('should fill', function() {
        var template = new Smallstache();

        it('template with text', function() {
            template.source = 'Do {{ who }} feel {{ how }}?';
            var data = {who: 'I', how: 'lucky'};

            var result = template.fill(data);

            expect(result).toEqual('Do I feel lucky?');
        });

        it('template with numbers', function() {
            template.source = 'e^{{ exp }} = {{ product }}';
            var data = {exp: 0, product: 1.001};

            var result = template.fill(data);

            expect(result).toEqual('e^0 = 1.001');
        });

        it('template with date', function() {
            template.source = 'Now is {{ now }}';
            var now = new Date();
            var date = {now: now};

            var result = template.fill(date);

            expect(result).toEqual('Now is ' + now);
        });

        it('template with whitespaces in tags', function() {
            template.source = 'Ring-{{ say }}-{{say}}-{{say }}-{{  say}}eringe{{ say  }}!';
            var fox = {say: 'ding'};

            var result = template.fill(fox);

            expect(result).toEqual('Ring-ding-ding-ding-dingeringeding!');
        });

        it('template with partial object', function() {
            template.source = '{{ sth }} ipsum {{ else }} sit {{ what }}';
            var data = {sth: 'Lorem'};

            var result = template.fill(data);

            expect(result).toEqual('Lorem ipsum {{ else }} sit {{ what }}');
        });
    });
});
