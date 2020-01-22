$(document).ready(function() {

   $.ajax({
        url : "http://www.aoneinstitutesat.com/aoi/datapie.php",
        type : "GET",
        success : function (data){
            console.log(data);


             var score = {
                admprocess : [],
                TeamB : []
            };
			var matchname = {
                admprocess : [],
                TeamB : []
            };

            var len = data.length;

            for (var i = 0; i < 1; i++) {
                if (data[i].team == "admprocess") {
                    score.admprocess.push(data[i].score);
					matchname.admprocess.push(data[i].matchname);
                }
                else if(data[i].team == "TeamB") {
                    score.TeamB.push(data[i].score);
                }
            }
				
				var theleft = 100 - score.admprocess;


            console.log(score);

            var ctx = $("#pie-chartcanvas");

            var data = {
						
						labels : ["Studied", "To study"],
						datasets: [
							{
								data: [score.admprocess, theleft],
								backgroundColor: [
									"#17d12d",
									"#eee"
								],
								hoverBackgroundColor: [
									"#17d12d",
									"#eee"
								]
							}]
					};

            var options = {
                title : {
                    display : true,
                    position : "bottom",
                    text : score.admprocess+"%",
                    fontSize : 30,
                    fontColor : "#333"
                },
               
            }; 

            var chart = new Chart(ctx, {
            type : "pie",
            data : data,
            options : options
    });

        },
        error : function (data){
            console.log(data);
        }
   });
});

