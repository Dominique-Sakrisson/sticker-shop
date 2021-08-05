const { Router } = require('express');
const ItemService = require('../services/ItemService.js');

module.exports = Router()
  .post('/', async(req, res, next) => {
    try {
      const item = await ItemService.create(req.body);
      res.send(item);
    } catch(error) {
      next(error);
    }
  })
  .get('/', async(req, res, next) => {
    try {
      const item = await ItemService.getAll();
      res.send(item);
    } catch(error) {
      next(error, 'soufhgs;kudfg');
    }
  })
  .get('/:id', async(req, res, next) => {
    try {
      const item = await ItemService.getById(req.params.id);
      res.send(item);
    } catch(error) {
      next(error);
    }
  })
  .put('/:id', async(req, res, next) => {
    try {
      const item = await ItemService.updateitem(req.params.id, req.body);
      res.send(item);
    } catch(error) {
      next(error);
    }
  })
  .delete('/:id', async(req, res, next) => {
    try {
      const item = await ItemService.deleteitem(req.params.id);
      res.send(item);
    } catch(error) {
      next(error);
    }
  })
  .delete('/', async(req, res, next) => {
    try {
      const item = await ItemService.deleteitemDanger();
      res.send(item);
    } catch(error) {
      next(error);
    }
  })
  ;
