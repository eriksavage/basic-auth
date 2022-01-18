'use strict';

const bcrypt = require('bcrypt');
const { UserModel } = require('../models');

async function signUp(req, res) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await UserModel.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
}


module.exports = signUp;