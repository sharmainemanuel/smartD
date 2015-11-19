
app.controller("LoginController",function($scope,$http,$location){
	$scope.submit = function(){
		var user = $scope.username;
		var pass = $scope.password;
		$http.post("http://localhost/smart/login.php",{username:user,password:pass}).then(onUserComplete, onError);
	};
	var onUserComplete = function(response){
		var hasAccount = response.data;
		if(hasAccount){
			$location.path("/");
		}
	}
	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}
});