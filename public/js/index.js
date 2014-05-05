$(document).ready(function() {
    // basic front page routing
    $("#issue_03").click(function(){ alert(""); });
    $("#issue_02").click(function(){ alert(""); });
    $("#issue_01").click(function(){ window.location.replace("/issue01"); });
});

$(window).unload(function() {
    // scroll to top on refresh
    $(window).scrollTop(0);
});



