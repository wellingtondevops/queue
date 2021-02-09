import Mail from '../lib/Mail'

export default{
    key: 'RegistrationMail',

   async handle({data}){
       const {user}= data

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${user.name}.Bem vindo ao sistema de filas Archio App Cloud : sua senha é ${user.password}`
        })
        console.log('Email enviado')
    }
}