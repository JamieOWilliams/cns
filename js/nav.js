var data = [
  {
    "heading": "Reliable Backups in the Cloud",
    "subheading": "We’re able to offer clients a best-in-class backup and disaster recovery solution."
  },
  {
    "heading": "Rapid In-House Backups",
    "subheading": "Add some words here under the title again"
  },
  {
    "heading": "Affordable Pricing",
    "subheading": "Add some words here under the title once more"
  }
];

$('.header-title').hide();
$('.header-subtitle').hide();
$('.header-btn').hide();
$('.header-btn').css("transition", "none")

var fadeTime = 400;

$('.header-title').fadeIn(fadeTime);
$('.header-subtitle').fadeIn(fadeTime + 200, function() {
  $('.header-btn').fadeIn(fadeTime + 200, function() {
    $('.header-btn').css("transition", "all 0.2s");
  });
});





// var oldIndex = 99;
//
// $('.block').mouseover(function() {
//   var index = parseInt(this.id);
//   if (oldIndex !== index) {
//     oldIndex = index;
//     $('.header-content').fadeOut(function() {
//       $('.header-title').text(data[index].heading);
//       $('.header-subtitle').text(data[index].subheading);
//       $('.header-content').fadeIn();
//     });
//   };
// });
