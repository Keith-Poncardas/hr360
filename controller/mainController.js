
const getDashboard = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('dashboard', { ...structure });
};

const getEmployees = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('employees', { ...structure });
};

const getRecruitment = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('recruitment', { ...structure });
};

const getSetting = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('setting', { ...structure });
};

const getCalendar = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('calendar', { ...structure });
};

module.exports = { getDashboard, getEmployees, getRecruitment, getSetting, getCalendar };