require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});


const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors');
const https = require('https');
const https2 = require('https');
const http = require('http', {cors: {origin:"*"}})  ;
const io = require('socket.io');
//const { Server: SocketIOServer } = require('socket.io');
//const React = require('react');
//const http2Express = require('express-http2-workaround');
const http2 = require('http2');
const axios = require('axios');
const httpMocks = require('node-mocks-http');
const EventEmitter = require('events');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const session = require('express-session');
const MongoSession = require('connect-mongodb-session')(session); 
const bcrypt = require('bcryptjs');
var crypto = require('crypto');
var microtime = require('microtime');
const multer = require('multer'); // Middleware for handling file uploads
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const WebSocket = require('ws');
const qs = require('qs');
const cacheControl = require('express-cache-controller');
const util = require('util');
app.use(cacheControl({ noStore: true, noCache: true, mustRevalidate: true, maxAge: 0 }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
//var ejsLayouts = require('express-ejs-layouts');
var microtime = require('microtime');
var nodeBase64 = require('nodejs-base64-converter');
var request = require('request');
//app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static('views')); 
app.use(express.static('uploadedphotoss'));
app.use(express.static('mywebsite')); 
app.use('/AboutPageDocs',express.static('mywebsite')); 
app.use('/AboutPageDocs',express.static('views')); 
app.set( "ipaddr", "127.0.0.1" );
app.set( "port", 587 );
app.set( "port", 8443 );
app.use('/user/:name', express.static('views'));
app.use('/manager/:name', express.static('views'));
app.use('/manager/:name/', express.static('uploadedphotoss'));
app.use('/manager/:name/', express.static('serverdocumentss'));
//app.use(ejsLayouts);

app.use('/user/:name/', express.static(path.join(__dirname, 'uploadedphotoss')));
app.use('/user/:name/', express.static(path.join(__dirname, 'serverdocumentss')));
const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
app.use('aboutpage.html', express.static('views'));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});



app.use(express.text());
app.use(session({
  secret: 'mylovelykey', // Replace 'your_secret_key' with a real secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(cors({
  origin:"https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.4/socket.io.min.js"
}));
//const { execSync } = require('child_process');// Define a simple React component


// Render the component to a string


// Export the rendered string or use it in your server response

 //import * as fileTypew from file-type;


//const fileTypew = require('file-type');
//import fileTypew from 'file-type';

const jwt = require('jsonwebtoken');

/*app.use(cors({
  origin: 'https://127.0.0.1:8443',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));*/
//app.use(cors({origin:'http://127.0.0.1:3000'}));
/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});*/
/*
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.status(204).send();
});*/



mongoose.Promise = global.Promise; // Manually set Mongoose to use native promises


mongoose.connect("mongodb://127.0.0.1:27017/VirtualBio", {useNewUrlParser : true, useUnifiedTopology: true, connectTimeoutMS: 30000,socketTimeoutMS: 45000, serverSelectionTimeoutMS: 30000 });

app.use(express.static('views'));
const schemacredentials = new mongoose.Schema({
  username: String,
  name: String,
  surname:String,
  email:String,
  day:Number,
  month:Number,
  year:Number, 
  images: Buffer,
  gender: String,
  password:String,
  token: String,
  nation: String,
  phonenumber:Number,
  city:String,
  zipcode:String,
  state:String,
  street:String,
  enquiryy: [String],
  imagepathfromdb: [String],
  enquiryimagepathfromdb:[String],
  enquirydocumentpathfromdb:[String],
  enquiryisreaded: {type: Boolean, default:false},
  enquiryisnotreaded:{type:Boolean, default:true},
  hasgotenquiry:{type:Boolean, default:false},
  replyfromdoctor: [String],
  chatofdoctorandclient:[String],
  itsanadminaccount: {type:Boolean,default: false },
  willrefund:{type:Boolean,default:false},
  messagecountofuser: Number,
  })
const Credentialssa = mongoose.model("Key",schemacredentials);
const schemamainpagequestions = new mongoose.Schema({
  itsname: String,
  itsemail:String,
  itsquestion:String
})
const Credentialssa2 = mongoose.model("Question",schemamainpagequestions );

const fs = require('fs');
const privateKey = fs.readFileSync('', 'utf8'); // Load the private key
const certificate = fs.readFileSync('', 'utf8');
const ceert = fs.readFileSync('', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);


const privateKey2 = fs.readFileSync('', 'utf8');
const certificate2 = fs.readFileSync('', 'utf8');


const agent2 = new https.Agent({
  ca:certificate,
  rejectUnauthorized: true
});
const agent = new https.Agent({  
  ca: certificate
});



const wss = new WebSocket.Server({ server: httpsServer });



app.get('/', (req, res) => {
  // Serve your HTML form here
  res.sendFile(__dirname +'/views'+ '/newformat.html');
  
  user_ip = req.headers['x-forwarded-for'];
  console.log('IP address of the visitor:', user_ip);
});






var merchant_id = "";
var merchant_key = '';
var merchant_salt = '';



