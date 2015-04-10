angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope) {

        cordova.plugins.barcodeScanner.scan(
            function (result) {
                alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
                "preferFrontCamera" : true,
                "showFlipCameraButton" : true
            }
        );
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


    .controller('AccountCtrl', function($scope,shakeevent) {
        $scope.settings = {
            enableFriends: true
        };
        var myShakeEvent = shakeevent.getShakeEvent();

        myShakeEvent.start();
        $scope.$watch('settings.enableFriends', function(newValue, oldValue) {

            if(newValue)
            {
                window.addEventListener('shake', shakeEventDidOccur, false);
            }else
            {
                window.removeEventListener('shake', shakeEventDidOccur, false);
            }
        });

        function shakeEventDidOccur () {
            if (confirm('Undo?')) {
                alert("this is a test!you see it");
            }
        }
    });
