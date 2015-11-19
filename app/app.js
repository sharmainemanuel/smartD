var app = angular.module("myapp",["ngRoute"]);

	app.config(function($routeProvider,$locationProvider){
		$routeProvider
		.when("/", {
			templateUrl: "views/main.html",
			controller: "MainController"
		})
		.when("/cart", {
			templateUrl: "views/cart.html"
		})
		.when("/groceries", {
			templateUrl: "views/grocer.html"
		})
		.when("/about", {
			templateUrl: "views/about.html"
		})
		.when("/login", {
			templateUrl: "views/login.html",
			controller: "LoginController"
		});
	});