angular.module('project', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
	$scope.posts = [
	{name:'Becca',caption:'YAY',link:'<img src= "https://i.ytimg.com/vi/dKDvbh804Wg/maxresdefault.jpg">', upvotes:0},
	{name:'Becca2',caption:'YAY',link:'link', upvotes:1}
	];  


	$scope.addPost = function ()
	{
		$scope.posts.push({name:$scope.formName, upvotes:0});
	}

        $scope.incrementUpvotes = function(post) {
          post.upvotes += 1;
        };
}]);
