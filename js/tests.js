
var timer = 1000;

test('timeline loaded', function() {
  stop();
  setTimeout(function() {
    equal($("#chat-view > *").size(),4);
    start();
  }, timer += 1000);
});

test('chat post', function() {
  $("#chat-post").click();
  stop();
  var prev_size = $("#chat-view > *").size();
  setTimeout(function() {
   equal($("#chat-view > *").size(),prev_size + 1);
   start();
  }, timer += 1000);
});

test('memberlist loaded', function() {
  stop();
  setTimeout(function() {
   ok($("#accordion2 > *").size() > 3);
   start();
  }, timer += 1000);
});



/*
test( "task done test", function(){
  var prev_size = -100 
  setTimeout(function() {
    prev_size = $("#taskdone-form :checkbox").size(); 
    $("#taskdone-form :checkbox:first").click();
  }, timer += 1000);

  stop();
  setTimeout(function() { 
    equal($("#taskdone-form input:checkbox").size(),prev_size - 1);
    start();
  }, timer += 1000);
});
*/



