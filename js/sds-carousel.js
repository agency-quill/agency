jQuery.fn.Carousel = function () {
    var carousel = $(this); 
    if (!carousel.hasClass("carousel") || carousel.length > 1) {
        carousel.find("div.carousel").each(function (i, item) {
            $(item).Carousel();
        });
        return false;
    }
    if (carousel.data("carousel-init") == true)
        return;
    carousel.data("carousel-init", true);

    var self = this;
    this.CarouselTypeHorizontal = "Horizontal";
    this.CarouselTypeVertical = "Vertical";
    this.CarouselTypeFade = "Fade";
    this.CarouselTypeList = "List";
    this.TabClick = function (btn, groupId) {        
        btn = $(btn);
        btn.siblings().removeClass("selected").addClass("tabNotSelected");
        btn.removeClass("tabNotSelected").addClass("selected");
        var list = carousel.find(_itemTag + "." + _itemClass);
        if (_useNewCarouselTemplate == true && _isQvAcCarouselNew == true) {
            $(list).removeClass("item_1");           
        }
        var list2 = [];
        $.each(list, function (i, item) {

            var itemb = item.tagName.toLowerCase() == "li" ? item : item.parentNode;
            if (groupId && groupId != "All" && item.getAttribute("groupid") != groupId) {
                itemb.style.display = "none";
            }
            else {
                item.style.display = "";
                itemb.style.display = "block";
                list2.push(item);
            }
        });

        if (_useNewCarouselTemplate == true && _isQvAcCarouselNew == true) {
            $(list2).eq(0).addClass("item_1");           
            carousel.find("ul.AddToCartBtn").css("left", "0");            
        }
        _currentPage = 0;
        _list = list2;
        this.List = list2;
        _setupHelpers = false;
        SetUpHelpers();
    };

    var _TemplateType = carousel.attr("data-TemplateType");
    var _showArrows = carousel.attr("data-ShowArrows") && carousel.attr("data-ShowArrows").toLowerCase() == "false" ? false : true;
    var _autoStart = carousel.attr("data-AutoStart") || false;
    var _autoScroll = false;
    var _autoScrollZ = null;
    var _autoScrollTime = carousel.attr("data-AutoScrollTime") || .5;
    var _pageWidth = 0;
    var _height = 0;

    var _Restart = carousel.attr("data-ReStart") || false;
    var _time = carousel.attr("data-time") || .5;
    var _hideItems = carousel.attr("data-hideItems") == false ? false : true;
    var _itemTag = carousel.attr("data-itemTag") || "li";
    var _itemClass = carousel.attr("data-itemClass") || "itemb";
    var _type = carousel.attr("data-type") || 0;
    var _currentItems = null;
    var _items = 0;
    var _currentPage = 0;
    var _viewMoreLink = carousel.attr("data-ViewMoreLink");
    var _nextPage = 0;
    var _pages = 0;
    var _setupHelpers = false;
    var _ID = carousel.attr("id");
    var _helperTop = carousel.find("span.helperTop");
    var _helperBot = carousel.find("span.helperBot");
    var _wrap = null;
    var _toLeft = null;
    var _toRight = null;
    var _inner = null;
    var _pauseBtn = null;
    var _title = carousel.children("div.carouselTitle"); 
    var _list = carousel.find(_itemTag + "." + _itemClass);
    var _itemWidth = 0
    var _itemHeight = 0;
    var _itemsPerPage = 0;
    var _alternateName = carousel.attr("data-alternateName");
    var _slowVertical = carousel.attr("data-SlowVertical") == "true" ? true : false;
    var _highlightCurrItem = carousel.attr("data-HighlightCurrItem") == "true" ? true : false;
    var _scrollToNext = true;
    var _useNewCarouselTemplate = carousel.attr("data-useNewCarouselTemplate") == "True" ? true : false;
    var _isQvAcCarouselNew = carousel.hasClass("QvAcCarousel") && _useNewCarouselTemplate == true;
    if (_list.length == 0)
        return;
    var _itemToEvaluvate = _list.length > 1 ? $(_list).eq(1) : $(_list).eq(0);
    var _isCarousel1stItemHasPaddingLeft = false;
    var _carouselDefaultLeft = 2;
    var _showViewMore = false;
    if (carousel.attr("data-showViewMore") != "undefined" && carousel.attr("data-showViewMore") != undefined) {
        _showViewMore = (carousel.attr("data-showViewMore").toLowerCase() == "false") ? false : true;
    }
    function SetDimensions() {       
        if (!_inner)
            _inner = carousel.find(".carouselInner");
        //if(_type != self.CarouselTypeList)
        //    _inner.width(10000);

        if (_type != self.CarouselTypeList) {
            carousel.show().width("auto").height(carousel.height());
        }
        _itemWidth = _list.outerWidth();
        if (isMobile && carousel.hasClass("carouselSupercat")) {
            _list.outerWidth($(window).outerWidth());
            _itemWidth = _list.outerWidth();
        }
        
        _itemHeight = _list.outerHeight();
        _itemsPerPage = 0;
        if (_useNewCarouselTemplate == true) {
            $(_list).removeClass("item_1");
            _itemWidth = _itemToEvaluvate.outerWidth();
        }
        if (carousel.width() == 0 || _itemWidth == 0) {
            _itemWidth = carousel.attr("data-itemwidth");
            _itemHeight = carousel.attr("data-itemheight");
            _itemsPerPage = carousel.attr("data-itemsperpage");
        }
        else {
            if (_type == self.CarouselTypeVertical || _TemplateType == "HalfCarousel")
                _itemsPerPage = carousel.attr("data-itemsperpage");
            else {
                if (_useNewCarouselTemplate == true) {
                    var itemPdLeft = parseInt(_itemToEvaluvate.css("padding-left"));
                    if (itemPdLeft >= 0)
                        _itemsPerPage = Math.floor((carousel.width() + itemPdLeft) / _itemWidth) || 1;
                    else
                        _itemsPerPage = Math.floor(carousel.width() / _itemWidth) || 1;
                }
                else {
                    _itemsPerPage = Math.floor(carousel.width() / _itemWidth) || 1;
                }
            }
        }

        if (_useNewCarouselTemplate == true && _list && _itemsPerPage > 1) {
            _numItems = _list.length;
            _numPages = Math.ceil(_numItems / _itemsPerPage);

            for (var page = 0; page < _numPages; page++) {
                var nthItem = page == 0 ? 0 : (page * _itemsPerPage);
                $(_list).eq(nthItem).addClass("item_1");
            }

            SetCarousel1stItemHasPaddingLeftFlag();
        }
    }

    Adaptive.OnResize(function (width) {
        SetDimensions();
        _setupHelpers = false;
        SetUpHelpers();
    });

    if (isMobile) {
        $(window).on("resize", function () {
            SetDimensions();
            _setupHelpers = false;
            SetUpHelpers();
        });
    }

    function SetCarousel1stItemHasPaddingLeftFlag() {
        if (_list) {
            var nthListItem = $(_list).eq(0);
            if (nthListItem && parseInt(nthListItem.css("padding-left")) > 0)
                _isCarousel1stItemHasPaddingLeft = true;
        }
    }    

    function PauseClick() {
        if (_pause) {
            _pauseBtn.className = "pauseBtn";
            AutoScroll();
            _pause = false;
        }
        else {
            _pauseBtn.className = "pauseBtn pauseBtnPlay";
            window.clearTimeout(_autoScrollZ);
            _pause = true;
        }
    }
    function AutoScroll() {
        _autoScrollZ = setInterval(function () {
            var page = _currentPage + 1 >= _pages ? 0 : _currentPage + 1;
            GetOverHere(page, true);
        }, _autoScrollTime * 1000);
    }
    function GetItemsOnPage(page) {
        var start = _itemsPerPage * _currentPage;
        var end = start + _itemsPerPage > _items ? _items : start + _itemsPerPage;
        return _list.slice(start, end);
    }
    function HighlightItem(item) {
        $(item).parent("ul").children("li.clickedThumbnail").removeClass("clickedThumbnail");
        $(item).addClass("clickedThumbnail");
        _list.parent().find(".clickedThumbnail .js-skuthumb").trigger("click");
    }
    if (_slowVertical) {
        HighlightItem(_list[0]);
    }
    function GetOverHere(page, keepAutoScroll) {
        if (page >= 0 && page < _pages && page != _currentPage) {

            if (_type == self.CarouselTypeVertical) {
                if (_slowVertical) {
                    $(_inner).animate({ top: ((-_itemsPerPage + 1) * _itemHeight * page) }, _time * 1000);
                } else { $(_inner).animate({ top: ((-_itemsPerPage) * _itemHeight * page) }, _time * 1000); }
                _currentPage = page;
                SetUpHelpers();
            }
            else if (_type == self.CarouselTypeFade) {
                $(_inner).animate({ opacity: 0.1 }, _time);
                _currentPage = page;
                $(_inner).css({ left: -_pageWidth * page });
                $(_inner).animate({ opacity: 1 }, _time * 1000);
                SetUpHelpers();
            }
            else {
                var numLeft = _pageWidth * page;
                if (_isCarousel1stItemHasPaddingLeft)
                    numLeft += _carouselDefaultLeft;
                $(_inner).animate({ left: -numLeft }, _time * 1000);
                _currentPage = page;
                if ($("#divCriteoSponsoredAds").length > 0) {
                    setTimeout(function () { checkVisibility() }, ((_time * 1000) + 1))
                }
                SetUpHelpers();
            }
            if (_toRight != null && _toLeft != null && _type != this.CarouselTypeList) { // we dont want arrows if its type 3 (list)

                if (_pages > 1) {

                    if (page == 0) {
                        $(_toLeft).attr("class", "scLeft ScrPhLeft scTrack scLink");
                        $(_toRight).attr("class", "scRight scTrack scLink");
                    }
                    else if (page == _pages - 1) {
                        $(_toLeft).attr("class", "scLeft scTrack scLink");
                        $(_toRight).attr("class", "scRight ScrPhRight scTrack scLink");
                    }
                    else {
                        $(_toLeft).attr("class", "scLeft scTrack scLink");
                        $(_toRight).attr("class", "scRight scTrack scLink");
                    }
                }
                else {
                    $(_toLeft).attr("class", "scLeft ScHide scTrack scLink");
                    $(_toRight).attr("class", "scLeft ScHide scTrack scLink");
                }
            }
            if (_autoScrollZ && !keepAutoScroll) {
                if (_pauseBtn)
                    _pauseBtn.className = _pauseBtn.className + _autoStart ? "pauseBtn pauseBtnPlay" : "";
                window.clearTimeout(_autoScrollZ);
            };
            self.CurrentPage = _currentPage;
        }
    }

    function SetUpHelpers() {       
        if (_type == self.CarouselTypeList) {
            if (_useNewCarouselTemplate == true && _pages > 0 && _itemHeight > 0)
                carousel.css({ height: _itemHeight * _pages });

            return;
        }
        if (_setupHelpers == false) {
            _items = _list.length;
            if ((_itemsPerPage == 4) && (_items == 8) && carousel.hasClass("qImages"))
                _pages = Math.ceil(_items / _itemsPerPage) + 1;
            else
                _pages = Math.ceil(_items / _itemsPerPage);

            if ((_showArrows == true || _helperTop[0] || _helperBot[0]) && _toLeft == null && _toRight == null) {

                if (carousel.hasClass("ImageGallery")) {
                    var sValue = carousel.data("scvalue");
                    var sLocator = carousel.data("locater");
                    var sSku = carousel.data("sku");
                    _toLeft = $('<span class = "scTrack" scType = "scLink" scValue = "' + sValue + '-prev" locater="' + sLocator + '" sku="' + sSku + '"></span>');
                    _toRight = $('<span class = "scTrack" scType = "scLink" scValue = "' + sValue + '-next" locater="' + sLocator + '" sku="' + sSku + '"></span>');
                }
                else {
                    _toLeft = $('<span class="scTrack" scType = "scLink" scValue = "prevarrow" locater="' + _alternateName + '"></span>');
                    _toRight = $('<span class="scTrack" scType = "scLink" scValue = "nextarrow" locater="' + _alternateName + '"></span>');
                }

                _toRight.onselectstart = function (event) { event.preventDefault(); }

                var lClicked = false;
                var rClicked = false;
                var rbusy = false;
                var lbusy = false;

                $(_toRight).mousedown(function (event) {

                    if (rbusy === true)
                        return;
                    rbusy = true;
                    rClicked = true;
                    if ((_Restart) && (_items - _currentPage == 1)) {
                        GetOverHere(0);
                    }
                    else {
                        GetOverHere(_currentPage + 1);
                        if (_slowVertical && _highlightCurrItem) {
                            if (_currentPage == 0) { HighlightItem(_list[0]); }
                            else if (_currentPage == 1) { if ($("li.clickedThumbnail").attr("data-itemnumber") == 3) { HighlightItem(_list[(_currentPage * _itemsPerPage)]); } else { HighlightItem(_list[(_currentPage * _itemsPerPage) - 1]); } }
                            else if (_currentPage == 2) { if ($("li.clickedThumbnail").attr("data-itemnumber") == 6) { HighlightItem(_list[(_currentPage * _itemsPerPage) - 1]); } else { HighlightItem(_list[(_currentPage * _itemsPerPage) - 2]); } }
                            else if (_currentPage == 3 && _pages == 4) { if ($("li.clickedThumbnail").attr("data-itemnumber") == 9) { HighlightItem(_list[(_currentPage * _itemsPerPage) - 2]); } else { HighlightItem(_list[(_currentPage * _itemsPerPage) - 3]); } }
                        }
                    }

                    event.preventDefault();
                    rbusy = false;
                })

                $(_toRight).focus(function (event) {
                    if (rClicked)
                        rClicked = false;
                    else {
                        GetOverHere(_currentPage + 1);
                        event.preventDefault();
                    }
                })

                _toLeft.onselectstart = function (event) { event.preventDefault(); }

                $(_toLeft).focus(function (event) {
                    if (lClicked)
                        lClicked = false;
                    else {
                        GetOverHere(_currentPage - 1);
                        event.preventDefault();
                    }
                })

                $(_toLeft).mousedown(function (event) {
                    if (lbusy === true)
                        return;

                    lbusy = true;
                    lClicked = true;
                    if ((_Restart) && (_currentPage == 0)) {
                        GetOverHere(_items - 1);
                    } else {
                        GetOverHere(_currentPage - 1);
                        if (_slowVertical && _highlightCurrItem) {
                            if (_currentPage == 0) { if ($("li.clickedThumbnail").attr("data-itemnumber") == 3) { HighlightItem(_list[(_currentPage * _itemsPerPage) + 2]); } else { HighlightItem(_list[(_currentPage * _itemsPerPage) + 3]); } }
                            else if (_currentPage == 1) { if ($("li.clickedThumbnail").attr("data-itemnumber") == 6) { HighlightItem(_list[(_currentPage * _itemsPerPage) + 1]); } else { HighlightItem(_list[(_currentPage * _itemsPerPage) + 2]); } }
                            else if (_currentPage == 2) { if ($("li.clickedThumbnail").attr("data-itemnumber") == 9) { HighlightItem(_list[(_currentPage * _itemsPerPage)]); } else { HighlightItem(_list[(_currentPage * _itemsPerPage) + 1]); } }
                            else if (_currentPage == 3 && _pages == 4) { event.preventDefault(); }
                        }
                    }
                    event.preventDefault();
                    lbusy = false;
                });

            }

            if (_pauseBtn == null) {
                _pauseBtn = $('<span></span>');
                _pauseBtn.addClass("pauseBtn");
                _pauseBtn.onclick = function (event) {
                    PauseClick();
                }
            }
            if (_toLeft != null && _toRight != null) {
                if (_pages > 1) {

                    if (page == 0) {
                        $(_toLeft).attr("class", "scLeft ScrPhLeft");
                        $(_toRight).attr("class", "scRight");
                    }
                    else if (page == _pages - 1) {
                        $(_toLeft).attr("class", "scLeft");
                        $(_toRight).attr("class", "scRight ScrPhRight");
                    }
                    else {
                        if (_currentPage + 1 < _pages) {

                            $(_toLeft).attr("class", "scLeft ScrPhLeft");
                            $(_toRight).attr("class", "scRight");
                        }
                    }
                }
                else {
                    if (_currentPage + 1 < _pages) {
                        $(_toLeft).attr("class", "scLeft ScHide");
                        $(_toRight).attr("class", "scLeft ScHide");
                    }
                    
                    if (_isQvAcCarouselNew == true && _pages <= 1) {
                        $(_toLeft).attr("class", "ScHide");
                        $(_toRight).attr("class", "ScHide");
                    }
                }
            }

            if (_wrap == null) {
                _inner = carousel.find(".carouselInner");
                _wrap = carousel.find(".carouselWrap");
                if (_toLeft && _toRight) {
                    carousel.append(_toLeft);
                    carousel.append(_toRight);
                }
                carousel.append(_wrap);
                carousel.onkeydown = function (event) {
                    var e; event ? e = event : e = window.event;
                    var key = e.which ? e.which : e.keyCode;
                    if (key == 9) {
                        event.preventDefault();
                        eventStopProp(event);
                    }
                };
            }


            if (_type == self.CarouselTypeVertical) {
                _pageWidth = _itemWidth;
                _wrap.css({ width: _pageWidth });
                _inner.css({ width: (_type == self.CarouselTypeVertical ? _pageWidth : _pages * _pageWidth) });
                _pages > 1 ? _height = _itemHeight * _itemsPerPage : _height = _itemHeight * _items;
            }
            else {
                _pageWidth = _itemWidth * _itemsPerPage;
                _inner.css({ width: (_type == self.CarouselTypeVertical ? _pageWidth : _pages * _pageWidth) });

                if (_useNewCarouselTemplate == true && _itemsPerPage > 1) {
                    var itemPdleft = parseInt(_itemToEvaluvate.css("padding-left"));
                    if (itemPdleft >= 0 && !_isCarousel1stItemHasPaddingLeft)
                        _pageWidth = _pageWidth - itemPdleft;
                }

                _wrap.css({ width: _pageWidth });
                if (carousel.height() == 0) {
                    _height = GetItemsOnPage().height();
                } else {
                    _height = carousel.height();
                }

            }
            _wrap.css({ height: _height });

            if (_type == self.CarouselTypeVertical) {
                if (_currentPage + 1 < _pages) {
                    _inner.css({ top: 0 });
                }
            }
            else {
                _inner.css({ left: _isCarousel1stItemHasPaddingLeft ? -_carouselDefaultLeft : 0 });
            }

            _setupHelpers = true;
        }

        carousel.css({ height: _height });
        _inner.css({ height: _height });

        if (_helperTop[0] && _pages > 1) {

            var helpers = _helperTop.find("a");
            if (helpers.length > 0) {
                var index = 0;
                $(helpers).each(function (i, item) {
                    if (!item.onclick) {
                        item.setAttribute("i", index);
                        item.onclick = function () {
                            index = parseInt(item.getAttribute("i"));
                            GetOverHere(index);
                        };
                    }
                    $(item).removeClass("selected").addClass("");
                    if (index == _currentPage)
                        $(item).addClass(item.className + " selected");
                    index++;
                });
            }
            else {
                _helperTop.empty();
                if (_autoScroll) {
                    _helperTop.append(_pauseBtn);
                }

                _helperTop.append(_toLeft);
                for (var page = 0; page < _pages; page++) {
                    var a = $('<a></a>');
                    a.attr("i", page);
                    a.addClass("carouselHelper " + (page == _currentPage ? " selected" : ""));
                    a.html(page + 1);
                    a.click(function () {
                        GetOverHere($(this).attr('i'));
                    });
                    $(_helperTop).append(a);
                }

                _helperTop.append(_toRight);
                if (_helperBot) {
                    _helperBot.empty();;
                    $.each(_helperTop, function (i, item) {
                        //_helperBot.appendChild(item.cloneNode(true));
                    });
                }
            }
        }

        carousel.height(_height);
        carousel.width(_pageWidth);

        var itemIndex = carousel.find(".carouselInner li").index($('li.selected'));

        if (_scrollToNext == true && itemIndex >= 0) {
            for (var i = 1; i <= _pages; i++) {
                if (itemIndex >= _itemsPerPage * i) {
                    GetOverHere(i, true);
                    _scrollToNext = false;
                }
            }
        }
    }

    if (_list != null) {
        _list.length ? null : _list = [_list];
        if (_showViewMore) {
            AddViewMoreCard();
            _list = carousel.find(_itemTag + "." + _itemClass);
        } 

        SetDimensions();
        SetUpHelpers();
        if (_autoStart)
            AutoScroll();
        this.ToLeft = _toLeft;
        this.ToRight = _toRight;
        carousel.Carousel = this;
    }
    this.List = _list;
    this.CurrentPage = _currentPage;
    this.ItemsPerPage = _itemsPerPage;

    function AddViewMoreCard() {
        var _seeAllLink = $('<a class="see-all-link scTrack" scType="scLink" scValue="prevpurchase:seeall" href=' + _viewMoreLink + '>' + (_TemplateType == "HalfCarousel" || _TemplateType == "Small" ? "View All" : "See All") + '</a>');
        var _viewMoreCard = $('<li class="item_ph item_view_more_ph nopadding"><div class="itemb item-view-more"><a class="scTrack" scType="scLink" scValue="prevpurchase:viewmore" href=' + _viewMoreLink + '>View More</a></div></li>');
        carousel.append(_seeAllLink);
        _inner = carousel.find(".carouselInner");
        _inner.append(_viewMoreCard);
    }

    carousel.data("Carousel", self);

    return carousel;
};

$(document).ready(function () {
    $("div.carousel").each(function (i, item) {
        if (!$(item).hasClass("deferLoad"))
            $(item).Carousel()
    });
});
ScriptHelper.OnLateLoad(function () {
    $("div.carousel").each(function (i, item) {
        if ($(item).hasClass("deferLoad"))
            $(item).Carousel()
    });
});
