const router = require('express').Router()
const pembuatansimController = require('../controller/pembuatansim')

router.post('/insert', (req, res)=> {
    pembuatansimController.create(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getall', (req, res)=> {
    pembuatansimController.showAllData()
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res)=> {
    pembuatansimController.showDataById(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.put('/update/:id', (req, res)=> {
    pembuatansimController.update(req.params.id, req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res)=> {
    pembuatansimController.delete(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})
module.exports = router