/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
///// <reference path="types/react-dom.d.ts" />


class Company {
    public ID: Number
    public Name: String
    public Address: String
    public City: String
    public Phone: String
    public Zip: String
    public Misc: String
}



class CompanyDisplay extends React.Component<Company, Company> {
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


$.getJSON("/Home/GetCustomer",
    (data) => {
        data.tostring();
    }
);

ReactDOM.render(
    <CompanyDisplay
        ID="0"
        Name="Sebastian"
    />,
    document.getElementById('content')
);