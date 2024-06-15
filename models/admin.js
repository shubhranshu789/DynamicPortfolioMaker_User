const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const adminSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    userName:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    //add IP
    ip:{
        type: String,
        require:true
        
    },
    accesspoint:{
        type: String,
        require:true
        
    },
    specialization:{
        type: String,
        require:true,
        default : "I specialize in crafting seamless digital experiences that blend aesthetic appeal with functional efficiency. With a strong foundation in both design and development, I create intuitive interfaces that prioritize user engagement and satisfaction."
    },
    aboutme:{
        type: String,
        require:true,
        default : "Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit."
    },
    profession:{
        type: String,
        require:true,
        default : "UI/UX"
    },
    Photo:{
        type: String,
        require:true,
        default : "https://res-console.cloudinary.com/shubh1234/thumbnails/v1/image/upload/v1718164819/YmFqZm94ZnRqd2JkYW1zcThidjY=/drilldown"
    },
    InstaLink:{
        type: String,
        require:true,
        default : "https://www.youtube.com/"
    },
    LinkedInLink:{
        type: String,
        require:true,
        default : ""
    },
    facebookLink:{
        type: String,
        require:true,
        default : ""
    },

})

mongoose.model("ADMIN" , adminSchema)