$(document).ready(function(){
    $("header .links li a").click(function(){
        $("header .links li a").removeClass("active");
        $(this).toggleClass("active");
    })
})