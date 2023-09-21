function app_simulateKeyPress_alt3() {
    try {
        app.bringToFront();
        var appleScript = "tell application 'System Events' to keystroke '3' using {option down}";
        app.system("osascript -e '" + appleScript + "'");
        // app.bringToFront();
    } catch (e) {
        // alert(e)
    }
}