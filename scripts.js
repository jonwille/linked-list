// function createBookmark(bookmark) {
//   $('.right-container').append(
//     `<li class='bookmarked-container'>
//       <h3 class='website-title-bookmark'>${bookmark.title}</h3>
//       <h4 class='website-url-bookmark'>${bookmark.url}</h4>
//       <button class='read-button'>Read</button>
//       <button class='delete-button'>Delete</button>
//     </li>`
//   )
// }

$("button").attr('disabled','disabled');
// When User Fills Out Form Completely
$(".website-url-input").keyup(function(){
$("button").removeAttr('disabled');
});



function createBookmark(bookmark) {
  $('.right-container').append(
    `<div class="new-bookmark">
      <div class="new-website-title-bookmark">${bookmark.title}
      </div>
      <hr>
      <div class="new-website-url-bookmark">
      <a href="${bookmark.url}" target="_blank"> ${bookmark.url}</a>
      </div>
      <hr>
      <div class="buttons">
      <button class="read-button">Read
      </button>
      <button class="delete-button">Delete
      </button>
      </div>
      </div>`
    )}

function Bookmark(title, url){
 this.title = title;
 this.url = url;
}

$('.enter-button').on('click', function(){
 var title = $('.website-title-input').val();
 var url = $('.website-url-input').val();
 var bookmark = new Bookmark(title, url);
 createBookmark(bookmark);
 // $('.website-title-input').val('')
 // $('.website-url-input').val('')
});

$('.right-container').on('click', '.delete-button', function(){
  $(this).parent().parent().remove()
})


$('.right-container').on('click' , '.read-button', function() {
  $(this).parent().parent().toggleClass("read");

})
