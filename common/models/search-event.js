'use strict';

module.exports = function(SearchEvent) {

    SearchEvent.findWithFilter = function(filter, cb) {
        var query = JSON.parse(filter);
        SearchEvent.find(query, function(err, results) {
            if(err) {
                return cb(err);
            }
            return cb(err, results);
        });
        
      }
  
    SearchEvent.remoteMethod('findWithFilter', {
            accepts: {arg: 'filter', type: 'string'},
            returns: {arg: 'listObjects', type: 'string'},
            http: { verb: 'get', path : '/findWithFilter'}

    });

};
