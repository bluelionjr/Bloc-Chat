(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        //this.newRoom = function(roomName) {
            //Room.newRoom(roomName);
        //}
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();