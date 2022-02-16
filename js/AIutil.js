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
        },
        messages: {
            businessName: {
                required: "Please enter the business name",
                rangelength: "Length must be 2-20 characters long"
            },
            reviewEmail: {
                required: "Reviewer email is required",
                email: "Email entered is invalid"
            },
            dtReviewDate: {
                required: "Review date is required"
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

function doValidate_frmModify() {
    var form = $("#formModify");
    form.validate({
        rules: {
            businessModifyName: {
                required: true,
                rangelength: [2, 20]
            },
            reviewModifyEmail: {
                required: true,
                email: true
            },
            dtReviewDateModify: {
                required: true
            },
            cbAddRatingsModify: {
                required: true
            },
            foodQualityModify: {
                mustBe0to5: true
            },
            serviceModify: {
                mustBe0to5: true
            },
            valueModify: {
                mustBe0to5: true
            }
        },
        messages: {
            businessModifyName:{
                required: "Please enter the business name",
                rangelength: "Length must be 2-20 characters long"
            },
            reviewModifyEmail: {
                required: "Reviewer email is required",
                email: "Email entered is invalid"
            },
            dtReviewDateModify: {
                required:"Review date is required"
            }
        }
    });
    return form.valid();
}
