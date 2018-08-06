'use strict';

var hooks = {
  afterPublish: function(result, filePath, abe) {
    if (!abe.abeExtend.process('sitemap')) {
      console.log('cannot run process sitemap, because an other one is already running')
    }
    return result;
  }
};

exports.default = hooks;