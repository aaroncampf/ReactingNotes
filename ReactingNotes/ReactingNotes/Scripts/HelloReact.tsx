/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="types/react-dom.d.ts" />


class Company {
    public ID: number
    public Name: string
    public Address: string
    public City: string
    public Phone: string
    public Zip: string
    public Misc: string
}

class Quote {
    public ID: number
    public Name: string
    public Date: Date
    public Lines: QuoteLine[]
}

class QuoteLine {
    public ID: number
    public Display: number
    public UNIT: string
    public COST: number
    public DESC : string
    public IsCentered : boolean
}



class QuoteDisplay extends React.Component<Quote, Quote> {
    render() {
        var Rows: JSX.Element[] = []
        for (var Item of this.props.Lines) {
            var Test =
                <tr>
                    <td>{Item.Display}</td>
                    <td>{Item.UNIT}</td>
                    <td>{Item.COST}</td>
                    <td>{Item.DESC}</td>
                    <td>{Item.IsCentered}</td>
                </tr>
            Rows.push(Test)
        }

        return(
            <table id={"QuoteDisplay-" + this.props.ID} className = "table-striped table-bordered">
                <tr><td colSpan={5} style = {{ "text-align": "center" }}><h3>{this.props.Name}</h3></td></tr>
                {Rows}
            </table>);
    }
}


class CompanyDisplay extends React.Component<Company, Company> {
    private ViewQuotes = (Current: CompanyDisplay) => { //TODO: Get help removing this BS because [this] is broken
        $("#CompanyDisplay-" + this.props.ID).append("<div id='fhhgk75d47' />")
        var LastQuoteElement = document.getElementById("fhhgk75d47")

        $.getJSON("/Companies/GetQuotes/" + this.props.ID,
            (data) => {              
                for (var Item of data) {
                    var Quote: Quote = Item

                    var T1 = new QuoteDisplay(Quote, this.context)
                    var Test = React.renderToString(
                        <QuoteDisplay ID = {Quote.ID} Name = {Quote.Name} Date = {Quote.Date} Lines = {Quote.Lines} />
                    );


                    /*
                    var s1 = React.renderToString(
                        <table id={"QuoteDisplay-" + Quote.ID} className = "table-striped table-bordered">
                            <tr><td colSpan={2} style = {{ "text-align": "center" }}><h3>{Quote.Name}</h3></td></tr>
                            <tr>
                                <td>Date</td>
                                <td>{Quote.Date}</td>
                            </tr>   
                        </table>
                    );
                    */
                    $("#fhhgk75d47").append(Test)
                }
            }
        )
    }

    render() {
        return (
            <table id={"CompanyDisplay-" + this.props.ID} className = "table-striped table-bordered">
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
                <tr>
                    <td colSpan={2}><a className = "btn btn-primary" href={"/Companies/Edit/" + this.props.ID}>Edit</a></td>
                </tr>
                <tr>
                    <td colSpan={2}><a className = "btn btn-primary" onClick= {() => this.ViewQuotes(this) }>View Quotes</a></td>
                </tr> 
            </table>);
    }
}

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
myRequest.open("GET", "/Companies/GetCompany/1")
myRequest.response



$.ajax("/Companies/GetCompany/1")


//$.ajax("/Companies/GetCompany/1").


/*
$.get("/Companies/GetCompany/1",
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
*/

$.getJSON("/Companies/GetCompany/1",
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