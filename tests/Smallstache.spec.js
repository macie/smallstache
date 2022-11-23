import Smallstache from '../src/Smallstache';

describe('A Smallstache', () => {
    it('should use string template', () => {
        const source = 'Once upon the {{ time }}...';

        const template = new Smallstache(source);

        expect(template.source).toEqual(source);
    });

    describe('should throw TypeError when template source is', () => {
        it('undefined', () => {
            function createTemplate() {
                return new Smallstache();
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('null', () => {
            function createTemplate() {
                const source = null;
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('number', () => {
            function createTemplate() {
                const source = 123;
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('array', () => {
            function createTemplate() {
                const source = [1, '2', {}];
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });

        it('object', () => {
            function createTemplate() {
                const source = {};
                return new Smallstache(source);
            }

            expect(createTemplate).toThrowError(TypeError);
        });
    });

    describe('should fill template with', () => {
        it('text', () => {
            const template = new Smallstache('Do {{ who }} feel {{ how }}?');
            const data = {who: 'I', how: 'lucky'};

            const result = template.fill(data);

            expect(result).toEqual('Do I feel lucky?');
        });

        it('numbers', () => {
            const template = new Smallstache('e^{{ exp }} = {{ product }}');
            const data = {exp: 0, product: 1.001};

            const result = template.fill(data);

            expect(result).toEqual('e^0 = 1.001');
        });

        it('date', () => {
            const template = new Smallstache('Now is {{ now }}');
            const now = new Date();
            const date = {now: now};

            const result = template.fill(date);

            expect(result).toEqual('Now is ' + now);
        });

        it('partial object', () => {
            const template = new Smallstache('{{ sth }} ipsum {{ else }} sit {{ what }}');
            const data = {sth: 'Lorem'};

            let result = template.fill(data);

            expect(result).toEqual('Lorem ipsum {{ else }} sit {{ what }}');
        });
    });

    describe('should deal with template which has', () => {
        it('tags with no/multiple whitespaces', () => {
            const template = new Smallstache('Ring-{{ say }}-{{say}}-{{say }}-{{  say}}eringe{{ say  }}!');
            const fox = {say: 'ding'};

            let result = template.fill(fox);

            expect(result).toEqual('Ring-ding-ding-ding-dingeringeding!');
        });

        it('nested braces', () => {
            const template = new Smallstache('This is so {{{{ wrong }}}}');
            const data = {wrong: 'good'};

            const result = template.fill(data);

            expect(result).toEqual('This is so {{good}}');
        });

        it('unbalanced braces', () => {
            const template = new Smallstache('Something went {{{{{ how }}');
            const data = {how: 'wrong'};

            const result = template.fill(data);

            expect(result).toEqual('Something went {{{wrong');
        });
    });
});

