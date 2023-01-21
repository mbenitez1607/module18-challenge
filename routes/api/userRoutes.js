const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUserByID,
    updateUserByID,
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUser);
  
  // /api/users/:userId
  router.route('/:userId').get(getSingleUser);
//  router.route('/:userId').get(getSingleUser).delete(deleteUserByID);
  
  module.exports = router;
  