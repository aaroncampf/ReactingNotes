/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
///// <reference path="types/react-dom.d.ts" />


class Customer {
    public ID: Number
    public Name: String
    public Address: String
    public City: String
    public Phone: String
    public Zip: String
    public Misc: String
}



class HelloMessage extends React.Component<Customer, Customer> {
    render() {
        return(
            <div>
                Hello {this.props.Name}
            </div>);
    }
}

var CommentBox = React.createClass({
    propTypes: {
        Name: React.PropTypes.element.isRequired
    },
    render: function () {
        return (
            <div className="commentBox">
                {this.props.Name}              
                Hello, world!I am a CommentBox.1
            </div>
        );
    }
});


ReactDOM.render(
    <HelloMessage Name="Sebastian"/>,
    document.getElementById('content')
);