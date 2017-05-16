
/**
 * Created by alex on 20.2.17.
 */
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

        A=createMatrix(1,15);
        B=createMatrix(15,1);
        G=createMatrix(15,1);
        H=createMatrix(1,15);
        C=createMatrix(1,1);

        executeAlgorithm();
        time_sk=time;
        time=0;
        var row=[];
        var rowEN=[];
        var kyN=[];
        var eN=[];
        for(var i=1;i<15;i++){
            row.push(i);
            rowEN.push(i);
            for(var j=1;j<10;j++){
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

                time_sk=time;
                m=j;
                time=0;
                r=0;
                n=i;

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
                // $("#time").text("Время выполнения: "+time+" Ранг: "+r);
            }
            kyN.push(row);
            eN.push(rowEN);
            rowEN=[];
            row=[];




        }
        row=[];
        var rowER=[];
        var kyR=[];
        var eR=[];
        for(var i=1;i<15;i++){
            row.push(i*4);
            rowER.push(i);
            for(var j=1;j<15;j++){
                m=i;
                time=0;
                r=0;
                n=j;

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

                time_sk=time;
                m=i;
                time=0;
                r=0;
                n=j;

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
                // $("#time").text("Время выполнения: "+time+" Ранг: "+r);
            }
            kyR.push(row);
            eR.push(rowER);
            rowER=[];
            row=[];




        }

        google.charts.load('current', {'packages':['line']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var options = {
                    title: 'Company Performance',
                    curveType: 'function',
                    legend: { position: 'bottom' }
                };
            var data = google.visualization.arrayToDataTable([
                ['n', '4', '8', '12', '16', '20', '24', '28', '32', '36'],
                kyN[0],
                kyN[1],
                kyN[2],
                kyN[3],
                kyN[4],
                kyN[5],
                kyN[6],
                kyN[7],
                kyN[8],
                kyN[9],
                kyN[10],
                kyN[11],
                kyN[12],
                kyN[13]
            ]);


            var chart = new google.charts.Line(document.getElementById('kyN'));

            chart.draw(data, google.charts.Line.convertOptions(options));

            data = google.visualization.arrayToDataTable([
                ['n', '4', '8', '12', '16', '20', '24', '28', '32', '36'],
                eN[0],
                eN[1],
                eN[2],
                eN[3],
                eN[4],
                eN[5],
                eN[6],
                eN[7],
                eN[8],
                eN[9],
                eN[10],
                eN[11],
                eN[12],
                eN[13]
            ]);

            chart = new google.charts.Line(document.getElementById('eN'));

            chart.draw(data, google.charts.Line.convertOptions(options));

            data = google.visualization.arrayToDataTable([
                ['n', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
                kyR[0],
                kyR[1],
                kyR[2],
                kyR[3],
                kyR[4],
                kyR[5],
                kyR[6],
                kyR[7],
                kyR[8],
                kyR[9],
                kyR[10],
                kyR[11],
                kyR[12],
                kyR[13]
            ]);

            chart = new google.charts.Line(document.getElementById('kyR'));

            chart.draw(data, google.charts.Line.convertOptions(options));

            data = google.visualization.arrayToDataTable([
                ['n', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
                eR[0],
                eR[1],
                eR[2],
                eR[3],
                eR[4],
                eR[5],
                eR[6],
                eR[7],
                eR[8],
                eR[9],
                eR[10],
                eR[11],
                eR[12],
                eR[13]
            ]);

            chart = new google.charts.Line(document.getElementById('eR'));

            chart.draw(data, google.charts.Line.convertOptions(options));
        }


    });

});

