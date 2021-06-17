function setCookie (name, value, expires, path, domain, secure) {
	  document.cookie = name + "=" + escape(value) +
						((expires) ? "; expires=" + expires : "") +
						((path) ? "; path=" + path : "") +
						((domain) ? "; domain=" + domain : "") +
						((secure) ? "; secure" : "");
}

function getCookie(name) {
	if (!document.cookie) return false;
	const cookie = " " + document.cookie;
	const search = " " + name + "=";

	let offset = cookie.indexOf(search);
	if ( offset === -1 ) return false;

	offset += search.length;
	let end = cookie.indexOf(";", offset)
	if (end === -1) {
		end = cookie.length;
	}
	return unescape(cookie.substring(offset, end));
}