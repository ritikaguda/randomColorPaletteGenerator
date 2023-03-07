//Configurables
var config = {
    countLimits: {min: 1, max: 1000}
};


//Instantiate Angular Module
var paletteApp = angular.module('PaletteApp', []);


//Controller for the Palette andConfig Panel
paletteApp.controller('PaletteCtrl', function ($scope) {

    //Initialize Scope Values
    $scope.selectedColor = "Nothing Selected";
    $scope.colorArray = [];
    $scope.showHint = true;

    //Define Max and Min values for the inputs
    $scope.countMin = config.countLimits.min;
    $scope.countMax = config.countLimits.max;

    //Function to reset the Palette to the initial state
    $scope.resetPalette = function () {
        $scope.selectedColor = "Nothing Selected";
        $scope.showHint = true;
        $scope.colorArray = [];
        $scope.count=null;
    };


    //Function to read the count value and generate colors
    $scope.generate = function () {

        var count = $scope.count, min = $scope.countMin, max = $scope.countMax;

        //Validation
        if (isNaN(count) || count < min || count > max) {
            alert("Please enter a number between 0 & 1000");
            return;
        }

        //Hide hint and Reset color array
        $scope.showHint = false;
        $scope.colorArray = [];

        //Generate colors
        for (var i = 0; i < count; i++) {
            //Generate Unique Color
            var color = '#' + Math.random().toString(16).slice(2, 8);
            while ($scope.colorArray.indexOf(color) != -1) {
                color = '#' + Math.random().toString(16).slice(2, 8);
            }

            //Push unique color to color array
            $scope.colorArray.push(color);
        }

    };

    //Function to register clicks to select color
    $scope.colorSelected = function (color) {
        $scope.selectedColor = color;
    };

    //Generate style object
    $scope.getStyles = function (color) {
        return {
            'background-color': color
        };
    };


});