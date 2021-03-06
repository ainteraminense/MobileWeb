/**
 * File Name: AIfacade.js
 *
 * Revision History:
 *       Armando Interaminense, 2022-02-15 : Created
 */

function showCalculatedRating(){
    var foodQuality = Number($("#foodQuality").val());
    var service = Number($("#service").val());
    var value = Number($("#value").val());
    var overallRating = getOverallRating(foodQuality,service,value);
    $("#overallRatings").val(overallRating);
}

function showHideRatingFields() {
    if ($("#cbAddRatings").is(':checked')){
        $("#ratingFields").show();
    }
    else{
        $("#ratingFields").hide();
    }
}

function showHideRatingFieldsModify(){
    if ($("#cbAddRatingsModify").is(':checked')){
        $("#ratingFieldsModify").show();
    }
    else{
        $("#ratingFieldsModify").hide();
    }
}

function addForm() {
    if (doValidate_frmAdd()) {
        console.log(("Add form is VALID"));
    }
    else{
        console.log("Add form is INVALID");
    }
}

function modifyform() {
    if (doValidate_frmModify()) {
        console.log(("Modify form is VALID"));
    }
    else{
        console.log("Modify form is INVALID");
    }
}