var basket = JSON.stringify([
  ['Enquiry Demand', '100.00', 1]

]);
var user_basket = nodeBase64.encode(basket);
// Sipariş numarası: Her işlemde benzersiz olmalıdır!! Bu bilgi bildirim sayfanıza yapılacak bildirimde geri gönderilir.
// Sayfada görüntülenecek taksit adedini sınırlamak istiyorsanız uygun şekilde değiştirin.
// Sıfır (0) gönderilmesi durumunda yürürlükteki en fazla izin verilen taksit geçerli olur.
var max_installment = '0';
var no_installment = '0'  // Taksit yapılmasını istemiyorsanız, sadece tek çekim sunacaksanız 1 yapın.
var user_ip = '';

var payment_amount = 100; // Tahsil edilecek  tutar. 9.99 için 9.99 * 100 = 999 gönderilmelidir.
var currency = 'TL';
var test_mode = '0'; // Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir.


var user_address = ''; // Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız adres bilgisi
var user_phone = ''; // Müşterinizin sitenizde kayıtlı veya form aracılığıyla aldığınız telefon bilgisi


var merchant_fail_url = 'https://virtualbiochemistry.com';
var timeout_limit = 30; // İşlem zaman aşımı süresi - dakika cinsinden
var debug_on = 0; // Hata mesajlarının ekrana basılması için entegrasyon ve test sürecinde 1 olarak bırakın. Daha sonra 0 yapabilirsiniz.
var lang = 'en'; // Türkçe




 
var token2 = false;
var callbackstatusfinal = false;
var paymentbegun = false;
app.post("/finalstateofbill2", function(req,res){
  if(token2 === true && callbackstatusfinal ===true){
    token2 = false;
  return res.json({ success: true, message: "Payment successful" });

}else if(token2 === true && paymentbegun===true && callbackstatusfinal ===false ){
  paymentbegun=false;
 return res.json({ failfail: true, message: "Payment not successful" });
  
}
else {
  return res.sendStatus(200);
}
})

app.post("/finalstateofbill", function (req, res) {

  // ÖNEMLİ UYARILAR!
  // 1) Bu sayfaya oturum (SESSION) ile veri taşıyamazsınız. Çünkü bu sayfa müşterilerin yönlendirildiği bir sayfa değildir.
  // 2) Entegrasyonun 1. ADIM'ında gönderdiğniz merchant_oid değeri bu sayfaya POST ile gelir. Bu değeri kullanarak
  // veri tabanınızdan ilgili siparişi tespit edip onaylamalı veya iptal etmelisiniz.
  // 3) Aynı sipariş için birden fazla bildirim ulaşabilir (Ağ bağlantı sorunları vb. nedeniyle). Bu nedenle öncelikle
  // siparişin durumunu veri tabanınızdan kontrol edin, eğer onaylandıysa tekrar işlem yapmayın. Örneği aşağıda bulunmaktadır.
  const contentType = req.headers['content-type'];
 
 // console.log('Content-Type:', contentType);
  var callback = req.body;

  // POST değerleri ile hash oluştur.
  console.log('here you are at callback', callback);
  var paytr_token = callback.merchant_oid + merchant_salt + callback.status + callback.total_amount;
  console.log('finallllllllll stateeeeeeeee ',callback.total_amount,callback.status, merchant_salt,callback.merchant_oid);
  var token = crypto.createHmac('sha256', merchant_key).update(paytr_token).digest('base64');
console.log('this is token in callback ', token);
 
 //console.log(callback.hash);

//console.log(typeof token);
//console.log(typeof callback.hash);
  if (token == callback.hash) {
    
    token2 = true;
     console.log('Token and Callback is okey');
     if(callback.status=='success'){
      callbackstatusfinal = true;
    }else if(callback.status =='failed'){
      paymentbegun = true;
      callbackstatusfinal = false;
    }
   res.sendStatus(200);
  
   
  }else {
    token2 = false;
    console.log('Token and callback was false');
    res.sendStatus(403);
    
  }
 


});










app.post('/takeiteasy',async (req, res) => {
  const username = req.body.usernameonregister;
  const name = req.body.nameonregister;
  const surname = req.body.surnameonregister;
  const day = req.body.day;
  const month = req.body.month;
  const year = req.body.year;
  const gender = req.body.gender; 
  const email = req.body.emailonregister;
  const password = req.body.passworodnregister;
  const confirmPassword = req.body.passwordagainonregister;
  const nation = req.body.country;
  const phonenumber = req.body.phone;
  const street = req.body.street;
  const city = req.body.city;
  const zippostal = req.body.zippostal;
  const state = req.body.state;
 
    const hashedPassword = await bcrypt.hash(password, 10); 
 
  
 

    let product = await Credentialssa.findOne({ username: { $regex: new RegExp("^" + username + "$", "i") } });
    let product2 = await Credentialssa.findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } });
    //let product3 = await Credentialssa.findOne({ password: { $regex: new RegExp("^" + req.body.passworodnregister + "$", "i") } });

    if(product || product2){
      res.redirect('/emailexist.html');
    }
    else{

          var saveit = await new Credentialssa({ username:username , name: name, surname: surname, day:day,  month: month,year :year,gender: gender, nation :nation,phonenumber:phonenumber , city: city,state:state,zipcode:zippostal,street:street, email : email,password : hashedPassword});
            console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ');
          await saveit.save()  .then(user => console.log("User saved successfully:", hashedPassword))
          .catch(error => console.error("Error saving user:", error));;
          const payloada = {
         
            username: username,
            uniqueIdentifier: Date.now()
          };
          res.cookie('userLoggedData', JSON.stringify(payloada), { maxAge: 900000, httpOnly: false });
          res.redirect('/user/' + req.body.nameonregister);
        
    };
   
});

