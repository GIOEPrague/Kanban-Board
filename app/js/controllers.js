'use strict';

/* Controllers */


/**
 * @desc Handle form for columns
 * @author lawondyss@gmail.com (Ladislav Vondracek)
 * @version 0.1
 */
function ColumnFormCtrl($scope)
{
	// data for form
	$scope.column = {'id':8, 'name':'první', 'order':1, 'limit':10, 'color':'#336699'};

	// message for submit with errors
	$scope.errMessage = '';

	// patterns for validation
	$scope.patternName = /^.{1,20}$/;
	$scope.patternPozitiveNumber = /^[0-9]+$/;
	$scope.patternColor = /^#[0-9A-Fa-f]{6}$/;


	/**
	 * @desc Submitted form
	 */
	$scope.submit = function()
	{
		// submitted with errors
		if(this.columnForm.$invalid)
		{
			// error message
			$scope.errMessage = 'Invalid values in form.'
		}
		else
		{
			// cleared error message
			$scope.errMessage = '';

			// values to save
			var data = {
				'name':this.column.name,
				'order':this.column.order,
				'limit':this.column.limit,
				'color':this.column.color
			};

			// add or update
			if($scope.column.id)
			{
				$scope.update($scope.column.id, data);
			}
			else
			{
				$scope.add(data);
			}
		}
	}


	/**
	 * @desc Add new column
	 * @param JSON
	 */
	$scope.add = function(data)
	{
		$scope.board.addColumn(data.name, data.order, data.limit, data.color);
	}


	/**
	 * @desc Update column
	 * @param int
	 * @param JSON
	 */
	$scope.update = function(id, data)
	{
		$scope.board.updateColumn(id, data.name, data.order, data.limit, data.color);
	}
}