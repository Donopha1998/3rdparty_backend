const Lead = require("../models/leads")
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const createLead = async(req,res)=>{

  try {
    const newLead =await Lead.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    res.status(200).json({
      msg: "Form successfully submitted",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
 
const templatePath = path.join(__dirname, "template.html");

  const templateSource =await fs.readFileSync(templatePath, "utf8");
 
  const template = handlebars.compile(templateSource);



  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "leads.3rdparty@gmail.com", 
      pass: process.env.password,
    },
    html: true,
  });
  const leadData = {
    Name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };

  const mailOptions = {
    from: "leads.3rdparty@gmail.com",
    to: "contact@3rdparty.com",
    subject: "New lead generated",
    html: template(leadData),
  };


  await transporter.sendMail(mailOptions);
}

const getLead = async(req,res)=>{
    try {
       const leads =await Lead.find() 
       res.status(200).json(leads);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "Leads do not exist" });
    }
}


module.exports ={createLead,getLead}
