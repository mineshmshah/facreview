
// Render current week - will check if authenticated first
const session = require('express-session');
const get = require('../model/get');
const extractWorkshops = require('./logic/extract-workshops');

exports.get = (req, res) => {
  // check cookie auth before rendering

  get.dataWeek('14-08-2017', (err, resDataWeek) => {
    const workshopArray = extractWorkshops(resDataWeek);
          // get dataVotes needs to be fed users id from cookie
    get.dataVotes(1, (err, resDataVotes) => {
      res.render('current-week', { monday: workshopArray[0], tuesday: workshopArray[1], wednesday: workshopArray[2] });
    });
  });
};

