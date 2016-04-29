/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
///// <reference path="types/react-dom.d.ts" />


var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello, world!I am a CommentBox.1
            </div>
        );
    }
});



ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);