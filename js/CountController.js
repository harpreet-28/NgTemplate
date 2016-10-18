var CountController = function CountController($scope) {

        var self = this;
        self.count = 1;
        self.increment= function increment(){
            self.count ++;
        };
        self.decrement = function decrement(){
            self.count --;
        };
};


angular
    .module('app')
    .controller('CountController', ['$scope', CountController]);
