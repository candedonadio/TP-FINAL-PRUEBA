import { Router } from 'express';
var router = Router();
import novedadesModel from '../../models/novedadesModel.js';

router.get ('/', async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();
 
    res.render ('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

//mostrar el formulario de agregar
router.post('/agregar', async (req, res, next) => {
  console.log('AGREGANDO')
    try {
      if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
        await novedadesModel.insertNovedades(req.body);
        res.redirect('/admin/novedades');
      } else {
        res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true, message: 'Todos los campos son requeridos'
        })
      }
    } catch (error) {
        res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true, message: 'Error al agregar la novedad'  

        })
    }
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});


router.post('/borrar', async (req, res, next) => {
  try{
    await novedadesModel.deleteNovedadbyId(req.body.id);
    res.redirect('/admin/novedades');
  }catch(error){
   console.log(error)
  }
})

router.get ('/modificar/:id', async (req, res, next)=>{
  let id= req.params.id
  let novedad =await novedadesModel.getNovedadById(id);
    res.render ('admin/modificar',  {
      layout: 'admin/layout',
      novedad 
    })
})

router.post('/modificar', async (req, res, next) => {
  try {
    let obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la novedad'
    });
  }
});


export default router;
