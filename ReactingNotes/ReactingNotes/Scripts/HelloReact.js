/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
///// <reference path="types/react-dom.d.ts" />
var CommentBox = React.createClass({
    render: function () {
        return (React.createElement("div", {className: "commentBox"}, "Hello, world!I am a CommentBox.1"));
    }
});
ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));
//# sourceMappingURL=HelloReact.js.map