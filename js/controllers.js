"use strict";

/* Controllers */

var policyCards = angular.module("policyCards", ['ui.bootstrap']);

policyCards.controller("policyCardsController", function($scope) {
    $scope.cards = {
        "active": [{
            "policyType": "Homeowners",
            "acctNumber": "51275438567",
            "expires": "10/15/15",
            "details": [{
                "label": "Policy Holder",
                "value": "Preston Reed"
            }, {
                "label": "Type",
                "value": "Homeowners"
            }, {
                "label": "Jurisdiction",
                "value": "CA"
            }, {
                "label": "Premium for Term",
                "value": "1840"
            }, {
                "label": "Term",
                "value": "Annual"
            }],            
            "actions": [{
                "vlocityIcon": "icon-v-campaign",
                "url": "http://www.google.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnmEAAT",
                "displayName": "Review Policy"
            }, {
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.yahoo.com",
                "openUrlIn": "_self",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Add Coverage"
            }, {
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.facebook.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Add Vehicle"
            }, {
                "vlocityIcon": "icon-v-warning-circle-line",
                "url": "http://www.twitter.com",
                "openUrlIn": "_self",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Request Evidence of Insurance"
            }, {
                "vlocityIcon": "icon-v-edit2",
                "url": "http://www.linkedin.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "File a Claim"
            }]
        }, {
            "policyType": "Auto",
            "acctNumber": "512837675",
            "expires": "6/30/15",            
            "details": [{
                "label": "Policy Holder",
                "value": "Preston Reed"
            }, {
                "label": "Type",
                "value": "Private Passenger"
            }, {
                "label": "Jurisdiction",
                "value": "CA"
            }, {
                "label": "Premium for Term",
                "value": "1840"
            }, {
                "label": "Term",
                "value": "6-Month"
            }],
            "actions": [{
                "vlocityIcon": "icon-v-campaign",
                "url": "http://www.google.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnmEAAT",
                "displayName": "Review Policy"
            }, {
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.yahoo.com",
                "openUrlIn": "_self",
                "imageRef": "http://placekitten.com/g/600/600",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Add Coverage"
            }, {
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.facebook.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Add Vehicle"
            }, {
                "vlocityIcon": "icon-v-warning-circle-line",
                "url": "http://www.twitter.com",
                "openUrlIn": "_self",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Request Evidence of Insurance"
            }, {
                "vlocityIcon": "icon-v-edit2",
                "url": "http://www.linkedin.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "File a Claim"
            }]
        }, {
            "policyType": "Personal Umbrella Liability",
            "acctNumber": "51275438567",
            "expires": "10/15/15",
            "details": [{
                "label": "Policy Holder",
                "value": "Preston Reed"
            }, {
                "label": "Type",
                "value": "Homeowners"
            }, {
                "label": "Jurisdiction",
                "value": "CA"
            }, {
                "label": "Premium for Term",
                "value": "1840"
            }, {
                "label": "Term",
                "value": "Annual"
            }],
            "actions": [{
                "vlocityIcon": "icon-v-campaign",
                "url": "http://www.google.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnmEAAT",
                "displayName": "Review Policy"
            }, {
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.yahoo.com",
                "openUrlIn": "_self",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Add Coverage"
            }, {
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.facebook.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Add Vehicle"
            }, {
                "vlocityIcon": "icon-v-warning-circle-line",
                "url": "http://www.twitter.com",
                "openUrlIn": "_self",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Request Evidence of Insurance"
            }, {
                "vlocityIcon": "icon-v-edit2",
                "url": "http://www.linkedin.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "File a Claim"
            }]
        }],
        "open": [{
            "policyType": "Variable Annuity",
            "description": "Plan your retirement with a free consultation with our expert advisors.",
            "actions": [{
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.google.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnmEAAT",
                "displayName": "Add Variable Annuity"
            }, {
                "vlocityIcon": "",
                "url": "http://www.yahoo.com",
                "openUrlIn": "_self",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "View Details"
            }, {
                "vlocityIcon": "",
                "url": "http://www.facebook.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "View Other Annuities"
            }]
        }, {
            "policyType": "Permanent Life",
            "description": "10% off first year rates for policies over $1,000,000.",
            "actions": [{
                "vlocityIcon": "icon-v-plus",
                "url": "http://www.google.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnmEAAT",
                "displayName": "Add Permanent Life"
            }, {
                "vlocityIcon": "",
                "url": "http://www.yahoo.com",
                "openUrlIn": "_self",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "65 Life"
            }, {
                "vlocityIcon": "",
                "url": "http://www.facebook.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "90 Life"
            }, {
                "vlocityIcon": "",
                "url": "http://www.twitter.com",
                "openUrlIn": "_blank",
                "imageRef": "",
                "id": "a0f1500000ARnqWAAT",
                "displayName": "Limited Pay Life"
            }]
        }]
    }

    // Check to see if policy expires within the next X days (set in range variable)
    $scope.expiresSoon = function(expires, range) {
        var today = new Date(),
            outerRange = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + range));

        //If outerRange is smaller (earlier) than the value of the input date, don't show warning
        if (outerRange < Date.parse(expires)){
            return false;
        }else{
            return true;
        }
    };
});
