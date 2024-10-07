const { entrypoints } = require("uxp");

const os = require('os');
const fs = require("fs");


  entrypoints.setup({
    panels: {
      vanilla: {
        show(node ) {
        }
      }
    }
  });



// Erhalten Sie den Pfad zum Home-Verzeichnis
let homeDir = os.homedir();
let filePath = homeDir + "/ss_var2.json";


document.querySelector("#write").addEventListener("click", async evt => {
  await write_json();
})

document.querySelector("#read").addEventListener("click", async evt => {
  await read_json();
})


async function write_json() {
  let data = [];

  data.push({id: 1000});
  data.push({square:true});
  data.push({data:false});

  // let data = { "id": 1, "square": 3 };
  var json = JSON.stringify(data);

  try {
    await fs.writeFile(filePath, json, 'utf8');
    
  } catch (e) {

    console.log(e);
  }
}

async function read_json() {
  try {
    var json = await fs.readFile(filePath, 'utf8');
    var json = json.split(',');

    console.log(json);
    console.log(json.length);
    console.log(json[0]);


  } catch (e) {

    console.log(e);
  }
}








