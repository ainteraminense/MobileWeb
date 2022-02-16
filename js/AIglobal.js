/**
 * File Name: AIglobal.js
 *
 * Revision History:
 *       Armando Interaminense, 2022-02-15 : Created
 */

function ratingCalculate() {
    showCalculatedRating();
}

function ratingFields() {
    showHideRatingFields();
}

function init() {
    $("#foodQuality").on("change", ratingCalculate)
    $("#service").on("change", ratingCalculate);
    $("#value").on("change", ratingCalculate);
    $("#cbAddRatings").on("click",ratingFields)
}

$(document).ready(function () {
    init();
});

