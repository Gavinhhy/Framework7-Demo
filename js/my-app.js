// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

$$(document).on('pageInit', '.page[data-page="xkz"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})


$$(document).on('pageInit', '.page[data-page="gtg"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})
$$(document).on('pageInit', '.page[data-page="xed"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})
$$(document).on('pageInit', '.page[data-page="ded"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})
$$(document).on('pageInit', '.page[data-page="dzm"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})
$$(document).on('pageInit', '.page[data-page="wzx"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})
$$(document).on('pageInit', '.page[data-page="fkk"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})
$$(document).on('pageInit', '.page[data-page="fkzd"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
//  myApp.alert('Here comes About page');
})

var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 5,
  autoplay:3000
});


// 随意编造的内容
var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];

// 下拉刷新页面
var ptrContent = $$('.pull-to-refresh-content');

// 添加'refresh'监听器
ptrContent.on('refresh', function (e) {
    // 模拟2s的加载过程
    setTimeout(function () {
        // 随机图片
        var picURL = 'http://hhhhold.com/88/d/jpg?' + Math.round(Math.random() * 100);
        // 随机音乐
        var song = songs[Math.floor(Math.random() * songs.length)];
        // 随机作者
        var author = authors[Math.floor(Math.random() * authors.length)];
        // 列表元素的HTML字符串
        var itemHTML = '<li class="item-content">' +
                          '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                          '<div class="item-inner">' +
                            '<div class="item-title-row">' +
                              '<div class="item-title">' + song + '</div>' +
                            '</div>' +
                            '<div class="item-subtitle">' + author + '</div>' +
                          '</div>' +
                        '</li>';
        // 前插新列表元素
        ptrContent.find('ul').prepend(itemHTML);
        // 加载完毕需要重置
        myApp.pullToRefreshDone();
    }, 2000);
});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
