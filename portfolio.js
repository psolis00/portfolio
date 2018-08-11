
function scroll_to_div(div_id)
{
    $('html,body').animate(
    {
        scrollTop: $("#"+div_id).offset().top
    },
    'slow');
}

function show_nav(){
    document.getElementById("nav").style.width = "20%";
}

function hide_nav(){
    document.getElementById("nav").style.width = "0%";
}