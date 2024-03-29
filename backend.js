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

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body.length);
    $notify("Title", "Subtitle", response.body.length); // Success!
    $done();
}, reason => {
    // reason.error
    console.log(reason.error);
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
