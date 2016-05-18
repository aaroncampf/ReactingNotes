Public Class HomeController
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

        db.Companies.Add(AJP)

        db.SaveChanges()
        Return Redirect("/Home")
    End Function


    Public Function GetCompany(ID As Integer) As ActionResult
        Dim db As New DatabaseContainer

        Return Json(
            db.Companies.Find(ID),
            JsonRequestBehavior.AllowGet
        )

        'Return Json(
        '    New Company With {.Name = "AJP Northwest"},
        '    JsonRequestBehavior.AllowGet
        ')


        'Return Json(New Company With {.Name = "AJP Northwest"})
        'Return New JsonResult() With {.Data = New Company With {.Name = "AJP Northwest"}}
        'Return New Company With {.Name = "AJP Northwest"}
    End Function

End Class
