
function SiteController($scope) {
    // Model initialization
    $scope.sites = []
    $scope.longestName = 0;
    $scope.longestUrl = 0;
    $scope.currentSite = undefined;
    $scope.errorMessage = undefined;

    // Data initialization
    addSite($scope, {
        id: 1000000,
        name: 'Some Site',
        url: 'http://www.some-site.com'
    });
    addSite($scope, {
        id: 1000001,
        name: 'Another Site',
        url: 'http://www.another-site.com'
    });

    // Action initialization
    $scope.addOne = function () { addOne($scope); }
    $scope.addSome = function () { addSome($scope); }
    $scope.removeLast = function () { removeLast($scope); }
    $scope.removeAll = function () { removeAll($scope); }


}

function addSite($scope, site) {
    $scope.sites.push(site);
    $scope.siteCount = $scope.sites.length;
    $scope.longestName = site.name.length > $scope.longestName ? site.name.length : $scope.longestName;
    $scope.longestUrl = site.url.length > $scope.longestUrl ? site.url.length : $scope.longestUrl;
}

function removeSite($scope, index) {
    $scope.sites.splice(index,1);
    $scope.longestName = $scope.longestUrl = 0;
    for (i in $scope.sites) {
        var site = $scope.sites[i];
        $scope.longestName = site.name.length > $scope.longestName ? site.name.length : $scope.longestName;
        $scope.longestUrl = site.url.length > $scope.longestUrl ? site.url.length : $scope.longestUrl;
    }
    $scope.siteCount = $scope.sites.length;
}

function removeLast($scope) {
    removeSite($scope, $scope.sites.length-1);
}

function removeAll($scope) {
    var count = $scope.sites.length;
    for (var i = 0; i < count; i++) {
        removeLast($scope);
    }
}

function addOne($scope) {
    addSite($scope, {
        name: 'Name', 
        url: 'http://www.name.com'
    });
}

function addSome($scope) {
    addSite($scope, {
        name: 'Some 1', 
        url: 'http://www.some-one.com'
    });
    addSite($scope, {
        name: 'Some 2', 
        url: 'http://www.some-two.com'
    });
    addSite($scope, {
        name: 'Some 3', 
        url: 'http://www.some-three.com'
    });
    addSite($scope, {
        name: 'Some 4', 
        url: 'http://www.some-four.com'
    });
    addSite($scope, {
        name: 'Some 5', 
        url: 'http://www.some-five.com'
    });
}

