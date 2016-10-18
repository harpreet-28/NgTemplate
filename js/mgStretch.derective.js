var mgCounter = function mgCounter() {
    return {
        restrict: 'E',
        controller: 'CountController as counter',
        countrollerAs: 'counter',
        template: `
            <div class="counter">
                <input type="text" ng-model="counter.count" />
                <button type="button" ng-click="counter.decrement()">-</button>
                <button type="button" ng-click="counter.increment()">+</button>
            </div>

        `

    };

};

angular
    .module('app')
    .directive('mgCounter', mgCounter);
