authRouter.post("/Form", async(req, res) =>{
  try{
    const { businessType,
      targetAudience,
      keySellingPoints,
      templateSection,} = req.body;
    const user = await new User({
      businessType,
      targetAudience,
      keySellingPoints,
      templateSection,
    });
    await user.save();
    res.send("Form Data added to database successully");
  }catch(err){
    res.status(400).send("Error :" + err.message);
  }
  
})