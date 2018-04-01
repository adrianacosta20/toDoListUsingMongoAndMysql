var moment = require('moment');
var mysql = require('mysql');

module.exports = function(app, mysqldb) {

 

  // app.get('/get-todos', function (req, res) {
  //   mysqldb.query(
  //     `SELECT * FROM todos`, 
  //     function (error, results, fields) {

  //     if (error) throw error ;
  //     console.log(error)

  //     console.log('results: ', results);

  //     res.render('todos.ejs', {
  //       user: req.user,
  //       todos: results
  //     });
  //   });
  // });

  // app.post('/create-todo', function (req, res) {
    
  //   console.log('data ', req.body);

  //   var todo = {
  //     task: req.body.task,
  //     date: moment().format('YYYY/MM/DD'),
  //     complete: false,
  //     uid: 'sd9f87sdf76s7d6fsdf67sd',
  //     due_date: moment().add(7, "days").format('YYYY/MM/DD')
  //   }

  //   mysqldb.query(
  //     `INSERT INTO todos(task, date, complete, uid, due_date) 
  //      VALUES('${todo.task}', '${todo.date}', ${todo.complete}, '${todo.uid}', '${todo.due_date}')`, 
  //     function (error, result, fields) {

  //       if (error) {
  //         console.log('error ', error);

  //         res.send({
  //           success: false,
  //           error: error,
  //           message: 'The todo was not created sorry :('
  //         });
  //       }
  //       else {
  //         // console.log('result: ', result);
  //         todo.id = result.insertId;

  //         res.send({
  //           success: true,
  //           todo: todo
  //         });
  //       }
  //   });

  // });

  app.post('/update-todo', function (req, res) {
    var id = req.body.id;

    mysqldb.query(
      `UPDATE todos SET complete = true WHERE id = ${id}`,
      function (error, result, fields) {

        if (error) {
          console.log('error ', error);

          res.send({
            success: false,
            error: error,
            message: 'The todo was not updated :('
          });
        }
        else {
          console.log('result: ', result);

          res.send({
            success: true,
            id: id
          });
        }

      });
  });

  // app.post('/delete-todo', function (req, res) {
  //   var id = req.body.id;

  //   mysqldb.query(
  //     `DELETE FROM todos WHERE id = ${id}`,
  //     function (error, result, fields) {

  //       if (error) {
  //         console.log('error ', error);

  //         res.send({
  //           success: false,
  //           error: error,
  //           message: 'The todo was not deleted :('
  //         });
  //       }
  //       else {
  //         console.log('result: ', result);
         
  //         res.send({
  //           success: true,
  //           id: id
  //         });
  //       }
  //     });

  // });



}