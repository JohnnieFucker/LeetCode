var express = require('express');
var router = express.Router();
var request = require('request');
var jsdom = require('jsdom');
var fs = require('fs');
router.get('/:problem_id', function (req, res) {
   var problem_id = req.params.problem_id;
    var url ='https://leetcode.com/problems/'+problem_id+'/';
    request(url,function(error, response, body){
        if (!error && response.statusCode == 200) {
            jsdom.env({
                html: body,
                done: function(errors, window) {
                    if (errors) {
                        window.close();
                        return callback(errors);
                    }
                    var nodes = window.document.getElementsByClassName('question-title');
                    var title = nodes[0].getElementsByTagName('h3')[0].innerHTML;
                    var nodes2 = window.document.getElementsByClassName('question-content');
                    var content =nodes2[0].innerHTML;
                    if(fs.existsSync( process.cwd()+'/solutions/'+problem_id+'.ejs')){
                        res.render(problem_id, {layout: '../public/layout.ejs',id:problem_id,title:title,content:content});
                    }else{
                        res.render('blank.ejs', {layout: '../public/layout.ejs',id:problem_id,title:title,content:content});
                    }
                }
            });

        }else{
            res.render(error, {layout: '../public/layout.ejs',message:'leetcode error'});
        }
    });
});
module.exports = router;