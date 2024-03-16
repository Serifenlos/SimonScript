function loadJSON(e){var n,r=new File(e);if(!r.exists)return alert("Die JSON-Datei konnte nicht gefunden werden."),null;r.open("r"),n=r.read(),r.close();
// Parse JSON-Inhalt
try{return JSON.parse(n)}catch(e){return alert("Fehler beim Parsen der JSON-Datei:\n"+e),null}}