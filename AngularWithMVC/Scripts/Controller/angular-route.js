/// <reference path="../_references.js" />
app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('home');
    var about = {
        name: 'about',
        templateUrl: '/Home/About',
        url: '/about'
    };

    var home = {
        name: 'home',
        url: '/home',
        templateUrl: '/Home/Index'
    };
      
    var contact = {
        url: '/contact',
        templateUrl: '/Home/Contact',
        name : 'contact'
    };

    var register = {
        name: 'register',
        templateUrl: '/Account/Register',
        url: '/register'
    };

    var login = {
        name: 'login',
        templateUrl: '/Account/Login',
        url: '/login'
    };

    //Customer Registration
    var custReg = {
        name: 'customerRegistration',
        templateUrl: '/Customer/Index',
        url: '/customerRegistration'
    };
    $stateProvider.state(custReg);

    $stateProvider.state(about);
    $stateProvider.state(register);
    $stateProvider.state(home);
    $stateProvider.state(contact);
    $stateProvider.state(login);

});