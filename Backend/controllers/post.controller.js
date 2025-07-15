import ImageKit from "imagekit";
import Post from "../models/post.model.js"
import User from "../models/user.model.js";


export const getPosts= async(req,res)=>{
    const page= parseInt(req.query.page) || 1;
    const limit= parseInt(req.query.limit) || 2;

    const posts= await Post.find().limit(limit).skip((page-1)*limit).sort({createdAt: -1}).populate("user","username") ;
    const totalPosts= await Post.countDocuments();
    const hasMore= limit*page < totalPosts;
    res.status(200).send({posts, hasMore});
}

export const getPost= async(req,res)=>{
    const slug= req.params.slug;
    const post= await Post.findOne({slug}).populate("user","username img");
    res.status(200).send(post);
}

export const createPost= async(req,res)=>{
    const {userId}= req.auth();
    if(!userId){
        return res.status(401).send('not authenticated');
    }

    const user= await User.findOne({clerkUserId: userId});
    if(!user){
        return res.status(401).send('not a valid user');
    }

    let baseSlug= req.body.title.replace(/ /g,"-").toLowerCase();
    let slug= baseSlug;
    let existingPost= await Post.findOne({slug});
    let counter= 2;

    while(existingPost){
        slug= `${baseSlug}-${counter}`;
        existingPost= await Post.findOne({slug});
        counter++;
    }
    const newPost = new Post({user:user._id, slug, ...req.body});
    const post= await newPost.save();
    res.status(200).send(post);
}

export const deletePost= async(req,res)=>{
    const {userId}= req.auth();
    const _id= req.params.id;
    const role= req.auth?.sessionClaims?.metadata?.role || "user";

    if(role==='admin'){
        await Post.findOneAndDelete({_id});
        res.status(200).send('post deleted successfully');
    }

    if(!userId){
        return res.status(401).send('not authenticated');
    }

    const user= await User.findOne({clerkUserId: userId});
    if(!user){
        return res.status(401).send('not a valid user');
    }

    const deletedPost= await Post.findOneAndDelete({_id,user: user._id});
    if(!deletedPost){
        res.status(403).send('You can delete only your post');
    }
    res.status(200).send('post deleted successfully');
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export const uploadAuth= async(req,res)=>{
    try{
        const result = imagekit.getAuthenticationParameters();
        res.send(result);
    } catch (error) {
        console.error("Error generating ImageKit auth parameters:", error);
        res.status(500).json({ message: "Failed to generate auth parameters" });
    }
}