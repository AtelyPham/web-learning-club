function processData(input) {
    //Enter your code here
    const regex = /\w{1,}(\.\w{1,}){0,}@\w{1,}(\.\w{1,}){1,}/g;

    output = input.match(regex);

    output = Array.from(new Set(output));

    output.sort();
    console.log(output.join(";"));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
