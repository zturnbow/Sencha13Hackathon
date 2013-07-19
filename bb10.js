$(document).ready(function(){
   $("body").append('<input id="picture" type="file" accept="image/*" capture="camera" style="display:none;">');
   console.log($("#picture"));
   document.getElementById("picture").addEventListener('change', displayImage, false); 
});

function displayImage(evt) {
          files = evt.target.files; // FileList object
          // Loop through all Images
          for (var i = 0, f; f = files[i]; i++) {
            var reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = (function(theFile) {
              return function(e) {
                // Display Image
                //document.getElementById('list').innerHTML = ['<img class="imageDisp" src="', e.target.result,
                //            '" title="', escape(theFile.name), '"width="280" height="440"/>'].join('');//Modify Image size as needed
                $("body").trigger("photo_capture", e.target.result);
                  //$("body").append(['<img class="imageDisp" src="',e.target.result,'" title="',escape(theFile.name),'" width="600" height"900"/>'].join(''));
              };
            })(f);
            // Read in the image file as a data URL.           
            reader.readAsDataURL(f);
          }
        }