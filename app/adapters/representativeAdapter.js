var rootURL = "https://www.googleapis.com/civicinfo/v2/representatives?key="
var APIKey = "AIzaSyD4LGMQJMWwNqLOO8l60A7elkXQWRSp3VA"

function representativesAdapter(){

  var address = $("#address").val().split(" ").join("+")
  new Citizen(address)
  var searchURL = rootURL + APIKey + "&address=" + address
  event.preventDefault()

  console.log(searchURL)
  return $.ajax({
    method: "GET",
    url: searchURL
  }).done(parseRepresentatives).done(function(){
    $('#results').hide().slideDown(2500)
  }).done(function(){
    $('.contact').on('submit', function(){
    event.preventDefault()
    createMessage(this)
  })
  }).fail(function() {
    alert("Please enter a valid U.S. address.")
  })
}

function parseRepresentatives(response) {
  var repList = []

  response.offices.map((office) => {
    const index = office.officialIndices
    if (index.length > 1) {
      index.map(i => {
        repList.push(createRepresentative(office, response.officials[i]))
      })
    } else {
      repList.push(createRepresentative(office, response.officials[index]))
    }
  })
  renderPage(repList)
}
