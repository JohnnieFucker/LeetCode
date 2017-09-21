const express = require('express');

const router = express.Router();
const request = require('request');
const jsdom = require('jsdom');
const fs = require('fs');
const path = require('path');
const problems = require('../config/problemsList.json').algorithms;
const quizList = require('../config/quizList.json');

router.get('/problems/:problemId', (req, res) => {
    const problemId = req.params.problemId;
    const leetCodeUrl = `https://leetcode.com/problems/${problemId}/description/`;
    if (problems.hasOwnProperty(problemId)) {
        const solutionFile = `${path.dirname(__filename)}/../solutions/${problemId}.js`;
        if (fs.existsSync(solutionFile)) {
            request(leetCodeUrl, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    jsdom.env({
                        html: body,
                        done: (errors, window) => {      // eslint-disable-line
                            if (errors) {
                                window.close();
                                res.render(errors, { layout: '', message: 'leetcode error' });
                            }
                            const nodes = window.document.getElementsByClassName('question-title');
                            const title = nodes[0].getElementsByTagName('h3')[0].innerHTML;
                            const nodes2 = window.document.getElementsByClassName('question-description');
                            const content = nodes2[0].innerHTML;
                            const solution = fs.readFileSync(solutionFile);
                            res.render('solution.ejs', {
                                layout: '',
                                id: problemId,
                                title: title,
                                content: content,
                                solution: solution
                            });
                        }
                    });
                } else {
                    res.render(error, { layout: '', message: 'leetcode error' });
                }
            });
        } else {
            res.redirect(leetCodeUrl);
        }
    } else {
        res.redirect(leetCodeUrl);
    }
});
router.get('/', (req, res) => {
    res.render('index.ejs', { layout: '', problems: problems, keys: Object.keys(problems) });
});
router.get('/quiz', (req, res) => {
    const plist = [];
    for (const k in quizList) {
        if (quizList.hasOwnProperty(k)) {
            plist.push(quizList[k][Math.floor(Math.random() * quizList[k].length)]);
        }
    }
    const list = [];
    plist.forEach((q) => {
        console.log(q);
        console.log(`https://leetcode.com/problems/${q}/description/`);
        request(`https://leetcode.com/problems/${q}/description/`, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                jsdom.env({
                    html: body,
                    done: (errors, window) => {      // eslint-disable-line
                        if (errors) {
                            window.close();
                            res.render(errors, { layout: '', message: 'leetcode error' });
                        }
                        const nodes = window.document.getElementsByClassName('question-title');
                        const title = nodes[0].getElementsByTagName('h3')[0].innerHTML;
                        const nodes2 = window.document.getElementsByClassName('question-description');
                        const content = nodes2[0].innerHTML;
                        list.push({
                            id: q,
                            title: title,
                            content: content
                        });
                        if (list.length === 3) {
                            res.render('quiz.ejs', {
                                layout: '',
                                list: list
                            });
                        }
                    }
                });
            } else {
                res.render(error, { layout: '', message: 'leetcode error' });
            }
        });
    });
});
module.exports = router;
