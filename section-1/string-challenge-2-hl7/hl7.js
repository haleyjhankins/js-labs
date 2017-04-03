var PIDParser = {

  name: function(data) {
     var pieces = data.split('|');
     return pieces[5];

  },

  birthYear: function(data) {
    var pieces = data.split('|');
    //console.log(pieces);
    var date= pieces[7];
  //  console.log(date);

    return date.slice(0,4);
  },

  birthMonth: function(data) {
    var pieces = data.split('|');
    var date= pieces[7];

    return date.slice(4,6);
  },

  birthDay: function(data) {
    var pieces = data.split('|');
    var date= pieces[7];

    return date.slice(6);
  }
}

var MSHParser = {

  type: function(data) {
    var pieces =data.split('|');
    console.log(pieces);

    return pieces[8];

  },

  sendingApplication: function(data) {
    var pieces = data.split('|');
    return pieces [2];

  },

  sendingFacility: function(data) {
    var pieces = data.split('|');
    return pieces [3];
  }

}
