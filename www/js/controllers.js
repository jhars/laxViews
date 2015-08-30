angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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
})

.controller('MyTeamsCtrl', function($scope) {//TEAM CONTROLLER
  $scope.teams = [
    // { title: 'Reggae', id: 1 },
    // { title: 'Chill', id: 2 },
    // { title: 'Dubstep', id: 3 },
    // { title: 'Indie', id: 4 },
    // { title: 'Rap', id: 5 },
    // { title: 'Cowbell', id: 6 }
    {"teamName":"Cranbrook ",id: 1, "state":"MI","natRank":" 674","record":" 14- 9- 0 ","powerRating":"93.99","teamURL":"XCRAMI.PHP"},
    {"teamName":"Lake Brantley ",id: 2, "state":"FL","natRank":" 675","record":" 10- 6- 0 ","powerRating":"93.99","teamURL":"XLABFL.PHP"},
    {"teamName":"Hoover/No. Canton ",id: 3, "state":"OH","natRank":" 676","record":" 13- 5- 0 ","powerRating":"93.99","teamURL":"XHOOOH.PHP"},
    {"teamName":"Hill School ","state":"PA",id: 4, "natRank":" 677","record":" 10- 8- 0 ","powerRating":"93.99","teamURL":"XHILPA.PHP"}
  ];
  // { title: 'Reggae', id: 1 },
  // { title: 'Chill', id: 2 },
  // { title: 'Dubstep', id: 3 },
  // { title: 'Indie', id: 4 },
  // { title: 'Rap', id: 5 },
  // { title: 'Cowbell', id: 6 }

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

// .controller('AllTeamsCtrl', function($scope, $stateParams) {
    
app.controller('AllTeamsCtrl',['$scope', '$stateParams', 'teams', function($scope, $stateParams, teams) {
    

  teams.then(function(data){
    // if (data.data[i] < )

    $scope.teams = data.data;
    })

    console.log('wtf scooopppee???');
  }])






.controller('DashCtrl', function($scope, $rootScope, $ionicUser, $ionicPush) {
  // Identifies a user with the Ionic User service
  $scope.identifyUser = function() {
    console.log('Ionic User: Identifying with Ionic User service');

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID();
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'Ionitron',
      bio: 'I come from planet Ion'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      $scope.identified = true;
      alert('Identified user ' + user.name + '\n ID ' + user.user_id);
    });
  };
})

;
