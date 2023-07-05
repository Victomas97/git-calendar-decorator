const { exec } = require("child_process");

const initDate = new Date('2018-01-01');
const endDate = new Date('2018-12-31');

// Crear una matriz vacía para almacenar las fechas
const dateMatrix = [];

// Recorrer el rango de fechas y agregar cada fecha a la matriz
const currentDate = initDate;
while (currentDate <= endDate) {
    dateMatrix.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`);
    currentDate.setDate(currentDate.getDate() + 1);
}

dateMatrix.forEach((date) => {
    exec(`git commit --allow-empty --date ${date} -m 'Date Commit'`, (error, stdout, stderr) => {
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
});

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

// fetch("https://github.com/users/Victomas97/contributions").then((res) => {
//     console.log(res.json());
// });