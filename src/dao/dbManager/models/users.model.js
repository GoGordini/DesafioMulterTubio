import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required:true},

    last_name: {
        type: String,
        required: true},

    email: {
        type:String,
        required:true},

    age: {
        type:Number,
        required: true},
    
    password: {
        type: String,
        required: true},
    
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "carts"
    },

    role: {
        type: String,
        default: "user"
    },

    last_connection: {
        type: String
    },
    
    documents: {
        type: [{
            name: {
                type:String
            },
            reference: {
                type: String
            }
        }],
        default: []

    }
});

usersSchema.pre(["find","findOne"],function(){
    this.populate("cart");
});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel;