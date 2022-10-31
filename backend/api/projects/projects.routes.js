const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {updateProject, getById, addProject, getProjects, deleteProject} = require('./projects.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getProjects)
router.post('/',  requireAuth, addProject)
router.delete('/:id',  requireAuth, deleteProject)
router.put('/', updateProject)
router.get('/:id', log, getById)
router.post('/many', requireAdmin, addProject)
// router.post('/', requireAdmin, addProject)




module.exports = router