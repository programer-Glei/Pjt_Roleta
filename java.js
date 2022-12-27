let dedree = 1800;
let clicks = 0;

$(document).ready(function(){
    $('#spin').click(function(){
        console.log("ggggggggggg")
        clicks++;
        let newDegree = dedree * clicks;
        let extraDegree = Math.floor(Math.random() * (360-1 + 1)) + 1;
        totalDegree = newDegree + extraDegree;

        $('#wheel .sec').each(function(){
            let t = $(this);
            let noY = 0;

            let c = 0;
            let n = 700;
            let interval = setInterval(function(){
                c++;
                if(c == n){
                    clearInterval(interval);
                }

                let aoY = t.offset().top;
                $('#txt').html(aoY);

                if(aoY < 23.89){
                    $('#spin').addClass('spin');
                    setTimeout(function(){
                        $("#spin").removeClass('spin');
                    }, 100);
                }
            }, 10);
            $('#inner-wheel').css({'transform':'rotate(' + totalDegree + 'deg)'});
            noY = t.offset().top;
        })
    })
})
