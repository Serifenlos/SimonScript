function logger(_log_fn) {
    if (debug) {
        time_start()
    };
    var filepath = "~/Desktop/SimonScript.log";
    var write_file = File(filepath);
    if (!write_file.exists) {
        write_file = new File(filepath);
    }

    var today = new Date();
    var date = ('0' + today.getDate()).slice(-2) + "." + ('0' + (today.getMonth() + 1)).slice(-2) + "." + today.getFullYear();
    var time = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
    var dateTime = date + " - " + time;

    /* Neuste Ziele oben*/
    /*  var read_file = File(filepath);
        read_file.open("r", undefined, undefined);
        if (read_file !== "") {
          var oldText = read_file.read();
          read_file.close();
        }

        write_file = File(filepath);
        write_file.open("w", undefined, undefined);
        write_file.writeln(_log);
        write_file.writeln("-----------------------");
        if (oldText != "") {
          write_file.writeln(oldText);
        }
        write_file.close(); */

    /* Neuste Zeile unten - Performance?? */
    var log_file = File(filepath);
    log_file.open('a', undefined, undefined);
    if (log_file !== '') {
        log_file.writeln("-----------------------");
        log_file.writeln(dateTime);
        log_file.writeln("Doc: '" + doc.name + "'");
        log_file.writeln("Function: '" + _log_fn + "'");
        log_file.writeln("");
        log_file.close();
    }
    if (debug) {
        time_stop(start)
    }
}