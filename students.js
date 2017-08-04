exports.findAll = function(req, res){
  res.send([{
   "student1" : {
      "name" : "Mahesh",
	  "ID" : 501,
	  "Department" : "Computers"
	  
   },
   "student2" : {
      "name" : "Suresh",
	  "ID" : "502",
	  "Department" : "Electronics"
	  
   },
   "student3" : {
      "name" : "Ramesh",
	  "ID" : "503",
	  "Department" : "Mechanical"
   }
}]);
};
