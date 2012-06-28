'use strict';
/**
 * @fileoverview Controllers
 * @author vladimir.belohradsky@gmail.com (Vladimir Belohradsky)
 * @author lawondyss@gmail.com (Ladsilav Vondracek)
 */

/**
 * @desc Handle columns
 * @author vladimir@belohradsky.cz (Vladimir Belohradsky)
 * @author lawondyss@gmail.com (Ladsilav Vondracek)
 * @version 0.1
 */
function BoardCtrl($scope, $routeParams, $http, Columns, ColumnsSave) {
	// data for form
	$scope.column = {'id':8, 'name':'první', 'order':1, 'limit':10, 'color':'#336699'};

	// message for submit with errors
	$scope.errMessage = '';

	// patterns for validation
	$scope.patternName = /^.{1,20}$/;
	$scope.patternPozitiveNumber = /^[0-9]+$/;
	$scope.patternColor = /^#[0-9A-Fa-f]{6}$/;


	/**
	 * @desc Submitted column form
	 */
	$scope.submitColumn = function(){
		// submitted with errors
		if(this.columnForm.$invalid){
			// error message
			$scope.errMessage = 'Invalid values in column form.'
		}
		else{
			// cleared error message
			$scope.errMessage = '';

			// add or update
			if($scope.column.id){
				$scope.updateColumn($scope.column.id, this.column.title, this.column.position, this.column.limit, this.column.color);
			}
			else{
				$scope.addColumn(this.column.title, this.column.position, this.column.limit, this.column.color);
			}
		}
	}
}