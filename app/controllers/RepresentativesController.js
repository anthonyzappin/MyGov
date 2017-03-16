function renderPage(repList) {

  $('#results').empty().append(repList.map(function(rep) {

    if (rep.twitter == "No Twitter listed"){
      var twitterLink = `<p>${rep.twitter}</p>`
    } else {
      var twitterLink = `<p><a href="https://twitter.com/${rep.twitter}" target="_blank" class="twitter">${rep.twitter}</a></p>`
    }

    return `<div class="row rowFormat darkBox">
      <div class="col-lg-2 col-md-6 col-sm-6">
        <img src=${rep.photo} class="img-responsive img-circle">
      </div>

      <div class="col-lg-2 col-md-6 col-sm-6">
        <h4>${rep.title}</h4>
        <h3>${rep.name}</h3>
        <p>${rep.party}</p>
      </div>

      <div class="col-lg-2 rightSpaceM">
         <h4>Phone:<h4>
         <p>${rep.phone.join("<br>")}</p>
      </div>

      <div class="col-lg-2">
         <h4>Emails:</h4>
        <p>${rep.email.join("<br>")}</p>
      </div>

      <div class="col-lg-2">
        <h4>Twitter:</h4>
        ${twitterLink}
      </div>

      <div class="col-lg-2 rightSpaceM">
        <h4>Address:</h4>
        ${rep.address}
      </div>

    </div>`
  }).join(" "))
}
