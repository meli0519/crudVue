import sql from 'mssql'

const dbSettings = {
    user: 'crudVue',
    password: '1234',
    server: 'localhost',
    database: 'crudVue',
    requestTimeout: 300000,
    options: {
        encryp: true,
        trustServerCertificate:true,
    },
};

export async function getconnection(){
   try {
    const pool = await sql.connect(dbSettings)
    return pool;
   } catch (error) {
       console.error(error);
   }
}

export {sql};