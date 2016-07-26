Imports System.Data.Entity
Imports System.Net

Namespace Controllers
    Public Class CompaniesController
        Inherits System.Web.Mvc.Controller

        Private db As New DatabaseContainer

        ' GET: Companies
        Function Index() As ActionResult
            Return View(db.Companies.ToList())
        End Function

        ' GET: Companies/Details/5
        Function Details(ByVal id As Integer?) As ActionResult
			If IsNothing(id) Then
				Return New HttpStatusCodeResult(HttpStatusCode.BadRequest)
			End If
			Dim company As Company = db.Companies.Find(id)
			If IsNothing(company) Then
				Return HttpNotFound()
			End If
			Return View(company)
		End Function

        ' GET: Companies/Create
        Function Create() As ActionResult
            Return View()
        End Function

        ' POST: Companies/Create
        'To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        'more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        <HttpPost()>
        <ValidateAntiForgeryToken()>
        Function Create(<Bind(Include:="ID,Name,Address,City,Phone,Zip,Misc")> ByVal company As Company) As ActionResult
            If ModelState.IsValid Then
                db.Companies.Add(company)
                db.SaveChanges()
                Return RedirectToAction("Index")
            End If
            Return View(company)
        End Function

        ' GET: Companies/Edit/5
        Function Edit(ByVal id As Integer?) As ActionResult
            If IsNothing(id) Then
                Return New HttpStatusCodeResult(HttpStatusCode.BadRequest)
            End If
            Dim company As Company = db.Companies.Find(id)
            If IsNothing(company) Then
                Return HttpNotFound()
            End If
            Return View(company)
        End Function

        ' POST: Companies/Edit/5
        'To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        'more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        <HttpPost()>
        <ValidateAntiForgeryToken()>
        Function Edit(<Bind(Include:="ID,Name,Address,City,Phone,Zip,Misc")> ByVal company As Company) As ActionResult
            If ModelState.IsValid Then
                db.Entry(company).State = EntityState.Modified
                db.SaveChanges()
                Return RedirectToAction("Index")
            End If
            Return View(company)
        End Function

        ' GET: Companies/Delete/5
        Function Delete(ByVal id As Integer?) As ActionResult
            If IsNothing(id) Then
                Return New HttpStatusCodeResult(HttpStatusCode.BadRequest)
            End If
            Dim company As Company = db.Companies.Find(id)
            If IsNothing(company) Then
                Return HttpNotFound()
            End If
            Return View(company)
        End Function

        ' POST: Companies/Delete/5
        <HttpPost()>
        <ActionName("Delete")>
        <ValidateAntiForgeryToken()>
        Function DeleteConfirmed(ByVal id As Integer) As ActionResult
            Dim company As Company = db.Companies.Find(id)
            db.Companies.Remove(company)
            db.SaveChanges()
            Return RedirectToAction("Index")
        End Function

		Public Function GetCompany(ID As Integer) As JsonResult
            'TODO: convert this project into WebAPI and see if that resolves the issue
            Dim Test = db.Companies.Find(ID)

			Return Json(New With {
							.ID = Test.ID,
							.Name = Test.Name,
							.Address = Test.Address,
							.City = Test.City,
							.Phone = Test.Phone,
							.Zip = Test.Zip,
							.Misc = Test.Misc
						},
						JsonRequestBehavior.AllowGet
			)
		End Function

		Public Function GetQuotes(ID As Integer) As ActionResult
            Dim JSON_Data = db.Companies.Find(ID).Quotes.Select(
                Function(x)
                    Dim Lines = db.Quotes.Find(x.ID).Lines.ToArray.Select(Function(y) New With {y.ID, y.UNIT, y.COST, y.DESC, y.IsCentered})
                    Return New With {x.ID, x.Name, x.Date, Lines}
                End Function)

            Return Json(JSON_Data, JsonRequestBehavior.AllowGet)
        End Function

        Public Function GetContacts(ID As Integer) As ActionResult
            Dim JSON_Data = db.Companies.Find(ID).Contacts.Select(
                Function(x)
                    Dim Notes = db.Contacts.Find(x.ID).Notes.ToArray.Select(Function(y) New With {y.ID, y.Date, y.Title, y.Text})
                    Return New With {x.ID, x.Name, x.Phone, x.Email, x.Position, Notes}
                End Function)

            Return Json(JSON_Data, JsonRequestBehavior.AllowGet)
        End Function



        Protected Overrides Sub Dispose(ByVal disposing As Boolean)
            If (disposing) Then
                db.Dispose()
            End If
            MyBase.Dispose(disposing)
        End Sub
    End Class
End Namespace
