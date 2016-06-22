/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="types/react-dom.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ContactDisplay = (function (_super) {
    __extends(ContactDisplay, _super);
    function ContactDisplay() {
        var _this = this;
        _super.apply(this, arguments);
        this.ViewNotes = function (Current) {
            $("#" + _this.Get_BaseName()).append("<div id='fhhgk75d472' />");
            var Rows = []; //<= Ask Chris how to inline this
            for (var _i = 0, _a = _this.props.Notes; _i < _a.length; _i++) {
                var Item = _a[_i];
                var Test = React.createElement("tr", null, React.createElement("td", null, Item.ID), React.createElement("td", null, Item.Date), React.createElement("td", null, Item.Title), React.createElement("td", null, Item.Text));
                Rows.push(Test);
            }
            var Table = React.createElement("table", {"id": "QuoteDisplay-" + _this.props.ID, "className": "table-striped table-bordered"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {"colSpan": 5, "style": { "text-align": "center" }}, React.createElement("h3", null, _this.props.Name))), Rows));
            ReactDOM.render(Table, document.getElementById(_this.Get_BaseName() + "_ViewNotes"));
        };
    }
    ContactDisplay.prototype.Get_BaseName = function () { return "ContactDisplay" + this.props.ID; };
    ContactDisplay.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {"id": this.Get_BaseName()}, React.createElement("table", {"className": "table-striped table-bordered"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {"colSpan": 2, "style": { "text-align": "center" }}, React.createElement("h3", null, this.props.Name))), React.createElement("tr", null, React.createElement("td", null, "ID"), React.createElement("td", null, this.props.ID)), React.createElement("tr", null, React.createElement("td", null, "Phone"), React.createElement("td", null, this.props.Phone)), React.createElement("tr", null, React.createElement("td", null, "Email"), React.createElement("td", null, this.props.Email)), React.createElement("tr", null, React.createElement("td", null, "Position"), React.createElement("td", null, this.props.Position)), React.createElement("tr", null, React.createElement("td", {"colSpan": 2}, React.createElement("a", {"className": "btn btn-primary", "onClick": function () { return _this.ViewNotes(_this); }}, "View Notes"), "//TODO: Get help getting this event to stay")))), React.createElement("div", {"id": this.Get_BaseName() + "_ViewNotes"})));
    };
    return ContactDisplay;
})(React.Component);
var QuoteDisplay = (function (_super) {
    __extends(QuoteDisplay, _super);
    function QuoteDisplay() {
        _super.apply(this, arguments);
    }
    QuoteDisplay.prototype.render = function () {
        var Rows = []; //<= Ask Chris how to inline this
        for (var _i = 0, _a = this.props.Lines; _i < _a.length; _i++) {
            var Item = _a[_i];
            var Test = React.createElement("tr", null, React.createElement("td", null, Item.Display), React.createElement("td", null, Item.UNIT), React.createElement("td", null, Item.COST), React.createElement("td", null, Item.DESC), React.createElement("td", null, Item.IsCentered));
            Rows.push(Test);
        }
        return (React.createElement("table", {"id": "QuoteDisplay-" + this.props.ID, "className": "table-striped table-bordered"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {"colSpan": 5, "style": { "text-align": "center" }}, React.createElement("h3", null, this.props.Name))), Rows)));
    };
    return QuoteDisplay;
})(React.Component);
var CompanyDisplay = (function (_super) {
    __extends(CompanyDisplay, _super);
    function CompanyDisplay() {
        var _this = this;
        _super.apply(this, arguments);
        this.ViewQuotes = function (Current) {
            $.getJSON("/Companies/GetQuotes/" + _this.props.ID, function (data) {
                var Quotes = []; //<= Ask Chris how to inline this             
                for (var _i = 0; _i < data.length; _i++) {
                    var Item = data[_i];
                    var Quote = Item;
                    Quotes.push(React.createElement(QuoteDisplay, {"ID": Quote.ID, "Name": Quote.Name, "Date": Quote.Date, "Lines": Quote.Lines}));
                    ReactDOM.render(React.createElement("div", null, Quotes), document.getElementById(_this.Get_BaseName() + "_ViewQuotes"));
                }
            });
        };
        this.ViewContacts = function (Current) {
            $.getJSON("/Companies/GetContacts/" + _this.props.ID, function (data) {
                var Contacts = []; //<= Ask Chris how to inline this
                for (var _i = 0; _i < data.length; _i++) {
                    var Item = data[_i];
                    var Contact = Item;
                    Contacts.push(React.createElement(ContactDisplay, {"ID": Contact.ID, "Name": Contact.Name, "Email": Contact.Email, "Phone": Contact.Phone, "Position": Contact.Position, "Notes": Contact.Notes}));
                    ReactDOM.render(React.createElement("div", null, Contacts), document.getElementById(_this.Get_BaseName() + "_ViewContacts"));
                }
            });
        };
    }
    CompanyDisplay.prototype.Get_BaseName = function () { return "CompanyDisplay" + this.props.ID; };
    CompanyDisplay.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", {"id": this.Get_BaseName()}, React.createElement("table", {"className": "table-striped table-bordered"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {"colSpan": 2, "style": { "text-align": "center" }}, React.createElement("h3", null, this.props.Name))), React.createElement("tr", null, React.createElement("td", null, "ID"), React.createElement("td", null, this.props.ID)), React.createElement("tr", null, React.createElement("td", null, "Address"), React.createElement("td", null, this.props.Address)), React.createElement("tr", null, React.createElement("td", null, "City"), React.createElement("td", null, this.props.City)), React.createElement("tr", null, React.createElement("td", null, "Phone"), React.createElement("td", null, this.props.Phone)), React.createElement("tr", null, React.createElement("td", null, "Zip"), React.createElement("td", null, this.props.Zip)), React.createElement("tr", null, React.createElement("td", null, "Misc"), React.createElement("td", null, this.props.Misc)), React.createElement("tr", null, React.createElement("td", {"colSpan": 2}, React.createElement("a", {"className": "btn btn-primary", "href": "/Companies/Edit/" + this.props.ID}, "Edit"))), React.createElement("tr", null, React.createElement("td", {"colSpan": 2}, React.createElement("a", {"className": "btn btn-primary", "onClick": function () { return _this.ViewQuotes(_this); }}, "View Quotes"))), React.createElement("tr", null, React.createElement("td", {"colSpan": 2}, React.createElement("a", {"className": "btn btn-primary", "onClick": function () { return _this.ViewContacts(_this); }}, "View Contacts"))))), React.createElement("div", {"id": this.Get_BaseName() + "_ViewQuotes"}), React.createElement("div", {"id": this.Get_BaseName() + "_ViewContacts"})));
    };
    return CompanyDisplay;
})(React.Component);
$.getJSON("/Companies/GetCompany/1", function (data) {
    ReactDOM.render(React.createElement(CompanyDisplay, {"ID": data.ID, "Name": data.Name, "Address": data.Address, "City": data.City, "Phone": data.Phone, "Zip": data.Zip, "Misc": data.Misc}), document.getElementById('content'));
});
//# sourceMappingURL=HelloReact.js.map