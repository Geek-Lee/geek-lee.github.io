seajs.use(["module/Drawer.js", "module/Router.js", "module/DoubanBooks.js"], 
    function(Drawer, Router, DoubanBooks) {

    var d = new Drawer;
    
    Router.run();
});