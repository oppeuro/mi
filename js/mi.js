(function(window){
    function imgAutoPlay() {
        var upImg = document.getElementsByClassName("upImg")[0];
        var downImg = document.getElementsByClassName("downImg")[0];
        var autoPlayImg = document.getElementsByClassName('autoPlayImg')[0];
        var selectWhichOne = [];
        //选择标签数组
        for (let i = 0; i < document.getElementsByClassName('selectWhichOne')[0].children.length; i++){
            selectWhichOne.push(document.getElementsByClassName('selectWhichOne')[0].children[i]);
        }
        //var selectWhichOne = [...document.getElementsByClassName('selectWhichOne')[0].children];
        var imgArray = [];
        var timer = null;
        //图片数组
        for(let i = 0; i < 5; i++){
            imgArray.push(autoPlayImg.children[i]);
        }
        var imgFirst = autoPlayImg.children[0]; //头结点
        var imgLast = autoPlayImg.children[4];  //尾结点
        upImg.addEventListener("click",function(e) {
            if(timer){

            }else{
                //隐藏当前显示的图片
                var selectWhichOneShow = document.getElementsByClassName("selectWhichOneShow")[0];
                selectWhichOneShow.className = selectWhichOneShow.className.replace(/selectWhichOneShow/g,"");
                //记录当前是第几个图片
                var locate = 0;
                var showImg = document.getElementsByClassName('show')[0];
                showImg.className = "";
                //选出当前显示的是第几个
                for (var i = 0; i < 5; i++) {
                    if(imgArray[i] == showImg) {
                        locate = i;
                        break;
                    }
                }
                if(showImg == imgArray[0]) {
                    imgLast.className = 'show';
                    selectWhichOne[4].className += " selectWhichOneShow"
                }else{
                    selectWhichOne[i-1].className += " selectWhichOneShow"
                    showImg.previousElementSibling.className = 'show';
                }
                timer = setTimeout(function(){timer = null;},500);
            }
            e.preventDefault();
        })
        downImg.addEventListener("click",function (e) {
            if(timer){

            }else{
                //隐藏当前显示的图片
                var selectWhichOneShow = document.getElementsByClassName("selectWhichOneShow")[0];
                selectWhichOneShow.className = selectWhichOneShow.className.replace(/selectWhichOneShow/g,"");
                //记录当前是第几个图片
                var locate = 0;
                var showImg = document.getElementsByClassName('show')[0];
                showImg.className = "";
                //选出当前显示的是第几个
                for (var i = 0; i < 5; i++) {
                    if(imgArray[i] == showImg) {
                        locate = i;
                        break;
                    }
                }
                if(showImg == imgArray[4]) {
                    imgFirst.className = 'show';
                    selectWhichOne[0].className += " selectWhichOneShow"
                }else{
                    selectWhichOne[i+1].className += " selectWhichOneShow"
                    showImg.nextElementSibling.className = 'show';
                }
                timer = setTimeout(function(){timer = null;},500);
            }
            e.preventDefault();
        })
        selectWhichOne.forEach(function (value,index) {
            value.addEventListener('click',function () {
                var showImg = document.getElementsByClassName('show')[0];
                if(showImg == imgArray[index]){
                    return;
                }else{

                    if(timer){

                    }else{
                        //选择标签切换
                        var selectWhichOneShow = document.getElementsByClassName("selectWhichOneShow")[0];
                        selectWhichOneShow.className = selectWhichOneShow.className.replace(/selectWhichOneShow/g,"");
                        value.className += " selectWhichOneShow";
                        showImg.className = "";
                        imgArray[index].className = 'show';
                        timer = setTimeout(function(){timer = null;},500);
                    }
                }
            })
        })
    }
    function homeRihgtShow() {
        var homeRightUl = document.getElementsByClassName("rightMenu")[0];
        var homeRightLiArr = [];
        for (let i = 0; i < homeRightUl.children.length; i++) {
            homeRightLiArr.push(homeRightUl.children[i]);
        }
        homeRightLiArr.forEach(function (value,index) {
            value.addEventListener("mouseover",function () {
                let homeRightLiDiv = value.getElementsByTagName("div")[0];
                homeRightLiDiv.style.width = homeRightLiDiv.children.length*248+"px";
                homeRightLiDiv.className += " rightMenu-content-show";
            })
            value.addEventListener("mouseout",function () {
                let homeRightLiDiv = value.getElementsByTagName("div")[0];
                homeRightLiDiv.className = homeRightLiDiv.className.replace(/ rightMenu-content-show/g,"");
            })
        })
    }
    function starGoodsPlay() {
        var left = document.getElementsByClassName("star-select-left")[0];
        var right = document.getElementsByClassName("star-select-right")[0];
        var ulOfStarGoods = document.getElementById("starGoods");
        //右移
        left.addEventListener('click',function () {
            if(getComputedStyle(ulOfStarGoods).left == '-1240px'){
                ulOfStarGoods.style.left = '0px';
            }

        })
        //左移
        right.addEventListener('click',function () {
            if(getComputedStyle(ulOfStarGoods).left == '0px'){
                ulOfStarGoods.style.left = '-1240px';
            }
        })
    }
    function selectContent() {
        var select = document.getElementsByClassName("homeElecItems")[0];
        var liArr = [];
        for (let i = 0; i < select.children.length; i++) {
            liArr.push(select.children[i]);
        }
        liArr.forEach((function(value, index) {
           value.addEventListener(("mouseover"), function () {
               var content = document.getElementsByClassName("content");
               var showWhith = document.getElementsByClassName("homeElecItemsShow")[0];
               var showContent = document.getElementsByClassName("content-show")[0];

               showWhith.className = showWhith.className.replace(/homeElecItemsShow/g,"");
               value.className += " homeElecItemsShow";
               if(showContent == content[index]) {
                   return;
               }else{
                   showContent.className = "content";
                   content[index].className = "content content-show";
               }
           })
        }))
    }
    imgAutoPlay();
    homeRihgtShow();
    starGoodsPlay();
    selectContent();
})(window)
