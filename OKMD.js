/**
 * Created by alex on 24.4.17.
 */
var p=1,m=1,q=1;

var A=[],B=[],G=[],H=[];
var C=[];

var r=0;

var sum=1;
var multi=1;
var equal=1;
var time=0;
var n=1;

var iMax=0;
var jMax=0;

var Lsum=0;
var Lavg=0;


function createMatrix(row,colom) {
    var matrix=[];
    for(var i=0; i<row; i++) {
        matrix[i] = new Array(colom);
    }
    for(var i=0;i<row;i++){
        for(var j=0;j<colom;j++)
            matrix[i][j]=(Math.random()*2-1).toFixed(1);
    }
    return matrix;
}

function viewMatrix(tableData) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function(rowData) {
            var row = document.createElement('tr');

            rowData.forEach(function(cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        document.body.appendChild(table);

}

function executeAlgorithm() {
    for(var i=0;i<C.length;i++){
        for(var j=0;j<C[i].length;j++){
            if(ifPart(i,j))
                C[i][j]=thenPart(i,j).toFixed(4);
            else
                C[i][j]=elsePart(i,j).toFixed(4);

        }

    }

}


function ifPart(i, j) {
    var answer=false;
    for(var x=0;x<m;x++)
        if(G[x][i]<H[j][x]){
            answer=true;
        }

    Lsum=Math.ceil(m/n)*equal+parseInt(Lsum);
    Lavg=Math.ceil(m/n)*2*m*equal+parseInt(Lavg);
    // console.log(Lsum+" "+Lavg);

    time+=Math.ceil(m/n)*equal;
    // console.log(answer);
    return answer;
}
function thenPart(i, j) {
    var res = 1;

    for(var k=0;k<m;k++)
        res*=A[i][k]*B[k][j];

    // Lsum=Math.ceil(m/n)*multi+parseInt(Lsum);
    // Lsum=parseInt(multi)+parseInt(Lsum);
    // if(m>2)
    //     Lsum=Math.ceil((m-2)/n)*multi+parseInt(Lsum);
    //
    // if(n>m){
    //     if(m>1)
    //         Lavg=(Lsum-((m-2)/n/((m)/n)))*4*q*p*m;
    //     else
    //         Lavg=Lsum*4*q*p*m;
    // }
    // else{
    //     Lavg=Math.ceil(m/n)*2*m*multi+parseInt(Lavg);
    //     Lavg=parseInt(multi*2*m)+parseInt(Lavg);
    //     if(m>2)
    //         Lavg=Math.ceil((m-2)/n)*2*m*multi+parseInt(Lavg);
    //     // if((m-2)%n!=0)
    // }
    //
    // if(m/n>3)
    //     Lavg=parseInt(Lavg)-parseInt((m)/n*2*m*multi);

    Lsum=Math.ceil(m/n)*multi+parseInt(Lsum);
    Lsum=Math.ceil(m-1/n)*multi+parseInt(Lsum);
    Lsum=Math.ceil((m)/n)*multi+parseInt(Lsum);

    if(n>m){
        if(m>1)
            Lavg=(Lsum-((m-2)/n/((m)/n)))*4*q*p*m;
        else
            Lavg=Lsum*4*q*p*m;
    }
    else {
        Lavg = Math.ceil(m / n) * 2 * m * multi + parseInt(Lavg);
        Lavg = parseInt(multi * 2 * m) + parseInt(Lavg);
        if (m > 2)
            Lavg = Math.ceil((m - 2) / n) * 2 * m * multi + parseInt(Lavg);
    }

    time+=Math.ceil(m/n)*multi;

    time+=Math.ceil((m-1)/n)*multi;

    return res;

}
function elsePart(i, j) {
    var res = 0;

    for(var k=0;k<m;k++)
        res+=A[i][k]*B[k][j];

    // Lsum=Math.ceil(m/n)*multi+parseInt(Lsum);
    // Lsum=parseInt(sum)+parseInt(Lsum);
    // if(m>2)
    //     Lsum=Math.ceil((m-2)/n)*sum+parseInt(Lsum);
    //
    // if(n>m){
    //     if(m>1)
    //         Lavg=(Lsum-((m-2)/n/((m)/n)))*4*q*p*m;
    //     else
    //         Lavg=Lsum*4*q*p*m;
    // }
    // else{
    //     Lavg=Math.ceil(m/n)*2*m*multi+parseInt(Lavg);
    //     Lavg=parseInt(sum*2*m)+parseInt(Lavg);
    //     if(m>1)
    //         Lavg=Math.ceil((m-2)/n)*2*m*sum+parseInt(Lavg);
    // }
    //     Lavg=parseInt(Lavg)-parseInt((m)/n*2*m*sum);

    Lsum=Math.ceil(m/n)*multi+parseInt(Lsum);
    Lsum=Math.ceil(m-1/n)*sum+parseInt(Lsum);
    Lsum=Math.ceil((m)/n)*sum+parseInt(Lsum);

    if(n>m){
            if(m>1)
                Lavg=(Lsum-((m-2)/n/((m)/n)))*4*q*p*m;
            else
                Lavg=Lsum*4*q*p*m;
        }
        else {
        Lavg = Math.ceil(m / n) * 2 * m * multi + parseInt(Lavg);
        Lavg = parseInt(sum * 2 * m) + parseInt(Lavg);
        if (m > 2)
            Lavg = Math.ceil((m - 2) / n) * 2 * m * sum + parseInt(Lavg);
    }
    time+=Math.ceil(m/n)*multi;
    time+=Math.ceil((m-1)/n)*sum;

    return res;

}