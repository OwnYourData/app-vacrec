'use strict';

/**
 * @ngdoc function
 * @name vaccRecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vaccRecApp
 */
angular.module('vaccRecApp')
  .controller('MainCtrl', function ($scope,$http,Record,ngToast) {

    $scope.records = [];
    $scope.display = {
      names: []
    };

    function clear() {
      $scope.record = {
        date: new Date()
      };
    }


    clear();

    function loadAll() {
      Record.query(function(result) {
        $scope.records = result;

        var patients = {};
        $scope.records.forEach(function(record) {
          var vaccinates = patients[record.patient] + 1 || 1;
          patients[record.patient] = vaccinates;
        });

        $scope.display.names = Object.keys(patients);

      });
    }

    loadAll();

    $scope.dateOptions = {
      maxDate: new Date(),
      startingDay: 1
    };

    $scope.popup = {
      opened: false
    };

    $scope.open = function() {
      $scope.popup.opened = true;
    };

    $scope.format = 'dd MMMM yyyy';



    function onSaveSuccess(record) {
      ngToast.create('successfully saved...');
      $scope.records.push(record);
      if ($scope.display.names.indexOf(record.patient) == -1) {
        $scope.display.names.push(record.patient);
      }
      clear();
    }

    function onSaveError() {

    }

    $scope.submit = function() {
      Record.save($scope.record, onSaveSuccess, onSaveError);
    }

    $scope.vaccinations =[
      {
        name: 'Diphtherie',
        abbreviation: 'DIP'
      },
      {
        name: 'Frühsommer-Meningoenzephalitis',
        abbreviation: 'FSME'
      },
      {
        name: 'Haemophilus influenzae Typ B',
        abbreviation: 'HiB'
      },
      {
        name: 'Hepatitis A',
        abbreviation: 'HA'
      },
      {
        name: 'Rotavirus',
        abbreviation: 'RV'
      },
      {
        name: 'Tetanus',
        abbreviation: 'TET'
      },
      {
        name: 'Pertussis',
        abbreviation: 'PEA'
      },
      {
        name: 'Poliomyelitis',
        abbreviation: 'IPV'
      },
      {
        name: 'Hepatitis B',
        abbreviation: 'HBV'
      },
      {
        name: 'Pneumokokken',
        abbreviation: 'PNC'
      },
      {
        name: 'Mumps Masern Röteln',
        abbreviation: 'MMR'
      },
      {
        name: 'Meningokokken',
        abbreviation: 'MEC-4'
      },
      {
        name: 'Humane Papillomaviren',
        abbreviation: 'HPV'
      },
      {
        name: 'Hepatitis A',
        abbreviation: 'HAV'
      },
      {
        name: 'Varizellen',
        abbreviation: 'VZV'
      },
      {
        name: 'Influenza',
        abbreviation: 'IV'
      },
      {
        name: 'Varizellen',
        abbreviation: 'VZV'
      },
      {
        name: 'Varizellen',
        abbreviation: 'VZV'
      },
      {
        name: 'Varizellen',
        abbreviation: 'VZV'
      },
      {
        name: 'Varizellen',
        abbreviation: 'VZV'
      }
    ];
  });
