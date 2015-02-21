'use strict';

/* jshint -W098 */
angular.module('mean.shop').controller('ShopController', ['$scope', 'Global', 'Shop',
  function($scope, Global, Shop) {
    $scope.global = Global;
    $scope.package = {
      name: 'shop'
    };
  }
]);
