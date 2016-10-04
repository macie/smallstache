function Smallstache(source) {
    this.template = source;
}

Smallstache.prototype.render = function(obj) {
    return this.template.replace(/{{\s*([\S|^}]+)\s*}}/g,
        function(substring, matched) { return obj[matched] });
};

module.exports = Smallstache;
