module.exports = {
    apps : [{
      name   : "Mail-api ",
      script : ".\dist\server.js",      
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      merge_logs: true,
     
     
    }
  ]
  }
  



  
  
  
  
  
  
  
  
  
  
  