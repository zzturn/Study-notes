const headers = {
    "X-GitHub-Api-Version": "2022-11-28",
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
};
const url = 'https://api.github.com/users/luoxin971/repos';
const method = 'GET';
const myRequest = {
    url: url,
    headers: headers
};
console.log($prefs);
if (typeof(exp) != "undefined") {
    console.log($request.url);
    console.log($request.path);
    console.log($request.headers);
    console.log($request.body);
}

let resContent = "";

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    resContent = JSON.parse(response.body).length;
    $notify("Success", "Subtitle", resContent); // Success!
}, reason => {
    // reason.error
    resContent = reason.error;
    $notify("Error", "Subtitle", reason.error); // Error!
});

const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {"Connection": "Close"};
let myData = "We got you.\n\n";

const myResponse = {
    status: myStatus,
    headers: myHeaders,
    body: myData + resContent
};

$done(myResponse);
