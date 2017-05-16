var parser = require('mdast');
var fs = require('fs');
var _ = require( 'lodash' )

var raw = fs.readFileSync(__dirname + '/README.md', 'utf8');
// var raw = fs.readFileSync(__dirname + '/demo.md', 'utf8');

var resultsInString = "";

function listToTable(list){
    var results = [];
    var listItems = list.children;
    _.each(listItems, item => {
        var nodes = item.children[1];
        var nodeName = item.children[0].children[0].value;
        console.log(nodeName);
        if(nodes && nodes.children) {
            var result = {
                name: nodeName,
                children: []
            }
            _.each(nodes.children, function(node){
                name = node.children[0].children[0].value;
                result.children.push({
                    name: name
                })
            })
            results.push(result);
        }
    });
    return results;
}

function getData(string) {
    var tokens = parser.parse(string)
    var results = [];
    var heading = '';

    _.forEach(tokens.children, function(token){
        if(token.type === 'heading') {
            heading = token.children[0].value;
        }
        if(token.type === 'list') {
            var result = listToTable(token, heading);
            if(!_.isEmpty(result)){
                results.push({
                    name: heading,
                    children: result
                });
            }
        }
    })
    return results;
}

var result = getData(raw);
fs.writeFileSync('api/flare.json', JSON.stringify(result, null, 4));
