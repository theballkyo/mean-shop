'use strict';

angular.module('mean.shop').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shop example page', {
      url: '/shop/example',
      templateUrl: 'shop/views/index.html'
    });
  }
]);
