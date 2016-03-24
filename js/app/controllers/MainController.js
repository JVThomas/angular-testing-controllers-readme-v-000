function MainController() {
    this.name = 'Steve Jobs';
}

function addNumbers(num1, num2){
  return parseFloat(num1,10) + parseFloat(num2,10);
}

angular
    .module('app')
    .controller('MainController', MainController);