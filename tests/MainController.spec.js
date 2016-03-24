describe('MainController', function() {
    
    beforeEach(module('app'));
    
    var $controller;

    beforeEach(inject(function(_$controller_){
      $controller = _$controller_;
    }));

    it('should have Steve Jobs name', function(){
      var $scope = {};
      var controller = $controller('MainController', {$scope:$scope});
      expect(controller.name).toEqual('Steve Jobs');
    });

    it('should add two numbers', function() {
      expect(addNumbers(1,3)).toBe(4);
      expect(addNumbers(92,35)).toBe(127);
      expect(addNumbers('92',35)).toBe(127);
      expect(addNumbers('92', '35')).toBe(127);
    });
});
