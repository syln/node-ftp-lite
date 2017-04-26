var ftpClient = require("ftp-client");
var fs = require("fs");
var inquirer = require("inquirer");


var dirName = process.cwd();

var filePath = dirName + '/ftp.conf.json';

var file = JSON.parse(fs.readFileSync(filePath));

var config = {
    host:file.host, 
    port:file.port,
    user:file.user
};

var options = {
    logging:'basic'
};

Lite = module.exports = function(){
    inquirer.prompt([{
        type: 'password',
        name: 'password',
        message: 'enter your ftp password:',
        mask:'*'
    },
    ]).then(function(answer){
        
        config.password = answer.password;
        
        var ftp = new ftpClient(config,options);
        
        ftp.connect(function(){
            ftp.upload([file.source],file.remote,{
                baseDir:file.baseDir,
                overwrite:'all',
            },function(result){
                console.log(result);
            })
        });
    })
}