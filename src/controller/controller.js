const Subject = require("../model/subject.js");

exports.getBySpecialty = (req, res) => {
    Subject.getBySpecialty(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `There's no specialty with id ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `Could not find subjects for id ${req.params.id}`
                });
            }
        } else res.status(200).send(data);
    });
};

exports.createSubject = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const subject = new Subject({
        nombre: req.body.nombre, // Cambiado de `name` a `nombre`
        especialidad_id: req.body.especialidad_id
    });

    Subject.create(subject, (err, data) => {
        if (err) {
            console.error("Error occurred while creating the subject:", err);
            res.status(500).send({
                message: err.message || "Some error occurred while creating the subject."
            });
        } else res.status(201).send(data);
    });
};

exports.updateSubject = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const subject = new Subject({
        nombre: req.body.nombre,
        especialidad_id: req.body.especialidad_id
    });

    Subject.updateById(req.params.id, subject, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Subject with id ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `Error updating Subject with id ${req.params.id}`
                });
            }
        } else res.status(200).send(data);
    });
};

exports.deleteSubject = (req, res) => {
    Subject.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Subject with id ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `Could not delete Subject with id ${req.params.id}`
                });
            }
        } else res.status(200).send({ message: `Subject was deleted successfully!` });
    });
};
