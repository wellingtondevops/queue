import Mail from '../lib/Mail'

export default{
    key: 'RegistrationMail',

   async handle({data}){
       const {user}= data

        await Mail.sendMail({
            from: 'Archio<archiosuporte@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject:user.subject,
            html: user.text
        })
        console.log('Email enviado')
    }
}