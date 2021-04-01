const express = require('express');
const app = express();
const postsRoute = express.Router();

// Posts model
let Posts = require('../models/Posts');

// Add Posts
postsRoute.route('/create').post((req, res, next) => {
  Posts.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Posts
postsRoute.route('/').get((req, res) => {
  Posts.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Posts
postsRoute.route('/read/:id').get((req, res) => {
  Posts.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Posts
postsRoute.route('/update/:id').put((req, res, next) => {
  Posts.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Posts
postsRoute.route('/delete/:id').delete((req, res, next) => {
  Posts.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = postsRoute;