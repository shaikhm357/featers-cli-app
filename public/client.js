const socket = io()

const client = feathers();
client.configure(feathers.socketio(socket));

client.configure(feathers.authentication({
    storage: window.localStorage
  }));
const login = async ()=>{
    try{
        return await client.reAuthenticate()
    }catch(err){
        return await client.authenticate({
            
        strategy:"local",
        email:"salman@gmail.com",
        password:"salman123"
            
        })
    }
}

const main = async ()=>{
    const auth = await login()
    console.log('user is authenticated', auth)

    await client.logout()
}

main();