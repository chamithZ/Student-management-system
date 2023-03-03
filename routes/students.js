const router =require("express").Router();
let Student=require("../models/Student");
const bodyParser=require("body-parser");
 
router.use(bodyParser.json());

http://Localhost:8070/student/add

router.route("/add").post((req,res)=>{
    const name= req.body.name;
    const age=Number(req.body.age);
    const gender=req.body.gender;


    const newStudent=new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    }
    )

}) 

http://Localhost:8070/student

router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
}
)


http://Localhost:8070/student/update/5fsadfsad54asdfsad

router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
   
    const {name, age, gender}= req.body;
    const updateStudent={
        name,
        age,
        gender
    }
   
    let update;
     update=await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
            res.status(200).send({status:"user updated",user:update})
            
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"error with updating data",error:err.message})
        })
    ;
   
}) 


http://Localhost:8070/student/delete/5fsadfsad54asdfsad
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id; 

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user deleted"});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"eroor with delete user",error:err.message})
    })
})

http://Localhost:8070/student/veiw/5fsadfsad54asdfsad

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await Student.findById(userId).then((student)=>{
        res.status(200).send({status:"user fetched", student})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "error with view user", eroor:err.message})
})
})

module.exports=router;