const { exec } = require("child_process");



exec("git add . & git commit --allow-empty --date 2008-07-03 -m 'Date Commit'", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        exec("git push", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);

                return;
            }
            console.log(`stdout: ${stdout}`);
        });

        return;
    }
    console.log(`stdout: ${stdout}`);
});

// fetch("https://github.com/users/Victomas97/contributions").then((res) => {
//     console.log(res.json());
// });