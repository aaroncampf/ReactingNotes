'------------------------------------------------------------------------------
' <auto-generated>
'     This code was generated from a template.
'
'     Manual changes to this file may cause unexpected behavior in your application.
'     Manual changes to this file will be overwritten if the code is regenerated.
' </auto-generated>
'------------------------------------------------------------------------------

Imports System
Imports System.Collections.Generic

Partial Public Class Contact
    Public Property ID As Integer
    Public Property Name As String
    Public Property Phone As String
    Public Property Email As String
    Public Property Position As String

    Public Overridable Property Notes As ICollection(Of Note) = New HashSet(Of Note)
    Public Overridable Property Company As Company

End Class
