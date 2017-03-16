const Citizen = function(){
	let id = 0

return class Citizen{
    constructor(address){
            this.id = ++id
            this.address = address
            this.issues = {}
            this.messages = []
            store.citizens = [...store.citizens, this]
        }
    }
}()



