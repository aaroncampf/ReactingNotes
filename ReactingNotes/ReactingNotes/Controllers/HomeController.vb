﻿Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        Return View()
    End Function

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

        Dim Quote1 As New Quote With {.Name = "Quote1", .Date = Now}
        AJP.Quotes.Add(Quote1)


        db.Companies.Add(AJP)

        db.SaveChanges()
        Return Redirect("/Home")
    End Function




End Class
