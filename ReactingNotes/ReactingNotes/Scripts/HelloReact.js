/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
///// <reference path="types/react-dom.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());
var HelloMessage = (function (_super) {
    __extends(HelloMessage, _super);
    function HelloMessage() {
        _super.apply(this, arguments);
    }
    HelloMessage.prototype.render = function () {
        return React.createElement("div", null, "Hello ", this.props.Name);
    };
    return HelloMessage;
}(React.Component));
var CommentBox = React.createClass({
    propTypes: {
        Name: React.PropTypes.element.isRequired
    },
    render: function () {
        return (React.createElement("div", {className: "commentBox"}, this.props.Name, "Hello, world!I am a CommentBox.1"));
    }
});
ReactDOM.render(React.createElement(HelloMessage, {Name: "Sebastian"}), document.getElementById('content'));
//# sourceMappingURL=HelloReact.js.map