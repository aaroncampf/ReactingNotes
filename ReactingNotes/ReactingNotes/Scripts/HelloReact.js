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
        return (React.createElement("div", null, "Hello ", this.props.Name));
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