const NodeRSA = require('node-rsa');
var merchant_ok_url = "";
var pullemailfromdb2 = "";
var pulldernameandsurname2 = "";
//var res_data = "";
var usernnn = "";



app.get('/user/:name', async (req, res) => {
  const namee = req.params.name;
  //console.log(name);
  const getcookieforseekreply = req.cookies.userLoggedData;
  const gotthecookie = JSON.parse(getcookieforseekreply);
  const putonthedb = gotthecookie.username;
  //console.log('www',putonthedb);

    const forpullreplyfromdb = await Credentialssa.findOne({username:putonthedb});
    if(forpullreplyfromdb){
   const pulledreplyfromdb = forpullreplyfromdb.replyfromdoctor;
   const pullednamefromdb = forpullreplyfromdb.name;
    const putimgsrchere = forpullreplyfromdb.imagepathfromdb;
   const pulldernameandsurname = forpullreplyfromdb.name + " " + forpullreplyfromdb.surname;
   pulldernameandsurname2 = pulldernameandsurname;
   const pullemailfromdb = forpullreplyfromdb.email;
   pullemailfromdb2 = pullemailfromdb;
    usernnn = forpullreplyfromdb.username;
    merchant_ok_url = `https://virtualbiochemistry.com/user/${usernnn}?success=true`;
    user_phone = forpullreplyfromdb.phonenumber;
    user_address = forpullreplyfromdb.state+forpullreplyfromdb.city+forpullreplyfromdb.street+forpullreplyfromdb.zipcode;  
    console.log('we are in user_address', user_address);
    if(forpullreplyfromdb.enquiryy !== ''){
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'yesforenquiry23'}));
        }
    });
    }





    res.render('userpageloggedejs.ejs', { name: namee, indname: pullednamefromdb, answerhere: pulledreplyfromdb,imgsourceloadedforprofile:putimgsrchere,usernamep : usernnn });


    }


});


wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    const messageString = message.toString();
    
    
    // You can parse the message if it's in JSON format or if you're expecting different types of messages
      // const data = JSON.parse(message);
      // if (data.type === 'Trigger') {
      
      // For simple text messages, use the following:
      if (messageString === 'Trigger') {
        console.log('Trigger received. Processing payment...');
        axios.post('https://virtualbiochemistry.com/paymentinterface'); // Pass the WebSocket connection if you need to send a response back
       
      } else {
        console.log('Unknown message type received.');
      }

      }  );

})



var installment_count = 0;

var res_data = "";
var non_3d = '0'; //3d'siz işlem
var card_type = 'advantage, axess, combo, bonus, cardfinans, maximum, paraf, world'; // Alabileceği değerler; advantage, axess, combo, bonus, cardfinans, maximum, paraf, world
var client_lang = 'en'; 
var non3d_test_failed = '0';
var payment_type = 'card';
//var token =  crypto.createHmac('sha256', merchant_key).update(paytr_token).digest('base64');



function functionofpaytr(){
 var merchant_oid = "IN" + microtime.now(); 
 var hashSTR = `${merchant_id}${user_ip}${merchant_oid}${pullemailfromdb2}${payment_amount}${user_basket}${no_installment}${max_installment}${currency}${test_mode}`;

    var paytr_token = hashSTR + merchant_salt;

    var token = crypto.createHmac('sha256', merchant_key).update(paytr_token).digest('base64');


    var options = {
        method: 'POST',
        url: 'https://www.paytr.com/odeme/api/get-token',
        headers:
            { 'content-type': 'application/x-www-form-urlencoded' },
        formData: {
            merchant_id: merchant_id,
            merchant_key: merchant_key,
            merchant_salt: merchant_salt,
            email: email,
            payment_amount: payment_amount,
            merchant_oid: merchant_oid,
            user_name: pulldernameandsurname2,
            user_address: user_address,
            user_phone: user_phone,
            merchant_ok_url: merchant_ok_url,
            merchant_fail_url: merchant_fail_url,
            user_basket: user_basket,
            user_ip: user_ip,
            timeout_limit: timeout_limit,
            debug_on: debug_on,
            test_mode: test_mode,
            lang: lang,
            no_installment: no_installment,
            max_installment: max_installment,
            currency: currency,
            paytr_token: token,


        }
    };

  
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      var res_data = JSON.parse(body);

      if (res_data.status == 'success') {
          res.render('layout', { iframetoken: res_data.token });
      } else {

          res.end(body);
      }


  });
  

