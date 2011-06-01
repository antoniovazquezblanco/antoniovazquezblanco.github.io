function getProject() {
	var url = window.location.href.split("?");
	if (url.length <= 1)
		return "";
		url = url[1].split("&");
		for (i=0;i<url.length;i++) {
		var parts = url[i].split("=");
		if(parts[0] == "project") {
			if(parts.length <= 1)
				return "";
			var value = unescape(parts[1]);
			value.replace(/\+/g," ");
			return value;
		}
	}
	return "";
}
