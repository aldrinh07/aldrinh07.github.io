var app = angular.module('myApp', ['directives']);


app.controller('mainCtrl', function($scope, $http){

    $scope.test = "test worked";

//    $(window).scroll(function() {
//        if ($(window).scrollTop() > 25) {
//            $scope.scrollLoc = true;
//        } else {
//            $scope.scrollLoc = false;
//        }
//        $scope.$apply();
//    });

//    $(window).scroll(function() {
//        $scope.scrollLoc = $(window).scrollTop();
//        $scope.$apply();
//    });

    $scope.albumclick = function(){
        $scope.showalbum = false;
        $scope.showalbum1 = false;
        $scope.showalbum2 = false;
    }

    $scope.album1click = function(){
        $scope.showalbum = true;
        $scope.showalbum1 = true;
        $scope.showalbum2 = false;
    }

    $scope.album2click = function(){
        $scope.showalbum = true;
        $scope.showalbum1 = false;
        $scope.showalbum2 = true;
    }

    $scope.projectsLG = [
        {
            name: 'myConnects',
            summary: 'myConnects is my final Project for DevMountain. Need a photographer? Need to tint your car? need your Computer fixed? We all have more connections than we think. this app lets you find those friends that can help.',
            url: 'https://myconnects.firebaseapp.com',
            logos: [{
                url:'img/angularfireLogo.png',
                tooltip: 'AngularFire'
            },{
                url:'/img/materialLogo.png',
                tooltip: 'AngularMaterial'
            },{
                url:'/img/htmlLogo.png',
                tooltip: 'HTML5'
            },{
                url:'/img/cssLogo.png',
                tooltip: 'CSS'
            }
            ],
            screens: [{
                url: 'https://dl.dropboxusercontent.com/s/aoj196m3e9yh8wf/Screenshot%202015-09-09%2014.15.17.png?dl=0',
                content: 'login page'
            }, {
                url: 'https://dl.dropboxusercontent.com/s/ikiszl2rssvjpds/Screenshot%202015-09-09%2014.58.17.png?dl=0',
                content: 'main invoices page'
            }]
        },{
            name: 'XPayable',
            url: 'still in development',
            logos: [{
                url:'img/angular-logo.png',
                tooltip: 'AngularJS'
            },{
                url:'img/awsLogo.png',
                tooltip: 'Amazon Web Services'
            },{
                url:'/img/htmlLogo.png',
                tooltip: 'HTML5'
            },{
                url:'/img/lessLogo.png',
                tooltip: 'Less CSS'
            },{
                url:'/img/bootstrapLogo.png',
                tooltip: 'Bootstrap'
            }
            ],
            screens: [{
                url: 'https://dl.dropboxusercontent.com/s/17q448b16v7149m/Screenshot%202015-09-09%2014.56.48.png?dl=0',
                content: 'login page'
            }, {
                url: 'https://dl.dropboxusercontent.com/s/ikiszl2rssvjpds/Screenshot%202015-09-09%2014.58.17.png?dl=0',
                content: 'main invoices page'
            }]
        }
    ];

// get song data

//    $http.get("./audio/music-data.json").then(function(res){
//        console.log(res.data);
//        $scope.songs = res.data;
//        var songObj = {};
//        $scope.albumNames = ["You Changed", "Forever Mine"];
//        $scope.album1 = [];
//        $scope.album2 = [];
//        for(var i = 0; i < $scope.songs.length; i++){
//            console.log($scope.songs[i].album);
//            if($scope.songs[i].album === "You Changed"){
//                console.log("Song in You Changed album found");
//                songObj = {
//                    "title": $scope.songs[i].title,
//                    "album": $scope.songs[i].album,
//                    "ref": $scope.songs[i].ref,
//                    "artist": $scope.songs[i].artist,
//                    "length": $scope.songs[i].length
//                };
//                $scope.album1.push(songObj);
//            } else if($scope.songs[i].album === "Forever Mine"){
//                console.log("Song in Forever Mine album found");
//                songObj = {
//                    "title": $scope.songs[i].title,
//                    "album": $scope.songs[i].album,
//                    "ref": $scope.songs[i].ref,
//                    "artist": $scope.songs[i].artist,
//                    "length": $scope.songs[i].length
//                };
//                $scope.album2.push(songObj);
//            } else {
//                console.log($scope.songs[i].title + " " + "was not included in any specified albums")
//            }
//        }
//        console.log($scope.album1);
//        console.log($scope.album2);
//
//    });



//    code for the music player

    var audio;
    var playlist;
    var tracks;
    var current;
    init();
    function init(){
        current = 0;
        audio = $('#audio');
        playlist = $('#playlist');
        tracks = playlist.find('li a');
        len = tracks.length - 1;
        audio[0].volume = .5;
        audio[0].play();
        playlist.find('a').click(function(e){
            e.preventDefault();
            link = $(this);
            current = link.parent().index();
            run(link, audio[0]);
        });
        audio[0].addEventListener('ended',function(e){
            current++;
            if(current == len){
                current = 0;
                link = playlist.find('a')[0];
            }else{
                link = playlist.find('a')[current];
            }
            run($(link),audio[0]);
        });
    }
    function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
    }




});