/*
  wss.clients.forEach(client => {
  if(client.readyState === WebSocket.OPEN){
    client.send(JSON.stringify({ type: 'channelofpaytr', message:`${res_data}`}));
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
}})
*/


}


app.use((req, res, next) => {
  console.log('Middleware running');
  next(); // Ensure next() is called to continue to the next middleware or route handler
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.post('/paymentinterface', async(req,res)=>{
  console.log('paymentinterface is ran ');
  var merchant_oid = "IN" + microtime.now(); 

  var hashSTR = `${merchant_id}${user_ip}${merchant_oid}${pullemailfromdb2}${payment_amount}${user_basket}${no_installment}${max_installment}${currency}${test_mode}`;

  var paytr_token = hashSTR + merchant_salt;

  var token = crypto.createHmac('sha256', merchant_key).update(paytr_token).digest('base64');


  var options = {
      method: 'POST',
      url: 'https://www.paytr.com/odeme/api/get-token',
      headers:
          { 'content-type': 'application/x-www-form-urlencoded' },
      formData: {
          merchant_id: merchant_id,
          merchant_key: merchant_key,
          merchant_salt: merchant_salt,
          email: pullemailfromdb2,
          payment_amount: payment_amount,
          merchant_oid: merchant_oid,
          user_name: pulldernameandsurname2,
          user_address: user_address,
          user_phone: user_phone,
          merchant_ok_url: merchant_ok_url,
          merchant_fail_url: merchant_fail_url,
          user_basket: user_basket,
          user_ip: user_ip,
          timeout_limit: timeout_limit,
          debug_on: debug_on,
          test_mode: test_mode,
          lang: lang,
          no_installment: no_installment,
          max_installment: max_installment,
          currency: currency,
          paytr_token: token,


      }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var res_data = JSON.parse(body);
    console.log(res_data);
    console.log('request has ran');
    if (res_data.status == 'success') {
      console.log('you are under res_data.status === success');
      wss.clients.forEach(client => {
        if(client.readyState === WebSocket.OPEN){
          client.send(JSON.stringify({ type: 'channelofpaytr', message:`${res_data.token}`}));
          console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
      }})
      
    } else {
        console.log('its else');
        res.end(body);
    }})
    console.log('merchant_ok_url',merchant_ok_url);
  res.sendStatus(200);
})

var letstriggertheget = false;
var context = "";



app.post('/user/:name/editingprofileroute',async(req,res) =>{ 

  const editname = req.body.nameinput;
  const editsurname = req.body.surnameinput;
  const editemail = req.params.emailinput;

  const day = req.body.day2;
  const month = req.body.month2;
  const year = req.body.year2;
  const editpassword = req.body.passwordinput;
  const selectedGender = req.body.gender;
  const userLoggedDataParsed = req.cookies.userLoggedData;

  const parsedUsername = JSON.parse(userLoggedDataParsed);
  const namesearch = parsedUsername.username;
  const varoneditname =await Credentialssa.findOne({
    username: namesearch

})

  if(editname){
   
  varoneditname.name = editname;


}
 if(editsurname){
  varoneditname.surname = editsurname;
 }  
 if(editemail){
  varoneditname.email = editemail;
  
 }
 if(day){
  varoneditname.day = day;
 
 }
 if(month){
  varoneditname.month = month;
 }
 if(year){
  varoneditname.year = year;
 }
if(editpassword){
  varoneditname.password = editpassword;

 }
if(selectedGender){
  varoneditname.gender = selectedGender; 

 }
 await varoneditname.save();
});


let filetypeofpassedimg = "";
async function getImageType(fileeePath) {
  try {
    const readFile = util.promisify(fs.readFile);
    const buffer = await readFile(fileeePath);

   
    const fileSignature = buffer.toString('hex', 0, 8);

 
    if (fileSignature.startsWith('ffd8ffe0') || fileSignature.startsWith('ffd8ffe1')) {
      console.log('File type: JPEG');
      filetypeofpassedimg = true;
    }
    
    else if (fileSignature.startsWith('89504e470d0a1a0a')) {
      console.log('File type: PNG');
      filetypeofpassedimg = true;
    }
    // Check for GIF file
    else if (fileSignature.startsWith('47494638')) {
      console.log('File type: GIF');
      filetypeofpassedimg = true;
    }
    else {
      console.log('Unknown image file type');
      filetypeofpassedimg = false;
    }
    
    // You can add more checks for other image formats as needed

  } catch (error) {
    console.error('Error reading file:', error);
  }
  
}




function sendmyalert() {
  console.log('SENDING ALERT');
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'alert', message: 'No user found!' }));
      }
  });
}



function sendmyalert2() {
  
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'alertpass', message: 'Wrong password!' }));
      }
  });
}

