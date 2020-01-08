function Htmlelement() {
  this.click = function() {
    console.log("clicked");
  };
}

Htmlelement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(...items) {
  this.items = items;

  this.addItems = function(item) {
    items.push(item);
  };

  this.removeItems = function(item) {
    items.pop(item);
  };

  this.render = function() {
    return `
          <select>${this.items
            .map(
              item => `
          <option>${item}</option>`
            )
            .join("")} </select>
          `;
  };
}

HtmlSelectElement.prototype = new Htmlelement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlSelectElement();

function HtmlImageElement(src) {
  this.src = src;

  this.render = function() {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new Htmlelement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const s = new HtmlImageElement();
