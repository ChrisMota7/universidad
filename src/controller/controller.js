const Subject = require("../model/subject.js")

exports.getBySpecialty = (req, res) => {
    Subject.getBySpecialty(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `There's no specialty with id ${req.params.id}`
                })
            } else {
                res.status(500).send({
                    message: `Could not find subjects for id ${req.params.id}`
                })
            }
        } else res.status(200).send(data)
    })
}