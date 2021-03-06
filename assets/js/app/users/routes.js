'use strict';

/**@ngInject*/
module.exports = function($stateProvider) {
    $stateProvider
        .state('base.users', {
            url: '/users',
            abstract: true,
            template: '<div class="page users-page" ui-view></div>',
            controller: 'UsersController as usersCtrl'
        });
};