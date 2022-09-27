


$(function() {
    //画面右端の「隠す」ボタンONでmodalを出す
    $('.js-header-button').on('click', function() {
        $('.js-header-button').hide();
        $('.js-show-modal-cover').show();
        $('.js-modal').show();
    });

    //modal内の「閉じる」ボタンonで現状に復帰する
    $('.js-btn-close').on('click', function() {
        console.log('faksjd');
        $('.js-header-button').show();
        $('.js-show-modal-cover').hide();
        $('.js-modal').hide();
    });

    /*
    $('.js-img-prev').on('click', function(e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'aaa.txt',
            datatype: 'text',
        }).done(function(data) {
            console.log(data);
            //$('.js-msg').html(data);
        });
    });
*/
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
        imgPrev: function() {
            if (currentImgNum > 1) {
                $imgParent.animate({left: '+=' + imgWidth}, SLIDELEN);
                currentImgNum--;
            }
        },
        imgNext: function() {
            if (currentImgNum < totalImgNum) {
                $imgParent.animate({left: '-=' + imgWidth}, SLIDELEN);
                currentImgNum++;
            }
        },
        init: function() {
            $imgParent.attr('style', 'width: ' + totalImgWidth + 'px');

            var that = this;

            $('.js-img-prev').on('click', function() {
                that.imgPrev();
/*
                $.ajax({
                    type: 'post',
                    url: 'index.html',
                }).done(function(data) {
                    console.log('success');
                    //$('.js-msg').html(data);
                }).fail(function(data) {
                    console.log('error');
                });
*/
            });
            $('.js-img-next').on('click', function() {
                that.imgNext();
            });
            
        }
    }
    
})();
slider.init();