var variableofparafterpayment = "";

  app.post('/take', (req, res) => {
    const enternamesub = req.body.enternamelog;
    const enterpasswordsub = req.body.enterpasswordlog;

 
    async function authenticate() {
      try {
        let logproduct = await Credentialssa.findOne({
          username: { $regex: new RegExp("^" + enternamesub + "$", "i") },
        });
        if(logproduct){

       if(logproduct.itsanadminaccount===true){
          console.log('admin account is true');
          const adminsstoredPlainPassword = logproduct.password;
          const passwordMatch23 = await bcrypt.compare(enterpasswordsub,adminsstoredPlainPassword);
          const payloada = {
         
            username: enternamesub,
            uniqueIdentifier: Date.now()
          };
          res.cookie('userLoggedData', JSON.stringify(payloada), { maxAge: 900000, httpOnly: false });       
          if ( passwordMatch23) {           
            res.redirect('/manager/' + enternamesub +'?'+'success=true');
            thisisuserinfos(logproduct);           
        }
        else{
          console.log('Admin authentication is failed');
          sendmyalert2();
          res.status(200);  
        }
      }
    
        
       

        //__________________
       else if (logproduct.itsanadminaccount===false) {
          console.log('HERE YOU ARE');
          
          const storedPlainPassword = logproduct.password;
  const passwordMatch = await bcrypt.compare(enterpasswordsub,storedPlainPassword);
          const payloada = {
         
            username: enternamesub,
            nameeee : logproduct.name,
            surnameeee : logproduct.surname,
            emaillll : logproduct.email,
            uniqueIdentifier: Date.now()
          };
          res.cookie('userLoggedData', JSON.stringify(payloada), { maxAge: 900000, httpOnly: false });

          if (passwordMatch) {
        variableofparafterpayment = enternamesub;
     
      
        res.redirect('/user/' + enternamesub +'?'+'success=true');
            
            
            } else  {
            res.status(200);  

              sendmyalert2();
              
            console.log('Authentication failed');
           
          }
        } else {
       
          console.log('User not found');  
          res.status(200);      
        }
      } 
    
    else if(!logproduct){
       res.status(200);  
      sendmyalert();
      console.log('SENDING ALERT');
     

    
    }}catch (error) {
        console.error('Error during authentication:', error);
        res.status(200);  
      }
    }
   
    authenticate();

  });
/*
   function  sendmyalert(){

  
  
    
    });
  }*/

app.get('/manager/:name',(req,res)=>{
  if(req.cookies.userLoggedData){
  const name = req.params.name;
  res.render('adminpageejs.ejs',{name:name});}
})

/*
app.get('/user/:name', (req,res) => {
  res.render('userpageloggedejs.ejs', {name:enternamesub})
})*/


const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'serverdocumentss')); 
  },
  filename: (req, file, cb) => {
   // const fileExtension = path.extname(file.originalname);
      cb(null,Date.now()+file.originalname);
  }
});
  
  const upload2 = multer({ storage: storage2 });
 

app.post('/user/:name/routeofenquiry',upload2.any(), async (req,res,next) =>{
  try{
 const usingcookie = req.cookies.userLoggedData;
 const usingcookie2 = JSON.parse(usingcookie);
 const usingcookie3 = usingcookie2.username; 
 
 const usingcookie4 = await Credentialssa.findOne(
  { username: { $regex: new RegExp("^" + usingcookie3 + "$", "i") }})
 const texttodb = req.body.inquiry;
 console.log(texttodb);
 if(texttodb){
  usingcookie4.enquiryy.push(texttodb);
  
 } 


 if(req.files && req.files[0]){
const takefilenameforenquiry = req.files[0].path;
await getImageType(takefilenameforenquiry);
console.log('GotImageConsole', filetypeofpassedimg);
const takefilenameforenquiry2 = req.files[0];
const takenfilenameforenquiry3 = takefilenameforenquiry2.filename;
console.log(takenfilenameforenquiry3);
  usingcookie4.enquiryimagepathfromdb = takenfilenameforenquiry3;
}else{
  console.log('Please choose an image of .png or .jpeg/.jpg in ord');
}
usingcookie4.hasgotenquiry = true;
if(usingcookie4.enquiryisnotreaded === false){
  usingcookie4.enquiryisnotreaded = true;
}

await usingcookie4.save();


sendAnotherQueryAlert();

console.log('WEQWEQEW');

}catch (error) {
  console.error(error);
  // Send a server error status code
  res.status(500).json({ message: `${error}` });
}
}
)



function sendAnotherQueryAlert(){
wss.clients.forEach(client => {
  if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({type: 'querysent'}));

  }
});
}



