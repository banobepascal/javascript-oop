function Htmlelement() {
  this.click = function() {
    console.log("clicked");
  };
}

Htmlelement.prototype.focus = function() {
  console.log("focused");
};


function HtmlSelectElement(...items) {
    this.items = items

    this.addItems = function(item){
        items.push(item);
    }

    this.removeItems = function(item){
        items.pop(item);
    }
}

HtmlSelectElement.prototype = new Htmlelement();
// HtmlSelectElement.prototype = Object.create(Htmlelement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlSelectElement();
