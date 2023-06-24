const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const key = "secret123"

const register = async (req, res) => {
  try {
    await User.create({
      userName: req.body.userName,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      healthCondition: req.body.healthCondition,
    });
    res.json({ status: "ok" });
    console.log(req.body);
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate email..!!!" });
  }
};


const login = async (req,res)=>{
    const user = await User.findOne({
        userName: req.body.userName,
        password: req.body.password,
    });
    if(user){
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        },
        key
        );

        return res.json({status: "ok",user: token})
    }else{
        return res.json({
            status: "error",
            user: false,
            error: "wrong id or password...!!"
        })
    }
}


module.exports = {register,login};
