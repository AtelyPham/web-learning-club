print = console.log;

function processData(input) {
    const re =
        /https?:\/\/(ww[w2]\.)?[a-zA-Z0-9-]{1,}(\.[a-zA-Z0-9-]{1,}){1,}/g;

    let matches = input.match(re);

    matches = matches.map((str) => {
        const idx = str.lastIndexOf("/");

        if (idx === -1) {
            throw new Error("Idx = -1");
        }

        str = str.substr(idx + 1);

        if (str.match(/www./)) {
            str = str.replace(/www./, "");
        }

        return str;
    });

    matches = Array.from(new Set(matches));
    matches.sort();
    print(matches.join(";"));
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
