import Queue from 'bull'
import redisConfig from '../config/redis'

import RegistrationMail from '../jobs/RegistrationMail'
import * as jobs from '../jobs'

const queues = Object.values(jobs).map(job =>({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
}))

export default{
    queues,
    add(name, data){
        const queue = this.queues.find(queue=>queue.name == name)
        return queue.bull.add(data)
    }
}

// const mailQueue= new Queue(RegistrationMail.key, redisConfig);

// mailQueue.on('failed', (job, err)=>{
//     console.log('Job failed', job.name, job.data)
//     console.log(err)
// })

// export default mailQueue
