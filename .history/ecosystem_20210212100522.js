module.exports = {
    apps : [{
      name   : "queue-api ",
      script : "./src/server.js",
      script : "./src/queue.js",
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      merge_logs: true,
     
    }]
  }
  
  
  
  
  
  
  
  
  
  
  
  
  