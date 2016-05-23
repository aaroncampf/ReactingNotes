/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="types/react-dom.d.ts" />

class ContactDisplay extends React.Component<Contact, Contact> {
    private ViewNotes = (Current: ContactDisplay): void => { //TODO: Get help removing this BS because [this] is broken
        $("#ContactDisplay-" + this.props.ID).append("<div id='fhhgk75d472' />")
        var Rows: JSX.Element[] = []
        for (var Item of this.props.Notes) {
            var Test =
                <tr>
                    <td>{Item.ID}</td>
                    <td>{Item.Date}</td>
                    <td>{Item.Title}</td>
                    <td>{Item.Text}</td>
                </tr>
            Rows.push(Test)
        }

        var Test1 = React.renderToString(
            <table id={"QuoteDisplay-" + this.props.ID} className = "table-striped table-bordered">
                <tbody>
                    <tr><td colSpan={5} style = {{ "text-align": "center" }}><h3>{this.props.Name}</h3></td></tr>
                    {Rows}
                </tbody>
            </table>)

        $("#fhhgk75d472").append(Test1)
    }

    render() {
        return (
            <table id={"ContactDisplay-" + this.props.ID} className = "table-striped table-bordered">
                <tbody>
                    <tr><td colSpan={2} style = {{ "text-align": "center" }}><h3>{this.props.Name}</h3></td></tr>
                    <tr>
                        <td>ID</td>
                        <td>{this.props.ID}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{this.props.Phone}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{this.props.Email}</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>{this.props.Position}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <a className = "btn btn-primary" onClick= {() => this.ViewNotes(this)}>View Notes</a>
                        //TODO: Get help getting this event to stay
                        </td> 
                    </tr> 
                </tbody>
            </table>);
    }
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
                <tbody>
                    <tr><td colSpan={5} style = {{ "text-align": "center" }}><h3>{this.props.Name}</h3></td></tr>
                    {Rows}
                </tbody>
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

                    var Test = React.renderToString(
                        <QuoteDisplay ID = {Quote.ID} Name = {Quote.Name} Date = {Quote.Date} Lines = {Quote.Lines} />
                    );
                    $("#fhhgk75d47").append(Test)
                }
            }
        )
    }

    private ViewContacts = (Current: CompanyDisplay) => { //TODO: Get help removing this BS because [this] is broken
        $("#CompanyDisplay-" + this.props.ID).append("<div id='fhhgk75d471' />")

        $.getJSON("/Companies/GetContacts/" + this.props.ID,
            (data) => {
                for (var Item of data) {
                    var Contact: Contact = Item

                    var Test = React.renderToString(
                        <ContactDisplay ID = {Contact.ID} Name = {Contact.Name} Email = {Contact.Email} Phone = {Contact.Phone} Position = {Contact.Position} Notes = {Contact.Notes} />
                    );
                    $("#fhhgk75d471").append(Test)
                }
            }
        )
    }

    render() {
        return (
            <table id={"CompanyDisplay-" + this.props.ID} className = "table-striped table-bordered">
                <tbody>
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
                        <td colSpan={2}><a className = "btn btn-primary" onClick= {() => this.ViewQuotes(this)}>View Quotes</a></td>
                    </tr> 
                    <tr>
                        <td colSpan={2}><a className = "btn btn-primary" onClick= {() => this.ViewContacts(this)}>View Contacts</a></td>
                    </tr> 
                </tbody>
            </table>);
    }
}


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