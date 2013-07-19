settings = {};
//settings.server_host = "localhost:8080";
settings.server_prefix = "http://";
//settings.server_host = "whiteboard-latchd.rhcloud.com";
settings.server_host = "166.78.17.230:8080";
settings.username = null;
settings.record = null;
settings.current_project = "Milton";

settings.setUsername = function(username){
 if(typeof(Storage)!=="undefined")
  {
      localStorage.username = username;
      
  }
  settings.username = username;
};

settings.getUsername = function(){
    if(typeof(Storage)!=="undefined")
  {
      settings.username = localStorage.username;
  }
  return settings.username;
};