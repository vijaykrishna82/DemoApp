'use strict';

eventsApp.controller('EventController', function EventController($scope){
    $scope.snippet='<span style="color:red">hi there</span>';
    $scope.boolValue = true;
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: 'img/AngularJS-large.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of directives',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: '30 mins',
                level: 'Introductory',
                abstract: 'This session will take a closer look at scopes. Learn what they do',
                upVoteCount: 0
            },
            {
                name: 'Well behaved Controllers',
                creatorName: 'Jane Smith',
                duration: '2 hrs',
                level: 'Intermediate',
                abstract: 'How to craft controllers that will win the respect of your friends and neighbors.',
                upVoteCount: 0
            },
        ]
    }

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
});
