if (!App) var App = {};

//++++++++++++++++++++++ UTILITY FUNCTIONS ++++++++++++++++++++++//
App.utils = {
	//************ GENERAL *************//
	
	//generates random uuid number.
	uuid: function(){
		var s4 = function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return (s4()+'-'+s4());
	},
	
	is_function: function(func){
		return (typeof func == 'function');
	},
	
	escape_msg: function(str){
		return str.replace(/'/g,"\'") || null;
	},
	

	/* limit input to a textarea */
	// ex. onkeypress="OVP.utils.limit_input(this,500,OVP.utils.$('charcount'));"
	limit_input: function(elm,max_chars,show_elm){ 
		if (elm){
			if (elm.value.length > max_chars)
				elm.value = elm.value.substring(0,max_chars);
			if (show_elm)
				show_elm.value = max_chars - elm.value.length;
		}
	},
	
	//encode/decode to base64
	base64: {
		keystr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode: function(input){
			var output = '';
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;
			input = OVP.utils.base64._utf8_encode(input);
	
			while (i < input.length){
	
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
	
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
	
				if (isNaN(chr2))
					enc3 = enc4 = 64;
				else if (isNaN(chr3))
					enc4 = 64;
				output = output +
				this.keystr.charAt(enc1) + this.keystr.charAt(enc2) +
				this.keystr.charAt(enc3) + this.keystr.charAt(enc4);
			}
			return output;
		},
		decode: function(input) {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
	
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	
			while (i < input.length) {
	
				enc1 = this.keystr.indexOf(input.charAt(i++));
				enc2 = this.keystr.indexOf(input.charAt(i++));
				enc3 = this.keystr.indexOf(input.charAt(i++));
				enc4 = this.keystr.indexOf(input.charAt(i++));
	
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
	
				output = output + String.fromCharCode(chr1);
	
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
	
			}
	
			output = OVP.utils.base64._utf8_decode(output);
	
			return output;
	
		},
		_utf8_encode: function(string){
			string = string.replace(/\r\n/g,"\n");
			var utftext = '';
	
			for (var n = 0; n < string.length; n++) {
	
				var c = string.charCodeAt(n);
	
				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}
	
			}
	
			return utftext;
		},
		_utf8_decode: function(utftext){
			var string = '';
			var i = 0;
			var c = 0;
            var c1 = 0;
            var c2 = 0;
	
			while ( i < utftext.length ){
				c = utftext.charCodeAt(i);
				if (c < 128){
					string += String.fromCharCode(c);
					i++;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		}
	},
        
	/* returns the keys of the object as an array */
	keys: function(obj){
		var rval = [];
		for (var prop in obj){
			rval.push(prop);
		}
		return rval;
	},
	
	/* returns an array of values from an object */
	values: function(obj){
		var rval = [];
		for (var prop in obj){
			rval.push(obj[prop]);
		}
		return rval;
	},
	
	str_to_JSON: function(txt){
		try{
			return eval('('+ txt + ')');
		}
		catch(e){
			return txt;
		}
	},
	
	JSON_to_str: function(_json){
		if (_json){
			var t = typeof(_json);
			if (t != "object" || _json === null){
				if (t == "string") 
					_json = '"'+_json+'"';
				return String(_json);
			}
			else {
				// recurse array or object
				var n, v, json = [], arr = (_json && _json.constructor == Array);
				for (n in _json) {
					if( _json.hasOwnProperty( n ) ){
						v = _json[n]; t = typeof(v);
						if (t=="string")
							v = '"'+v+'"';
						else if (t=="object" && v!==null) 
							v = this.JSON_to_str(v);
						json.push((arr ? "" : '"' + n + '":') + String(v));
					}
				}
				return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
			}
		}
	},
	
	urlencode: function(str){
		return encodeURIComponent(str.toString());
	},
	
	urldecode: function(str){
		return decodeURIComponent(str.toString());
	},
	
    //************ DOM *************//

    //show element (extends jquery)
    show: function(elm){
        if (elm)
            elm.show().css('visibility', 'visible');
    },

    //centers an element on the screen
    //offset: {x:0,y:0}, will move the elm from center
    center: function(elm, offset){
        var elm = $(elm);
        if (elm.length){
            if (!offset)
                var offset = { x: 0, y: 0 };
            elm.css('position', 'absolute');
            elm.css('top', ((window.innerHeight - elm.outerHeight()) / 2) + window.scrollY + offset.y + 'px');
            elm.css('left', ((window.innerWidth - elm.outerWidth()) / 2) + window.scrollX + offset.x + 'px');
        }
    }
	
};