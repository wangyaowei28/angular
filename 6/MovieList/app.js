/*
* ·��
* */
var app = angular.module('mlist.main',
    ['ngRoute','mlist.controllers.movieDetail','mlist.controllers.movieList']);
app.config(function($routeProvider){
    $routeProvider
        //�����б�ҳ
        .when('/list/:category/:page',{
            templateUrl:"movie_list/list_template.html",
            controller:"MovieListController",
        })
        //������ϸҳ
        .when('/detail/:id',{
            templateUrl:"movie_detail/detail_template.html",
            controller:"MovieDetailController",
        })
        //Ĭ�Ϸ���·��
        .otherwise({
            redirectTo:"/list/top250/1"
        })
});