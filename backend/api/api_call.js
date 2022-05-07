const express = require('express')

const request = require('request')

const dotenv = require('dotenv').config()

const md5 =  require('crypto-js/md5');

const res = require('express/lib/response');
const req = require('express/lib/request');

const getCharacters = (url,callback) => {
    var public_key = process.env.API_PUB

    var private_key = process.env.API_PRI

    var time_stamp = Date.now()

    var hash = md5(time_stamp+private_key+public_key).toString()
        
    //Method is GET
    var final_url = url+"&ts="+time_stamp+"&apikey="+public_key+"&hash="+hash;


    request(final_url, {json : true}, (err, res, body) =>{
        if(!err && res.statusCode == 200){

        const results_array = body.data.results;

        let api_data = [];

        if(results_array != null)
        {
            //Loop through entire result set
            for(var i = 0; i < results_array.length; i++){

                if(results_array[i].thumbnail != null && results_array[i].description != ""){

                    //Create temporary object to format info
                    var object_temp = {
                        'name' : results_array[i].name,
                        'id' : results_array[i].id,
                        'description' : results_array[i].description,
                        'image_url':results_array[i].thumbnail.path+"."+results_array[i].thumbnail.extension
                    }
                    
                    //push data into JSON array
                    api_data.push(object_temp)
    
                }

            }

            return callback(api_data);

        }

        else
        {
            return callback(err)
        }

        }

        else{
            return callback(err);
        }

    });
}

module.exports.apiCall = getCharacters;
