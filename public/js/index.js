var selectedUser;
var filterText;
$(document).ready(function () {
    makeTemplates();

rb('.mainContainer', 'app', data);
        $('.mainContainer .mainDiv .userDiv .searchBar .searchText').keyup(function () {
            searchData('.mainContainer .mainDiv .userDiv .userContainer .users', '.name', '.searchText', '.searchText');
        });
        bind('.userContainer .users', function () {
            console.log("Tapped");
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            selectedUser = $(this).children('.name').text().trim();
            loadDashboard(selectedUser);
        });
        bind('.mainContainer .mainDiv .alphabet .alpha', function () {
            $('.selectedAlpha').removeClass('selectedAlpha');
            $(this).addClass('selectedAlpha');
            var key = $(this).text().trim();
            searchByAlpha('.mainContainer .mainDiv .userDiv .userContainer .users', '.name', key, key);
        });
        bind('.mainContainer .mainDiv .filterContainer .filterText', function () {
            $('.active').removeClass('active');
            $(this).addClass('active');
            filterText = $(this).text().trim();
            sortArray(filterText);
        });

    });
    
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

function loadDashboard(user) {
    console.log("Dashboard Generated");
    for (var i = 0; i < usersData.userData.length; i++) {
        if (user == usersData.userData[i].userName) {
            rb('.dashboardContainer', 'dashboard', usersData.userData[i]);
        }
    }
}
function sortArray(filterText){
    switch (filterText) {
                case 'Alphabetically':
                    console.log("its" + filterText);
                    $(this).addClass('active');
                    data.users.sort((obj1, obj2) => {
                        return obj1.userName > obj2.userName
                    });
                    break;
                case 'Last Added':
                    console.log("its" + filterText);
                    data.users.reverse();
                    break;
                case 'VIP':
                    console.log("its" + filterText);
                    data.users.sort((obj1, obj2) => {
                        if (obj1.tag == 'VIP')
                            return obj1.userName > obj2.userName
                    });

                default:
                    break;
            }
            bindScreen();
}

function bindScreen () {
    rb('.mainContainer', 'app', data);
        $('.mainContainer .mainDiv .userDiv .searchBar .searchText').keyup(function () {
            searchData('.mainContainer .mainDiv .userDiv .userContainer .users', '.name', '.searchText', '.searchText');
        });
        bind('.userContainer .users', function () {
            console.log("Tapped");
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            selectedUser = $(this).children('.name').text().trim();
            loadDashboard(selectedUser);
        });
        bind('.mainContainer .mainDiv .alphabet .alpha', function () {
            $('.selectedAlpha').removeClass('selectedAlpha');
            $(this).addClass('selectedAlpha');
            var key = $(this).text().trim();
            searchByAlpha('.mainContainer .mainDiv .userDiv .userContainer .users', '.name', key, key);
        });
        bind('.mainContainer .mainDiv .filterContainer .filterText', function () {
            // $('.active').removeClass('active');
            $(this).addClass('active');
            filterText = $(this).text().trim();
             sortArray(filterText);
            
        });

}