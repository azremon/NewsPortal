const router = require('express').Router()

const upload = require('./uploadMiddleware');

const Resize = require('./Resize');

const {

    getAllContact,
    findContact,
    createContact,
    updateContact,
    deleteContact,

    showAdminView,
    editContact,
    showBreakingNews,
    showLatestNews,
    showWeeksNews,

    showSingleBreaking,

    createBreakingPage,
    createBreakingNews,
    editBreaking,
    saveEditedBreaking,  
    deleteBreaking,


    createLatestPage,
    createLatestNews,
    showSingleLatest,
    editLatest,
    saveEditedLatest,
    deleteLatest,




    saveAddress,
    updateAddress,

    createWeeksPage,
    createWeeksNews,
    seeLanguages,
    insertLanguages,
    deleteLanguage,



    findBreaking,



} = require('./controller')





router.get('/admin_home', showAdminView)
router.get('/breaking_news', showBreakingNews)
router.get('/latest_news', showLatestNews)
router.get('/weeks_news', showWeeksNews)
router.get('/edit_contact', editContact)
router.get('/see_languages', seeLanguages)



//// Insert Language Routes /////////// Insert Language Routes ///////// Insert Language Routes ///////// Insert Language Routes ///////// Insert Language Routes /////
router.post('/insert_lang', insertLanguages)
router.get('/delete_language/:id', deleteLanguage)



/////////////////// Create Breaking Routes //////////// Create Breaking Routes ////////////// Create Breaking Routes ////////////// Create Breaking Routes ////////////////
router.get('/create_breaking_news', createBreakingPage)
router.post('/create_single_breaking', upload.single('slider_img'), createBreakingNews)

/////////////////// DELETE Breaking Routes ////////////////
router.get('/delete_breaking/:id', deleteBreaking)

//////////////////  EDIT  Breaking  ////////////////////////
router.get('/edit_breaking/:id', editBreaking)
router.post('/update_single_breaking/:id', saveEditedBreaking)

////////////////// SHOW Single Breaking  ////////////////////////
router.get('/single_breaking/:id', showSingleBreaking)




/////////////////// Create Latest Routes /////////////////////////////////// Create Latest Routes /////////////////////////////////// Create Latest Routes /////////////////////////////////// Create Latest Routes ////////////////
router.get('/create_latest_news', createLatestPage)
router.post('/create_single_latest', createLatestNews)

/////////////////// Create Latest  Routes ////////////////
router.get('/create_latest_news', createLatestPage)
router.post('/create_single_latest', upload.single('slider_img_name'), createLatestNews)

/////////////////// DELETE Latest  Routes ////////////////
router.get('/delete_latest/:id', deleteLatest)

//////////////////  EDIT  Latest   ////////////////////////
router.get('/edit_latest/:id', editLatest)
router.post('/update_single_latest_news/:id', saveEditedLatest)

////////////////// SHOW Single Latest   ////////////////////////
router.get('/single_latest/:id', showSingleLatest)






/////////////////// Create Weeks Routes ////////////////
router.get('/create_weeks_news', createWeeksPage)
router.post('/create_single_weeks', createWeeksNews)






/////////////////// Save Address Routes ////////////////
router.get('/save_address', saveAddress)
router.post('/save_address', saveAddress)

/////////////////// Update Address Routes ////////////////
router.get('/update_address', updateAddress)
router.post('/update_address/:id', updateAddress)




// router.get('/home', getAllContact)
// router.get('/:id', findContact)
// router.post('/', createContact)
// router.put('/:id', updateContact)
// router.delete('/:id', deleteContact)





module.exports = router