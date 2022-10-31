
const logger = require('../../services/logger.service')
const projectsService = require('./projects.service')
const { json } = require('express')

async function getProjects(req, res) {
   
    try {
        const projects = await projectsService.query()
        res.send(projects)
    } catch (err) {
        logger.error('Cannot get projects', err)
        res.status(500).send({ err: 'Failed to get projects' })
    }
}

async function deleteProject(req, res) {
  
    try {
        await projectsService.remove(req.params.id)
        // res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        // logger.error('Failed to delete project', err)
        res.status(500).send({ err: 'Failed to delete project' })
    }
}


async function addProject(req, res) {
    try {
        let project = req.body
        res.send(project)

    } catch (err) {
        console.log(err)
        // logger.error('Failed to add project', err)
        res.status(500).send({ err: 'Failed to add project' })
    }
}

async function getById(req, res) {
    const { id } = req.params
    try {
        const projects = await projectsService.getById(id)
        res.send(projects)
    } catch (err) {
        logger.error('Cannot get projects', err)
        res.status(500).send({ err: 'Failed to get projects' })
    }
}

async function addManyProjects(req, res) {
    try {
        const { user } = req.session
        const vUser = await userService.getById(user?._id)

        if (!vUser?.isAdmin) {
            res.status(401).send({ err: 'Not allowed' })
            return
        }

        var { projects } = req.body
        // project.byUserId = req.session.user._id
        projects = await projectsService.addMany(projects)

        // prepare the updated project for sending out
        // project.byUser = await userService.getById(project.byUserId)
        // project.aboutUser = await userService.getById(project.aboutUserId)

        console.log('CTRL SessionId:', req.sessionID)
        // socketService.broadcast({ type: 'project-added', data: project })
        // socketService.emitToAll({ type: 'user-updated', data: project.byUser, room: req.session.user._id })
        res.send(projects)

    } catch (err) {
        console.log(err)
        logger.error('Failed to add project', err)
        res.status(500).send({ err: 'Failed to add project' })
    }
}


async function updateProject(req, res) {
    try {
   
        var project  = req.body
    //    const orderToUpdate = await ordersService.getById(project.orders[0]._id)
    //    orderToUpdate.status=project.orders[0].status
    //    await ordersService.update(orderToUpdate)

        project = await projectsService.update(project)

        
        console.log('CTRL SessionId:', req.sessionID)
        res.send(project)

    } catch (err) {
        console.log(err)
        logger.error('Failed to add project', err)
        res.status(500).send({ err: 'Failed to add project' })
    }
}



module.exports = {
    getProjects,
    deleteProject,
    addProject,
    getById,
    addManyProjects,
updateProject,
}