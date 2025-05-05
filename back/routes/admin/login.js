// back/routes/admin/login.js

import { Router } from 'express';
import pool from '../../models/db.js';


import usuariosModels from '../../models/usuariosModels.js';

const router = Router();

router.get('/', (req, res, next) => {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post ('/', async (req, res, next) => {
    try { 
      var usuario = req.body.usuario
      const password = req.body.password;
      var data =await usuariosModels.getUserByUsernameAndPassword(usuario,password).catch(e => console.error(e));
          if (data.length >= 1){
            res.redirect('/admin/novedades');
          } else {
            res.render('admin/login',{
                layout: 'admin/login',
                error: true
              }
            );
          }
      // res.render('admin/novedades',{
      //     layout: 'admin/layout',
      // }
      // )
      return 
    }catch (error){
    
    }
    });

export default router;
