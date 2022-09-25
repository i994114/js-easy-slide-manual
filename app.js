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
            });
            $('.js-img-next').on('click', function() {
                that.imgNext();
            });
        }
    }
    
})();
slider.init();
