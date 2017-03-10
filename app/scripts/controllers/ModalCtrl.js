(function() {
    function ModalCtrl($uibModal, $uibModalInstance, Room){
        var $ctrl = this;
        $ctrl.animationsEnabled = true;
        
        $ctrl.addRoom = function (roomName) {
            Room.newRoom(roomName);
            $uibModalInstance.close();
        }

        $ctrl.cancel = function () {
            $uibModalInstance.close();
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$uibModalInstance', 'Room', ModalCtrl])
})();