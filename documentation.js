$(document).ready(function(){
    $("#npi").keyup(getNPI);
    $("#tax-id").keyup(getTaxId);
    $("#callers-name").keyup(getCallerName);




    //insert value of NPI
    function getNPI(){
        var npi = $("#npi").val();
        $("#npi-value").text(npi);
    }

    //insert value of tax id
    function getTaxId(){
        var taxId = $("#tax-id").val();
        $("#tax-id-value").text(taxId);
    }

    //insert value of callers name
    function getCallerName(){
        var callersName = $("#callers-name").val().toUpperCase();
        $("#callers-name-value").text(callersName);
    }
})