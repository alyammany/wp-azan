$(function() {
    $( ".Azan-OP #sortableES" ).sortable({ handle: ".option-top" });
    $( ".Azan-OP #sortableES" ).disableSelection();
});

$(document).ready(function(){
    //alert("sdf");
    ///////////////////////////////////////////////////////////////
    $(".Azan-OP .color").live("change",function(){
        alert($(this).val());
        //$(this).parent().children(".option-container").toggle(250);
    });
    ///////////////////////////////////////////////////////////////
    $(".Azan-OP .option-container").each(function(){
        if(!$(this).hasClass('active')){
            $(this).toggle();
        }
    });
    ///////////////////////////////////////////////////////////////
    $(".Azan-OP .option-top").click(function(){
        $(this).parent().children(".option-container").toggle(250);
    });
    ///////////////////////////////////////////////////////////////
});
