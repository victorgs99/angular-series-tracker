$(document).ready(function(){
    $("#toggleButtonPV").click(function(){
        $("#cardContainerPV").children("._serieCard").slideToggle();
    });

    $("#toggleButtonVA").click(function(){
        $("#cardContainerVA").children("._serieCard").slideToggle();
    });

    $("#toggleButtonF").click(function(){
        $("#cardContainerF").children("._serieCard").slideToggle();
    });
});