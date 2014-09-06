(function(){

  'use strict';

  

  
  var module = angular.module('myApp', ['onsen']);

  
  module.controller('AdminController', function($scope, $data) {
    
   $scope.item = $data.selectedItem;
      
    $scope.showSubmit = function() {

     $scope.ons.navigator.pushPage( 'reserve.html',{ animation : 'slide' } );
    }

  });

  module.service('vendorService', ['$q', '$timeout', '$window', function($q, $timeout, $window){
    var deferred = $q.defer(), libs = {};
    $script([
        '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js',
    ], 'vendorBundle');
    $script.ready('vendorBundle', function() {
        libs.$ = $window.jQuery.noConflict();
        libs._ = $window._.noConflict();
        $timeout(function(){
            deferred.resolve(libs);
        }, 0);
    });
    this.getLibs = function(){
        return deferred.promise;
    }
  }]);


  module.controller('NearController',function($scope,$data,vendorService){
    vendorService.getLibs().then(function(libs){
        $scope.jQ = libs.$.fn.jquery;
    });
     navigator.geolocation.getCurrentPosition(function(data) {
    
         $(function() {
      $scope.jQ('#default').backgroundDraggable();
      $scope.jQ('#unbounded').backgroundDraggable({ bound: false });
      $scope.jQ('#x').backgroundDraggable({ axis: 'x' });
      $scope.jQ('#y').backgroundDraggable({ axis: 'y' });

      $scope.jQ('div').each(function() {
        var ele = $scope.jQ(this),
            html = ele.html();
        ele.empty().append($scope.jQ('<p>').html(html))
      });
    });



    });


  });



      var tables = 0; 
      var id  = 0;

  module.controller('ReserveController',function($scope,$data){

    
    $scope.show = function(index) {
        console.log(index);
        tables = index;
         $scope.ons.navigator.pushPage( 'order.html',{ animation : 'slide' } );

    }
 
 });

  module.controller('OrderController',function($scope,$data){
    
    $scope.something =  tables;
    $scope.postForm = function() {
        console.log('postForm');

    }
   });


  module.controller('FormController',function($scope,$data,vendorService){
      //id table_number

      vendorService.getLibs().then(function(libs){
        $scope.jQ = libs.$.fn.jquery;
      });

      $scope.customer_name = '';
      $scope.id = '';
      $scope.date = '';
      $scope.number = '';
      $scope.order = '';
      $scope.special = '';


      $scope.jQ('#timepicker1').timepicker();

    $scope.postForm = function(index) {

      var post =  {
        table_number:id,
        customer_name:$scope.customer_name,
        phone:$scope.number,
        order:$scope.order,
        special_request:$scope.special,
        start:$scope.date

      };
      
      console.log(post);

    }

  });


  module.factory('$data', function() {
    var data = {};
    
    return data;
  });


})();

