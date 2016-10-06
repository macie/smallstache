function Smallstache(source) {
    this.template = source;
}

Smallstache.prototype.render = function(data) {
    function fillTemplate(tag, name) {
        return (data[name] != null) ? data[name] : tag;
    }

    return this.template.replace(/{{\s*([^}\s]+)\s*}}/g, fillTemplate);
};

module.exports = Smallstache;
