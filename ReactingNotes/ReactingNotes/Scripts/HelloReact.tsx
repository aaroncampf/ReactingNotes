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
            <table className = "table-striped table-bordered">
                <tr><td colSpan={2} style = {{ "text-align": "center" }}><h3>{this.props.Name}</h3></td></tr>
                <tr>
                    <td>ID</td>
                    <td>{this.props.ID}</td>
                </tr>       
                <tr>
                    <td>Address</td>
                    <td>{this.props.Address}</td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{this.props.City}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{this.props.Phone}</td>
                </tr>
                <tr>
                    <td>Zip</td>
                    <td>{this.props.Zip}</td>
                </tr>
                <tr>
                    <td>Misc</td>
                    <td>{this.props.Misc}</td>
                </tr>
            </table>);
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


$.getJSON("/Home/GetCompany/1",
    (data) => {
        ReactDOM.render(
            <CompanyDisplay
                ID= {data.ID}
                Name={data.Name}
                Address = {data.Address}
                City = {data.City}
                Phone ={data.Phone}
                Zip={data.Zip}
                Misc= {data.Misc}
                />,
            document.getElementById('content')
        );
    }
);



//ReactDOM.render(
//    <CompanyDisplay
//        ID={1}
//        Name="Sebastian"
//        Address = ""
//        City = "Portland"
//        Phone =""
//        Zip=""
//        Misc= ""
//    />,
//    document.getElementById('content')
//);