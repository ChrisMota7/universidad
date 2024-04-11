const sql = require("../config/db.js")

const Subject = function(subject) {
    this.name = subject.name
}

Subject.getBySpecialty = (specialty_id, result) => {
    sql.query("SELECT * FROM materia WHERE especialidad_id = ?",
    [specialty_id],
    (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return
        }

        console.log("materias:", res);
        result(null, res)
    })
}

module.exports = Subject;