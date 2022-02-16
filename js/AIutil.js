/**
 * File Name: AIutil.js
 *
 * Revision History:
 *       Armando Interaminense, 2022-02-15 : Created
 */

function getOverallRating(foodQuality, service, value) {
    return (foodQuality + service + value) * 100 / 15;
}

function doValidate_frmAdd() {
    var form = $("#formAdd");
    form.validate({
        rules: {
            businessName: {
                required: true,
                rangelength: [2, 20]
            },
            reviewEmail: {
                required: true,
                email: true
            },
            dtReviewDate: {
                required: true
            },
            cbAddRatings: {
                required: true
            },
            foodQuality: {
                mustBe0to5: true
            },
            service: {
                mustBe0to5: true
            },
            value: {
                mustBe0to5: true
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("mustBe0to5",
    function(value, element){
    var rating = Number(value);
        if ((rating>=0) && (rating<=5)) {
            return true;
        }
        else {
            return false;
        }
    }, "Rating must be numeric input between 0 and 5.");