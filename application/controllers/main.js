module.exports.views = {
	home: function(req,res){
		res.render('home/default',{message:'This is simple "Home Page"'});
	}
};