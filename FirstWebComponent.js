class FirstWebComponent extends HTMLElement {
  constructor() {
    super();
    // 创建一个 shadow root
    var shadow = this.attachShadow({ mode: "open" });

    var attrText = this.getAttribute("text");

    //创建root下的img元素
    var p = document.createElement("p");

    p.style.borderBottom = "1px solid green";

    p.innerHTML = attrText;

    //创建root下的textarea
    var textarea = document.createElement("textarea");

    textarea.innerHTML = attrText;

    //插入root

    shadow.appendChild(p);
    shadow.appendChild(textarea);

    textarea.addEventListener("keyup", function () {
      var t = textarea.value;
      p.innerHTML = t;
    });
  }
}

customElements.define("first-web-component", FirstWebComponent);
