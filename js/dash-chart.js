             
            var lineChartData = {
             //labels: ["0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"],
              labels: ["23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
              
              datasets : [
                {
                  label: "My First dataset",
                  fillColor : "#b2dfdb",
                  strokeColor : "",
                  pointColor : "#b0bec5",
                  pointStrokeColor : "#fff",
                  pointHighlightFill : "#fff",
                  pointHighlightStroke : "rgba(181,181,181,1)",
                  //data: ["65", "59", "80", "81", "56", "55", "40"]
                  data: [28, 30, 34, 38, 43, 47, 52,28, 30, 34, 38, 43, 47, 52]                  }
             
              ]

            }
            $(function(){
            var ctx = document.getElementById("period").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, {
              responsive: true
              
            });
          });
                     

                 var data = {
             //labels: ["0h", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"],
              labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
              
              datasets : [
                {
                  label: "My First dataset",
                  fillColor : "#7f8c8d",
                  strokeColor : "rgba(255,255,255,1)",
                  pointColor : "rgba(255,255,255,1)",
                  pointStrokeColor : "#fff",
                  pointHighlightFill : "#fff",
                  pointHighlightStroke : "rgba(181,181,181,1)",
                  //data: ["65", "59", "80", "81", "56", "55", "40"]
                  data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                  }
             
              ]

            }

              $(function(){
              var ctx = document.getElementById("top20").getContext("2d");
              window.myBar = new Chart(ctx).Bar(data, {
                responsive: true
                
              });

            });


            $(function() {

                var dataMap = {"BS":1.0e-9,"AD":1.0e-9,"AE":27,"AF":1.0e-9,"AG":1.0e-9,"AI":1.0e-9,"AL":38,"AM":9,"AN":1.0e-9,"AO":1.0e-9,"AR":105,"AS":1.0e-9,"AT":38,"AU":82,"AW":1.0e-9,"AZ":108,"BA":7,"BD":34,"BE":18,"BF":1.0e-9,"BG":61,"BH":2,"BI":1.0e-9,"BJ":1.0e-9,"BM":1.0e-9,"BN":2,"BO":13,"BR":584,"BT":1.0e-9,"BW":1.0e-9,"BY":11,"BZ":1.0e-9,"CA":219,"CD":1,"CF":1.0e-9};

                var data1 = [];
                var i = 0;
                for (var prop in dataMap) {
                    country_obj = {
                        code: prop,
                 //     flag: 'am',
                 //     name: 'Armenia',
                        value: dataMap[prop]
                    }
                    data1[i] = country_obj;
                    i ++;
                }

                $.each(data1, function () {
                    this.flag = this.code.replace('UK', 'GB').toLowerCase();
                });

              // Initiate the chart
                 $('#wgt-container').highcharts('Map', {

                    title: {
                        text: 'Visits by countries'
                    },

                    legend: {
                        title: {
                            text: 'Country Visits',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                            }
                        }
                    },

                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },

                    tooltip: {
                        backgroundColor: 'none',
                        borderWidth: 0,
                        shadow: false,
                        useHTML: true,
                        padding: 0,
                        pointFormat: '<span class="f32"><span class="flag {point.flag}"></span></span>'
                            + ' {point.name}: <b>{point.value}</b> Visits',
                        positioner: function () {
                            return { x: 0, y: 250 };
                        }
                    },

                    colorAxis: {
                        min: 1,
                        max: 9999999,
                        type: 'logarithmic'
                    },

                    series : [{
                        data : data1,
                        mapData: Highcharts.maps['custom/world'],
                        joinBy: ['iso-a2', 'code'],
                        name: 'Visits',
                        states: {
                            hover: {
                                color: '#BADA55'
                            }
                        }
                    }]
                 });
                 $('tspan').hide();
            });
       
        //end of world map
        
        // browers charts
              $(function() {
            var browerArr = [5881]
            browerArr[0]  = 5881;
            browerArr[1]  = 1167;
            //if (browerArr[1]==0) {browerArr[1]=1};
            browerArr[2]  = 64;
            browerArr[3]  = 1343;
            browerArr[4]  = 4741;
            
            var sum       =  _.reduce(browerArr, function(memo, num){ return memo + num; }, 0);
            //console.log(sum);
            sum /= 100;
            if(!sum) {
              sum = 1;
            }
            
            var browers = [
                {
                    value: 5881 / sum,
                    label: 'Chrome (chrome)',
                    color: '#1abc9c'
                },
                {
                    value: 1167 / sum,
                    label: 'Firefox (firefox)',
                    color: '#d35400'
                },
                {
                    value: 64 / sum,
                    label: 'Opera (opera)',
                    color: '#f1c40f'
                },
                {
                    value: 1343 / sum,
                    label: 'Safari (safari)',
                    color: '#3498db'
                },
                {
                    value: 4741 / sum,
                    label: 'IE (ie)',
                    color: '#8e44ad'
                },
            ];



            var donutSize = 230;
            var donut = $('#svg').donut({
                donutSize: donutSize,
                center: {
                    x: donutSize / 2,
                    y: donutSize / 2
                },
                radius: donutSize * 0.3 / 1,
                data: browers
            });
            donut.startShowAnimation(function(){
              $('button').attr('disabled', false);
            });

       var resolutions = jQuery.parseJSON('[{"value":37.5,"label":"1366x768(2358)","color":"#8faeff"},{"value":23.680025445293,"label":"1024x768 (1489)","color":"#9999ff"},{"value":18.050254452926,"label":"1920x1080 (1135)","color":"#c4a7ff"},{"value":11.195928753181,"label":"1364x768 (704)","color":"#c799ff"},{"value":9.5737913486005,"label":"1720x996 (602)","color":"#9bc8ff"}]');   
         
         if (resolutions.length===0) {resolutions=[{"value":62.2710622711,"label":"No Data (1)","color":"#8faeff"},{"value":62.2710622711,"label":"No Data (2)","color":"#8faeff"}]; }
       //else if (resolutions.length<2) {resolutions=[{"value":62.2710622711,"label":"No Data (1)","color":"#8faeff"}]; }
       var donutSize = 150;
       var donut = $('#donut').donut({
           donutSize: donutSize,
           center: {
               x: donutSize / 2,
               y: donutSize / 2
           },
           radius: donutSize * 0.2,
           data: resolutions
       });
         donut.startShowAnimation(function(){
       $('button').attr('disabled', false);
   });

          });
        