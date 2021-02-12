module.exports = {
    apps : [{
      name   : "Mail-api ",
      script : "./src/server.js",      
      instances: 0,
      exec_mode: "cluster",
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
      script : "./src/queue.js",      
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      merge_logs: true,
      env: {
        SERVER_PORT: 8081,
        DB_URL: "mongodb://archioDB:AbsuHS7eHTup32oerzoetm9Zr1lA29@cluster0-shard-00-00-rr6sx.mongodb.net:27017/archioProduction?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",  
        NODE_ENV: "production",
        SMTP_USER: "suportearchio@gmail.com",
        SMTP_PASS:  "@rchi0$up0rtPa$$",
        SMTP_PORT: 587		
        
      }
    }
  ]
  }
  



  
  
  
  
  
  
  
  
  
  
  