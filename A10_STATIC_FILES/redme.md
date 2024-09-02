1. static file means arrange stylesheets, images, javascripts
2. create a public folder and inside create another 3 folder named stylesheets, images, javascripts
3. reqire path and add this = app.use(express.static(path.join(__dirname, "public")))
4. and where you want to use add this kind of line = ../javascripts/homepage.js