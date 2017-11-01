function greet(callback){
  console.log('Hellooo');
  var data = {
    name:'archie',
    nim:'1103132074'
  }
  callback(data);
}

greet(function(data){
    console.log('callback invoked, from ' + data.name);
});
