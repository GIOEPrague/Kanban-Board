angular.module('kanbanServices', ['ngResource']).
    factory('Columns', function($resource){
        var Columns = $resource('https://api.mongolab.com/api/1/databases' +
            '/kanban_board/collections/columns',
            { apiKey: '4f9ffc47e4b0df00ef646cad'}
        );

        return Columns;
    }).
    factory('ColumnsSave', function($resource){
        var ColumnsSave = $resource('https://api.mongolab.com/api/1/databases' +
            '/kanban_board/collections/columns',
            { apiKey: '4f9ffc47e4b0df00ef646cad'},
            { charge: {method:'POST', params:{charge:true}}}
        );

        return ColumnsSave;
    });

    /*
    factory('SaveTable', function($resource){
        var Project = $resource('https://api.mongolab.com/api/1/databases/developerhub/collections/message',
            {
                apiKey: '4f9ffc47e4b0df00ef646cad',
                data: {
                    "name": "Dan"
                },
                type: "Post",
                contentType: "application/json"
            });

        return Project;
    });
        */