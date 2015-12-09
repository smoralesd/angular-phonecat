'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    describe('PhoneListCtrl', function() {
        var scope;
        var ctrl;
        var $httpBackend;

        beforeEach(module('phonecatApp'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{
                    name: 'Nexus S'
                }, {
                    name: 'Motorola DROID'
                }]);

            scope = $rootScope.$new();
            ctrl = $controller('PhoneListCtrl', {
                $scope: scope
            });
        }));

        it('should create "phones" model with 2 phones fetched from xhr', inject(function($controller) {
            expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones.length).toBe(2);
            expect(scope.phones).toEqual([{
                name: 'Nexus S'
            }, {
                name: 'Motorola DROID'
            }]);
        }));

        it('should have a name property with value "World"', inject(function($controller) {
            var scope = {};
            var ctrl = $controller('PhoneListCtrl', {
                $scope: scope
            });

            expect(scope.name).toBe("World");
        }));

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('age');
        });

    });

});
