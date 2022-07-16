// const { contacts } = require('./Contact')
const path = require('path');
const Resize = require('./Resize')


const Language = require('./Language')
const Contact = require('./Contact')
const Breaking = require('./Breaking')
const Address = require('./Address')
const Latest = require('./Latest')
const Weeks = require('./Weeks')


const imagePath = path.join(__dirname, '/public/images');
const fileUpload = new Resize(imagePath);




exports.getAllContact = (req, res) => {

     Contact.find()

          .then(contacts => {
               res.render('about', { contacts })
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })
}






















































//////////////////////////////////////   FIND PORTION   ////////////////////////////////////////

//////////////////////////////////////   CREATE PORTION   ////////////////////////////////////////

//////////////////////////////////////   UPDATE PORTION   ////////////////////////////////////////

//////////////////////////////////////   DELETE PORTION   ////////////////////////////////////////


































/////////  ADMIN Controller  ///////////////  ADMIN Controller  ///////////////  ADMIN Controller  ///////////////  ADMIN Controller  ///////////////  ADMIN Controller  ///////////////  ADMIN Controller  ///////////////  ADMIN Controller  //////



////         ADMIN HOME    //////////
exports.showAdminView = (req, res) => {

     res.render('admin_home')

}



















////// INSERT NEW Language /////////// INSERT NEW Language /////////// INSERT NEW Language /////////// INSERT NEW Language /////////// INSERT NEW Language /////


exports.seeLanguages = (req, res) => {

     Language.find()

          .then(language => {
               res.render('languages', { language })
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}

///// INSERTING Language///////// INSERTING Language///////// INSERTING Language///
exports.insertLanguages = (req, res) => {

     let { lang_name } = req.body;

     console.log(req.body)

     let language = new Language({

          lang_name

     })

     language.save()
          .then(c => {
               Language.find()
                    .then(language => {
                         console.log('Data Saved Successfully')
                         res.redirect('/see_languages');
                    })

                    .catch(e => {
                         console.log(e);
                         res.json({
                              message: 'Data Storing Errror'
                         })
                    })



               // res.json({
               //           message: 'Data Submitted Succesfully'
               //      })
          })
          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Data Posting Error!'
               })
          })


}




////// DELETE LANGUAGE /////////// DELETE LANGUAGE /////////// DELETE LANGUAGE /////////// DELETE LANGUAGE /////////// DELETE LANGUAGE /////
exports.deleteLanguage = (req, res) => {


     let { id } = req.params
     Language.findOneAndDelete({ _id: id })

          .then(language => {

               console.log('Delete Executed')
               // res.json(breaking)
               res.redirect('/see_languages');
               console.log('Deleted Successfully');
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error While Deleting!'
               })
          })


}





















///////  BREAKING NEWS  ///////////////  BREAKING NEWS  ///////////////  BREAKING NEWS  ///////////////  BREAKING NEWS  ////////

exports.showBreakingNews = (req, res) => {

     Breaking.find()

          //     res.render('show_breaking_news')

          .then(breaking => {
               res.render('show_breaking_news', { breaking })
          })

          .catch(e => {
               console.log(e);
               res.json({ message: 'Error Occured!' })
          })


}





exports.createBreakingPage = (req, res) => {

     Language.find()

          .then(language => {
               res.render('create_breaking_news', { language })
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })


     // res.render('create_breaking_news')

}



///////////// Create Breaking Portion /////////////////
exports.createBreakingNews = (req, res) => {

     let { language, date_of_post, slider_headline, ref_link, slider_details, slider_img} = req.body;

     console.log(req.body)

     let breaking = new Breaking({

          language,
          date_of_post,
          slider_headline,
          ref_link,
          slider_details,
          slider_img

     })

     if (req.file) {

          console.log(req.file);

     }
     // const imagePath = path.join(__dirname, '/public/images');
     // const fileUpload = new Resize(imagePath);

     // if (!req.file) {
     //      res.status(401).json({ error: 'Please provide an image' });
     // }
     // const filename = fileUpload.save(req.file);


     // return res.status(200).json({ name: filename });


     // if (!req.file) {
     //      res.status(401).json({ error: 'Please provide an image' });
     // }
     // const filename = fileUpload.save(req.files.buffer);
     // res.status(200).json({ name: filename });
     // return res.status(200).json({ name: filename });



     breaking.save()
          .then(c => {

               // if (!req.file) {
               //      res.status(401).json({ error: 'Please provide an image' });
               // }
               // const filename = fileUpload.save(req.files.buffer);
               // res.json({ name: filename });

               console.log('Data posted Successfully');
               res.redirect('/breaking_news');



               // res.render('show_breaking_news',{breaking})
               // res.json({
               //           message: 'Data Submitted Successfully'
               //      })
          })
          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Data Posting Error!'
               })
          })




     ///// IMAGE  area start here///////// ///// IMAGE  area start here///////// ///// IMAGE  area start here///////// ///// IMAGE  area start here///////// 


}









