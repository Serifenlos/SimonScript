function GetFileNameOnly(e){var n=e.lastIndexOf(".");return(-1==n?e:e.substr(0,n)).replace(/^(\d{3}(-|_{2}))(.+)/g,"$3")}