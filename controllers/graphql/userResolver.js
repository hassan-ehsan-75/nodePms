
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
const serverConfig =require('../../util/config/server_config');
const User =require('../../models/user');


//Get ALL
exports.getAll=async (parentValue,{},{auth},req)=> {
    console.log(req);
    return await User.find();
};

// FindByID
exports.getById=async (parentValue,{id}) =>{
    const user= await User.findById(id);
    if (!user){
        const error=new Error(`User Not Found`);
        error.code=404;
        throw error;
    }
    return user;
};

// Login
exports.login=async (parentValue,{...args}) =>{
    const {email,password}=args;
    let loggedUser= await User.findOne({email:email});

    if (!loggedUser){
        const error= new Error(`We do not have any user registered with ${ email } email address. Please signup.`);
        error.code=404;
        throw error;

    }
    const passwordCorrect= await bcrypt.compare(password,loggedUser.password);
    if(!passwordCorrect){
        const error=new Error(`Sorry, the password you entered is incorrect. Please try again.`);
        error.code=401;
        throw error;
    }

    return {
        user: loggedUser.toUserType(),
        token: jwt.sign(loggedUser.toUserType(), serverConfig.secret)
    }
};


// create user
exports.createUser=async (parentValue,args) =>{

    let user= await User.findOne({email:args.email});

    if (user){
        const error= new Error(`email address already in user!`);
        error.code=404;
        throw error;

    }
    const hashedPassword=await bcrypt.hash(args.password,12);
    user=new User({...args,password:hashedPassword});
    console.log(await user.save());

    return {...user.toUserType(),_id:user._id.toString()};


};



exports.updateUser=async (parentValue,args) =>{

    let user= await User.findOne({_id:args._id});

    if (!user){
        const error= new Error(`user not found`);
        error.code=404;
        throw error;

    }
    if(user.email!==args.email){
        if(await  User.findOne({email:args.email})){
            const error= new Error(`email address is taken.`);
            error.code=403;
            throw error;
        }
    }
    delete args._id;
    await user.updateOne({...args});
    console.log(user);

    return {...user.toUserType(),_id:user._id.toString()};


};



exports.deleteUser=async (parentValue,args) =>{

    let user= await User.findOne({_id:args._id});

    if (!user){
        const error= new Error(`user not found`);
        error.code=404;
        throw error;

    }

    await user.deleteOne();
    console.log(user);

    return {message:'تم الحذف',status:1};


};

