console.log("running.. express server");


var app = angular.module('noticeboard', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "angular work!"
  this.notices = [];
  this.formdata = {};
  // var controller = this

  $http({
    method: 'GET',
    url: 'http://localhost:3000/notices'
  }).then(function(result) {
    console.log(result);
    this.notices = result.data;

  }.bind(this));


  this.processForm = function(response) {
    console.log(this.formdata);
    $http({
      method: 'POST',
      url: 'http://localhost:3000/notices',
      data: this.formdata
    }).then(function(result) {
      console.log("Data from server: ", result);
      this.notices.unshift(result.data);
      this.formdata = {};
    }.bind(this));
  }

}]);
