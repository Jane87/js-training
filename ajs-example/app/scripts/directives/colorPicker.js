"use strict";

/**
 * <color-picker    init-r="255"
                    init-g="0"
                    init-b="0"
                    on-color-change="onColorChange(r,g,b)">
 </color-picker>
 */
angular.module('myApp').directive('colorPicker', function() {
    return {
        restrict: 'E',
        scope: {
            // isolated scope
            r: '@initR',
            g: '@initG',
            b: '@initB',
            onColorChange: '&'
        },
        templateUrl: 'templates/directives/colorPickerTemplate.html',
        link: function(scope) {
            ['r', 'g', 'b'].forEach(function(c) {
                scope.$watch(c, function() {
                    scope.onColorChange({
                        r: scope.r,
                        g: scope.g,
                        b: scope.b
                    });
                });
            });
        }
    }
});
