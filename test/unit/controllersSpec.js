'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    describe('PhoneListCtrl', function() {
        var scope;
        var ctrl;

        beforeEach(module('phonecatApp'));

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('PhoneListCtrl', {$scope: scope});
        }));

        it('should create "phones" model with 3 phones', inject(function($controller) {
            expect(scope.phones.length).toBe(3);
        }));

        it('should have a name property with value "World"', inject(function($controller) {
            var scope = {};
            var ctrl = $controller('PhoneListCtrl', {$scope: scope});

            expect(scope.name).toBe("World");
        }));

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('age');
        });

    });

});

