//ResponsePayload object
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

// Creates ResponsePayload object
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

//Creates json object
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }
  //Choose code from arg2 or arg1
  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else if (arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  //Create payload
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  if(!code) {
    // if no response code given, we default to 200
    code = 200;
  }
  if(typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }
  //Write response
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}
