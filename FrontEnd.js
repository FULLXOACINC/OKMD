
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

        p=$('#p').val();
        m=$('#m').val();
        q=$('#q').val();
        n=$('#n').val();

        sum=$('#sum').val();
        multi=$('#multi').val();
        equal=$('#equel').val();

        console.log(p+" "+m+" "+q+" "+n+" "+sum+" "+multi+" "+equal);

        A=createMatrix(p,m);
        B=createMatrix(m,q);
        G=createMatrix(m,p);
        H=createMatrix(q,m);
        C=createMatrix(p,q);
        executeAlgorithm();
        viewMatrix(A);
        viewMatrix(B);
        viewMatrix(G);
        viewMatrix(H);
        viewMatrix(C);

        $("#time").text("Время выполнения: "+time);
    });
});

