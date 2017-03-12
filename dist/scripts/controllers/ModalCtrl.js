(function() {
    function ModalCtrl($uibModal, $uibModalInstance, Room, $cookies){
        var $ctrl = this;
        $ctrl.animationsEnabled = true;
        
        $ctrl.addRoom = function (roomName) {
            Room.newRoom(roomName);
            $uibModalInstance.close();
        }

        $ctrl.cancel = function () {
            $uibModalInstance.close();
        }
        
        $ctrl.createUsername = function () {
            $cookies.put('blocChatCurrentUser', $ctrl.username);
            $uibModalInstance.close();
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', 'Room', '$cookies', ModalCtrl])
})();