// // navigation background change on scroll
// jQuery(
//   function() {
//     var nav = $('nav');
//     var position = 0;
//
//     $(document).scroll(function() {
//       position = $(this).scrollTop();
//
//       if (position > 50) {
//         nav.addClass('scrolled');
//       }
//       if (position < 50) {
//         nav.removeClass('scrolled');
//       }
//     });
//   }
// )
//
//
// // menu links active handler
// jQuery(
//   function() {
//     var link = $('nav a');
//
//     $(document).scroll(function() {
//       var position = $(this).scrollTop();
//
//       link.each(function() {
//         var offset = $(this.hash).offset().top - 30;
//
//         if ( offset <= position ) {
//           $(this).parent().addClass('active');
//           $(this).parent().siblings().removeClass('active');
//         }
//       })
//     })
//   }
// );
//
//
// // menu button animaiton handler
// jQuery(
//   function() {
//     var menuItems = $('.menu-items');
//     var menuButton = $('.menu-button');
//     var menuLink = $('nav a');
//
//     menuButton.click(() => {
//       $('html').toggleClass('overflow');
//       menuButton.toggleClass('show');
//       menuItems.toggleClass('show');
//     });
//
//     menuLink.click(() => {
//       $('html').removeClass('overflow');
//       menuButton.removeClass('show');
//       menuItems.removeClass('show');
//     });
//   }
// )
