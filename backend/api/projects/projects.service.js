const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query() {
    try {
    const criteria = _buildCriteria()
    const collection = await dbService.getCollection('projects')
    const projects = await collection.find(criteria).toArray()
//     let regex = new RegExp(filterBy.name, 'i')
//    return projects.filter((project) => regex.test(project.name));

   return projects
} catch (err) {
logger.error('cannot find projects', err)
throw err
}
}


async function remove(projectId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId, isAdmin } = store
        const collection = await dbService.getCollection('projects')
        // remove only if user is owner/admin
        const query = { _id:+projectId }
        // const query = { _id: ObjectId(projectId) }
        
        if (!isAdmin) query.byUserId = ObjectId(userId)
        // await collection.deleteOne(query)
        return await collection.deleteOne({ _id: ObjectId(projectId), byUserId: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove project ${projectId}`, err)
        throw err
    }
}


async function add(project) {
   
    try {
        // peek only updatable fields!
        const projectToAdd = {
            byUserId: ObjectId(project.byUserId),
            // aboutUserId: ObjectId(project.aboutUserId),
            name: project.name,
  summary: project.summary,
  price: project.price,
  loc: { address: project.loc.address },
  type: project.type,
  createdAt: project.createdAt,
  imgUrls: project.imgUrls,
  reviews: project.reviews ||[],
  host:{
    _id:project.host._id ,
    fullname: project.host.fullname ,
    imgUrl:project.host.imgUrl
  },
  orders: project.orders || []
 
        }
        
        const collection = await dbService.getCollection('projects')
        await collection.insertOne(projectToAdd)
        return projectToAdd;
    } catch (err) {
        // logger.error('cannot insert project', err)
        throw err
    }
}

function _buildCriteria() {
    let criteria = {
    
    }
    // const name = {$regex :JSON.parse(filterBy.loc).address,$options :'i'}
    // criteria.$and.push({name : name})
  

    return criteria
}

async function getById(projectId) {
    try {
        const collection = await dbService.getCollection('projects')
        const project = await collection.findOne({ '_id': ObjectId(projectId) })
        return project
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}

async function update(project) {
    try {
        // peek only updatable fields!
        const projectToSave = {
            _id: ObjectId(project._id),
            name: project.name,
            summary: project.summary,
            price: project.price,
            type: project.type,
            imgUrls: project.imgUrls,
            createdAt : project.createdAt,
            reviews: project.reviews || [],
            orders:project.orders ||[],
            byUserId: ObjectId(project.byUserId),
            loc: { address: project.loc.address },
            host:{
            _id:project.host._id ,
            fullname: project.host.fullname ,
            imgUrl:project.host.imgUrl,
            },
            // orders : project.orders
        }
        const collection = await dbService.getCollection('projects')
        await collection.updateOne({ '_id': projectToSave._id }, { $set: projectToSave })
        
        return projectToSave
    } catch (err) {
        logger.error(`cannot update project ${project._id}`, err)
        throw err
    }
}

async function addMany(projects) {
    const prms = []
    projects.forEach(project => {
        prms.push(add(project))
    })

    return await Promise.all(prms)
}



module.exports = {
    query,
    remove,
    add,
    getById,
    update,
    addMany
}


