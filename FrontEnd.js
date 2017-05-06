
/**
 * Created by alex on 20.2.17.
 */
$(document).ready(function(){

    $("input").on('keyup', function(){
        $(this).val($(this).val().replace (/\D/, ''));
    });

    $('#start').click(function() {
        time=0;
        $('table').remove();
        $('div').remove();

        p=$('#p').val();
        m=$('#m').val();
        q=$('#q').val();
        n=$('#n').val();

        sum=$('#sum').val();
        multi=$('#multi').val();
        equal=$('#equel').val();

        // console.log(p+" "+m+" "+q+" "+n+" "+sum+" "+multi+" "+equal);
        A=createMatrix(p,m);
        B=createMatrix(m,q);
        G=createMatrix(m,p);
        H=createMatrix(q,m);
        C=createMatrix(p,q);

        executeAlgorithm();

        $(document.body).append('<div>A:</div>');
        viewMatrix(A);
        $(document.body).append('<div>B:</div>');
        viewMatrix(B);
        $(document.body).append('<div>G:</div>');
        viewMatrix(G);
        $(document.body).append('<div>H:</div>');
        viewMatrix(H);
        $(document.body).append('<div>C:</div>');
        viewMatrix(C);

        console.log(time);

        $("#time").text("Время выполнения: "+time);
    });
});

