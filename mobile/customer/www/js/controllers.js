angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.loginData = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
		  $scope.closeLogin();
		}, 1000);
	};

	// popup of logout
	$scope.infoApp2 = function() {
		var alertPopup = $ionicPopup.alert({
			template: '<center>You are going out!!</center>',
			buttons: [
				{
					text: 'Ok',
					type: 'button-dark'
				}
			]
		});
		alertPopup.then(function(res) {
			console.log('Out!!');
		});
	};

})


.controller('MenuActiveCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
})
 

// Empty View Controllers
.controller('HomeBaseCtrl',function($scope, $ionicPopup){
 
})

.controller('ActivityFeedCtrl',function($scope, $ionicPopup){
 
})

.controller('AgentAssetsCtrl',function($scope, $ionicPopup){
 
})

.controller('FurnishFarmCtrl',function($scope, $ionicPopup){
 
})

.controller('GarageSaleCtrl',function($scope, $ionicPopup){
 
})

.controller('SirAustinUCtrl',function($scope, $ionicPopup){
 
})

.controller('SecureLineCtrl',function($scope, $ionicPopup){
 
})

.controller('RecruitmentCtrl',function($scope, $ionicPopup){

})

.controller('SirAustinUCtrl',function($scope, $ionicPopup){
 
});
