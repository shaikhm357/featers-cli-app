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

//58e2b916c01b05e28bb4

//c983c8cca6b37e5beb1a8bb3ac3319116b46fbf8