/////// FIND BREAKING NEWS ///////////// FIND BREAKING NEWS ///////////// FIND BREAKING NEWS ///////////// FIND BREAKING NEWS ///////////// FIND BREAKING NEWS //////

exports.findBreaking = (req, res) => {


     let id = req.params.id

     Breaking.findById(id)
          .then(breaking => {
               res.json(breaking)
               // console.log(contact);
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}










///// EDIT BREAKING NEWS /////////// EDIT BREAKING NEWS /////////// EDIT BREAKING NEWS /////////// EDIT BREAKING NEWS /////////// EDIT BREAKING NEWS //////
// exports.editBreaking = (req, res) => {

//      res.render('edit_breaking')

// }


exports.editBreaking = (req, res) => {

     let id = req.params.id

     Breaking.findById(id)
          .then(breaking => {

               res.render('edit_breaking', { breaking })
               // res.json(breaking);
               // console.log(contact);
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}







exports.saveEditedBreaking = (req, res) => {

     let { id } = req.params
     let { language, slider_headline, ref_link, slider_details, slider_img_name } = req.body

     Breaking.findOneAndUpdate({ _id: id },
          {
               $set: { language, slider_headline, ref_link, slider_details, slider_img_name }
          },
          { new: true }
     )

          .then(breaking => {
               res.redirect('/breaking_news');
               console.log('Updated Successfully');
          })
          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}











/////// DELETE BREAKING NEWS ////////// DELETE BREAKING NEWS ////////// DELETE BREAKING NEWS ////////// DELETE BREAKING NEWS ///

exports.deleteBreaking = (req, res) => {


     let { id } = req.params
     Breaking.findOneAndDelete({ _id: id })

          .then(breaking => {

               console.log('Delete Executed')
               // res.json(breaking)
               res.redirect('/breaking_news');
               console.log('Deleted Successfully');
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error While Deleting!'
               })
          })


}



/////// SHOW SINGLE BREAKING NEWS ///////// SHOW SINGLE BREAKING NEWS ///////// SHOW SINGLE BREAKING NEWS ///////// SHOW SINGLE BREAKING NEWS /////
exports.showSingleBreaking = (req, res) => {


     let id = req.params.id

     Breaking.findById(id)

          .then(breaking => {

               res.render('show_single_breaking', { breaking })
               // console.log(contact);
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}






















































/////////////     LATEST NEWS    ////////////////////////     LATEST NEWS    ////////////////////////     LATEST NEWS    ////////////////////////     LATEST NEWS    ////////////////////////     LATEST NEWS    ///////////

exports.showLatestNews = (req, res) => {

     Latest.find()

          //     res.render('show_breaking_news')

          .then(latest => {
               res.render('show_latest_news', { latest })
          })

          .catch(e => {
               console.log(e);
               res.json({ message: 'Error Occured!' })
          })



}



/////////    Rendering Create Page    ///////////////////
exports.createLatestPage = (req, res) => {

     Language.find()

          .then(language => {

               res.render('create_latest_news', { language })

          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })


}

////////////////////////////     Create LATEST News     /////////////////////
exports.createLatestNews = (req, res) => {

     let { language, date_of_post, latest_news_headline, ref_link, latest_news_details, latest_news_img_name } = req.body;

     console.log(req.body)

     let latest = new Latest({

          language,
          date_of_post,
          latest_news_headline,
          ref_link,
          latest_news_details,
          latest_news_img_name

     })

     latest.save()
          .then(c => {
               res.redirect('/latest_news')
          })
          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Data Posting Error!'
               })
          })

}


//// EDIT LATEST/////// EDIT LATEST/////// EDIT LATEST/////// EDIT LATEST/////// EDIT LATEST/////// EDIT LATEST///

