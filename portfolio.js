
function scroll_to_div(div_id)
{
    $('html,body').animate(
    {
        scrollTop: $("#"+div_id).offset().top
    },
    'slow');
}

var show = 0;
function show_nav(){
    if(show == 0)
    {
        document.getElementById("nav").style.width = "20%";
        show = 1;
    }
    else{
        document.getElementById("nav").style.width = "0px";
        show = 0;
    }
}