const store = {representatives: [], citizens:[], messages: [], issues: {}}

const Representative = function(){
  let id = 0

  return class Representative {
    constructor(name, title, party, email, phone, photo) {
      this.id = ++id
      this.name = name
      this.title = title
      this.party = party
      this.email = email || ["No email listed"]
      this.phone = phone || ["No phone numbers listed"]
      this.photo = photo || "public/images/default.jpg"
      this.address = "No Address listed"
      store.representatives.push(this)
    }
  }
}()

function createRepresentative(office, official){
  var rep = new Representative(official.name, office.name, official.party, official.emails,
    official.phones, official.photoUrl)

  if (official.channels) {
     var twitter = official.channels.filter(channel => channel.type === "Twitter")
     if (twitter.length > 0) {
       rep.twitter = "@" + twitter[0].id
     } else {
       rep.twitter = "No Twitter listed"
     }
  } else {
    rep.twitter = "No Twitter listed"
  }

  stringAddress = 'No address listed'
  if(official.address){
    stringAddress = ''
    stringAddress = stringAddress + official.address[0]["line1"] + '\n'

    if(official.address[0]["line2"]){
      stringAddress = stringAddress + official.address[0]["line2"] + '\n'
    }

    stringAddress = stringAddress + official.address[0]["city"] + ", " + official.address[0]["state"] + " " + official.address[0]["zip"]
  }

  console.log(stringAddress)
  rep.address = stringAddress

  return rep
}
