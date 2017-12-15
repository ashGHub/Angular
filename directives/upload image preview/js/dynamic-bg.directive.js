(function () {
    'use strict';

    angular
        .module('app')
        .directive('dynamicBg', dynamicBg);

    function dynamicBg() {
        return {
            restrict: 'EA',
            scope: {
                source: '@'
            },
            link: link
        };

        function link(scope, element, attrs) {

            // image location
            // relative to the index.html location
            let bgImg = './img/bg-default.jpg';

            scope.$watch('source', function (newValue, oldValue) {

                if (scope.source == '') {

                    element.css({
                        'background-image': 'url(' + bgImg + ')'
                    });

                    return;
                }

                element.css({
                    'background-image': 'url(' + scope.source + ')'
                });

            });
        }
    }

})();
