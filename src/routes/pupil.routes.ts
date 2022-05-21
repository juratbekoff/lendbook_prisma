import { Pupil } from "@prisma/client";
import { Router } from "express";
import pupilService from "../services/pupil.service";
import { handlerError } from "../utils/pupils.utils";


const router = Router()


router.get('/', async (req, res) => {
    try{
       let pupils = await pupilService.findAll()
       
       res.json ({
           message: "Pupils has sent",
           pupils
       })
    }
    catch (err: any) {

        console.error(err)

        res.status(500).send(handlerError(err))
    }
})


router.post('/', (req, res) => {
    let pupil:Pupil = {
        id: 0,
        group: req.body.group,
        name: req.body.name,
        photo: req.body.photo,
        surname: req.body.surname
    }

    pupilService.create(pupil)
        .then(pupil => res.send( { message: 'Pupil created!', pupil}))
        .catch(err => res.status(500).send(handlerError(err)))
})


router.delete('/:id', (req, res) => {
    pupilService.remove(+req.params.id)
        .then(pupil => res.send( { message: 'Pupil deleted!', pupil}))
        .catch(err => res.status(500).send(handlerError(err)))
})


router.delete('/', (req, res) => {
    pupilService.removeAll()
        .then(pupil => res.send( { message: 'All deleted!', pupil}))
        .catch(err => res.status(500).send(handlerError(err)))
})


router.put('/:id', (req,res) => {

    pupilService.update(+req.params.id, req.body )
        .then(pupil => res.send( { message: 'Updated!', pupil}))
        .catch(err => res.status(500).send(handlerError(err)))
})

export default router

