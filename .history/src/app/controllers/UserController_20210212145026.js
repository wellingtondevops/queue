import Queue from '../lib/Queue'
export default {
 async store(req,res){
       const {name, email, subject, text} = req.body;
       const user ={
           name,
           email,
        //    password,
           subject,
           text
       
       }
       // Adicionar job RegistrationMail na fila
    await Queue.add('RegistrationMail', { user });
    await Queue.add('UserReport', { user });

    // await Queue.add('UserReport', { user });

    return res.json(user);
   }
}