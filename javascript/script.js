

$("button").click (function (omonge){
    var client = document.getElementById('nameDetail').value;
    alert('Dear ' + client + ','+ 'we have received your message. ' + 'Thank you for reaching out to us. ' +"We will get back to you as soon as possible.");
    omonge.preventDefault();
});

$("button").on('click', function (){
    $('form').each(function () {
        this.reset();
});
});

$(".card").hover(function(){
    $(this).children(".firstcard").fadeToggle(1000, "linear");
})

$('#pictureControlsMenu').click(function(event){
    event.stopPropagation();
});

$('.hide').click(function() {
    $(this).children ('.show').slideToggle(1200);
    $(this).children ('.hide').toggle(1500);
});
