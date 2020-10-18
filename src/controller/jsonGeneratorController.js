class JsonGenerator{
    healthCheck(req,res){
        return res.json('Live')
    }
   async generateJson(req,res){
    const {data, field } = req.body
    try{
    let randomArr = []
    data.forEach(e => randomArr.push(e))
console.log(data)
    const chooseAValue = Math.floor(Math.random() * randomArr.length)
    
//    const t =  JSON.stringify(`'{ "${field}" : "${randomArr[chooseAValue]}"}'`)
        const t = '{"'+field+'":"'+randomArr[chooseAValue]+'"}'
   const t2 = JSON.parse(t)
  
  
   console.log(t2)
    return res.json(t2)
    }catch(err){
        console.log(err)
    }
    }







        
    
    
    
    
    
    
    
    
    
    






    

}
export default new JsonGenerator();