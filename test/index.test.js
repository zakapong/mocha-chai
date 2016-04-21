var expect = require('chai').expect;
var names = require('../src/index.js');


describe('Counting the total names', function () {

    it('should be an array of strings!', function () {
        expect(names.all).to.satisfy(isArrayOfStrings);

        function isArrayOfStrings(array) {
            return array.every(function (item) {
                return typeof item === 'string';

            });
        }
    });

    it('it should contain Zakaria Mahmud', function(){

        expect(names.all).to.include('Zakaria Mahmud');
    });


    it('Should return a random item from names', function(){

        var randomItem=names.random();
        expect(names.all).to.include(randomItem);
    });
});