app.post('/formofrecover', async (req,res) => {
  
  const emailforrecover = req.body.enterrecovermail;

 async function emailrec(){
    try{
    

      const foundedemail = await Credentialssa.findOne(
        
        
     
      { email: { $regex: new RegExp("^" + emailforrecover + "$", "i") }}
      )
      const foundedemail2 = foundedemail.email;
      if(foundedemail){

          const payload = {
         
            email: emailforrecover,
            uniqueIdentifier: Date.now()
          };
          res.cookie('storedData', JSON.stringify(payload), { maxAge: 900000, httpOnly: true });
          
          sendmyalert3();
          await mailing();
          res.redirect('/newformat.html');
        }
        else{
          console.log('email not exist, enter an existed email please ');
        }

        async function mailing(){
          const transporter = nodemailer.createTransport({
            host:'smtp-relay.brevo.com',
            port:587,
            secure:false,
            tls: {
              minVersion: 'TLSv1.2',
            },
            auth:{
              user:'',
              pass:'' 
            }
          })
          const info = await transporter.sendMail({
            from:'',
            to:`${foundedemail2}`,
            subject:'Password Recovery Link',
            text: "Hello world?",
            html: '<a href="https://virtualbiochemistry.com/recoverpageofpass.html">Click here to reset your email</a>',
          })
          
          console.log("Message sent: %s", info.messageId);
        }
       
      }
      

  
  catch(error){
      console.error('Error on finding email');
    }

}
await emailrec();
});



function sendmyalert3() {
  console.log('SENDING ALERT');
  // Iterate over all connected clients and send the alert message.
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'emailfound', message: 'Your recovery e-mail has been sent! Please check your e-mail box.' }));
      }
  });
}


app.post('/ontherecoveringpass' ,async (req,res)=>{
  
  const storedData = req.cookies.storedData;
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const email = parsedData.email; 
    const updatingpass = await Credentialssa.findOne(
      { email: { $regex: new RegExp("^" + email + "$", "i") }})
    
if (updatingpass) {
  const newPassword = req.body.recoveringmypass2;
  const hashedPassword2 = await bcrypt.hash(newPassword, 10);
  updatingpass.password = hashedPassword2;
  await updatingpass.save();
  res.status(200);
  sendmyalert4();
  res.redirect('/newformat.html');
  
  
}}


})

function sendmyalert4() {
  console.log('SENDING ALERT');
  // Iterate over all connected clients and send the alert message.
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'passwordupdatedx', message: 'Your password updated successfully!' }));
      }
  });
}

app.get('/fetchedAllNotReadedUsers/getTheirInfos', async(req,res)=>{
  //const Credentialssa = mongoose.model("Key", schemacredentials);
  const usersss = await Credentialssa.find({hasgotenquiry:true});
 
  res.json(usersss);
  console.log('PPPPPPPPPPPPPPPP');
  
})

app.get('/tw/parsetherefundeds', async(req,res)=>{
  const usersss2 = await Credentialssa.find({willrefund:true});
 
  res.json(usersss2);
})

app.get("/fetchedAllUsersPath/getUsers", async (req,res)=>{
  const Credentialssa = mongoose.model("Key", schemacredentials);
  const users = await Credentialssa.find({}); 
  console.log('QQQQQQQQQQQQQ');
  res.json(users);
})

app.get("/fetchusersforchat/gimmeUsers", async (req,res)=>{
  const Credentialssa = mongoose.model("Key", schemacredentials);
  const usersjsonenquiry = await Credentialssa.find({hasgotenquiry:true});
  res.json(usersjsonenquiry);
})

app.post("/apiapiapi/sendDataForReply",async (req,res) => 
{
  const requestData = req.body;
  var beforewritingtoreplyfromdoc = "";
  beforewritingtoreplyfromdoc = requestData.takenvaluefromdoctodb;
  const zz = await Credentialssa.findOne({ username: { $regex: new RegExp("^" + requestData.data + "$", "i") }});  
  zz.replyfromdoctor = beforewritingtoreplyfromdoc;
  await zz.save();
  console.log('this is zzzz');
})

app.post("/qwq/routeofrefunded", async(req,res)=>{
  const requestDataData = req.body;
  const dddbqry = await Credentialssa.findOne({username: requestDataData.useruser2});
  dddbqry.willrefund = requestDataData.boolofrefund2;
  dddbqry.enquiryisnotreaded = requestDataData.clicktruereverse; 
  await dddbqry.save();

}
)



app.post("/myfetchapiforchat/bringthechat", async(req,res)=>{
  const reqDataData = req.body;
  let recordname = "";
  recordname = reqDataData.nameofuseronchat;
  
  const pushthemessage1 = reqDataData.messagecontentofchat;
  console.log(recordname);

  try{
    const databaseqqq = await Credentialssa.findOne({username:reqDataData.nameofuseronchat});
    if(recordname){
    funcofchathistory(recordname);
  }

  if(databaseqqq){
    databaseqqq.chatofdoctorandclient.push('D::::'+pushthemessage1);
    await databaseqqq.save();
    return res.status(200).json({});
  }
  else{
    console.log('issue');
  }}  catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
}

})

let usernameforchathistory = "";
function funcofchathistory(nameqp){
  usernameforchathistory = nameqp;
  console.log('this is func of chat ', usernameforchathistory);


}
console.log(usernameforchathistory);
  


