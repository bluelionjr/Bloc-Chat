(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
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
        
        this.sendMessage = function () {
            this.newMessage.roomId = this.currentRoom.$id
            this.newMessage.username = this.currentUser;
            Message.send(this.newMessage);
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();