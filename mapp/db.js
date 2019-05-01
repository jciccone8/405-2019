const { Pool /*, Client*/ } = require('pg');

const pool = new Pool({
  user: 'turner',
  host: 'localhost',
  database: 'mapp',
  password: '',
  port: 5432
});

exports.getPassword = function(userid, cb) {
  pool.connect(function(err, client, done) {
    if (err) return cb(err);
    client.query('select password from users where userid = $1', [userid], function (err, result) {
      done();
      if (err) { cb(err); return; }
      if (result.rows.length === 0) {
        cb(null, null);
        return;
      }
      cb(null, result.rows[0].password);
    });
  });
};
