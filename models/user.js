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
        required:true
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
}
module.exports = mongoose.model('User',userSchema);