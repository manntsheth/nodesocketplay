var app = angular.module('app1', []);
var socket = io();

socket.on('connect', function () {
    console.log('Conncted to socket.io server!');
});



app.controller("controller1", ['$scope', function ($scope) {
    var vm = this;
    vm.name = 'manen';
    vm.messages = ['sample message'];
    vm.submitTheForm = function (data) {
        vm.messages.push(data);
        socket.emit('message', {
            text: data
        });
    }
    $scope.$watch(, function (oldValue, newValue) {
        socket.on('message', function (message) {
            console.log('New message:');
            console.log(message.text);
            vm.messages.push(message.text);
            console.log('----------');
            console.log(vm.messages);
            console.log('----------');
        });
    });

}]);