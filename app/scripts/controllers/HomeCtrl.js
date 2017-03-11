(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.newRoom = function(roomName) {
            Room.newRoom(roomName);
        }
        
        this.openModal = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        }
        
        this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();