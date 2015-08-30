app.factory('teams', ['$http', function($http) { 
  return $http.get('assets/top25.json') 
            // .success(function(data) { 
            //  console.log('json data received')
            //  console.log(data[0]);
            //  // $scope.teams = data;
            //   return data;
            // }) 
            // .error(function(err) { 
            //   return err; 
            // }); 
}])

// app.controller('InstaCtrl', ['$scope', '$http', function ($scope, $http) {
// 	$scope.insta = 'hellllooooo';

// 	$scope.getGrams = function () {
// 		var tag = $scope.tag.replace(/\s+/g, '');
// 		console.log('yo');
// 		var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=d8d0d6b44249490bbde6eee4d1968dac&callback=JSON_CALLBACK';
// 		$http.jsonp(url)
// 			.then(function (response) {
// 				console.log(response);
// 				$scope.tag = "";
// 				$scope.photos = response.data.data;
// 		})
// 	}
// }]);