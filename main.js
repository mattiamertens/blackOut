$('#main-frame-error').on('click', function(){
    animateDiv();
    $('#a').addClass('animation')
    console.log('Clicked on main frame')
    var bounceBall = setInterval(function () {
        const result = Math.floor(Math.random() * 7) + 1;
        document.getElementById("a").style.backdropFilter = "blur(" + result + "px)";  
        // document.getElementById("a").style.transform = "scale(" + result/4 + ")";
    }, 800);
})



function makeNewPosition($container) { 

    // Get viewport dimensions (remove the dimension of the div)
    $container = ($container || $(window))
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh, nw];
}

function animateDiv() {
    var $target = $('#a');
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('#a').animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv();
    });
};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.3;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;
}

// HOME
$('.trinkkultur span').on('click', function(){
    $('.tk-explanation').toggleClass('hidden')
})
$('.close').on('click', function(){
    $('.tk-explanation').addClass('hidden')
})
$('.no').click(function(){
    $('#pippone').addClass('ext')
    // var scrollEl = document.getElementById("pippone");
    // scrollEl.scrollIntoView()
    setTimeout(function(){
        scrollToTarget()
    }, 300)
})

function scrollToTarget() {
    var scrollEl = document.getElementById('pippone');
    var elementPosition = scrollEl.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset;
    console.log('EL pos:' + elementPosition)
    console.log('offsePos:' + offsetPosition)
  
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}
$('.reveal').click(function(){
    $(this).siblings().children().removeClass('blur')
})