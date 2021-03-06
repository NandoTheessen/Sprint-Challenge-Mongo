const express = require('express')
const Category = require('../models/Category')

const router = express.Router()

router
    .route('/')
    .post((req, res) => {
        const { title } = req.body
        // Data Sanitization: 
        title === undefined || typeof (title) != "number" ? res.status(400).json({ error: "Please provide correct data" }) : null
        newCategory = new Category({ title })
        newCategory.save()
            .then(result => res.status(201).json(result))
            .catch(err => console.log(err))
    })
    .get((req, res) => {
        Category.find({}, { title: 1, _id: 0 })
            .then(result => res.status(200).json(result))
            .catch(err => console.log(err))
    })

module.exports = router;