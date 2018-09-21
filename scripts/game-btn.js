$(window).on("load", function (e) {
//the code for the sudoku is to big, so i use it only when it is necessary
//when the user click o the button to play, I laod the html AND the script of
//the sudoku from here
$("#start-sudoku").on("click", function () {
    $('#start-sudoku').hide();
    let sudokuContainer = `
<center>
    <form class="board">
        <input type="button" id="clear-btn" value="Clear">
        <input type="button" id="new-btn" value="New Problem">
        <input type="button" id="check-btn" value="Check">

        <div class="container">
            <div class="row">
                <div class="col-xs-9">
                    <div class="table-responsive">
                        <table align="center">
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc hzl d" id="c11" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c12" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c13" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c14" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c15" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c16" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c17" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c18" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c19" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc hzl d" id="c21" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c22" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c23" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c24" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c25" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c26" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c27" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c28" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c29" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc  d" id="c31" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c32" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    d" id="c33" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  " id="c34" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  " id="c35" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    " id="c36" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c37" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c38" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    d" id="c39" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc hzl" id="c41" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c42" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c43" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c44" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c45" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c46" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c47" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c48" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c49" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc hzl" id="c51" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c52" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c53" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c54" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c55" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c56" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c57" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c58" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c59" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc  " id="c61" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  " id="c62" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    " id="c63" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c64" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c65" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    d" id="c66" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  " id="c67" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  " id="c68" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    " id="c69" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc hzl d" id="c71" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c72" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c73" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c74" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c75" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c76" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c77" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c78" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c79" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc hzl d" id="c81" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c82" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c83" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c84" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl" id="c85" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl" id="c86" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c87" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc hzl d" id="c88" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c   hzl d" id="c89" maxlength="1"></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1-offset-3"><input class="c vtc  d" id="c91" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c92" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    d" id="c93" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  " id="c94" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  " id="c95" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    " id="c96" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c97" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c vtc  d" id="c98" maxlength="1"></td>
                                <td class="col-xs-1"><input class="c    d" id="c99" maxlength="1"></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col-xs-3">
                </div>
            </div>
        </div>

        <div class="container sudoku-solver">
            <div class="row">
                <div class="col-xs-9">
                    <div class="table-responsive" id="hints">
                        <table align="center">
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h11"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h12"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h13"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h14"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h15"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h16"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h17"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h18"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h19"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h21"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h22"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h23"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h24"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h25"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h26"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h27"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h28"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h29"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h31"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h32"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt d" id="h33"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h34"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h35"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt" id="h36"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h37"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h38"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt d" id="h39"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h41"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h42"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h43"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h44"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h45"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h46"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h47"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h48"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h49"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h51"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h52"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h53"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h54"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h55"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h56"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h57"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h58"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h59"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h61"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h62"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt" id="h63"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h64"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h65"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt d" id="h66"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h67"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h68"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt" id="h69"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h71"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h72"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h73"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h74"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h75"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h76"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h77"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h78"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h79"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h81"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h82"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h83"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h84"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl" id="h85"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl" id="h86"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h87"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc hzl d" id="h88"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt hzl d" id="h89"></textarea></td>
                            </tr>
                            <tr>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h91"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h92"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt d" id="h93"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h94"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc" id="h95"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt" id="h96"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h97"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt vtc d" id="h98"></textarea></td>
                                <td class="col-xs-1"><textarea class="hnt d" id="h99"></textarea></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col-xs-3">
                </div>
            </div>
        </div>
    </form>

</center>
<p id="message"></p>

            `;
        $("#sudoku").html(sudokuContainer);

        //I need to access the head object to inject the script
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'plugin/sudoku.js';
        $("head")[0].appendChild(script);
   });



});
