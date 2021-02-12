module.exports = {
    apps : [{
      name   : "Mail-api ",
      script : "./dist/server.js",      
      instances: 0,
      exec_mode: "fork",
      watch: true,
      merge_logs: true,
      env: {
        PORT: 8080,
        MAIL_HOST: "smtp.gmail.com",
        MAIL_PORT: 465,
        MAIL_USER: "suportearchio@gmail.com",
        MAIL_PASS:  "Senha124578",
        REDIS_HOST: "127.0.0.1"	,
        REDIS_PORT: 6379	
        
      }
     
    },{
      name   : "Quee ",
      script : "./dist/queue.js",      
      instances: 0,
      exec_mode: "fork",
      watch: true,
      merge_logs: true,
      env: {
        PORT: 8081,
        MAIL_HOST: "smtp.gmail.com",
        MAIL_PORT: 465,
        MAIL_USER: "suportearchio@gmail.com",
        MAIL_PASS:  "Senha124578",
        REDIS_HOST: "127.0.0.1"	,
        REDIS_PORT: 6379			
        
      }
    }
  ]
  }
  



  
  
  
  
  
  
  
  
  
  
  