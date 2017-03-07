(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('Rooms');
        var rooms = $firebaseArray(ref);
        
        return {
            all: rooms
            //newRoom = function(roomName) {
                //rooms.add({name:roomName})
            //}
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();