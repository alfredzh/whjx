module.exports = function(app,os,http,cluster){
	var numCPUs = os.cpus().length;
	var workers = {};
	if(cluster.isMaster){
		cluster.on('death',function(){
			delete workers[worker.pid];
			worker = cluster.fork();
			workers[worker.pid] = worker;
		});
		for( i = 0;i < numCPUs;i++){
			var worker = cluster.fork();
			workers[worker.pid] = worker;
		}
	}else{
		//create server
		http.createServer(app).listen(app.get('port'), function(){
			console.log('Express server listening on port ' + app.get('port'));
		});
	
	}
	process.on('SIGTERM',function(){
		for(pid in workers){
			process.kill(pid);
		}
		process.exit(0);
	});
};