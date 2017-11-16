angular.module('project', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
	$scope.posts = [
	];  


	$scope.addPost = function ()
	{
		if($scope.formName === '') { return; }
		console.log("In add Post");
		$scope.create({
			name: $scope.formName,
			caption: $scope.formCaption,
			link: $scope.formLink,
			upvotes: 0
		});
		 $scope.formName = '';
		$scope.formCaption='';
		$scope.formLink='';	


	}

        $scope.incrementUpvotes = function(post) {
          $scope.upvote(post);
        };

  $scope.getAll = function() {
    return $http.get('/post').success(function(data){
      angular.copy(data, $scope.posts);
    });
  };
  $scope.getAll();

  $scope.create = function(post) {
    return $http.post('/post', post).success(function(data){
      $scope.posts.push(data);
    });
  };

    $scope.upvote = function(post) {
      return $http.put('/post/' + post._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          post.upvotes += 1;
        });
    };


}]);
