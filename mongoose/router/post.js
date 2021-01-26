const express=require('express');
var router= express.Router()

router.get("/",(req,res)=>{
  res.send([
    {
      "id": "1",
      "title": "国内新闻"
    },
    {
      "id": "2",
      "title": "国际新闻"
    }
  ])
})

module.exports = router

