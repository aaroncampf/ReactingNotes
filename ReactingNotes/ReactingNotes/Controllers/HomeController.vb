''' <summary>testst</summary>
Public Class HomeController
	Inherits System.Web.Mvc.Controller

	Function Index() As ActionResult
		Return View()
	End Function

	''' <summary>
	''' 
	''' </summary>
	''' <returns></returns>
	Function About() As ActionResult
		ViewData("Message") = "Your application description page."

		Return View()
	End Function

	Function Contact() As ActionResult
		ViewData("Message") = "Your contact page."

		Return View()
	End Function

	Function SeedDatabase() As ActionResult
		Dim db As New DatabaseContainer
		db.Database.Delete()
		db.Database.Create()


		Dim AJP As New Company With {
			.Name = "AJP Northwest",
			.Address = "1120 SE Morrison St",
			.City = "Portland",
			.Phone = "(503) 810-2994",
			.Zip = "97214"
		}

		Dim Contact1 As New Contact With {.Name = "Aaron Campf", .Phone = "(503) 929-8022", .Email = "aaroncampf@gmail.com", .Position = "Lead Developer"}
		Contact1.Notes.Add(New Note With {.Date = Now, .Title = "Test", .Text = "Hello World"})
		AJP.Contacts.Add(Contact1)

		Dim Quote1 As New Quote With {.Name = "Quote1", .Date = Now}
		Quote1.Lines.Add(New QuoteLine With {.Display = 1, .UNIT = "Box", .COST = 2.52, .DESC = "Tissues", .IsCentered = False})
		AJP.Quotes.Add(Quote1)

		Dim Quote2 As New Quote With {.Name = "Quote2", .Date = Now}
		AJP.Quotes.Add(Quote2)

		db.Companies.Add(AJP)

		db.SaveChanges()
		Return Redirect("/Home")
	End Function




End Class
