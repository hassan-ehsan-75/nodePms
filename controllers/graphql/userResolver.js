const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
const serverConfig =require('../../util/config/server_config');
const User =require('../../models/user');

//Get ALL
exports.getAll=async ()=> {
    return await User.find();
};
// FindByID
exports.getById=async (parentValue,{id}) =>{
    const user= await User.findById(id);
    if (!user){
        throw new Error(`User Not Found`);
    }
    return user;
};
// FindByID
exports.login=async (parentValue,{email,password}) =>{
    let loggedUser= await User.findOne({email:email});

    if (!loggedUser){
        throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
    }
    const passwordCorrect= await bcrypt.compare(password,loggedUser.password);
    if(!passwordCorrect){
        throw new Error(`Sorry, the password you entered is incorrect. Please try again.`);
    }

    return {
        user: loggedUser.toUserType(),
        token: jwt.sign(loggedUser.toUserType(), serverConfig.secret)
    }
};

