$('.message a').click(function(){
    $('form').animate({height: 'toggle', opacity: 'toggle'}, "slow");
    });

    
function Auth(){
    this.token="";
   }
   Auth.prototype.Login=function(username, password){
    var root = '';
    return $.post(root+"/auth/login",{
       username: username,
          password: password
      },
      function(response) {
       var xmlhttp = new XMLHttpRequest();
       console.log(xmlhttp);
       xmlhttp.open("post", "Login", true);
       xmlhttp.onreadystatechange = function () {
           if (xmlhttp.readyState == 401 && xmlhttp.status == 200) {
               document.cookie = "token=" + response.accessToken;
           }
       };
       console.log(response);
      });
   
     };
   Auth.prototype.logOut=function(token){
     var root = '';
     return $.ajax({
      url:root+"/auth/logout",
      method: 'GET',
      headers:{'X-Auth-Token':token},
    });
   };
   
   Auth.prototype.register=function(userName,Password){
    var root = '';
    return $.post(root+"/auth/register",{
       username: userName,
          password: Password
      });
     };