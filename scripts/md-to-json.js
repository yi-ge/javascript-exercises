var md2json = require('md-2-json');
var path = require('path')
var fs = require('fs')

let json = md2json.parse(fs.readFileSync(path.join(__dirname, './data.md'), 'utf-8'));

json = Object.values(json)

for (const n in json) {
  json[n]['question'] = json[n].raw
  delete json[n].raw
  const key = Object.keys(json[n]).filter(item => item !== 'question')
  json[n]['answer'] = key[0].replace('Answer: ', '')
  json[n]['explain'] = json[n][key].raw
  delete json[n][key]

  const option = json[n]['question'].slice(json[n]['question'].search(/- A:.*/i), json[n]['question'].length - 2)
  json[n]['optionStr'] = json[n]['question'].slice(json[n]['question'].search(/- A:.*/i), json[n]['question'].length)
  json[n]['question'] = json[n]['question'].substring(0, json[n]['question'].search(/- A:.*/i))
  let options = option.replace('- A: ', '').replace('- B: ', '').replace('- C: ', '').replace('- D: ', '').split('\n')

  if (options.length !== 4) {
    console.log(options)
  }
  json[n]['options'] = options
}

fs.writeFileSync(path.join(__dirname, '../assets/js/data.json'), JSON.stringify(json, null, 2), 'utf8')

