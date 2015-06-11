var app = angular.module('myApp');


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
