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
    
        const stringFyFields = '{"'+field+'":"'+randomArr[chooseAValue]+'"}'
   const parseJson = JSON.parse(stringFyFields)
  
  
   console.log(parseJson)
    return res.json(parseJson)
    }catch(err){
        console.log(err)
    }
    }









    async dynamicJson(req,res){
        const {field, data } = req.body
        try{
            field.forEach((e,i)=> console.log('field: ',e, data[i]))
            return res.json('ok')
        }catch(err){
            console.log(err)
        }
        }







        
    
    
    
    
    
    
    
    
    
    






    

}
export default new JsonGenerator();