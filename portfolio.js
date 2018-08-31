
function scroll_to_div(div_id)
{
    $('html,body').animate(
    {
        scrollTop: $("#"+div_id).offset().top
    },
    'slow');
    if(window.innerWidth <= 992)
    {
        hide_nav();
    }
}

function show_nav(){
    if(window.innerWidth >= 1200)
    {
        document.getElementById("nav").style.width = "20%";
    }
    else if(window.innerWidth >= 768)
    {
        document.getElementById("nav").style.width = "35%";
    }
    else{
        document.getElementById("nav").style.width = "100%";
    }
}

function hide_nav(){
    document.getElementById("nav").style.width = "0%";
}

