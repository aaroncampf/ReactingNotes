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
var Quote = (function () {
    function Quote() {
    }
    return Quote;
})();
var QuoteDisplay = (function (_super) {
    __extends(QuoteDisplay, _super);
    function QuoteDisplay() {
        _super.apply(this, arguments);
    }
    QuoteDisplay.prototype.render = function () {
        return (React.createElement("table", {"id": "QuoteDisplay-" + this.props.ID, "className": "table-striped table-bordered"}, React.createElement("tr", null, React.createElement("td", {"colSpan": 2, "style": { "text-align": "center" }}, React.createElement("h3", null, this.props.Name)))));
    };
    return QuoteDisplay;
})(React.Component);
var CompanyDisplay = (function (_super) {
    __extends(CompanyDisplay, _super);
    function CompanyDisplay() {
        var _this = this;
        _super.apply(this, arguments);
        this.ViewQuotes = function (Current) {
            //alert("Hello World")
            //var _this: CompanyDisplay
            $("#CompanyDisplay-" + _this.props.ID).append("<div id='fhhgk75d47' />");
            var LastQuoteElement = document.getElementById("fhhgk75d47");
            $.getJSON("/Companies/GetQuotes/" + _this.props.ID, function (data) {
                for (var _i = 0; _i < data.length; _i++) {
                    var Item = data[_i];
                    var Quote = Item;
                    var s1 = React.renderToString(React.createElement("table", {"id": "QuoteDisplay-" + Quote.ID, "className": "table-striped table-bordered"}, React.createElement("tr", null, React.createElement("td", {"colSpan": 2, "style": { "text-align": "center" }}, React.createElement("h3", null, Quote.Name))), React.createElement("tr", null, React.createElement("td", null, "Date"), React.createElement("td", null, Quote.Date))));
                    $("#fhhgk75d47").append(s1);
                }
            });
            //var Test =
            //    <table className = "table-striped table-bordered">
            //        </table>
            //$("#CompanyDisplay-" + this.props.ID).append("<div id='fhhgk75d47' />")
            //ReactDOM.render(Test, document.getElementById("fhhgk75d47"))
            //React.renderToStaticMarkup
            //$("#CompanyDisplay-" + Current.props.ID).append(React.__DOMServer.renderToStaticMarkup(Test));
        };
    }
    CompanyDisplay.prototype.render = function () {
        var _this = this;
        return (React.createElement("table", {"id": "CompanyDisplay-" + this.props.ID, "className": "table-striped table-bordered"}, React.createElement("tr", null, React.createElement("td", {"colSpan": 2, "style": { "text-align": "center" }}, React.createElement("h3", null, this.props.Name))), React.createElement("tr", null, React.createElement("td", null, "ID"), React.createElement("td", null, this.props.ID)), React.createElement("tr", null, React.createElement("td", null, "Address"), React.createElement("td", null, this.props.Address)), React.createElement("tr", null, React.createElement("td", null, "City"), React.createElement("td", null, this.props.City)), React.createElement("tr", null, React.createElement("td", null, "Phone"), React.createElement("td", null, this.props.Phone)), React.createElement("tr", null, React.createElement("td", null, "Zip"), React.createElement("td", null, this.props.Zip)), React.createElement("tr", null, React.createElement("td", null, "Misc"), React.createElement("td", null, this.props.Misc)), React.createElement("tr", null, React.createElement("td", {"colSpan": 2}, React.createElement("a", {"className": "btn btn-primary", "href": "/Companies/Edit/" + this.props.ID}, "Edit"))), React.createElement("tr", null, React.createElement("td", {"colSpan": 2}, React.createElement("a", {"className": "btn btn-primary", "onClick": function () { return _this.ViewQuotes(_this); }}, "View Quotes")))));
    };
    return CompanyDisplay;
})(React.Component);
//var CommentBox = React.createClass({
//    propTypes: {
//        Name: React.PropTypes.element.isRequired
//    },
//    render: function () {
//        return (
//            <div className="commentBox">
//                {this.props.Name}
//                Hello, world!I am a CommentBox.1
//                </div>
//        );
//    }
//});
var myRequest = new XMLHttpRequest();
myRequest.open("GET", "/Companies/GetCompany/1");
myRequest.response;
$.ajax("/Companies/GetCompany/1");
//$.ajax("/Companies/GetCompany/1").
$.get("/Companies/GetCompany/1", function (data) {
    ReactDOM.render(React.createElement(CompanyDisplay, {"ID": data.ID, "Name": data.Name, "Address": data.Address, "City": data.City, "Phone": data.Phone, "Zip": data.Zip, "Misc": data.Misc}), document.getElementById('content'));
});
$.getJSON("/Companies/GetCompany/1", function (data) {
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