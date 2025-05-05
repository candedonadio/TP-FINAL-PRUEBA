import pool from "./db.js";

async function getNovedades() {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj){
    try{ 
        var query = "INSERT INTO novedades (titulo, subtitulo, cuerpo) VALUES (?,?,?)"
        var params = [obj.titulo, obj.subtitulo, obj.cuerpo]
        var row = await pool.query(query,params);
        return row;
    } catch (error){
        console.log(error);
        throw error;
    }
}

// Ejemplo de insert

// insertNovedades({
//     titulo:'Prueba',
//     subtitulo:'Subtítulo de Prueba', 
//     cuerpo:'Cuerpo del contenido de prueba'
// })

async function deleteNovedadbyId(id){
    try{
        var query= "DELETE FROM novedades WHERE id = ?";
        var params = [id]
        var row = await pool.query(query,params);
        return row;
    } catch (error){
        console.log(error);
        throw error;
    }
}

async function getNovedadById(id) {
    var query = "SELECT * FROM novedades WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows [0];
}

async function modificarNovedadById(obj,id) {
    try {
        var query = "UPDATE novedades SET  ? WHERE id = ?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error){
        throw error;
    }
    
}

export default {getNovedades, deleteNovedadbyId, insertNovedades, getNovedadById, modificarNovedadById}