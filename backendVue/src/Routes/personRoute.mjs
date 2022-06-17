import { Router } from "express";
import { getPersons, addPerson, deletePerson, getPersonById, updatePerson } from '../Controllers/personController.mjs';

const router = Router();


router.get('/get', getPersons)

router.post('/add',  addPerson)

router.delete('/delete/:cedula', deletePerson)

router.get('/getById/:cedula', getPersonById)

router.put('/update',updatePerson)

export default router;