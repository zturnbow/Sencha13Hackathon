settings = {};
settings.server_host = "localhost:8080";
settings.username = null;


settings.setUsername = function(username){
 if(typeof(Storage)!=="undefined")
  {
      localStorage.username = username;
      
  }
  settings.username = username;
}

settings.getUsername = function(){
    if(typeof(Storage)!=="undefined")
  {
      settings.username = localStorage.username;
  }
  return settings.username;
}