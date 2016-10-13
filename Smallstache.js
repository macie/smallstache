/*
    Smallstache - a JavaScript template engine.

    Parameters:
        source (string): A string with template source.

    Args:
        source (string): A string with template.

*/
function Smallstache(source) {
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

    return this.source.replace(/{{\s*([^}\s]+)\s*}}/g, fillTemplate);
};

module.exports = Smallstache;
