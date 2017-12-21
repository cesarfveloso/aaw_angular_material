angular
    .module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('DemoCtrl', function ($scope) {

        $scope.ufs = ('AC AL AM AP BA CE DF ES GO MA MG MS MT PA PB PE PI PR RJ RN ' +
            'RO RR RS SC SE SP TO').split(' ').map(function (uf) {
                return { abbrev: uf };
            });
    });