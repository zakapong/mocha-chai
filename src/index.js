/**
 * Created by zma on 2016-04-21.
 */

var uniqueRandomArray= require('unique-random-array');
var names=require('./names.json');

module.exports= {
    all: names,
    random: uniqueRandomArray(names)
};