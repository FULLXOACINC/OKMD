
/**
 * Created by alex on 20.2.17.
 */
var DR=[];
var DN=[];
$(document).ready(function(){

    $("input").on('keyup', function(){
        $(this).val($(this).val().replace (/\D/, ''));
    });

    $('#start').click(function() {
        var res=[];
        var time_sk=0;

        p=$('#p').val();
        m=$('#m').val();
        q=$('#q').val();
        n=1;
        sum=$('#sum').val();
        multi=$('#multi').val();
        equal=$('#equel').val();

        A=createMatrix(1,60);
        B=createMatrix(60,1);
        G=createMatrix(60,1);
        H=createMatrix(1,60);
        C=createMatrix(1,1);

        // executeAlgorithm();
        time_sk=time;
        time=0;
        var row=[];
        var rowEN=[];
        var rowDN=[];
        var kyN=[];
        var eN=[];

        for(var i=1;i<60;i++){
            row.push(i);
            rowEN.push(i);
            rowDN.push(i);
            for(var j=1;j<15;j++){
                Lsum=0;
                Lavg=0;
                m=j;
                time=0;
                r=0;
                n=i;

                //
                // $('table').remove();
                // $('div').remove();
                // p=$('#p').val();
                // m=$('#m').val();
                // q=$('#q').val();
                // n=$('#n').val();
                // sum=$('#sum').val();
                // multi=$('#multi').val();
                // equal=$('#equel').val();
                // console.log(p+" "+m+" "+q+" "+n+" "+sum+" "+multi+" "+equal);

                n=1;


                // A=createMatrix(p,m);
                // B=createMatrix(m,q);
                // G=createMatrix(m,p);
                // H=createMatrix(q,m);
                // C=createMatrix(p,q);

                executeAlgorithm();
                // if(i==2&&j==4){
                //     console.log(Lsum);
                //     console.log(Lavg/(2*m*p*q));
                // }

                time_sk=time;
                m=j;
                time=0;
                r=0;
                n=i;
                Lsum=0;
                Lavg=0;
                // A=createMatrix(p,m);
                // B=createMatrix(m,q);
                // G=createMatrix(m,p);
                // H=createMatrix(q,m);
                // C=createMatrix(p,q);

                executeAlgorithm();
                //
                //
                // $(document.body).append('<div>A:</div>');
                // viewMatrix(A);
                // $(document.body).append('<div>B:</div>');
                // viewMatrix(B);
                // $(document.body).append('<div>G:</div>');
                // viewMatrix(G);
                // $(document.body).append('<div>H:</div>');
                // viewMatrix(H);
                // $(document.body).append('<div>C:</div>');
                // viewMatrix(C);
                //
                // console.log("r "+(4*m*p*q));
                // console.log("time_sk: "+time_sk);
                // console.log("time: "+time);
                // console.log("ky: "+(time_sk/time));
                // console.log("");


                row.push((time_sk/time));
                rowEN.push((time_sk/time)/n);
                rowDN.push(Lsum*(4*m*p*q)/Lavg/n+1);

            }
            kyN.push(row);
            DN.push(rowDN);
            eN.push(rowEN);
            rowEN=[];
            row=[];
            rowDN=[];




        }
        row=[];
        var rowER=[];
        var rowDR=[];
        var kyR=[];
        var eR=[];

        for(var i=1;i<60;i++){
            row.push(i*4);
            rowER.push(i*4);
            rowDR.push(i*4);
            for(var j=1;j<10;j++){
                m=i;
                time=0;
                r=0;
                n=j;
                Lsum=0;

                //
                // $('table').remove();
                // $('div').remove();
                // p=$('#p').val();
                // m=$('#m').val();
                // q=$('#q').val();
                // n=$('#n').val();
                // sum=$('#sum').val();
                // multi=$('#multi').val();
                // equal=$('#equel').val();
                // console.log(p+" "+m+" "+q+" "+n+" "+sum+" "+multi+" "+equal);

                n=1;


                // A=createMatrix(p,m);
                // B=createMatrix(m,q);
                // G=createMatrix(m,p);
                // H=createMatrix(q,m);
                // C=createMatrix(p,q);

                executeAlgorithm();

                Lsum=0;
                time_sk=time;
                m=i;
                time=0;
                r=0;
                n=j;
                Lavg=0;

                // A=createMatrix(p,m);
                // B=createMatrix(m,q);
                // G=createMatrix(m,p);
                // H=createMatrix(q,m);
                // C=createMatrix(p,q);

                executeAlgorithm();
                //
                //
                // $(document.body).append('<div>A:</div>');
                // viewMatrix(A);
                // $(document.body).append('<div>B:</div>');
                // viewMatrix(B);
                // $(document.body).append('<div>G:</div>');
                // viewMatrix(G);
                // $(document.body).append('<div>H:</div>');
                // viewMatrix(H);
                // $(document.body).append('<div>C:</div>');
                // viewMatrix(C);
                //
                // console.log("r "+(4*m*p*q));
                // console.log("time_sk: "+time_sk);
                // console.log("time: "+time);
                // console.log("ky: "+(time_sk/time));
                // console.log("");


                row.push((time_sk/time));
                rowER.push((time_sk/time)/n);
                rowDR.push(Lsum*(2*m*p*q/5)/Lavg*i/j+1);
                if(i==2&&j==2)
                    console.log(Lsum+"*"+(2*m*p*q)+" "+Lavg);
                // $("#time").text("Время выполнения: "+time+" Ранг: "+r);
            }
            kyR.push(row);
            eR.push(rowER);
            DR.push(rowDR);
            rowER=[];
            row=[];
            rowDR=[];




        }

        // for(var i=1;i<3;i++){
        //     rowDR.push(i*4);
        //     for(var j=1;j<4;j++){
        //         m=i;
        //         time=0;
        //         r=0;
        //         n=j;
        //         Lsum=0;
        //
        //         //
        //         // $('table').remove();
        //         // $('div').remove();
        //         // p=$('#p').val();
        //         // m=$('#m').val();
        //         // q=$('#q').val();
        //         // n=$('#n').val();
        //         // sum=$('#sum').val();
        //         // multi=$('#multi').val();
        //         // equal=$('#equel').val();
        //         // console.log(p+" "+m+" "+q+" "+n+" "+sum+" "+multi+" "+equal);
        //
        //         n=1;
        //
        //
        //         // A=createMatrix(p,m);
        //         // B=createMatrix(m,q);
        //         // G=createMatrix(m,p);
        //         // H=createMatrix(q,m);
        //         // C=createMatrix(p,q);
        //
        //         // executeAlgorithm();
        //
        //         Lsum=0;
        //         time_sk=time;
        //         m=i;
        //         time=0;
        //         r=0;
        //         n=j;
        //         Lavg=0;
        //
        //         // A=createMatrix(p,m);
        //         // B=createMatrix(m,q);
        //         // G=createMatrix(m,p);
        //         // H=createMatrix(q,m);
        //         // C=createMatrix(p,q);
        //
        //         executeAlgorithm();
        //         //
        //         //
        //         // $(document.body).append('<div>A:</div>');
        //         // viewMatrix(A);
        //         // $(document.body).append('<div>B:</div>');
        //         // viewMatrix(B);
        //         // $(document.body).append('<div>G:</div>');
        //         // viewMatrix(G);
        //         // $(document.body).append('<div>H:</div>');
        //         // viewMatrix(H);
        //         // $(document.body).append('<div>C:</div>');
        //         // viewMatrix(C);
        //         //
        //         // console.log("r "+(4*m*p*q));
        //         // console.log("time_sk: "+time_sk);
        //         // console.log("time: "+time);
        //         // console.log("ky: "+(time_sk/time));
        //         // console.log("");
        //
        //         rowDR.push(Lsum*(2*m*p*q)/Lavg);
        //         console.log(Lsum+" / "+Lavg+" / "+(2*m*p*q));
        //     }
        //     DR.push(rowDR);
        //     rowDR=[];
        //
        //
        //
        //
        // }
        gl();
        google.charts.load('current', {'packages':['line']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var options1 = {
                    title: 'Ky(n,r)',
                    curveType: 'function',
                    legend: { position: 'bottom' }
                };
            var options2 = {
                title: 'e(n,r)',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
            var options3 = {
                title: 'D(n,r)',
                curveType: 'function',
                legend: { position: 'bottom' }
            };
            //
            // var data = google.visualization.arrayToDataTable([
            //     ['n', 'r=4', 'r=8', 'r=12', 'r=16', 'r=20', 'r=24', 'r=28', 'r=32', 'r=36'],
            //     kyN[0],
            //     kyN[1],
            //     kyN[2],
            //     kyN[3],
            //     kyN[4],
            //     kyN[5],
            //     kyN[6],
            //     kyN[7],
            //     kyN[8],
            //     kyN[9],
            //     kyN[10]
            // ]);
            //
            //
            // var chart = new google.charts.Line(document.getElementById('kyN'));
            //
            // chart.draw(data, google.charts.Line.convertOptions(options1));
            //
            // data = google.visualization.arrayToDataTable([
            //     ['n', 'r=4', 'r=8', 'r=12', 'r=16', 'r=20', 'r=24', 'r=28', 'r=32', 'r=36'],
            //     eN[0],
            //     eN[1],
            //     eN[2],
            //     eN[3],
            //     eN[4],
            //     eN[5],
            //     eN[6],
            //     eN[7],
            //     eN[8],
            //     eN[9],
            //     eN[10]
            // ]);
            //
            // chart = new google.charts.Line(document.getElementById('eN'));
            //
            // chart.draw(data, google.charts.Line.convertOptions(options2));
            //
            // data = google.visualization.arrayToDataTable([
            //     ['r', 'n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9'],
            //     kyR[0],
            //     kyR[1],
            //     kyR[2],
            //     kyR[3],
            //     kyR[4],
            //     kyR[5],
            //     kyR[6],
            //     kyR[7],
            //     kyR[8],
            //     kyR[9],
            //     kyR[10],
            //     kyR[11],
            //     kyR[12],
            //     kyR[13],
            //     kyR[14],
            //     kyR[15],
            //     kyR[16],
            //     kyR[17],
            //     kyR[18],
            //     kyR[19],
            //     kyR[20],
            //     kyR[21],
            //     kyR[22],
            //     kyR[23],
            //     kyR[24],
            //     kyR[25],
            //     kyR[26],
            //     kyR[27],
            //     kyR[28],
            //     kyR[29],
            //     kyR[30],
            //     kyR[31],
            //     kyR[32],
            //     kyR[33],
            //     kyR[34],
            //     kyR[35],
            //     kyR[36],
            //     kyR[37],
            //     kyR[38],
            //     kyR[39],
            //     kyR[40],
            //     kyR[41],
            //     kyR[42],
            //     kyR[43],
            //     kyR[44],
            //     kyR[45],
            //     kyR[46],
            //     kyR[47],
            //     kyR[48],
            //     kyR[49],
            //     kyR[50],
            //     kyR[51],
            //     kyR[52],
            //     kyR[53],
            //     kyR[54],
            //     kyR[55],
            //     kyR[56],
            //     kyR[57],
            //     kyR[58]
            //
            // ]);
            //
            // chart = new google.charts.Line(document.getElementById('kyR'));
            //
            // chart.draw(data, google.charts.Line.convertOptions(options1));
            //
            // data = google.visualization.arrayToDataTable([
            //     ['r', 'n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9'],
            //     eR[0],
            //     eR[1],
            //     eR[2],
            //     eR[3],
            //     eR[4],
            //     eR[5],
            //     eR[6],
            //     eR[7],
            //     eR[8],
            //     eR[9],
            //     eR[10],
            //     eR[11],
            //     eR[12],
            //     eR[13],
            //     eR[14],
            //     eR[15],
            //     eR[16],
            //     eR[17],
            //     eR[18],
            //     eR[19],
            //     eR[20],
            //     eR[21],
            //     eR[22],
            //     eR[23],
            //     eR[24],
            //     eR[25],
            //     eR[26],
            //     eR[27],
            //     eR[28],
            //     eR[29],
            //     eR[30],
            //     eR[31],
            //     eR[32],
            //     eR[33],
            //     eR[34],
            //     eR[35],
            //     eR[36],
            //     eR[37],
            //     eR[38],
            //     eR[39],
            //     eR[40],
            //     eR[41],
            //     eR[42],
            //     eR[43],
            //     eR[44],
            //     eR[45],
            //     eR[46],
            //     eR[47],
            //     eR[48],
            //     eR[49],
            //     eR[50],
            //     eR[51],
            //     eR[52],
            //     eR[53],
            //     eR[54],
            //     eR[55],
            //     eR[56],
            //     eR[57],
            //     eR[58]
            // ]);
            //
            // chart = new google.charts.Line(document.getElementById('eR'));
            //
            // chart.draw(data, google.charts.Line.convertOptions(options2));
            //
            //
            var data = google.visualization.arrayToDataTable([
                ['n', 'r=4', 'r=8', 'r=12', 'r=16', 'r=20'],
                DN[0],
                DN[1],
                DN[2],
                DN[3],
                DN[4]
            ]);

            var chart = new google.charts.Line(document.getElementById('DN'));

            chart.draw(data, google.charts.Line.convertOptions(options3));

            data = google.visualization.arrayToDataTable([
                ['r', 'n=1', 'n=2', 'n=3', 'n=4', 'n=5'],
                DR[0],
                DR[1],
                DR[2],
                DR[3],
                DR[4]
            ]);

            chart = new google.charts.Line(document.getElementById('DR'));

            chart.draw(data, google.charts.Line.convertOptions(options3));
        }


    });

});


















































function gl() {
    DN=[[4,2, 3.11,4,5.63,5.4],
        [8,2,2,2.44 , 2.8,3.05],
        [12,2,2   ,   2.2,2.8,2.8],
        [16,2,2   ,   2.2,2,2.3],
        [20,2,2   , 2.2,2,2.3]
    ];
    DR=[[1,2,2,2,2,2],
        [2,3.11,2,2,2,2],
        [3,4,2.44,2.2,2.2,2.2],
        [4,5.63,2.8,2.8,2,2],
        [5,5.4,3.05,2.8,2.3,2.3]
        ];
}