const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./DB');
  const multer = require('multer');
require('./config/passport');
const productRoute = require('./routes/product.route');
const adminRoute = require('./routes/admin.route');
const doctorRoute = require('./routes/doctor.route');
const labtechyRoute = require('./routes/labtechy.route');
const labtestRoute = require('./routes/labtest.route');
const donorRoute = require('./routes/donor.route');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/patients', productRoute);
app.use('/admin', adminRoute);
app.use('/doctors', doctorRoute);
app.use('/lab', labtechyRoute);
app.use('/labtest', labtestRoute);
app.use('/donor', donorRoute);
const DIR = './uploads';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
  }
});
let upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/public', express.static('public'));
app.get('/api', function (req, res) {
  res.end('file catcher example');
});
app.post('/api/upload', upload.single('photo'), function (req, res) {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    })
  }
});
const port = process.env.PORT || 4000;
const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});  