const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Number,
        default: 0
    },
    projects:{
        type:Schema.Types.ObjectId,
        ref:'Project'
    }
});

userSchema.methods.toJSON = function() {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};
userSchema.methods.toUserType = function() {
    let obj = this.toObject();
    obj._id=obj._id.toString();
    delete obj.password;
    delete obj.projects;
    delete obj.__v;
    return obj;
};
module.exports = mongoose.model('User',userSchema);