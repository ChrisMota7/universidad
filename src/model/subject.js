const sql = require("../config/db.js");

const Subject = function(subject) {
    this.nombre = subject.nombre; // Cambiado de `name` a `nombre`
    this.especialidad_id = subject.especialidad_id;
};

Subject.getBySpecialty = (specialty_id, result) => {
    sql.query("SELECT * FROM materia WHERE especialidad_id = ?", [specialty_id], (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return;
        }

        console.log("materias:", res);
        result(null, res);
    });
};

Subject.create = (newSubject, result) => {
    sql.query("INSERT INTO materia SET ?", newSubject, (err, res) => {
        if (err) {
            console.error("Error occurred while inserting the subject:", err);
            result(err, null);
            return;
        }

        console.log("created subject: ", { id: res.insertId, ...newSubject });
        result(null, { id: res.insertId, ...newSubject });
    });
};

Subject.updateById = (id, subject, result) => {
    sql.query(
        "UPDATE materia SET nombre = ?, especialidad_id = ? WHERE materia_id = ?",
        [subject.nombre, subject.especialidad_id, id],
        (err, res) => {
            if (err) {
                console.log("error", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated subject: ", { id: id, ...subject });
            result(null, { id: id, ...subject });
        }
    );
};

Subject.remove = (id, result) => {
    sql.query("DELETE FROM materia WHERE materia_id = ?", id, (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted subject with id: ", id);
        result(null, res);
    });
};

module.exports = Subject;
