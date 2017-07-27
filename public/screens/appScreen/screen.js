var appScreen = new function () {

    this.show = function () {
        rb('.mainContainer', 'app', data);
        $('.mainContainer .mainDiv .userDiv .searchBar .searchText').keyup(function () {
            searchData('.mainContainer .mainDiv .userDiv .userContainer .users', '.name', '.searchText', '.searchText');
        });
        bind('.userContainer .users', function () {
            console.log("Tapped");
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            selectedUser = $(this).children('.name').text().trim();
        });
        bind('.mainContainer .mainDiv .alphabet .alpha', function () {
            $('.selectedAlpha').removeClass('selectedAlpha');
            $(this).addClass('selectedAlpha');
            var key = $(this).text().trim();
            searchByAlpha('.mainContainer .mainDiv .userDiv .userContainer .users', '.name', key, key);
        });
    }
}

function searchData(userPath, userToSearch, index, input) {
    if ($(input).val().length > 0) {
        $(userPath).show().filter(function () {
            return $(this).find(userToSearch).text().toLowerCase().indexOf($(index).val().toLowerCase()) == -1;
        }).hide();
    } else {
        $(userPath).show();
    }
}

function searchByAlpha(userPath, userToSearch, index, input) {
    if (input.length > 0) {
        $(userPath).show().filter(function () {
            return $(this).find(userToSearch).text().toLowerCase().indexOf(index.toLowerCase()) == -1;
        }).hide();
    } else {
        $(userPath).show();
    }
}