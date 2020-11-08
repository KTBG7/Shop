import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    orderItems: [
        {
            name : {type:String, required: true},
            qty : {type:String, required: true},
            image : {type:String, required: true},
            price : {type:String, required: true},
            product : {
                type:mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        }
    ],
    shippingAddress: {
        type: String,
        required: true
    },
    isAdmin: {
        type: boolean,
        required: true,
        default:false
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)