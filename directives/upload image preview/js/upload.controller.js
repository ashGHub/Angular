angular
  .module('app')
  .controller('upload', function($scope){
      $scope.fileContent = '';
      $scope.fileContentPreveiw = '';

      $scope.setContent = function(content, preview){
        $scope.fileContent = content;
        $scope.fileContentPreveiw = preview;
      };

      $scope.uploadImage = function(){
        //send your data to the server
      };
  });
