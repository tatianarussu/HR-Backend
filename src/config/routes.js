'use strict';

module.exports.init = initRoutes;

function initRoutes(app) {
    let ROUTES_PATH = app.get('root') + '/modules/';

    app.use('/users', require(ROUTES_PATH + 'users/route'));

    app.use('/user_roles', require(ROUTES_PATH + 'user_roles/route'));

    app.use('/jobs', require(ROUTES_PATH + 'jobs/route'));

    app.use('/skills', require(ROUTES_PATH + 'skills/route'));

    app.use('/personal_info', require(ROUTES_PATH + 'personal_info/route'));

    app.use('/job_requirements', require(ROUTES_PATH + 'job_requirements/route'));

    app.use('/user_work_experience', require(ROUTES_PATH + 'user_work_experience/route'));

    app.use('/user_educations', require(ROUTES_PATH + 'user_educations/route'));

    app.use('/user_skills', require(ROUTES_PATH + 'user_skills/route'));

    app.use('/job_apply', require(ROUTES_PATH + 'job_apply/route'));

}