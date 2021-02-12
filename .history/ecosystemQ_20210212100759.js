module.exports = {
    apps : [{
      name   : "queues",
      script : "./src/server.js",      
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      merge_logs: true,
     
    }]
  }
  
  
  
  
  
  
  
  
  
  
  
  
  