/*
    Smallstache - a JavaScript template engine.

    Attributes:
        source (string): A string with template source.

    Args:
        source (string): A string with template.

    Raise:
        A TypeError when source is not a string.
*/
function Smallstache(source) {
    if (typeof source !== 'string') {
        throw new TypeError('Template source must be a string');
    }

    this.source = source;
}

/*
    Fill template with data object.

    Args:
        data (object): An object with data for template filling.

    Returns:
        A string with tags replaced by corresponding data.
*/
Smallstache.prototype.fill = function(data) {
    function fillTemplate(tag, name) {
        return (data[name] != null) ? data[name] : tag;
    }

    return this.source.replace(/{{\s*([^{}\s]+)\s*}}/g, fillTemplate);
};

export { Smallstache as default };

