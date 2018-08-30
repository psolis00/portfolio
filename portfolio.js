
function scroll_to_div(div_id)
{
    $('html,body').animate(
    {
        scrollTop: $("#"+div_id).offset().top
    },
    'slow');
    if(window.innerWidth <= 768)
    {
        hide_nav();
    }
}

function show_nav(){
    if(window.innerWidth <= 768)
    {
        document.getElementById("nav").style.width = "100%";
    }
    else{
        document.getElementById("nav").style.width = "20%";
    }
}

function hide_nav(){
    document.getElementById("nav").style.width = "0%";
}

