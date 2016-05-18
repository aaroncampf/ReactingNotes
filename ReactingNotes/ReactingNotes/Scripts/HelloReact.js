/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
///// <reference path="types/react-dom.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Company = (function () {
    function Company() {
    }
    return Company;
})();
var CompanyDisplay = (function (_super) {
    __extends(CompanyDisplay, _super);
    function CompanyDisplay() {
        _super.apply(this, arguments);
    }
    CompanyDisplay.prototype.render = function () {
        return (React.createElement("table", {"className": "table-striped table-bordered"}, React.createElement("tr", null, React.createElement("td", {"colSpan": 2, "style": { "text-align": "center" }}, React.createElement("h3", null, this.props.Name))), React.createElement("tr", null, React.createElement("td", null, "ID"), React.createElement("td", null, this.props.ID)), React.createElement("tr", null, React.createElement("td", null, "Address"), React.createElement("td", null, this.props.Address)), React.createElement("tr", null, React.createElement("td", null, "City"), React.createElement("td", null, this.props.City)), React.createElement("tr", null, React.createElement("td", null, "Phone"), React.createElement("td", null, this.props.Phone)), React.createElement("tr", null, React.createElement("td", null, "Zip"), React.createElement("td", null, this.props.Zip)), React.createElement("tr", null, React.createElement("td", null, "Misc"), React.createElement("td", null, this.props.Misc))));
    };
    return CompanyDisplay;
})(React.Component);
var CommentBox = React.createClass({
    propTypes: {
        Name: React.PropTypes.element.isRequired
    },
    render: function () {
        return (React.createElement("div", {"className": "commentBox"}, this.props.Name, "Hello, world!I am a CommentBox.1"));
    }
});
$.getJSON("/Home/GetCompany/1", function (data) {
    ReactDOM.render(React.createElement(CompanyDisplay, {"ID": data.ID, "Name": data.Name, "Address": data.Address, "City": data.City, "Phone": data.Phone, "Zip": data.Zip, "Misc": data.Misc}), document.getElementById('content'));
});
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
//# sourceMappingURL=HelloReact.js.map