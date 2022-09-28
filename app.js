


$(function() {
    //画面右端の「隠す」ボタンONでmodalを出す
    $('.js-header-button').on('click', function() {
        $('.js-header-button').hide();
        $('.js-show-modal-cover').show();
        $('.js-modal').show();
    });

    //modal内の「閉じる」ボタンonで現状に復帰する
    $('.js-btn-close').on('click', function() {
        $('.js-header-button').show();
        $('.js-show-modal-cover').hide();
        $('.js-modal').hide();
    });

});

//---------
//画像スライド
//---------
var slider = (function() {
    var currentImgNum = 1;  //現在選択されている画像
    var $imgParent = $('.img-parent');
    var totalImgNum = $('.img-child').length;   //トータルの画像数
    var imgWidth = $('.img-child').innerWidth();
    var totalImgWidth = imgWidth * totalImgNum;
    var SLIDELEN = 600; //横にスライドする長さ

    return {
        //前のスライドを表示
        imgPrev: function() {
            if (currentImgNum > 1) {
                $imgParent.animate({left: '+=' + imgWidth}, SLIDELEN);
                currentImgNum--;
            }
        },
        //次のスライドを表示
        imgNext: function() {
            if (currentImgNum < totalImgNum) {
                $imgParent.animate({left: '-=' + imgWidth}, SLIDELEN);
                currentImgNum++;
            }
        },
        //スライドに対するメッセージを表示
        msgPop: function() {
            var param = [
                'text1.txt',
                'text2.txt',
                'text3.txt',
                'text4.txt',
            ];
            $.ajax({
                type: 'post',
                url: param[(currentImgNum-1)],
                datatype: 'text'
            }).done(function(data) {
                console.log('success');
                console.log('スライド：' + (currentImgNum-1));
                $('.js-msg').html(data);
            }).fail(function(data) {
                console.log('fail!!');
            });
        },
        init: function() {
            $imgParent.attr('style', 'width: ' + totalImgWidth + 'px');

            var that = this;
            
            $('.js-img-prev').on('click', function() {
                that.imgPrev();
                that.msgPop();  
            });
            $('.js-img-next').on('click', function() {
                that.imgNext();
                that.msgPop();
            });
        }
    }
    
})();
slider.init();