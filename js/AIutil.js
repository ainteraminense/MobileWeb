/**
 * File Name: AIutil.js
 *
 * Revision History:
 *       Armando Interaminense, 2022-02-15 : Created
 */

function getOverallRating(foodQuality, service, value) {
    return (foodQuality + service + value)*100/15;

}