app.post('/fetchfordisplay/fetchfordisplay2', async(req,res)=>{
    const usname2 = req.body; 
  
    const deducta = usname2.nametakentakentaken2;
    console.log('deductadeductadeductadeducta',deducta);
    const deducta2 = await Credentialssa.findOne({username:deducta});
    deducta2.messagecountofuser = 0;
    await deducta2.save();  
    const deducta3 =  deducta2.chatofdoctorandclient;

    functionbeforedisplay(deducta3);
    res.status(200).json(deducta3);
})


  let deducta40 = "";
  function functionbeforedisplay(deducta3){

    deducta40  = deducta3;
    axios.get('https://127.0.0.1:81/herethechat/hereherechat', {httpsAgent: agent2}).then(function (response) {
      // handle success
      console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

      
}

app.get('/herethechat/hereherechat', async(req,res)=>{
  res.status(200).json(deducta40);
}
)


let chatliftedaccordingly2 = "";

  app.post('/fornamelayoutchat/secondpartofroute', async (req,res) => {
    const usernameofchat = req.body; 
    console.log('Console foR Inspect',usernameofchat.myvalueqqq2);
    const deductchatfromdb = await Credentialssa.findOne({username:usernameofchat.myvalueqqq2});
    const chatliftedaccordingly = deductchatfromdb.chatofdoctorandclient;
    const deductchatfromdbun = deductchatfromdb.username;
    chatliftedaccordingly2 = chatliftedaccordingly;
    console.log('deduct from chat ', deductchatfromdbun);
    if(deductchatfromdb){
    initiatelayout(deductchatfromdbun);
    parsethechat(chatliftedaccordingly);
    return res.status(200).json({});
  }

  })

let usname = "";
let chthistory2 = "";
function parsethechat(chthistory){
  chthistory2 = chthistory;

}



class EventEmitter2 extends EventEmitter {}
const eventEmitter2 = new EventEmitter2();


let trueorfalsevar = "false";


let usersnameformessages = "";
function initiatelayout(usernameforch){
  usersnameformessages = usernameforch;
    if(usersnameformessages){
          

      trueorfalsevar = true;
 
     eventEmitter2.emit('trigger-it');

      console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
    }

    

    console.log('usersnameformessages is works', usersnameformessages);

   }




   
eventEmitter2.on('trigger-it', () => {
  axios.get('https://127.0.0.1:81/layoutchat/layitchatout', {httpsAgent: agent2}).then(function (response) {
    // handle success
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  console.log('axios is worked_________');
   });
   

   







app.get("/layoutchat/layitchatout", async(req,res) => {

  console.log('layout chat api is works');

  if(trueorfalsevar===true){
   console.log('in the app.get33333333333333333333333333333333333333333333');
console.log('right under initiatelayout function',usersnameformessages);
const takeforusage = await Credentialssa.findOne({username:usersnameformessages});
console.log('this is under takeforusage variable' , takeforusage);

  console.log('Yes take for usage');
     const usersmessages = takeforusage.chatofdoctorandclient;

      console.log(usersmessages);
      res.json(usersmessages);
  
     } else{
      console.log('JUST ELSE');
     }
 // res.status(500).send('testing');
    })
    
    

app.post("/myfetchapiforchat2/bringthechatofuser", async(req,res)=>{
  const reqreqreqData = req.body; 

    const basedatabase = await Credentialssa.findOne({username:reqreqreqData.nameofuseronchat2});
    const pushthemessage2 = reqreqreqData.messagecontentofchat2;
    console.log('wwwwww', pushthemessage2);
    const councount = reqreqreqData.councount2;
    basedatabase.chatofdoctorandclient.push('U::::'+pushthemessage2);
    if (typeof basedatabase.messagecountofuser !== 'number') {
      basedatabase.messagecountofuser = 0;
  }
  
  basedatabase.messagecountofuser += 1;

    console.log(typeof councount);
    await basedatabase.save()

  res.status(200).json({});
})



var itsssName = "";
var itsssEmail = "";
var itsssQuestion = "";

app.post("/routeofaskedquestionsonmainpage",async (req,res)=>{
  try{
  const xzxz = new  Credentialssa2({itsname:req.body.mainpagequestionname, itsemail:req.body.askingquestionsidemail, itsquestion:req.body.askingquestionsidquestion});
  itsssName = req.body.mainpagequestionname;
  itsssEmail = req.body.askingquestionsidemail;
  itsssQuestion = req.body.askingquestionsidquestion;
 await xzxz.save();
 wss.clients.forEach(client => {
  if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'questionroute' , message:'Your question request has been sent!'}));
  }
});
res.redirect('/');
}
  catch(error)  {console.error(error)};
})

app.post('/routeofaskedquestionsonmainpage2', async(req,res)=>{
  
  console.log('route triggered as expected');
  const transporter = nodemailer.createTransport({
    host:'smtp-relay.brevo.com',
    port:587,
    secure:false,
    tls: {
      minVersion: 'TLSv1.2',
    },
    auth:{
      user:'m',
      pass:'' 
    }
  })
  try{
  const info = await transporter.sendMail({
    from:'',
    to:'',
    subject:'Question-of-Anonym',
    text: `its question= ${itsssQuestion}///// its email = ${itsssEmail}, its name =${itsssName} `,
    
  })
}catch(error){
  console.error(error);
}
})






