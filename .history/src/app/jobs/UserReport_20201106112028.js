
export default{
    key: 'UserReport',

   async handle({data}){
       const {user}= data

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${user.htmlname}. bem vindo ao sistema de filas Archio App Cloud :D`
        })
    }
}