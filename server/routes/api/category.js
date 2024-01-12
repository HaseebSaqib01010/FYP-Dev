let mongoose = require("mongoose");
let router = require("express").Router();
let Post = mongoose.model("Post");
let Category = mongoose.model("Category");
// let auth = require("../auth");
// let { OkResponse, BadRequestResponse } = require("express-http-response");

router.get("/", async (req, res) => {
    let categories;
    try {
        categories = await Category.find();
        // console.log('api hitttt');
        // console.log('cats === ', categories);

    } catch (error) {
        return res.status(500).json({message: "error getting all posts"})
    } 
    if(!categories) return res.status(404).json({message: "error getting all categories"})
    return res.status(200).json({categories})
})
router.get('/get-by-id/:id', async (req, res) => {
    let category;
    const { id } = req.params;
    try {
        category = await Category.findById(id);
    } catch (error) {
        return res.status(500).json({message: "error getting all posts"})
    } 
    if(!category) return res.status(404).json({message: "error getting the category"})
    return res.status(200).json({category})
})

router.post("/new", async (req, res, next) => {
    const {name} = req.body;
  let newCategory;
  console.log('name ==== ', name);
    try {
        newCategory = new Category({
            name,
            posts: [],
        })

        await newCategory.save();
  }
  catch (err) {
    return console.log(err); 
  }
  if(!newCategory) return res.status(500).json({message: "not created"})
  return res.status(201).json({newCategory})
});

// // ye wali API admin k approvals wlay page pe call krwani hai
// router.get('/unapproved', async (req, res, next) => {
//   console.log('unapproved::::')

//   try {
//     // Find all posts with approved: false
//     const unapprovedPosts = await Post.find({ approved: false }).sort({ createdAt: -1 });

//     // Return the unapproved posts in the response
//     console.log('unapproved::::',unapprovedPosts)
//     res.json(new OkResponse(unapprovedPosts));
//   } catch (err) {
//     console.error(err);
//     next(new InternalServerErrorResponse(err.message || "Internal Server Error"));
//   }
// });

// router.get('/approved',auth.required, auth.user, async (req, res, next) => {
//   try {
//     // Find all + with approved: false
//     const approvedPosts = await Post.find({ approved: true }).sort({ createdAt: -1 });
// console.log("approvedPosts",approvedPosts)
//     // Return the unapproved posts in the response
//     res.json(new OkResponse(approvedPosts));
//   } catch (err) {
//     console.error(err);
//     next(new InternalServerErrorResponse(err.message || "Internal Server Error"));
//   }
// });


// router.get('/get/all', auth.required, auth.user, (req, res, next) => {
//   Post.find({}).sort({ createdAt: -1 }).exec(
//     (err, posts) => {
//       if (err) return next(err);
//       next(new OkResponse(posts.map(post => post.toJSONFor(req.user))));
//     }
//   );
// })


// router.put("/update/:postId", auth.required, auth.user, (req, res, next) => {
//   try {
//     const postId = req.params.postId;

//     // Find the post by its ID
//     Post.findById(postId, (err, post) => {
//       if (err) return next(err);

//       if (!post) {
//         // Post not found
//         return res.status(404).json({ message: "Post not found" });
//       }

//       // if (post.by.toString() !== req.user._id.toString()) {
//       //   // Unauthorized: the current user is not the author of the post
//       //   return res.status(403).json({ message: "You don't have permission to update this post" });
//       // }

//       // Only update the 'body' field of the post
//       if (req.body.body) {
//         post.body = req.body.body;
//       }

//       post.save((err, updatedPost) => {
//         if (err) return next(err);
//         next(new OkResponse(updatedPost.toJSONFor(req.user)));
//       });
//     });
//   }
//   catch (err) {
//     console.log(err);
//     next(new BadRequestResponse(err));
//   }
// });

// router.get('/get/my', auth.required, auth.user, (req, res, next) => {
//   try {
//     Post.find({ by: req.user._id }).sort({ createdAt: -1 }).exec(
//       (err, posts) => {
//         if (err) return next(err);
//         next(new OkResponse(posts));
//       }
//     );
//   }
//   catch (err) {
//     console.log(err);
//     next(new BadRequestResponse(err));
//   }
// })
// router.delete('/delete/:postId', auth.required, auth.user, (req, res, next) => {
//   try {
//     const postId = req.params.postId;

//     // Check if the post belongs to the user
//     Post.findOne({ _id: postId, by: req.user._id }, (err, post) => {
//       if (err) return next(err);
//       if (!post) return next(new BadRequestResponse("You can't delete this post"));

//       // If post exists and belongs to the user, delete it
//       Post.findByIdAndDelete(postId, (err) => {
//         if (err) return next(err);
//         next(new OkResponse({ message: 'Post deleted successfully' }));
//       });
//     });
//   }
//   catch (err) {
//     console.log(err);
//     next(new BadRequestResponse(err));
//   }
// });
// router.get('/get/:postId', auth.required, auth.user, (req, res, next) => {

//   const postId = req.params.postId;
//   Post.findById(postId).exec((err, post) => {
//     if (err) return next(err);
//     if (!post) return res.status(404).json({ message: 'Post not found' });

//     next(new OkResponse(post.toJSONFor(req.user)));
//   });
// });
// router.post('/support/:id', auth.required, auth.user, (req, res, next) => {
//   Post.findById(req.params.id, (err, post) => {
//     if (err) return next(err);
//     if (!post) return next(new BadRequestResponse("Post not found"));

//     let alreadySupported = post.supportBy.map((user, index) => {
//       if (user._id.toString() === req.user._id.toString()) {
//         return index;
//       }
//     });

//     console.log("===============", alreadySupported);

//     if (alreadySupported[0]) {
//       post.supportBy.splice(alreadySupported[0], 1);
//     }
//     else {
//       post.supportBy.push(req.user._id);
//     }

//     post.save((err, post) => {
//       if (err) return next(err);
//       next(new OkResponse(post));
//     })

//   })
// })

// router.get('/hot/topics', auth.required, auth.user, (req, res, next) => {
//   Post.find({}, (err, posts) => {
//     if (err) return next(err);
//     posts.sort((a, b) => { return b.supportBy.length - a.supportBy.length; });
//     let topPosts = posts.slice(0, 3);
//     next(new OkResponse(topPosts));
//   });
// });

// // ye wali API approve k button pe lgani hai

// router.put("/:postId",   async (req, res, next) => {
//   console.log('req param:::::::',req.params.postId)
//   try {
//     let postId = req.params.postId.split(':');
//     postId=postId[1]
// console.log('postId',postId)
//     if(postId == null || postId == "")
//     {
//       return next(new InternalServerErrorResponse("PostId required"));
//     }
    
//     // Find the post by ID
//     const post = await Post.findById(postId);
// console.log("post",post)
//     // Check if the post exists
//     if (!post) {
//       return next(new NotFoundResponse("Post not found"));
//     }

//     // Update the approved field to true
//     post.approved = true;

//     // Save the updated post
//     const updatedPost = await post.save();

//     // Return the updated post in the response
//     res.json(new OkResponse(updatedPost));
//   } catch (err) {
//     console.error(err);
//     next(new InternalServerErrorResponse(err.message || "Internal Server Error"));
//   }
// });


module.exports = router;
