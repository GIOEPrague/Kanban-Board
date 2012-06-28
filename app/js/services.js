angular.module('kanbanServices', ['ngResource']).
    factory('Tables', function($resource){
        var Tables = $resource('https://api.mongolab.com/api/1/databases' +
            '/kanban_board/collections/users',
            { apiKey: '4f9ffc47e4b0df00ef646cad'}
        );

        return Tables;
    }).
    factory('TablesSave', function($resource){
        var TablesSave = $resource('https://api.mongolab.com/api/1/databases' +
            '/kanban_board/collections/users',
            { apiKey: '4f9ffc47e4b0df00ef646cad'},
            { charge: {method:'POST', params:{charge:true}}}
        );

        return TablesSave;
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