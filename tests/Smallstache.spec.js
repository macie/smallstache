import Smallstache from '../src/Smallstache';

describe('A Smallstache', () => {
    it('should take string source', () => {
        const source = 'Once upon the {{ time }}...';

        let template = new Smallstache(source);

        expect(template.source).toEqual(source);
    });

    describe('should throw TypeError when template source', () => {
        it('is undefined', () => {
            function createTemplate() {
                return new Smallstache();
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('is null', () => {
            function createTemplate() {
                const source = null;
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('is number', () => {
            function createTemplate() {
                const source = 123;
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('is array', () => {
            function createTemplate() {
                const source = [1, '2', {}];
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('is object', () => {
            function createTemplate() {
                const source = {};
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });
    });

    describe('should fill', () => {
        let template = new Smallstache('');

        it('template with text', () => {
            template.source = 'Do {{ who }} feel {{ how }}?';
            let data = {who: 'I', how: 'lucky'};

            let result = template.fill(data);

            expect(result).toEqual('Do I feel lucky?');
        });

        it('template with numbers', () => {
            template.source = 'e^{{ exp }} = {{ product }}';
            let data = {exp: 0, product: 1.001};

            let result = template.fill(data);

            expect(result).toEqual('e^0 = 1.001');
        });

        it('template with date', () => {
            template.source = 'Now is {{ now }}';
            let now = new Date();
            let date = {now: now};

            let result = template.fill(date);

            expect(result).toEqual('Now is ' + now);
        });

        it('template with whitespaces in tags', () => {
            template.source = 'Ring-{{ say }}-{{say}}-{{say }}-{{  say}}eringe{{ say  }}!';
            let fox = {say: 'ding'};

            let result = template.fill(fox);

            expect(result).toEqual('Ring-ding-ding-ding-dingeringeding!');
        });

        it('template with partial object', () => {
            template.source = '{{ sth }} ipsum {{ else }} sit {{ what }}';
            let data = {sth: 'Lorem'};

            let result = template.fill(data);

            expect(result).toEqual('Lorem ipsum {{ else }} sit {{ what }}');
        });
    });
});
