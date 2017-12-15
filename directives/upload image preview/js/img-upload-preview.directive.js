(function () {
    'use strict';

    angular
        .module('app')
        .directive('imgUploadPreview', imgUploadPreview);

    function imgUploadPreview() {
        // Usage:
        //     <img-upload-preview></img-upload-preview>
        //     <input type="file" img-upload-preview>
        return {
            scope: {
                callback: "&"
            },
            restrict: 'EA',
            link: link
        };

        function link(scope, element, attrs) {
            element.on("change", function (changeEvent) {

                var fileContent = changeEvent.target.files[0];

                var reader = new FileReader();

                reader.onload = function (loadEvent) {

                    var previewData = loadEvent.target.result;
                    //notify angular.. some changes happened through $apply
                    scope.$apply(function () {
                        scope.callback({ content: fileContent, preview: previewData });
                    });

                };

                reader.readAsDataURL(fileContent);
            });
        }
    }

})();
