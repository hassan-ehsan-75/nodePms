const yup =require('yup');

exports.createUserValidator=yup.object().shape({
        email:yup.string().email(),
        name:yup.string().min(3).max(45),
        password:yup.string().min(6).max(255),
        is_admin:yup.number(),
});