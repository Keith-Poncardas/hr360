
const getDashboard = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('main/dashboard', { ...structure });
};

const getEmployees = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('main/employees', { ...structure });
};

const getRecruitment = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('main/recruitment', { ...structure });
};

const getSetting = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('main/setting', { ...structure });
};

const getCalendar = (req, res) => {

  const structure = {
    reqObj: {
      path: req.path
    }
  };

  res.render('main/calendar', { ...structure });
};

const getLogin = (req, res) => {
  res.render('main/login');
}

module.exports = { getDashboard, getEmployees, getRecruitment, getSetting, getCalendar, getLogin };