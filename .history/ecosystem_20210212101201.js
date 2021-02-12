module.exports = {
    apps : [{
      name   : "Mail-api ",
      scripts: {
        "prod": "npm-run-all -p dev:*",
        "prod:server": "nodemon src/server.js",
        "prod:queue": "nodemon src/queue.js"
        
      },    
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      merge_logs: true,
     
    }]
  }
  

