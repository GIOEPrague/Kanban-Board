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
function BoardCtrl($scope, $routeParams, $http) {
	/* 
		temporary test data 
		column -> box -> ticket
	*/
	$scope.columns = {'col1':{
		'box1':{'name':'nil','position':1,'color':'#0000ff','tickets':{
			'ab':{'name':'nil','position':1,'color':'#ff0000','priority':3,'shortDescription':'test task1','description':'Long story short1','user':null},
			'abc':{'name':'nil','position':2,'color':'#ff0000','priority':3,'shortDescription':'test task2','description':'Long story short2','user':null},
			'abcd':{'name':'nil','position':3,'color':'#ff0000','priority':3,'shortDescription':'test task3','description':'Long story short3','user':null}
		}}},
		'col2':{'box2':{'name':'nil','position':2,'color':'#00ff00','tickets':{}}}
	};
	/* users */
	$scope.users = {
		'us1':{'name':'Franta','email':'franta@geeks.cz','color':'#fff000','password':'lala','avatar':null},
		'us2':{'name':'Evzen','email':'evzen@geeks.cz','color':'#000fff','password':'lala','avatar':null}
	};

	/**
	 * @desc Get Column
	 */
	 $scope.getColumn = function(idColumn) {
	 	return $scope.columns[idColumn];
	 }

	/**
	 * @desc Add Column
	 * @param {string} Title
	 * @param {int} Position
	 * @param {int} Limit of tickets in column
	 * @param {string} Color
	 */
	$scope.addColumn = function(title, position, limit, color) {
		// we need unique ID
		var newDate = new Date;
    	idColumn = newDate.getTime();
    	// add column
		$scope.columns[idColumn] = {
			'title'		: title,
			'position'	: position,
			'limit'		: limit,
			'color'		: color,
			'boxes'		: null
		}
	}

	/**
	 * @desc Remove Column
	 * @param {string} ID column
	 */
	$scope.removeColumn = function(idColumn) {
		delete $scope.columns[idColumn];
	}

	/**
	 * @desc Update Column
	 * @param {string}
	 * @param {string}
	 * @param {int}
	 * @param {int}
	 * @param {string}
	 */
	$scope.updateColumn = function(idColumn, title, position, limit, color) {
		$scope.columns[idColumn].title = title;
		$scope.columns[idColumn].position = position;
		$scope.columns[idColumn].limit = limit;
		$scope.columns[idColumn].color = color;
	}

	/**
	 * @desc Get Box
	 * @param {object}
	 * @param {string}
	 */
	 $scope.getBox = function(column, idBox) {
	 	return column[idBox];
	 }

	/**
	 * @desc Add Box
	 * @param {object}
	 * @param {string}
	 */
	$scope.addBox = function(column, title) {
		// we need unique ID
		var newDate = new Date;
    	idBox = newDate.getTime();
		$column[idBox] = {
			'title':title,
			'tickets':null
		}
	}

	/**
	 * @desc Remove Box
	 * @param {object}
	 * @param {string}
	 */
	$scope.removeBox = function(column, idBox) {
		delete column[idBox];
	}

	/**
	 * @desc Update Box
	 * @param {object}
	 * @param {string}
	 * @param {string}
	 */
	$scope.updateBox = function(column, idBox, title) {
		column[idBox].title = title;
	}

	/**
	 * @desc Get Ticket
	 * @param {object}
	 * @param {string}
	 */
	$scope.getTicket = function(box, idTicket) {
		return box[idTicket];
	}

	/**
	 * @desc Add Ticket
	 * @param {string}
	 * @param {int}
	 * @param {string}
	 * @param {int}
	 * @param {string}
	 * @param {string}
	 */
	$scope.addTicket = function(title, position, color, priority, shortDescription, fullDescription) {

	}

	/**
	 * @desc Remove Ticket
	 * @param {object}
	 * @param {string}
	 */
	$scope.removeTicket = function(box, idTicket) {
		delete box[idTicket];
	}

	/**
	 * @desc Update Ticket
	 * @param {object}
	 * @param {string}
	 * @param {int}
	 * @param {string}
	 * @param {int}
	 * @param {string}
	 * @param {string}
	 */
	$scope.updateTicket = function(ticket, title, position, color, priority, shortDescription, fullDescription) {
		ticket.title = title;
		ticket.position = position;
		ticket.color = color;
		ticket.priority = priority;
		ticket.shortDescription = shortDescription;
		ticket.fullDescription = fullDescription;
	}

	/**
	 * @desc Get User data
	 * @param {string}
	 */
	$scope.getUser = function(idUser) {
		return $scope.users[idUser];
	}

	/**
	 * @desc Add User
	 * @param {string}
	 * @param {string}
	 * @param {string}
	 * @param {string}
	 * @param {string}
	 */
	$scope.addUser = function(name, email, color, password, avatar) {
		// we need unique ID
		var newDate = new Date;
    	idUser = newDate.getTime();
		$scope.users[idUser] = {
			'name': name,
			'email': email,
			'color': color,
			'password': password,
			'avatar': avatar
		}
	}

	/**
	 * @desc Remove User
	 * @param {string}
	 */
	$scope.removeUser = function(idUser) {
		delete $scope.users[idUser];
	}

	/**
	 * @desc Update User
	 * @param {string}
	 * @param {string}
	 * @param {string}
	 * @param {string}
	 * @param {string}
	 * @param {string}
	 */
	$scope.updateUser = function(idUser, name, email, color, password, avatar) {
		$scope.users[idUser].name = name;
		$scope.users[idUser].email = email;
		$scope.users[idUser].color = color;
		$scope.users[idUser].password = password;
		$scope.users[idUser].avatar = avatar;
	}
}
// BoardCtrl.$inject = ['$scope', '$routeParams', '$http'];