exports.editLatest = (req, res) => {

     let id = req.params.id

     Latest.findById(id)
          .then(latest => {
               res.render('edit_latest', { latest })
               // res.json(breaking)
               // console.log(contact);
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}



/// SAVE EDITED LATEST////// SAVE EDITED LATEST////// SAVE EDITED LATEST////// SAVE EDITED LATEST////// SAVE EDITED LATEST////// SAVE EDITED LATEST///
exports.saveEditedLatest = (req, res) => {

     let { id } = req.params
     let { language, date_of_post, latest_news_headline, ref_link, latest_news_details, latest_news_img_name } = req.body

     Latest.findOneAndUpdate({ _id: id },
          {
               $set: { language, date_of_post, latest_news_headline, ref_link, latest_news_details, latest_news_img_name }
          },
          { new: true }
     )

          .then(latest => {
               res.redirect('/latest_news');
               console.log('Updated Successfully');
          })
          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}





/// DELETE Latest////// DELETE Latest////// DELETE Latest////// DELETE Latest////// DELETE Latest////// DELETE Latest////// DELETE Latest////// DELETE Latest///
exports.deleteLatest = (req, res) => {


     let { id } = req.params
     Latest.findOneAndDelete({ _id: id })

          .then(breaking => {

               console.log('Delete Executed')
               // res.json(breaking)
               res.redirect('/latest_news');
               console.log('Deleted Successfully');
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error While Deleting!'
               })
          })


}





//// Show Single Latest//////// Show Single Latest//////// Show Single Latest//////// Show Single Latest//////// Show Single Latest////
exports.showSingleLatest = (req, res) => {


     let id = req.params.id

     Latest.findById(id)

          .then(latest => {

               res.render('show_single_latest', { latest })
               // console.log(contact);
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}






























































///////  WEEKS NEWS  ///////////////  WEEKS NEWS  ///////////////  WEEKS NEWS  ///////////////  WEEKS NEWS  ///////////////  WEEKS NEWS  ///////////////  WEEKS NEWS  ////////

exports.showWeeksNews = (req, res) => {

     res.render('show_weeks_news')

}


/////////    Rendering Create WEEKS  Page    ///////////////////
exports.createWeeksPage = (req, res) => {

     res.render('create_weeks_news')

}


////////////////////////////     Create LATEST News     /////////////////////
exports.createWeeksNews = (req, res) => {

     let { language, date_of_post, weeks_news_headline, ref_link, weeks_news_details, weeks_news_img_name } = req.body;

     console.log(req.body)

     let weeks = new Weeks({

          language,
          date_of_post,
          weeks_news_headline,
          ref_link,
          weeks_news_details,
          weeks_news_img_name

     })

     weeks.save()
          .then(c => {
               res.json({
                    message: 'Data Submitted Succesfully'
               })
          })
          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Data Posting Error!'
               })
          })


}


















































/////////////  UPDATE   ADDRESS   AREA start //////////////////////////  UPDATE   ADDRESS   AREA start //////////////////////////  UPDATE   ADDRESS   AREA start /////////////

exports.getAllContact = (req, res) => {

     Contact.find()

          .then(contacts => {
               res.render('about', { contacts })
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })
}





///////////// RENDER CONTACT /////////////// RENDER CONTACT 
exports.editContact = (req, res) => {

     Address.find()

          .then(address => {
               res.render('edit_contact', { address })
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}







////////    SAVE Address  /////////////////    SAVE Address  ///////
exports.saveAddress = (req, res) => {

     let { road_address, region, country, phone, email } = req.body;

     console.log(req.body)

     let address = new Address({

          road_address, region, country, phone, email

     })

     address.save()
          .then(c => {
               Address.find()
                    .then(address => {
                         res.render('edit_contact', { address })
                    })

                    .catch(e => {
                         console.log(e);
                         res.json({
                              message: 'Data Submitted Successfully'
                         })
                    })



               // res.json({
               //           message: 'Data Submitted Succesfully'
               //      })
          })
          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Data Posting Error!'
               })
          })


}


/////////////  SAVE  ADDRESS   AREA END ////////////////////////  SAVE  ADDRESS   AREA END ////////////////////////  SAVE  ADDRESS   AREA END ////////////////////////  SAVE  ADDRESS   AREA END ////////////////////////  SAVE  ADDRESS   AREA END ///////////


exports.updateAddress = (req, res) => {

     // let {id} =req.params
     let { id } = req.params
     let { road_address, region, country, phone, email } = req.body

     Address.findOneAndUpdate({ _id: id },
          {
               $set: { road_address, region, country, phone, email }
          },
          { new: true }
     )

          .then(address => {
               res.redirect('edit_contact')
               console.log('Updated Successfully');
          })

          .catch(e => {
               console.log(e);
               res.json({
                    message: 'Error Occured!'
               })
          })

}



