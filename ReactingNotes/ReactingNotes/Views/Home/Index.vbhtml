@Code
    ViewData("Title") = "Home Page"
End Code


<div id="content"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>




<script src="~/Scripts/HelloReact.js"></script>


<div id="Comment1"/>

<script>
	ReactDOM.render(
		React.createElement(CommentBox, null), document.getElementById('Comment1')
	);
</script>