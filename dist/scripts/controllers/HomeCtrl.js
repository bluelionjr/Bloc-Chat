(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.newRoom = function(roomName) {
            Room.newRoom(roomName);
        }
        
        this.openModal = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        }   
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();