function time_stop(_time_start) {
    var stop = new Date().getTime();
    var elapsed = (stop - _time_start) / 1000;
    var msg = ("Done (" + Number(elapsed).toFixed(3) + " secs).");
    alert(msg);
}