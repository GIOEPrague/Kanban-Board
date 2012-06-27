'use strict';
/** 
 * @fileoverview Controllers
 * @author vladimir.belohradsky@gmail.com (Vladimir Belohradsky)
 */

/**
 * @desc Handle columns 
 * @author vladimir@belohradsky.cz (Vladimir Belohradsky)
 * @version 0.1
 */
function ColumnCtrl($scope, $routeParams, $http) {

	/**
	 * @desc Add Column
	 * @param {string} Title
	 * @param {int} Position
	 * @param {int} Limit of tickets in column
	 * @param {string} Color
	 */
	$scope.addColumn = function(title, position, limit, color) {

	}

	/**
	 * @desc Remove Column
	 */
	$scope.removeColumn = function(idColumn) {

	}

	/**
	 * @desc Update Column
	 * @param {int}
	 * @param {string}
	 */
	$scope.updateColumn = function(idColumn, title, position, limit, color) {

	}

	/**
	 * @desc Add Box
	 */
	$scope.addBox = function($column, $title) {

	}

	/**
	 * @desc Remove Box
	 */
	$scope.removeBox = function($column, $title) {

	}

	/**
	 * @desc Delete Box
	 */
	$scope.deleteBox = function($column, $title) {

	}
}
// ColumnCtrl.$inject = ['$scope', '$routeParams', '$http'];

/**
 * @desc Handle tickets 
 * @author vladimir@belohradsky.cz (Vladimir Belohradsky)
 * @version 0.1
 */
function TicketsCtrl($scope, $routeParams, $http) {
	/**
	 * @desc Add Ticket
	 */
	$scope.addTicket = function(title, position, color, priority, shortDescription, fullDescription) {

	}

	/**
	 * @desc Remove Ticket
	 */
	$scope.removeTicket = function(idTicket) {

	}

	/**
	 * @desc Update Ticket
	 */
	$scope.updateTicket = function(idTicket, title, position, color, priority, shortDescription, fullDescription) {

	}
}
// TicketsCtrl.$inject = ['$scope', '$routeParams', '$http'];

/**
 * @desc Handle users 
 * @author vladimir@belohradsky.cz (Vladimir Belohradsky)
 * @version 0.1
 */
function UsersCtrl($scope, $routeParams, $http) {

	/**
	 * @desc Add User
	 */
	$scope.addUser = function(name, email, color, password, avatar) {

	}

	/**
	 * @desc Remove User
	 */
	$scope.removeUser = function(idUser) {

	}

	/**
	 * @desc Update User
	 */
	$scope.updateUser = function(idUser, name, email, color, password, avatar) {

	}
}
// TicketsCtrl.$inject = ['$scope', '$routeParams', '$http'];