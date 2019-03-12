$(document).ready(function(){
	var accessToken = "0a88855990a24de5b775fd2c50d864e09ac38b71";
	var longUrl = $('.long-url').attr('href');
	var encodeLongUrl = encodeURIComponent(longUrl);
	$.ajax({
		method: "GET",
		url: "https://api-ssl.bitly.com/v3/shorten?access_token="+accessToken+"&longUrl="+encodeLongUrl+"",
		dataType: "json",
		success: function(bitly){
			var shortenedUrl = bitly.data.url;
			console.log(bitly);
			$('.short-url').attr('href',shortenedUrl);
			var status = bitly.status_code;
			if (status == 403) {
				alert('Bitly Monthly Rate Limit Exceeded');
			} else if (status == 500) {
				alert("Missing Access Token. Sign in to Bitly and go to https://bitly.com/a/oauth_apps in order to get your access token");
			}
		},
		error: function(){
			alert('Bitly API was not able to shorten your URL');
		}
	});


	var payload = {
        "domain": "bit.ly",
        "long_url": 'https://en.wikipedia.org/wiki/New_York_City'
    };

	var header = {
	    'Authorization': "Bearer " + accessToken
    };

	$.ajax({
		method: "POST",
		url: "https://api-ssl.bitly.com/v4/shorten",
		dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify(payload),
        headers: header,
		success: function(bitly){
			var shortenedUrl = bitly.data.url;

			console.log(bitly);

			var status = bitly.status_code;

			if (status == 403) {
				alert('Bitly Monthly Rate Limit Exceeded');
			} else if (status == 500) {
				alert("Missing Access Token. Sign in to Bitly and go to https://bitly.com/a/oauth_apps in order to get your access token");
			}
		},
		error: function(){
			alert('Bitly API was not able to shorten your URL');
		}
	});

});