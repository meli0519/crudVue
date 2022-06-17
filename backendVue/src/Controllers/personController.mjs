import {getconnection} from '../DataBase/connection.mjs'

export const getPersons = async (req, res) => {
    
    try {
        const pool = await getconnection();
        const result = await pool.request().query('exec [dbo].[getAllPersons]')
        res.json(result.recordset)
        console.log(res);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }

};

export const addPerson = async  (req, res) => {
    const {cedula,nombre, apellido1,  apellido2, edad} = req.body;

    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[addPerson] '" + cedula+ "','" + nombre+"','"+
        apellido1 +"','"+ apellido2+"','"+ edad+"'");
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
}; 

 export const deletePerson = async (req, res) => {
   
    const {cedula} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[deletePerson]'"+cedula+"'");
        res.sendStatus(204);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    

}; 

 export const getPersonById = async (req, res) => {
    
    const {cedula} = req.params;
    try {
        const pool = await getconnection();
        const result = await pool.request().query("exec [dbo].[getPerson]'"+cedula+"'");
        res.send(result.recordset[0]);
        pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  
}; 


 export const updatePerson = async  (req, res) => {
    const {cedula,nombre, apellido1,  apellido2, edad} = req.body;
    console.log(req.body);
    try {
        const pool = await getconnection();

        await pool.request().query( "exec [dbo].[updatePerson] '" + cedula+ "','" + nombre+"','"+
        apellido1 +"','"+ apellido2+"','"+ edad+"'");;
         res.sendStatus(204);
         pool.close();
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
 
}; 