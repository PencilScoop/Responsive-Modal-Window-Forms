Responsive-Modal-Window-Forms
=============================

Responsive click-based modal window forms

## Summary

This can be used as a base to create modal window forms for login, signup, newsletter subscription and contact.

## Demo

See the demo here

## Blog Post

See this blog post here for information on how the effect works

## How To Use

To use the modal window and forms on your own project follow these steps

## Pick an effect you like

Take a look at the demo and pick a form/effect that you like and download the source files.

## Add the modal to your page

Open up the relevant HTML file from the demo. Copy and paste the modal wrap. The modal needs to go straight after the opening <body> tag on your page. Here is an example:

<body>

<!-- modal 1 (login) -->
<div class="modal-wrap md-effect-1” id="md-1”>
	<div class="md-content">
		<div class="form-wrap">
			<span class="logo"></span>
			<span class="md-close">✕</span>
			<h1>Login or register</h1>
            <form method="post">
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit" name="submit" class="btn-primary">Continue.</button>
                <button class="forgot">Forgot Password.</button>
            </form>
            <div class="no-member"><p>Not a member?</p><a href=""> Sign up now →</a></div>
		</div><!-- form wrap end -->
	</div><!-- modal content end -->
</div><!-- modal wrap end -->

## Wrap your page content

Next, wrap your main page content in a <div> with the class “content”:

<div class="content">

<!— Page Content Goes Here

</div>

## Add the trigger button

To trigger the modal you’ll need to add the relevant button for the modal you’ve chosen. The buttons use a “data-modal” attribute to link to the corresponding ID of the modal. In this example we’ve used “md-1” as the ad of the modal.

<!-- modal trigger button -->
<button class="button md-click" data-modal="md-1”>Login/Register</button> 

## Add the overlay

An overlay is used to create an overlay effect on the content when the modal appears. Add the overlay as the last element before the closing body tag.

<!-- Overlay for background effect -->
<div class="md-overlay"></div>
</body>

## Include Relevant CSS

Open up forms.css and modals.css and include the relevant CSS for your modal in your own stylesheet.

## Include JavaScript

Finally, include both the .js files before the closing body tag.

<!-- classie.js by @desandro: https://github.com/desandro/classie -->
<script src="js/classie.js"></script>
<!-- modal effects -->
<script src="js/modal.js"></script>
</body>

## A note on forms
Of course, these forms don’t do much unless you add an action to them. You’ll need to use some sort of AJAX function for them to work nicely. There’s plenty of other repos here for that.







