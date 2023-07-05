let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");
let requestMethod = "POST";

requestMethodEl.addEventListener("change", function(event) {
    requestMethod = event.target.value;
})
console.log(requestMethod)
consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (requestUrlEl.value === "") {
        requestUrlErrMsgEl.textContent = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
    let requestBody = requestBodyEl.value;

    let options = {
        method: requestMethod,

        headers: {
            'Content-Type': "application/json",
            Accept: 'application/json',
            Authorization: "Bearer a333553f6830b7ee549f1fc4871bcbc71c4caaa610f15225af1c36030fbe3b38"

        },
        body: requestBody
    }
    console.log(options.method);

    let url = requestUrlEl.value;
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {

            let code = jsonData.code;
            let responseData = JSON.stringify(jsonData);
            responseBodyEl.value = responseData;
            responseStatusEl.value = code;

        })





})