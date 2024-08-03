
//THIS CODE IS CHECKING IF THE CALLER IS HIPAA
$(document).ready(function () {
    function checkifHIPAA() {
        var oscarIdLength = $("#oscar-id").val().length;
        var fullNameValue = $("#fullname").val();
        var birthdayValue = $("#birthday").val();
        var addressValue = $("#address").val();

        var wrongCount = (fullNameValue == 2 ? 1 : 0) + (birthdayValue == 2 ? 1 : 0) + (addressValue == 2 ? 1 : 0);
        console.log("Error: " + wrongCount, "Oscar Id = " + oscarIdLength);

        if (oscarIdLength === 10 && wrongCount > 1) {
            showHipaaSpiel();
            hideCorrectedInformationHolder();
        }
        else if (oscarIdLength === 10 && wrongCount == 1) {
            showCorrectedInformationHolder()
            hideHipaaSpiel();
        } else if ((oscarIdLength < 10 || oscarIdLength > 10) && wrongCount === 0) {
            showCorrectedInformationHolder();
            hideHipaaSpiel();
        } else if ((oscarIdLength < 10 || oscarIdLength > 10) && wrongCount > 0) {
            showHipaaSpiel();
            hideCorrectedInformationHolder();
        } else {
            hideHipaaSpiel();
            hideCorrectedInformationHolder();
        }
    }


    function hideHipaaSpiel() {
        $("#hipaa-spiel").addClass('d-none');
    }
    function showHipaaSpiel() {
        $("#hipaa-spiel").removeClass('d-none');
    }

    function showCorrectedInformationHolder() {
        $("#holder-corrected-information").removeClass('d-none');
    }

    function hideCorrectedInformationHolder() {
        $("#holder-corrected-information").addClass('d-none');
    }





    //calling the function whenthere are changes on the fields

    $("#oscar-id").change(checkifHIPAA);
    $("#fullname").change(checkifHIPAA);
    $("#birthday").change(checkifHIPAA);
    $("#address").change(checkifHIPAA);

});












// THIS CODE IS FOW SHOWING AND HIDING THE CORRECTED OSCAR ID

$(document).ready(function () {
    $('#corrected-information').change(function () {
        var selectedValue = $(this).val();
        if (selectedValue == 1) {
            $('#holder-corrected-oscar-id').removeClass('d-none');
        } else {
            $('#holder-corrected-oscar-id').addClass('d-none');
        }
    });
});



//THIS CODE IS FOR CHECKING THE LENGTH OF OSCAR ID || NPI AND TAX ID
$(document).ready(function () {
    $('#oscar-id').on('input', checkLengthOfId)
    $('#npi').on('input', checkLengthOfNPI)
    $('#tax-id').on('input', checkLengthOfTaxId)


    function checkLengthOfId() {
        var valueLength = $(this).val().length;
        if (valueLength < 10 || valueLength > 10) {
            $(this).addClass('is-invalid');
        } else if (valueLength == 10) {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
        }
        else {
            $(this).removeClass('is-invalid');
        }
    }

    function checkLengthOfNPI() {
        var valueLength = $(this).val().length;
        if (valueLength < 10 || valueLength > 10) {
            $(this).addClass('is-invalid');
        } else if (valueLength == 10) {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    }

    function checkLengthOfTaxId() {
        var valueLength = $(this).val().length;
        if (valueLength < 9 || valueLength > 9) {
            $(this).addClass('is-invalid');
        } else if (valueLength == 9) {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    }
});


//THIS CODE IS CHECKING IF THE CALLER IS CALLING ON BEHALF OF FACILITY OT PROVIDER


$(document).ready(function () {
    $("#on-behalf-of").change(function () {
        var value = $(this).val();
        if (value == 1) {
            $(".type").text("Provider");
        } else {
            $(".type").text("Facility");
        }
    });
});



//THIS CODE IS FOR SHOWING OON DETAILS
$(document).ready(function () {
    $("#network-status").change(function () {
        var value = $(this).val();
        if (value == 2) {
            $("#holder-oon-spiel").removeClass("d-none");
        } else {
            $("#holder-oon-spiel").addClass("d-none")
        }
    })


    //THIS CODE IS FOR DISABLING "IS GETTING CARE OF WHEN SELECTED NO FOR ETU SPIEL"
    $("#etu-spiel").change(function () {
        var value = $(this).val();
        if (value == 4) {
            $("#is-receiving-care").prop('disabled', true);
        } else {
            $("#is-receiving-care").prop('disabled', false);
        }
    });
})

//THIS CODE IS FOR SHOWING DIFFERENT OON SPIEL

$(document).ready(function () {
    $("#etu-spiel").change(showOONSpiel);
    $("#is-receiving-care").change(showOONSpiel);
    $("#plan-type").change(showOONSpiel);

    function showOONSpiel() {
        var etuSpiel = $("#etu-spiel").val();
        var isReceivingCare = $("#is-receiving-care").val();
        var planType = $("#plan-type").val();

        if(etuSpiel == 4){
            showEmergencyNotGettingCare();
        }else{
            hideEmergencyNotGettingCare();
        }
    }


    function showEmergencyGettingCare(){

    }

    function hideEmergencyGettingCare(){
        
    }

    function showEmergencyNotGettingCare(){
        $("#emergency-not-getting-care").removeClass("d-none");
    }

    function hideEmergencyNotGettingCare(){
        $("#emergency-not-getting-care").addClass("d-none");
    }

    function showUrgentCareWithOOA(){

    }

    function hideUrgentCareWithOOA(){
        
    }

    function showUrgentCareWithoutOOA(){

    }

    function hideUrgentCareWithoutOOA(){
        
    }

    function showPPOSpiel(){
        $("#ppo-plan").removeClass("d-none");
    }

    function hidePPOSpiel(){
        $("#ppo-plan").addClass("d-none");
    }   
});



