module.exports = {
    apps : [{
      name   : "Mail-api ",
      scripts: [
        
         "./src/server.js",
       "./src/queue.js"
        
      ],    
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      merge_logs: true,
     
    }]
  }
  

