'use strict';

var angular = require('angular');

/**@ngInject*/
var HeaderController = function($rootScope, $scope, $sce, JellyfishModal, CartService, currentUser, alerts, headerLinks, AuthService) {

  this.alerts = alerts;
  this.currentUser = currentUser;
  this.headerLinks = headerLinks;

  this.JellyfishModal = JellyfishModal;
  this.CartService = CartService;
  this.AuthService = AuthService;

  // @todo This is in the wrong format, does not match the problem_alerts.html partial format.
  angular.forEach(this.alerts, function(item) {
    item.trustedHtml = $sce.trustAsHtml(item.text);
  });
};

HeaderController.resolve = {
  /**@ngInject*/
  headerLinks: function(SettingsResource) {
    return SettingsResource.get({hid: 'header'}).$promise;
  }
};

HeaderController.prototype = {

  cartModal: function () {
    this.JellyfishModal.open({
      id: 'cart',
      templateUrl: '/partials/cart/cart_modal.html',
      controller: 'CartController as cartCtrl',
      size: 'lg'
    });
  },

  cartCount: function() {
    return this.CartService.getCount();
  },

  logout: function() {
    return this.AuthService.logout();
  }
};

module.exports = HeaderController;



