function Smallstache(source) {
    this.template = source.match(/^[#|\.].*/g) ?
        window.document.querySelector(source) :  // source is selector
        source;                           // source is template
}

Smallstache.prototype.render = function(obj) {
    return this.template.replace(/{{\s*([\S|^}]+)\s*}}/g,
        function(substring, matched) { return obj[matched] });
};

module.exports = Smallstache;
