(function(){

  'use strict';

  

  
  var module = angular.module('myApp', ['onsen']);

  
  module.controller('AdminController', function($scope, $data) {
    
   $scope.item = $data.selectedItem;
      
    $scope.showSubmit = function() {

     $scope.ons.navigator.pushPage( 'reserve.html',{ animation : 'slide' } );


    }

  });


  module.controller('NearController',function($scope,$data){

     navigator.geolocation.getCurrentPosition(function(data) {
    
         $(function() {
      $('#default').backgroundDraggable();
      $('#unbounded').backgroundDraggable({ bound: false });
      $('#x').backgroundDraggable({ axis: 'x' });
      $('#y').backgroundDraggable({ axis: 'y' });

      $('div').each(function() {
        var $this = $(this),
            html = $this.html();
        $this.empty().append($('<p>').html(html))
      });
    });



    });


  });



      var tables = 0; 
      var id  = 0;

  module.controller('ReserveController',function($scope,$data){

    var num1 = [0,1,2,3,4,5,6,7];
    var num2 = [8,9,10,11,12,13,14,15];
    var num3 = [16,17,18,19,20,21,22,23];
    var num4 = [24,25,26,27,28,29,30,31];
    var num5 = [8,9,10,11,12,13,14,15];
    var num6 = [0,0,0,0,0,0,0,];

    $scope.showOrder = function(index){
      console.log(index);

      switch(index) {
      
      case 1:
          tables = num1;
          break;
      case 2:
           tables = num2;
          break;
      case 3:
           tables = num3;
          break;
      case 4:
           tables = num4;
          break; 
      case 5:
           tables = num5;
          break; 
      case 6:
           tables = num6;
          break;         
      default:
          tables = 1;
    }
    $scope.tables =  tables;

    $scope.ons.navigator.pushPage( 'order.html',{ animation : 'slide' } );

    }
    
    
  });

  module.controller('OrderController',function($scope,$data){
    
    $scope.something =  tables;
    $scope.choiceOne = function(index) {

     id = index;
      $scope.ons.navigator.pushPage( 'form.html',{ animation : 'slide' } );


    }



  
  });


  module.controller('FormController',function($scope,$data){
      //id table_number

      $scope.customer_name = '';
      $scope.id = '';

      $scope.number = '';
      $scope.order = '';
      $scope.special = '';




    $scope.postForm = function(index) {

      var post =  {
        table_number:id,
        customer_name:$scope.customer_name,
        phone:$scope.number,
        order:$scope.order,
        special:$scope.special

      };
      console.log(post);

    }

  });


  module.factory('$data', function() {
    var data = {};
    
    return data;
  });


})();

