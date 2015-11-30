$(document).ready(function () {
	$('.travis').hide();
	$('#videosTravis').change(function () {
	$('.travis').hide();
	$('#'+$(this).val()).slideToggle();
  });
	$('.kanye').hide();
	$('#videosKanye').change(function () {
	$('.kanye').hide();
	$('#'+$(this).val()).slideToggle();
  });
});