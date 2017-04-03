var PIDParser = {

  name: function(data) {
     var pieces = data.split('|');
     console.log(pieces);
    // return pieces [5];
  },

  birthYear: function(data) {
    // var pieces = data.split('|');
    // var fullDate = pieces [7];
    // return fullDate.subtr(0,4);
  },

  birthMonth: function(data) {
    // var pieces = data.split('|');
    // var fullDate = pieces [7];
    // return fullDate.subtr(4,2);
  },

  birthDay: function(data) {
    // var pieces =data.split ('|');
    // var fullDate= pieces [7];
    // return fullDate.slice (6,8);
  }
}

var MSHParser = {

  type: function(data) {
  },

  sendingApplication: function(data) {
  },

  sendingFacility: function(data) {
  }

}
