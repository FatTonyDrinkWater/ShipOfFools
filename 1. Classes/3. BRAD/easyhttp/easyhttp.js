function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  this.http.onload = () => {
    callback(this.http.responseText);

  }
  this.http.send();
}

easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  this.http.onload = () => {
    callback(null, this.http.responseText);

  }
  this.http.send(JSON.stringify(data));
}