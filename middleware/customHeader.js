const customHeader = (req, res, next)  =>  {
  try {
    const apiKey = req.headers.api_key;
    if(apiKey === 'Anxe-59'){
      next()
    }else{
      res.status(403)
      res.send({error: "API_KEY_NO_ES_CORRECTA"})
    }
  } catch (e) {
    res.status(403)
    res.send({error: "API_KEY_NO_ES_CORRECTA"})  
  }
}

module.exports = customHeader