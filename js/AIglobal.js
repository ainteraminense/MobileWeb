/**
 * File Name: AIglobal.js
 *
 * Revision History:
 *       Armando Interaminense, 2022-02-15 : Created
 */

function ratingCalculate() {
    showCalculatedRating();
}

function init() {
    $("#foodQuality").on("change", ratingCalculate)
    $("#service").on("change", ratingCalculate);
    $("#value").on("change", ratingCalculate);
    $("#btnSave").on("click", ratingCalculate)
}

$(document).ready(function () {
    init();
});

