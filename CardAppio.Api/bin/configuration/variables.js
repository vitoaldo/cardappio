const variables = {
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://admin:admin@cluster0-smgpg.mongodb.net/test?retryWrites=true&w=majority'
    }
}

module.exports = variables;