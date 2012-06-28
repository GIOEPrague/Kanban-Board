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
function BoardCtrl($scope, $routeParams, $http, Columns, ColumnsSave) {
	/* 
		temporary test data 
		column -> box -> ticket
	*/
	/*
    $scope.columns = {'col1':{
		'box1':{'name':'nil','position':1,'color':'#0000ff','tickets':{
			'ab':{'name':'nil','position':1,'color':'#ff0000','priority':3,'shortDescription':'test task1','description':'Long story short1','user':null},
			'abc':{'name':'nil','position':2,'color':'#ff0000','priority':3,'shortDescription':'test task2','description':'Long story short2','user':null},
			'abcd':{'name':'nil','position':3,'color':'#ff0000','priority':3,'shortDescription':'test task3','description':'Long story short3','user':null}
		}}},
		'col2':{'box2':{'name':'nil','position':2,'color':'#00ff00','tickets':{}}}
	};
	*/
	/* users */

	$scope.users = {
		'us1':{'name':'Franta','email':'franta@geeks.cz','color':'#fff000','password':'lala','avatar':null},
		'us2':{'name':'Evzen','email':'evzen@geeks.cz','color':'#000fff','password':'lala','avatar':null}
	};
    

    $scope.columns = Columns.query();

	/**
	 * @desc Get Column
	 * @param {string} ID column	 
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

		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Remove Column
	 * @param {string} ID column
	 */
	$scope.removeColumn = function(idColumn) {
		delete $scope.columns[idColumn];
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Update Column
	 * @param {string} ID column
	 * @param {string} Title
	 * @param {int} Position
	 * @param {int} Limit
	 * @param {string} Color
	 */
	$scope.updateColumn = function(idColumn, title, position, limit, color) {
		$scope.columns[idColumn].title = title;
		$scope.columns[idColumn].position = position;
		$scope.columns[idColumn].limit = limit;
		$scope.columns[idColumn].color = color;
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Get Box
	 * @param {object} Column
	 * @param {string} ID box
	 */
	 $scope.getBox = function(column, idBox) {
	 	return column[idBox];
	 }

	/**
	 * @desc Add Box
	 * @param {object} Column
	 * @param {string} Title
	 */
	$scope.addBox = function(column, title) {
		// we need unique ID
		var newDate = new Date;
    	idBox = newDate.getTime();
		$column[idBox] = {
			'title':title,
			'tickets':null
		}
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Remove Box
	 * @param {object} Column
	 * @param {string} ID box
	 */
	$scope.removeBox = function(column, idBox) {
		delete column[idBox];
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Update Box
	 * @param {object} Column
	 * @param {string} ID box
	 * @param {string} Title
	 */
	$scope.updateBox = function(column, idBox, title) {
		column[idBox].title = title;
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Get Ticket
	 * @param {object} Box
	 * @param {string} ID ticket
	 */
	$scope.getTicket = function(box, idTicket) {
		return box[idTicket];
	}

	/**
	 * @desc Add Ticket
	 * @param {string} Title
	 * @param {int} Position
	 * @param {string} Color
	 * @param {int} Priority
	 * @param {string} Short description
	 * @param {string} Full description
	 */
	$scope.addTicket = function(title, position, color, priority, shortDescription, fullDescription) {
		for (column in $scope.columns) {
			// TODO add ticket
		}
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Remove Ticket
	 * @param {object} Box
	 * @param {string} ID ticket
	 */
	$scope.removeTicket = function(box, idTicket) {
		delete box[idTicket];
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Update Ticket
	 * @param {object} Ticket
	 * @param {string} Title
	 * @param {int} Position
	 * @param {string} Color
	 * @param {int} Priority
	 * @param {string} Short description
	 * @param {string} Full description
	 */
	$scope.updateTicket = function(ticket, title, position, color, priority, shortDescription, fullDescription) {
		ticket.title = title;
		ticket.position = position;
		ticket.color = color;
		ticket.priority = priority;
		ticket.shortDescription = shortDescription;
		ticket.fullDescription = fullDescription;
		new ColumnsSave($scope.columns).$save();
	}

	/**
	 * @desc Get User data
	 * @param {string} ID user
	 */
	$scope.getUser = function(idUser) {
		return $scope.users[idUser];
	}

	/**
	 * @desc Add User
	 * @param {string} Name
	 * @param {string} Email
	 * @param {string} Color
	 * @param {string} Password
	 * @param {string} Avatar URL
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
	 * @param {string} ID user
	 */
	$scope.removeUser = function(idUser) {
		delete $scope.users[idUser];
	}

	/**
	 * @desc Update User
	 * @param {string} ID user
	 * @param {string} Name
	 * @param {string} Email
	 * @param {string} Color
	 * @param {string} Password
	 * @param {string} Avatar
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
