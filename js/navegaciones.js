var instance;
document.addEventListener('DOMContentLoaded', function () {
   instance = M.Sidenav.init(document.querySelectorAll('.sidenav'))[0];
   M.Materialbox.init(document.querySelectorAll('.materialboxed'));
   var elems2 = document.querySelectorAll('.dropdown-trigger');
var instances = M.Dropdown.init(elems2);
});
