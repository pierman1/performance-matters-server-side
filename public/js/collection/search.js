
if (window.location.pathname === '/search') {

    // show form if JS is avaidable
    var formToHide = document.getElementsByClassName('search-form')[0];

    console.log(formToHide);

    formToHide.classList.remove('hidden');

}

// searchSubmit button variable
var searchSubmit = document.querySelector('[type="submit"]');

// if searchSubmit on page
if(searchSubmit) {

// searchSubmit eventlistener when clicked send userInput to request.list
    searchSubmit.addEventListener('click', function () {

        var userInput = document.querySelector('[type="text"]').value;
        console.log(userInput);

        //Lets try to make a HTTP GET
        var url = 'https://www.cannabisreports.com/api/v1.0/strains/search/' + userInput;

        var request = new XMLHttpRequest();
        request.open("GET", url, false);

        request.send(null);
        var data = JSON.parse(request.responseText);
        console.log(data);

        var list = document.getElementsByClassName('strains-list')[0];
        console.log(list);

        for (i = 0; i < data.data.length; i++) {

            console.log('loping');

            var item = document.createElement('li');
            item.classList.add('strains-list__item');
            var anchor = document.createElement('a');
            anchor.innerHTML = data.data[i].name;
            anchor.href = '/strains/' + data.data[i].ucpc;

            item.appendChild(anchor)
            list.appendChild(item);

        }


    });

}