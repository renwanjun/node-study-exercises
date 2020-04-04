const fs=require('fs')
const request=require('request')
const htmlparser=require('htmlparser')
const configFilename='./rss_feeds.txt'
function checkForRSSFile(){
    fs.exists(configFilename,(exists)=>{
        if(!exists)return next(new Error(`Missing RSS file:${configFilename}`))
        next (null,configFilename)
    })
}
function readRSSFile(configFilename){
    fs.readFile(configFilename,(err,feedList)=>{
        if(err) return next(err)
    })
}
const tasks=[
    checkForRSSFile
]
function next(err,result){
    if(err)throw err;
    const currentTask=tasks.shift()
    if(currentTask)currentTask(result)
}
next()