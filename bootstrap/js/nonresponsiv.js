$.support.cssProperty = (function() {
function cssProperty(p, rp) {
    var b = document.body || document.documentElement,
    s = b.style;

    // No css support detected
    if(typeof s == 'undefined') { return false; }

    // Tests for standard prop
    if(typeof s[p] == 'string') { return rp ? p : true; }

    //  Tests for vendor specific prop
    v   =   ['Moz', 'Webkit', 'Khtml', 'O', 'Ms'],
    p   =   p.charAt(0).toUpperCase() + p.substr(1);
    for(var i=0; i<v.length; i++) {
        if(typeof s[v[i] + p] == 'string') { return rp ? (v[i] + p) : true; }
    }
}

return cssProperty;
})();




jQuery(document).ready(function(){

    //  Check for CSS3 Transition support. If running an older browser, add the menu transitions manually.
    if(!$.support.cssProperty("transition")){
        $("#nav").removeClass("use-trans");
        $("#nav li").each(function(){
            var obj         =   $(this);
            var submenu     =   obj.children(".submenu");
            if(submenu.length > 0)  obj
                .mouseenter(function(){ $(this).children(".submenu").fadeIn(200);   })
                .mouseleave(function(){ $(this).children(".submenu").fadeOut(200);  })
                submenu.hide();
        });
    }



  
});
