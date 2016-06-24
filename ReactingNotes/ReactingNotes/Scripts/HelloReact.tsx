/// <reference path="types/react.d.ts" />
/// <reference path="types/react-global.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="types/react-dom.d.ts" />



//********************************************************************
// Get Chris to review this code and tell me how to do it better
//********************************************************************

module Helpers {
	export function CorrectDates(value: string): string {
		var d = /\/Date\((\d*)\)\//.exec(value);
		return (d) ? new Date(+d[1]).toDateString() : value;
	}
}


class ContactDisplay extends React.Component<Contact, Contact> {
	Get_BaseName() { return "ContactDisplay" + this.props.ID }
	private Settings = { IsOpen_ViewNotes: false }

	private ViewNotes = (Current: ContactDisplay): void => { //TODO: Get help removing this BS because [this] is broken
		var Rows: JSX.Element[] = [] //<= Ask Chris how to inline this
		for (var Item of this.props.Notes) {
			var Test =
				<tr>
					<td>{Item.ID}</td>
					<td>{Helpers.CorrectDates(Item.Date.toString())}</td>
					<td>{Item.Title}</td>
					<td>{Item.Text}</td>
				</tr>
			Rows.push(Test)
		}

		var Table = 
			<table id={"QuoteDisplay-" + this.props.ID} className = "table-striped table-bordered">
				<tbody>
					<tr><td colSpan={5} style = {{ "text-align": "center" }}><h3>{this.props.Name}</h3></td></tr>
					{Rows}
				</tbody>
			</table>
		
		if (this.Settings.IsOpen_ViewNotes) {
			ReactDOM.render(<div></div>, document.getElementById(this.Get_BaseName() + "_ViewNotes"))
			$('#' + this.Get_BaseName() + "_Button_ViewNotes").text("View Notes")
		}
		else {
			ReactDOM.render(Table, document.getElementById(this.Get_BaseName() + "_ViewNotes"))
			$('#' + this.Get_BaseName() + "_Button_ViewNotes").text("Close Notes")
		}

		this.Settings.IsOpen_ViewNotes = !this.Settings.IsOpen_ViewNotes
	}

	render() {
		return (
			<div id={this.Get_BaseName() }>
				<table className = "table-striped table-bordered">
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
								<a id={ this.Get_BaseName() + "_Button_ViewNotes" } className = "btn btn-primary" onClick= {() => this.ViewNotes(this)}>View Notes</a>
							//TODO: Get help getting this event to stay
							</td> 
						</tr> 
					</tbody>
				</table>
				<div id={ this.Get_BaseName() + "_ViewNotes" }></div>
			</div>
		);
	}
}

class QuoteDisplay extends React.Component<Quote, Quote> {
	render() {
		var Rows: JSX.Element[] = [] //<= Ask Chris how to inline this
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
	Get_BaseName() { return "CompanyDisplay" + this.props.ID }
	private Settings = { IsOpen_ViewContacts: false, IsOpen_ViewQuotes: false }

	private ViewQuotes = (Current: CompanyDisplay) => { //TODO: Get help removing this BS because [this] is broken
		$.getJSON("/Companies/GetQuotes/" + this.props.ID,
			(data) => {
				var Quotes: JSX.Element[] = [] //<= Ask Chris how to inline this             
				for (var Item of data) {
					var Quote: Quote = Item
					Quotes.push(
						<QuoteDisplay ID = {Quote.ID} Name = {Quote.Name} Date = {Quote.Date} Lines = {Quote.Lines} />
					);
				}

				if (this.Settings.IsOpen_ViewQuotes) {
					ReactDOM.render(<div></div>, document.getElementById(this.Get_BaseName() + "_ViewQuotes"))
					$("#" + this.Get_BaseName() + "_Button_ViewQuotes").text("View Quotes")
				}
				else {
					ReactDOM.render(<div>{Quotes}</div>, document.getElementById(this.Get_BaseName() + "_ViewQuotes"))
					$("#" + this.Get_BaseName() + "_Button_ViewQuotes").text("Close Quotes")
				}

				this.Settings.IsOpen_ViewQuotes = !this.Settings.IsOpen_ViewQuotes				
			}
		)
	}

	private ViewContacts = (Current: CompanyDisplay) => { //TODO: Get help removing this BS because [this] is broken
		$.getJSON("/Companies/GetContacts/" + this.props.ID,
			(data) => {
				var Contacts: JSX.Element[] = [] //<= Ask Chris how to inline this
				for (var Item of data) {
					var Contact: Contact = Item
					Contacts.push(
						<ContactDisplay ID = {Contact.ID} Name = {Contact.Name} Email = {Contact.Email} Phone = {Contact.Phone} Position = {Contact.Position} Notes = {Contact.Notes} />
					);
				}

				if (this.Settings.IsOpen_ViewContacts) {
					ReactDOM.render(<div></div>, document.getElementById(this.Get_BaseName() + "_ViewContacts"))
					$("#" + this.Get_BaseName() + "_Button_ViewContacts").text("View Contacts")
				}
				else {
					ReactDOM.render(<div>{Contacts}</div>, document.getElementById(this.Get_BaseName() + "_ViewContacts"))
					$("#" + this.Get_BaseName() + "_Button_ViewContacts").text("Close Contacts")
				}

				this.Settings.IsOpen_ViewContacts = !this.Settings.IsOpen_ViewContacts				
			}
		)
	}

	render() {
		return (
			<div id = {this.Get_BaseName()}>
				<table className = "table-striped table-bordered">
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
							<td colSpan={2}>
								<a id = { this.Get_BaseName() + "_Button_ViewQuotes" } className = "btn btn-primary" onClick= {() => this.ViewQuotes(this) }>View Quotes</a>
							</td>
						</tr> 
						<tr>
							<td colSpan={2}>
								<a id = { this.Get_BaseName() + "_Button_ViewContacts" } className = "btn btn-primary" onClick= {() => this.ViewContacts(this) }>View Contacts</a>
							</td>
						</tr> 
					</tbody>
				</table>

				<div id = { this.Get_BaseName() + "_ViewQuotes" }></div>
				<div id = { this.Get_BaseName() + "_ViewContacts" }></div>
			</div>
		);
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