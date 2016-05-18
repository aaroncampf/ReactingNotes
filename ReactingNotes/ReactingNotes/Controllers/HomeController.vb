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

    Public Function GetCompany(ID As Integer) As ActionResult
        Dim db As New DatabaseContainer
        Dim Company = db.Companies.Find(ID)



        Return Json(
            New Company With {.Name = "AJP Northwest"},
            JsonRequestBehavior.AllowGet
        )


        'Return Json(New Company With {.Name = "AJP Northwest"})
        'Return New JsonResult() With {.Data = New Company With {.Name = "AJP Northwest"}}
        'Return New Company With {.Name = "AJP Northwest"}
    End Function

End Class
