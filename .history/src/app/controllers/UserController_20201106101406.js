
export default {
 async store(req,res){
       const {name, email, password} = req.body;
       const user ={
           name,
           email,
           password,
       }
       // add job registrationmail 
     
       return res.json(user)
   }
}