app.get('/user/:name/routeofchatchat', async(req,res)=>{
 
  const minecookie = req.cookies.userLoggedData;
  const minecookie2 = JSON.parse(minecookie);
  const minecookie3 = minecookie2.username;
  const minecookie4 = await Credentialssa.findOne({username:minecookie3});
  const minecookie5 = minecookie4.chatofdoctorandclient;
  res.json(minecookie5);

})


app.post('/checkenquiryornot', (req,res)=>{
  var requestbody = req.body;
  console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',requestbody); 
  var findmyuser = Credentialssa.findOne({username:requestbody});
  if(findmyuser.enquiryy !== ''){
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'yesforenquiry'}));
      }
  });
  }
})


app.post("/lll/routeofreaded", async (req,res)=>
{


  const requestData2 = req.body;
  const dbqry = await Credentialssa.findOne({username:requestData2.useruser});
  dbqry.enquiryisnotreaded = requestData2.boolofnotreaded;
  dbqry.enquiryisreaded = true;
  await dbqry.save();

  sendreadeddocsfunc(dbqry);
  //res.status(200).json({ result });
})

let wqwqwq = ""; 
function sendreadeddocsfunc(ttt){
  const queryoverit = ttt;
  const useruserusername = queryoverit.username;  
  wqwqwq = useruserusername;
}
  

app.get("/ppp/routeforforreaded", async(req,res)=>{
  const wwuser = await Credentialssa.find({enquiryisreaded:true});
  res.json(wwuser);
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'uploadedphotoss')); 
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
   // const filenameonmulter = file.originalname + Date.now()+ '-' +fileExtension
      cb(null,file.originalname + Date.now()+ '-' + fileExtension);
  }
});

const upload = multer({ storage: storage });
app.post('/user/:name/uploadingphotoroute', upload.any(), async (req, res) => {
  if (req.files) {
    const usingcookie = req.cookies.userLoggedData;
    const usingcookie2 = JSON.parse(usingcookie);
    const usingcookie3 = usingcookie2.username;

    const usingcookie4 = await Credentialssa.findOne({
      username: { $regex: new RegExp("^" + usingcookie3 + "$", "i") }
    });
  //  const uploadedFileName = req.files[0].originalname;

  const uploadedFile = req.files[0];
  //  usingcookie4.imagepathfromdb = uploadedFileName;

         
    //const uploadedFile = req.files[0].originalname;
    const filenameonmulter = uploadedFile.filename;
    usingcookie4.imagepathfromdb = filenameonmulter;
    await usingcookie4.save();

    res.send('File(s) uploaded successfully');

  } else {
      res.status(400).send('No file uploaded');
  }
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    console.log(err);
    res.status(500).send('Multer error occurred');
  } else {
    next(err);
  }
});





const io2 = io(httpsServer,{ path: '/socket.io' ,  cors: {
  origin: "https://127.0.0.1",
  methods: ["GET", "POST"]
}});



let usernameforsearch = "";
let mymsg = "";
io2.on('connection', (socket) => {
  console.log('A user connected');
 

  socket.on('chat-message', (data) => {
    console.log('Message received:', data);
    socket.emit('chat-message', data);
    mymsg = data;
    socket.emit('chat-message3', mymsg);

    console.log('mymsg',mymsg);
    mymsg = "";
   
    console.log('BOTH is Working'); 
  });
  socket.on('chat-message7', (message)=>{
      socket.emit('chat-message7', message);
    });

    socket.on('chat-message98', (message)=>{
      socket.broadcast.emit('chat-message17', message);
    });
  socket.on('chat-message99', (message)=>{
    socket.broadcast.emit('chat-message96', message);
  })

  socket.on('searchingusername', (z)=>{
      console.log(z);
    usernameforsearch = z;
   console.log('AR');
    sendmyalert6();
    console.log('you are in searchingusername');
  })
  
 
 
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });


})


function sendmyalert7() {
  console.log('SENDING ALERT');

  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'openthediv'}));
      }
  });
}

io2.on('chat-message2', (socket3)=>{
  socket3.emit('chat-message2', message);
  console.log('This is chat-message2 consolelog');
});

let usernameforsearch2 = "";

app.get('/usernameseek', async(req,res)=>{
  let usernameforsearch3 = "";
  usernameforsearch3 = usernameforsearch2;
  res.json(usernameforsearch3);
})
async function sendmyalert6(){
  usernameforsearch2 = await Credentialssa.findOne({username:usernameforsearch});
  console.log(usernameforsearch2);
  if(usernameforsearch2){
    sendmyalert7();

  }
};





httpsServer.listen(81, '0.0.0.0' , () => {
  console.log('HTTPS server is running on port 81');
});
