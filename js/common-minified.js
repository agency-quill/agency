/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
function loadDisclaimers() {
    $.ajax({
        dataType: "json",
        error: function(n, t) {
            alert("Error: " + n + " - " + t)
        },
        success: function(n) {
            cpnDisclaimers = n
        },
        url: "/content/iw/scripts/disclaimers.js"
    })
}
function ShowMergeCart() {
    var t = cookie.Get({
        bucket: cookie.buckets.funcTemp,
        name: "MergeCart"
    }), n, i;
    t != null && t != undefined && (t == "0" || t == "1") && (n = "/cart/mergecart",
    i = "0",
    n = t == "1" ? n + "?showboth=1" : n + "?showboth=0",
    n += "&returnUrl=" + window.location.pathname,
    $.ajax({
        url: n,
        type: "GET",
        timeout: 5e4,
        statusCode: {
            200: function(n) {
                var t = $("<div width='96%' id='mergecartpopup'><\/div>").html(n);
                $(t).PopUp({
                    showLightBox: !0,
                    width: 450,
                    showCloseIcon: !1,
                    showCloseButton: !1
                })
            }
        }
    }).done(function() {}))
}
function ShowFreeGiftLostMessage() {
    !0 && $.get("/Master/CheckPLPFreeGift", function(n) {
        if (n != "")
            $("<div id='plpCartRemoveItemMsg' style='padding: 20px;border:1px solid black;'><\/div>").append(n).PopUp({
                showLightBox: !1,
                showCloseButton: !1
            });
        else {
            var t = $("#popup").find("#plpCartRemoveItemMsg");
            t.length > 0 && $("#popup").remove()
        }
    })
}
function BindClearButtonToInputs() {
    function n(n) {
        return n ? "addClass" : "removeClass"
    }
    $(document).on("input", ".clearable", function() {
        $(this)[n(this.value)]("x")
    }).on("mousemove", ".x", function(t) {
        $(this)[n(this.offsetWidth - 18 < t.clientX - this.getBoundingClientRect().left)]("onX")
    }).on("touchstart click", ".onX", function(n) {
        n.preventDefault();
        $(this).removeClass("x onX").val("").change()
    })
}
function trueMouseOut(n, t) {
    return jQuery.Event.prototype.TrueMouseOut.call(t, n)
}
function preventDefault(n) {
    n = n || window.event;
    n && {
        originalEvent: n,
        preventDefault: jQuery.Event.prototype.preventDefault
    }.preventDefault()
}
function stopPropagation(n) {
    n = n || window.event,
    {
        originalEvent: this,
        stopPropagation: jQuery.Event.prototype.stopPropagation
    }.stopPropagation()
}
function stickyItemUpdate(n) {
    var t, i, u = n.args.yContainer.offset(), s = n.offset(), e = $("#FilterContainer").width(), o = {
        x: $(window).scrollLeft(),
        y: $(window).scrollTop(),
        w: $(window).width(),
        h: $(window).height()
    }, r, f;
    n.css({
        width: "",
        left: "",
        right: ""
    });
    r = $(window).height();
    f = o.y + r - n.height();
    n.args.orientation == "top" ? (t = n.args.yContainer.height() + u.top + r - n.height(),
    i = n.args.startY + r - n.height()) : (t = n.args.yContainer.height() + u.top - n.height(),
    i = u.top);
    f >= t ? (n.args.orientation != "top" && n.css("top", t),
    n.css("left", n.args.absoluteLeft),
    n.hasClass("FixedItem") ? (n.removeClass("FixedItem").addClass(" AbsoluteItem"),
    n.args.onunsticky && n.args.onunsticky.call(n.args.onunsticky)) : n.hasClass("AbsoluteItem") || (n.addClass(n.attr("class") + " AbsoluteItem"),
    n.args.onunsticky && n.args.onunsticky.call(n.args.onunsticky))) : f <= i ? (n.args.orientation != "top" && n.css("top", i),
    n.css("left", n.args.absoluteLeft),
    n.hasClass("FixedItem") ? (n.removeClass("FixedItem").addClass(" AbsoluteItem"),
    n.args.onunsticky && n.args.onunsticky.call(n.args.onunsticky)) : n.hasClass("AbsoluteItem") || (n.attr("class", n.attr("class") + " AbsoluteItem"),
    n.args.onunsticky && n.args.onunsticky.call(n.args.onunsticky))) : (n.hasClass("AbsoluteItem") && n.removeClass("AbsoluteItem"),
    ie6 || (n.css("left", n.args.fixedLeft),
    n.args.orientation == "top" ? n.css({
        top: "",
        bottom: "auto"
    }) : n.css("top", "auto")),
    n.css("width", e),
    n.hasClass("FixedItem") || (n.addClass(" FixedItem"),
    n.css("width", e),
    n.args.onsticky && n.args.onsticky.call(n.args.onsticky)))
}
function ShowMoreHotDeals(n) {
    if ($(n).hasClass("showLessDeals")) {
        var t = 4;
        $("html").hasClass("res1450") ? t = 6 : $("html").hasClass("res1280") && (t = 5);
        $(n).closest(".itemList").find(".carouselInner").animate(200, function() {
            $(n).closest(".itemList").find(".carouselInner .item_ph:gt(" + (t - 1) + ")").hide();
            $("html,body").animate({
                scrollTop: $(n).closest(".itemList").offset().top - $("#header").outerHeight(!0) - 220 + "px"
            }, "slow");
            $(n).hide();
            $(n).siblings(".showMoreDeals").show()
        })
    } else
        $(n).closest(".itemList").find(".carouselInner").animate(200, function() {
            $(n).closest(".itemList").find(".carouselInner .item_ph").slideDown();
            $(n).hide();
            $(n).siblings(".showLessDeals").show()
        })
}
function SortDeals(n) {
    var t = $(n).parents(".sort-section").siblings(".dealsContainer")
      , i = $(t).find(".carousel").attr("id").replace("dynCarousel", "").split("_")
      , u = i[0]
      , f = i[1]
      , e = $(t).find(".dollarDays").attr("data-itemsperpage")
      , r = $(n).val();
    $.ajax({
        method: "GET",
        url: "/Master/DynamicCarouselSort",
        data: {
            displayType: f,
            id: u,
            sortBy: r,
            itemPerPage: e
        }
    }).done(function(n) {
        $(t).html("").html($(n).filter("div.dealsContainer").find(".carousel"));
        $(t).find(".carousel").Carousel();
        UpdateCurrentUrl(r)
    })
}
function UpdateCurrentUrl(n) {
    if (history.pushState) {
        var t = window.location.protocol + "//" + window.location.host + window.location.pathname;
        t = t + "?sortBy=" + n;
        window.history.pushState({
            path: t
        }, "", t)
    }
}
function AnimateScroll(n, t) {
    var r = typeof t != "undefined" ? t.indexOf("#") : -1
      , i = typeof n != "undefined" && n != "" ? n : r != -1 ? t.slice(r) : "";
    typeof i != "undefined" && i != "" && (typeof isSticky == "undefined" || isSticky ? !navigator.userAgent.match(/Trident.*rv\:11\./) || typeof t == "undefined" ? $("html, body").animate({
        scrollTop: $(i).offset().top - 60
    }, 1e3) : $("html, body").animate({
        scrollTop: $(i).offset().top - ($(".HeaderRow").height() + 60)
    }, 1e3) : $("html, body").animate({
        scrollTop: $(i).offset().top - $(".HeaderRow").height() - 60
    }, 1e3))
}
function previewImage(n, t, i) {
    var r = $("<div id='DivPhGlobal' />");
    r.attr("class", "SkuPrinterPreview");
    r.append("<img src='" + t + "'/>");
    r.append("<div class='iNumber'>item #" + n + "<\/div>");
    tooltip.init($(i), r.html(), "105", {
        index: 18e3
    })
}
function hideImage() {
    var n = $("#DivPhGlobal");
    n.css("display", "none");
    n.className = "";
    n.innerHTML = ""
}
function addBookmark(n, t) {
    if (t || (t = document.title),
    n || (n = location.href),
    window.sidebar)
        window.sidebar.addPanel(t, n, "");
    else if (window.opera && window.print) {
        var i = document.createElement("a");
        i.setAttribute("href", n);
        i.setAttribute("title", t);
        i.setAttribute("rel", "sidebar");
        i.click()
    } else
        document.all && window.external.AddFavorite(n, t)
}
function ShowShippingInfoPopup() {
    window.open("/ShippingInfo", "ShippingInfo", "menubar=no,width=700,height=500,resizable=1,scrollbars=yes,toolbar=no,left=100,top=100")
}
function CalculateDeliveryDatesNew(n, t) {
    var i = "False".toString().toLowerCase() == "true" ? $("#SelectedRegionID option:selected").val() : $(n).attr("id");
    $(n).attr("data-regionid", i);
    var u = $(n).attr("data-isshiptostore").toLowerCase()
      , r = $("#hdnShowDeliverMessage").val().toLowerCase();
    i != $("#hdnSelectedRegion").val() && (r == "false" && Cart.UpdateRegionType(n),
    r == "true" && (Input = {
        sku: $("#SkuData_Sku").val(),
        regionID: i,
        quantity: 1,
        itemCategory: $("#hdnItemCategory").val(),
        isShipToStore: u,
        isQview: t
    },
    Actionurl = "/Item/GetEUDeliveryMessage",
    $.ajax({
        url: Actionurl,
        type: "POST",
        data: Input,
        dataType: "html",
        success: function(n) {
            $("#DeliveryMessage").html(n)
        },
        error: function() {}
    })))
}
function CalculateDeliveryDates(n) {
    var t = "False".toLowerCase() == "true" ? $("#SelectedRegionID option:selected").val() : $(n).attr("id");
    $(n).attr("data-regionid", t);
    var r = $(n).attr("data-isshiptostore").toLowerCase()
      , i = $("#hdnShowDeliverMessage").val().toLowerCase();
    t != $("#hdnSelectedRegion").val() && (i == "false" && Cart.UpdateRegionType(n),
    i == "true" && (Input = {
        sku: $("#SkuData_Sku").val(),
        regionID: t,
        quantity: 1,
        itemCategory: $("#hdnItemCategory").val(),
        isShipToStore: r
    },
    Actionurl = "/Sku/GetEUDeliveryMessage",
    $.ajax({
        url: Actionurl,
        type: "POST",
        data: Input,
        dataType: "html",
        success: function(n) {
            $("#DeliveryMessage").html(n)
        },
        error: function() {}
    })))
}
function popitup(n) {
    var t = window.open(n, "name", "height=330,width=560");
    return window.focus && t && t.focus(),
    !1
}
function redirectToAddToList(n) {
    n = n + "&qty=" + $("#qtyInput").val();
    window.location.href = n
}
function isValidDate(n) {
    var i = n, r, t, u;
    return i == "" ? !1 : (r = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/,
    t = i.match(r),
    t == null) ? !1 : (dtMonth = t[1],
    dtDay = t[3],
    dtYear = t[5],
    dtMonth < 1 || dtMonth > 12) ? !1 : dtDay < 1 || dtDay > 31 || (dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31 || dtMonth == 2 && (u = dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0),
    dtDay > 29 || dtDay == 29 && !u) ? !1 : !0
}
function LoadDeferedImages() {
    var t, n, i;
    if (window.DLDIMG)
        for (t = document.getElementsByTagName("img"),
        n = 0; n < t.length; n++)
            i = t[n].getAttribute("data-src"),
            i && t[n].setAttribute("src", i)
}
function scrolltoErrorMsg() {
    var t = $($(".input-validation-error")[0])
      , n = {};
    t == undefined && (n = $("div.errorDiv").offset());
    $("div.errorDiv").hasClass("noErrorScroll") ? (n = $(t).offset(),
    n != undefined && $("html, body").stop().animate({
        scrollTop: n.top
    }, 1200)) : (n = $($(t).parents().find("div.errorDiv")[0]).offset(),
    n != undefined && $("html, body").stop().animate({
        scrollTop: n.top
    }, 1200))
}
function PopulateForm(n, t) {
    var r = n, i;
    n.indexOf(",") && (r = n.split(","));
    i = {};
    $(r).each(function(n, r) {
        var f = r.split(":")
          , u = findElement(f[0].split(" "), i)
          , e = findElement(f[1].split(" "), i);
        u.val($.trim(e.text()));
        !0 && t && u.is("input:text") && ($.trim(e.text()) != "" && u.addClass("modifiedFieldColor"),
        setTimeout(function() {
            u.removeClass("modifiedFieldColor")
        }, 3e3))
    })
}
function PopulateFormObject(n, t, i) {
    var u = n, r;
    n.indexOf(",") && (u = n.split(","));
    r = {};
    $(u).each(function(n, u) {
        var e = u.split(":")
          , f = findElement(e[0].split(" "), r)
          , o = "";
        o = i != undefined ? findElement(e[1].split(" "), r, i) : findElement(e[1].split(" "), r);
        f.val($.trim(o.text()));
        !0 && t && f.is("input:text") && ($.trim(o.text()) != "" && f.addClass("modifiedFieldColor"),
        setTimeout(function() {
            f.removeClass("modifiedFieldColor")
        }, 3e3))
    })
}
function findElement(n, t, i) {
    var r = n[0]
      , u = n[1]
      , f = "";
    return t[r] ? r = t[r] : (t[r] = $(r),
    r = t[r]),
    f = r,
    (u != null || u != undefined) && (f = i != undefined ? i.find(u) : r.find(u)),
    f
}
function ValidateMagicName(n, t) {
    var i = $(this), u, r, f, e, o, s;
    (t != undefined && (i = t),
    i.length != 0) && (u = i.val(),
    r = i.attr("data-input-ajax"),
    r) && (f = i.attr("data-input-params") || "",
    i.val().length != 0) && (e = new FormValidationHelper,
    o = e.ValidateField(i),
    o) && (s = function(n) {
        var t = i.closest("form").find("span[data-valmsg-for=" + i.attr("name").replace(/\./g, "\\.") + "]");
        $(t).addClass("field-validation-valid");
        $(t).removeClass("field-validation-error");
        $(t).text("");
        n.IsValid || (i.data("validationError", !0),
        $(t).html(n.ErrorMessage),
        $(t).addClass("field-validation-error").removeClass("field-validation-valid"),
        i.addClass("input-validation-error"),
        i.closest("form").find('label[for="' + i.attr("id") + '"]').addClass("requiredLabel"));
        n.Captchaenabled && ($("#easyRegistrationDiv").length ? ($("#easyRegistrationDiv").parent().remove(),
        PLP.ShowEasyLoginPopUp("Register")) : $("#contactInfoPane").length && $("#Captcha-Sec-Wrapper").text().length == 0 ? window.location.href = window.location.pathname : $("#chkRegisterView").length ? Checkout.GetRegister() : $("#divPMRegistration").length ? window.location.href = window.location.href : $("#RegistrationDiv").length && (window.location.href = window.location.href))
    }
    ,
    $.ajax({
        url: r,
        async: !1,
        type: "post",
        dataType: "json",
        data: {
            value: u,
            args: f
        },
        success: s
    }))
}
function IsPasswordOk(n) {
    return n.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/) ? !0 : n.match(/^(?=.*\d)(?=.*[!@#$%^&*])((?=.*[a-z])|(?=.*[A-Z])).{8,30}$/) || n.match(/^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/) ? !0 : !1
}
function CheckMaxLengthOnKeyUp(n) {
    if (!event || event.type != "keyup")
        return !0;
    var t = n.attr("maxlength")
      , i = n.val();
    return i.length > t ? (n.val(i.substr(0, t)),
    !1) : !0
}
function showPriceInCart(n, t, i, r) {
    QView.init({
        sku: t,
        effort: i,
        findNumber: r
    })
}
function CompareSelectedSkus(n, t, i) {
    var r = null;
    i == 36 && (r = "ownBrandCompare");
    $.ajax({
        url: "/CompareSKUs/CompareSelectedSkuPopup",
        type: "POST",
        data: {
            skuList: n,
            effortCode: t,
            currentAdjacencyId: i
        },
        dataType: "html",
        success: function(n) {
            var t = $('<div id="PopUpPlaceHolder" class="' + r + '">' + n + "<\/div>");
            t.PopUp({
                showLightBox: !0,
                width: $(t[0]).find("div.compareView").attr("data-width")
            });
            i == 36 && $(".ownBrandCompare").parent().find(".popUpClose,.popFotSec a").bind("click", function() {
                $(".ItemCompare input[type='checkbox']").attr("checked", !1)
            })
        },
        error: function(n) {
            alert(n.responseText)
        }
    })
}
function radioButtonChecked(n, t) {
    $("#" + t + " input").prop("checked", !0);
    $("#purchaseCategory").find("tr#" + n).addClass("trDescSelected")
}
function SearchSuggestTrack(n) {
    typeof SearchSuggestTrackS == "function" && SearchSuggestTrackS(n)
}
function startRumTrack(n) {
    try {
        var t = {};
        return "undefined" != typeof BOOMR && BOOMR && (t.mPulse = BOOMR.requestStart(n)),
        typeof newrelic == "object" && (t.newrelic = {
            name: n,
            start: new Date
        }),
        t.loaded = function(n) {
            if (t.mPulse && t.mPulse.loaded(),
            t.newrelic) {
                var i = t.newrelic;
                newrelic.addPageAction(i.name, {
                    pageGroup: i.name,
                    duration: (new Date - i.start) / 1e3,
                    sourcePageGroup: newrelic.pageGroup,
                    error: n ? n : ""
                })
            }
            window.rumRequestB = null;
            window.rumRequestNR = null
        }
        ,
        t
    } catch (i) {
        return null
    }
}
function AddToSharedCartAndCloseQView(n, t, i) {
    var u = $("#ddlSharedCartNames").val(), f = n, r;
    n = f.replaceAll('"SharedCartID":0', '"SharedCartID":' + u);
    QView.close();
    r = $('a.SharedCartBtn[rel="' + t + '"][locater="' + i + '"]');
    $.ajax({
        url: "/sharedcart/AddItemsToSharedCart",
        type: "post",
        dataType: "html",
        data: {
            data: n
        },
        success: function(n) {
            $(".popUpClose").trigger("click");
            n == "true" ? r.Tooltip($("#AddedToSharedCart").html(), 211, {
                hasCloseButton: !1,
                orientation: 3,
                unique: !0,
                index: 0,
                skin: "couponTip",
                time: 5e3
            }) : (r.Tooltip($("#AddedToSharedCartError").html(), 227, {
                hasCloseButton: !1,
                orientation: 3,
                unique: !0,
                index: 0,
                skin: "errorToolTip",
                time: 5e3
            }),
            setTimeout(function() {
                location.reload(!0)
            }, 5e3));
            Utilities.UpdateSharedCartHeader();
            Loading.Hide();
            QView._busy = !1
        },
        error: function(n, t, i) {
            window.console && console.log(i)
        }
    })
}
function AddGiftCouponMiniCart() {
    var r = cookie.Get({
        bucket: cookie.buckets.funcTemp,
        name: "GiftCoupon"
    }), t = decodeURIComponent(r), n, i;
    t && (n = JSON.parse(t),
    n != "" && n != undefined && (n.length > 0 ? ($(".cartTable #giftcoupontr").length && $(".cartTable #giftcoupontr").remove(),
    i = "<tr id='giftcoupontr'><td class='prodImg'><img width='60' src='" + n[0].GiftImgurl + "'/><\/td><td class='prodDesc desc'>" + n[0].GiftFreeText + " " + n[0].GiftTitle + " " + n[0].GiftMinOrderText + " " + n[0].GiftThreshold + "<br/><span class='red'>  " + n[0].GiftCode + "<\/span><\/td><td><\/td><td><\/td><\/tr>",
    $(".table.cartTable > tbody:last-child").append(i),
    CartPreview.Show(),
    $("#HeaderRow").css("z-index", "999999"),
    $("#HdrCartLi").addClass("navOver ltbox"),
    LightBox.Show()) : $(".cartTable #giftcoupontr").length && $(".cartTable #giftcoupontr").remove()))
}
function AddGiftToCart(n) {
    var t = $(n).parent(), f = t.find(".gInfo_gratis").text(), e = t.find(".gInfo_title").text(), o = t.find(".gInfo_buymin").ignore("span").text(), s = t.find(".gInfo_buymin span").text(), i = t.find(".gInfo_coupondesc p span").text(), h = t.parent().find("img").prop("src"), r = cookie.Get({
        bucket: cookie.buckets.funcTemp,
        name: "AppliedGiftCoupon"
    }), u;
    if (r == "" || r != i) {
        var c = [{
            GiftCode: i,
            GiftTitle: e,
            GiftThreshold: s,
            GiftImgurl: h,
            GiftFreeText: f,
            GiftMinOrderText: o,
            GiftUrl: window.location.href
        }]
          , l = JSON.stringify(c)
          , a = encodeURIComponent(l);
        cookie.Set({
            name: "GiftCoupon",
            value: a,
            bucket: cookie.buckets.funcTemp
        });
        AddGiftCouponMiniCart();
        cookie.Set({
            name: "AppliedGiftCoupon",
            value: i,
            bucket: cookie.buckets.funcTemp
        })
    } else
        u = "<div class='popup_image'><\/div><div class='PopUpDiv'><div class='divGiftAdded'><\/div><\/div>",
        $('<div id="GiftCouponErrorMsgPopup"><\/div>').append(u).PopUp({
            showLightBox: !0,
            width: 400,
            height: 200,
            showCloseButton: !1
        })
}
function RemoveCartGiftCoupon() {
    cookie.Remove({
        bucket: cookie.buckets.funcTemp,
        name: "GiftCoupon"
    });
    cookie.Remove({
        bucket: cookie.buckets.funcTemp,
        name: "AppliedGiftCoupon"
    });
    $(".cartTable #giftcoupontr").length && $(".cartTable #giftcoupontr").remove();
    $("#GiftCoupondiv").length && $("#GiftCoupondiv").remove()
}
function OpenEGain(n, t) {
    var i, r;
    i = "nareferer=+escape(document.location),width=600,height=600,left=100,top=100,status=1,resizable=1,scrollbars=1,location=0;menubar=0;target=_blank";
    r = window.open(t, "EGain_Signin_Window", i);
    r.focus()
}
function EnableStaceyContent() {
    var n = window.open("/Master/LoadStaceyContent", "", "width=600,height=550,left=100,top=100,status=1,resizable=1,scrollbars=1,location=0;menubar=0;target=_blank");
    n.focus()
}
function notifications() {
    $("#subscriptionNotify").length > 0 && $("#sharedCartNotify").length > 0 && $("#purchaseMRequests").length > 0 && ($("html").hasClass("res1024") ? ($("#purchaseMRequests").removeClass("notifications-all formLabel ST_m"),
    $("#subscriptionNotify").addClass("notification-two ").removeClass("notifications-all"),
    $("#sharedCartNotify").addClass("notification-two").removeClass("notifications-all")) : $("#purchaseMRequests").hasClass("notifications-all") == !1 && ($("#purchaseMRequests").addClass("notifications-all formLabel ST_m"),
    $("#subscriptionNotify").removeClass("notification-two ").addClass("notifications-all"),
    $("#sharedCartNotify").removeClass("notification-two").addClass("notifications-all")));
    $("#purchaseMRequests").length > 0 && $("#purchaseMRequests .notifyDiv").height() > $("#purchaseMRequests").height() ? $(".notification-wrapper").height($("#purchaseMRequests .notifyDiv").height() + $(".notify-header").height()) : $("#sharedCartNotify").length > 0 && $("#sharedCartNotify .notifyDiv").height() + $("#sharedCartNotify .notify-header").height() > $("#sharedCartNotify").height() ? $(".notification-wrapper").height($("#sharedCartNotify .notifyDiv").height() + $(".notify-header").height() + 4) : $("#purchaseMRequests").length > 0 && $("#sharedCartNotify .notifyDiv").height() > $("#sharedCartNotify").height() && $(".notification-wrapper").height($("#purchaseMRequests .notifyDiv").height() + $(".notify-header").height())
}
function MagicZoomNew() {
    $(".magicZoomNew").each(function() {
        function v() {
            n.fadeOut(500);
            o = !1
        }
        function y(n) {
            var u, i, e;
            o != !1 && (u = n.pageX - c.left,
            i = n.pageY - c.top,
            u < 0 && (u = 0),
            i < 0 && (i = 0),
            e = 1,
            $("html").hasClass("res1024") ? e = l / (f + t.outerWidth()) : $("html").hasClass("res1450") && (e = f / l),
            r.style.left = -(u * e) + "px",
            r.style.top = i < 70 ? -i + "px" : -(i + 70) + "px")
        }
        function p() {
            (n.is(":empty") || $("#imgBigView").attr("src") != t.attr("data-zoomimage")) && (n.empty(),
            r = new Image,
            r.className = "image",
            r.id = "imgBigView",
            ScriptHelper.OnLateLoad(function() {
                r.src = t.attr("data-zoomimage")
            }),
            n.append(r),
            n.css("left", $(".dv-skuImage").offset().left),
            n.css("top", $(".dv-skuImage").offset().top));
            n.css("top", $(".dv-skuImage").offset().top)
        }
        var u = $(this), l, w;
        if (u.data("bound") != !0) {
            var e = !0
              , o = !1
              , b = $(".hover", u)
              , t = $("#SkuPageMainImg", u)
              , i = $("#skuPageMainVideo");
            i.hide();
            var n = $(".zoomImageNew")
              , r = null
              , a = null
              , s = $(".skuImageZoom", u)
              , f = 0
              , h = 0
              , c = null;
            u.data("disable-zoom") != "1" && p();
            n.css("display", "block");
            f = $(".dv-skuImage").width();
            h = $(".dv-skuImage").height();
            c = n.find("img").offset();
            l = 1080;
            w = 1080;
            n.css("display", "none");
            n.css("width", f);
            s.click(function() {
                e && f > 0 && h > 0 && (r.onload = function() {}
                ,
                n.css("width", f),
                n.css("height", h),
                n.fadeIn(500),
                o = !0)
            });
            s.bind("mouseenter", function() {
                e && p()
            });
            n.bind("mouseenter", function() {
                clearTimeout(a)
            });
            n.bind("mousemove", function(n) {
                y(n)
            });
            $(window).on("scroll", function() {
                n.css("top", $(".dv-skuImage").offset().top)
            });
            n.bind("mouseleave", function() {
                a = setTimeout(function() {
                    v()
                }, 250)
            });
            n.bind("click", function() {
                v()
            });
            Adaptive.OnResize(function(n) {
                $(".zoomImageNew").css("left", $(".dv-skuImage").offset().left);
                f = $(".dv-skuImage").width();
                y(n)
            });
            $(".js-skuthumb.video").each(function() {
                var n = $(this);
                n.length && $.getJSON(n.data("srcurl"), {
                    format: "json"
                }, function(t) {
                    n.attr("src", t[0].thumbnail_small)
                })
            });
            $(".js-skuthumb", u).bind("click", function() {
                var u, r, n;
                $(this).attr("scType") == "video" ? (i.length || (s.append('<iframe id="skuPageMainVideo" src="" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="display:none"><\/iframe>'),
                i = $("#skuPageMainVideo")),
                i.attr("height", t.height()),
                i.attr("width", t.width()),
                i.get(0).contentWindow.location.replace($(this).attr("data-videoUrl")),
                t.hide(),
                i.show(),
                e = !1,
                $(".skuImageZoom").removeClass("zoomIcon"),
                $(this).parent("li").parent("ul").children("li.clickedThumbnail").removeClass("clickedThumbnail"),
                $(this).parent("li").addClass("clickedThumbnail")) : (e = !0,
                i.length && (i.remove(),
                i = $("#skuPageMainVideo")),
                t.show(),
                $(".skuImageZoom").hasClass("zoomIcon") || $(".skuImageZoom").addClass("zoomIcon"),
                ($(".qImages").attr("data-iszoom") == "false" || $(".qImages").attr("data-iszoom") == undefined) && (u = Adaptive.IsPageAdaptive(),
                u == !0 ? (r = Adaptive.Size(),
                n = null,
                $(this).attr("data-resizeimage") != null && (n = $.parseJSON($(this).attr("data-resizeimage"))),
                n != null && n ? (t.attr("data-resizeimage", $(this).attr("data-resizeimage")),
                r > 1024 ? (t.attr("class", "skuImageXLL"),
                t.attr("src", n["1025to1450"]),
                t.attr("data-screenSize", r)) : (t.attr("class", "skuImageSTD"),
                t.attr("src", n["0to1024"]),
                t.attr("data-screenSize", r))) : t.attr("src", $(this).attr("data-mainimage"))) : t.attr("src", $(this).attr("data-mainimage"))),
                $(this).parent("li").parent("ul").children("li.clickedThumbnail").removeClass("clickedThumbnail"),
                $(this).parent("li").addClass("clickedThumbnail"),
                $(this).hasClass("ImgRollingSku") && $(".SlowVerticalCarousel .itemThumb").removeClass("clickedThumbnail"));
                t.attr("data-zoomimage", $(this).attr("data-zoomimage"))
            });
            $(".videoThumbnail").length && $(".videoThumbnail").bind("click", function() {
                $(this).parent().find(".js-skuthumb").click()
            });
            u.data("bound", !0)
        }
    });
    $("#toggleThumbNail").length && $("#toggleThumbNail").click(function() {
        var n = $(".s7Thumbs").find($(".carousel")), i = n.find($(".carouselInner")), r = (i.data("videoindex") / n.data("itemsperpage")).toFixed(), t;
        if (i.length)
            if ($(this).text() == $(this).data("showvideos")) {
                for ($(this).text($(this).data("showimages")),
                t = 0; t < r; t++)
                    n.find(".scRight").mousedown();
                i.animate({
                    top: -n.data("itemheight") * i.data("videoindex")
                }, 1e3);
                n.find(".scRight").addClass("ScrPhRight")
            } else {
                for ($(this).text($(this).data("showvideos")),
                t = r; t >= 0; t--)
                    n.find(".scLeft ").mousedown();
                i.animate({
                    top: 0
                }, 1e3);
                n.find(".scLeft").addClass("ScrPhLeft ")
            }
    })
}
function MagicZoom() {
    $(".magicZoom").each(function() {
        function tt() {
            u.animate({
                width: 0
            }, 200, function() {
                $(".message", t).css("display", "block");
                $(".hoverBg", t).css("display", "block");
                p.css("display", "");
                l.css("display", "");
                w.css("display", "");
                b.css("display", "");
                $(this).hide()
            });
            c = !1
        }
        function it(n) {
            var v = n.pageX - g.left, y = n.pageY - g.top, r = v - h / 2, i = y - o / 2, u, a;
            (r < 0 && (r = 0),
            r > e - h && (r = e - h),
            i < 0 && (i = 0),
            i > s - o && (i = s - o),
            t.css({
                left: r + "px",
                top: i + "px"
            }),
            c != !1) && (p.css({
                left: "0px",
                top: "0px",
                width: e,
                height: i + "px"
            }),
            l.css({
                left: "0px",
                top: i + "px",
                width: r + "px",
                height: o + "px"
            }),
            w.css({
                left: r + h + "px",
                top: i + "px",
                width: e - h - l.width() + "px",
                height: o + "px"
            }),
            b.css({
                left: "0px",
                top: i + o + "px",
                width: e,
                height: s - o - i + "px"
            }),
            u = k / e,
            a = d / s,
            (i == s - o || i == 0) && (u = Math.ceil(k / e),
            a = Math.ceil(d / s)),
            f.style.left = -(u * r) + "px",
            f.style.top = -(a * i) + "px")
        }
        function rt() {
            (u.is(":empty") || $("#imgBigView").attr("src") != n.attr("data-zoomimage")) && (u.empty(),
            f = new Image,
            f.className = "image",
            f.id = "imgBigView",
            f.src = n.attr("data-zoomimage"),
            u.append(f))
        }
        var i = $(this), e, s, h, o, k, d;
        if (i.data("bound") != !0) {
            var y = !0
              , c = !1
              , p = $(".hover1", i)
              , l = $(".hover2", i)
              , w = $(".hover3", i)
              , b = $(".hover4", i)
              , t = $(".hover", i)
              , n = $("#SkuPageMainImg", i)
              , r = $("#skuPageMainVideo");
            r.hide();
            var g = n.offset()
              , u = $(".zoomImage", i)
              , f = null
              , a = $(".skuImageZoom", i)
              , v = 0
              , nt = 0
              , ut = 0
              , ft = 0;
            u.css("display", "block");
            v = u.width();
            nt = u.height();
            u.css("display", "none");
            u.css("width", v);
            t.click(function(n) {
                if (c == !0)
                    tt();
                else if (v > 0 && nt > 0) {
                    $(".message", t).css("display", "");
                    $(".hoverBg", t).css("display", "");
                    rt();
                    var i = setTimeout(function() {
                        var t = f.clientWidth
                          , r = f.clientHeight;
                        t > 0 && r > 0 && (k = t,
                        d = r,
                        it(n),
                        clearTimeout(i))
                    }, 50);
                    f.onload = function() {}
                    ;
                    u.css("display", "block").animate({
                        width: v
                    }, 200);
                    p.css("display", "block").addClass("gray");
                    l.css("display", "block").addClass("gray");
                    w.css("display", "block").addClass("gray");
                    b.css("display", "block").addClass("gray");
                    c = !0
                }
            });
            a.bind("mouseenter", function() {
                e = n.width();
                s = n.height();
                h = t.width() + 2;
                o = t.height() + 2;
                $(".message", t).css("display", "block");
                $(".hoverBg", t).css("display", "block");
                ut = e / 2;
                ft = s / 2;
                y && t.css("display", "block");
                rt()
            });
            a.bind("mousemove", function(n) {
                it(n)
            });
            a.bind("mouseleave", function() {
                t.css("display", "");
                tt()
            });
            $(".js-skuthumb.video").each(function() {
                var n = $(this);
                n.length && $.getJSON(n.data("srcurl"), {
                    format: "json"
                }, function(t) {
                    n.attr("src", t[0].thumbnail_small)
                })
            });
            $(".js-skuthumb", i).bind("click", function() {
                var u, i, t;
                $(this).attr("scType") == "video" ? (r.length || (a.append('<iframe id="skuPageMainVideo" src="" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="display:none"><\/iframe>'),
                r = $("#skuPageMainVideo")),
                r.attr("height", n.height()),
                r.attr("width", n.width()),
                r.get(0).contentWindow.location.replace($(this).attr("data-videoUrl")),
                n.hide(),
                r.show(),
                y = !1) : (y = !0,
                r.length && (r.remove(),
                r = $("#skuPageMainVideo")),
                n.show(),
                ($(".qImages").attr("data-iszoom") == "false" || $(".qImages").attr("data-iszoom") == undefined) && (u = Adaptive.IsPageAdaptive(),
                u == !0 ? (i = Adaptive.Size(),
                t = null,
                $(this).attr("data-resizeimage") != null && (t = $.parseJSON($(this).attr("data-resizeimage"))),
                t != null && t ? (n.attr("data-resizeimage", $(this).attr("data-resizeimage")),
                i > 1024 ? (n.attr("class", "skuImageXLL"),
                n.attr("src", t["1025to1450"]),
                n.attr("data-screenSize", i)) : (n.attr("class", "skuImageSTD"),
                n.attr("src", t["0to1024"]),
                n.attr("data-screenSize", i))) : n.attr("src", $(this).attr("data-mainimage"))) : n.attr("src", $(this).attr("data-mainimage"))));
                n.attr("data-zoomimage", $(this).attr("data-zoomimage"))
            });
            $(".videoThumbnail").length && $(".videoThumbnail").bind("click", function() {
                $(this).parent().find(".js-skuthumb").click()
            });
            i.data("bound", !0)
        }
    });
    $("#toggleThumbNail").length && $("#toggleThumbNail").click(function() {
        var n = $(".s7Thumbs").find($(".carousel")), i = n.find($(".carouselInner")), r = (i.data("videoindex") / n.data("itemsperpage")).toFixed(), t;
        if (i.length)
            if ($(this).text() == $(this).data("showvideos")) {
                for ($(this).text($(this).data("showimages")),
                t = 0; t < r; t++)
                    n.find(".scRight").mousedown();
                i.animate({
                    top: -n.data("itemheight") * i.data("videoindex")
                }, 1e3);
                n.find(".scRight").addClass("ScrPhRight")
            } else {
                for ($(this).text($(this).data("showvideos")),
                t = r; t >= 0; t--)
                    n.find(".scLeft ").mousedown();
                i.animate({
                    top: 0
                }, 1e3);
                n.find(".scLeft").addClass("ScrPhLeft ")
            }
    })
}
function openList1(n) {
    $(".modelType").hide().removeClass("selected");
    $("#modelType_" + n).show().addClass("selected");
    $(".it_search").show();
    $(".it_searchHdr").html($("#HdnMachineTypeName_" + n).val());
    MatchMaker != null && MatchMaker.Reset()
}
var cpnDisclaimers, fxStopOld, showOld, hideOld, tooltip, LightBox, ScriptHelper, Scene7, CountDownOffer, changeValFromToID, $promise, FormValidationHelper, QViewHelper, Nav, PaidLoyaltyProgram, StickyFtr, SearchSuggest, AjaxSuggest, floatingCartTimer, addedSku, CartPreview, counter, InkTonerFinderScripts, CouponClipper, QuillReview;
(function(n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}
)(typeof window != "undefined" ? window : this, function(n, t) {
    function ii(n) {
        var t = !!n && "length"in n && n.length
          , r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }
    function ri(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if (typeof t == "string") {
            if (pe.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) > -1 !== r
        })
    }
    function kr(n, t) {
        do
            n = n[t];
        while (n && n.nodeType !== 1);return n
    }
    function we(n) {
        var t = {};
        return i.each(n.match(s) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function dr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", v),
        n.removeEventListener("load", v)) : (u.detachEvent("onreadystatechange", v),
        n.detachEvent("onload", v))
    }
    function v() {
        (u.addEventListener || n.event.type === "load" || u.readyState === "complete") && (dr(),
        i.ready())
    }
    function nu(n, t, r) {
        if (r === undefined && n.nodeType === 1) {
            var u = "data-" + t.replace(ke, "-$1").toLowerCase();
            if (r = n.getAttribute(u),
            typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : be.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else
                r = undefined
        }
        return r
    }
    function fi(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
                return !1;
        return !0
    }
    function tu(n, t, r, u) {
        if (ot(n)) {
            var s, e, h = i.expando, l = n.nodeType, o = l ? i.cache : n, f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || r !== undefined || typeof t != "string")
                return f || (f = l ? n[h] = c.pop() || i.guid++ : h),
                o[f] || (o[f] = l ? {} : {
                    toJSON: i.noop
                }),
                (typeof t == "object" || typeof t == "function") && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)),
                e = o[f],
                u || (e.data || (e.data = {}),
                e = e.data),
                r !== undefined && (e[i.camelCase(t)] = r),
                typeof t == "string" ? (s = e[t],
                s == null && (s = e[i.camelCase(t)])) : s = e,
                s
        }
    }
    function iu(n, t, u) {
        if (ot(n)) {
            var e, s, h = n.nodeType, f = h ? i.cache : n, o = h ? n[i.expando] : i.expando;
            if (f[o]) {
                if (t && (e = u ? f[o] : f[o].data,
                e)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t),
                    t = t in e ? [t] : t.split(" ")),
                    s = t.length; s--; )
                        delete e[t[s]];
                    if (u ? !fi(e) : !i.isEmptyObject(e))
                        return
                }
                (u || (delete f[o].data,
                fi(f[o]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[o] : f[o] = undefined)
            }
        }
    }
    function ru(n, t, r, u) {
        var h, e = 1, l = 20, c = u ? function() {
            return u.cur()
        }
        : function() {
            return i.css(n, t, "")
        }
        , s = c(), o = r && r[3] || (i.cssNumber[t] ? "" : "px"), f = (i.cssNumber[t] || o !== "px" && +s) && oi.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do
                e = e || ".5",
                f = f / e,
                i.style(n, t, f + o);
            while (e !== (e = c() / s) && e !== 1 && --l)
        }
        return r && (f = +f || +s || 0,
        h = r[1] ? f + (r[1] + 1) * r[2] : +r[2],
        u && (u.unit = o,
        u.start = f,
        u.end = h)),
        h
    }
    function ou(n) {
        var i = eu.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function f(n, t) {
        var e, u, o = 0, r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : undefined;
        if (!r)
            for (r = [],
            e = n.childNodes || n; (u = e[o]) != null; o++)
                !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function ci(n, t) {
        for (var u, r = 0; (u = n[r]) != null; r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function de(n) {
        si.test(n.type) && (n.defaultChecked = n.checked)
    }
    function hu(n, t, u, e, s) {
        for (var l, h, k, c, w, b, v, d = n.length, y = ou(t), a = [], p = 0; p < d; p++)
            if (h = n[p],
            h || h === 0)
                if (i.type(h) === "object")
                    i.merge(a, h.nodeType ? [h] : h);
                else if (su.test(h)) {
                    for (c = c || y.appendChild(t.createElement("div")),
                    w = (uu.exec(h) || ["", ""])[1].toLowerCase(),
                    v = o[w] || o._default,
                    c.innerHTML = v[1] + i.htmlPrefilter(h) + v[2],
                    l = v[0]; l--; )
                        c = c.lastChild;
                    if (!r.leadingWhitespace && hi.test(h) && a.push(t.createTextNode(hi.exec(h)[0])),
                    !r.tbody)
                        for (h = w === "table" && !li.test(h) ? c.firstChild : v[1] === "<table>" && !li.test(h) ? c : 0,
                        l = h && h.childNodes.length; l--; )
                            i.nodeName(b = h.childNodes[l], "tbody") && !b.childNodes.length && h.removeChild(b);
                    for (i.merge(a, c.childNodes),
                    c.textContent = ""; c.firstChild; )
                        c.removeChild(c.firstChild);
                    c = y.lastChild
                } else
                    a.push(t.createTextNode(h));
        for (c && y.removeChild(c),
        r.appendChecked || i.grep(f(a, "input"), de),
        p = 0; h = a[p++]; ) {
            if (e && i.inArray(h, e) > -1) {
                s && s.push(h);
                continue
            }
            if (k = i.contains(h.ownerDocument, h),
            c = f(y.appendChild(h), "script"),
            k && ci(c),
            u)
                for (l = 0; h = c[l++]; )
                    fu.test(h.type || "") && u.push(h)
        }
        return c = null,
        y
    }
    function vt() {
        return !0
    }
    function rt() {
        return !1
    }
    function au() {
        try {
            return u.activeElement
        } catch (n) {}
    }
    function vi(n, t, r, u, f, e) {
        var o, s;
        if (typeof t == "object") {
            typeof r != "string" && (u = u || r,
            r = undefined);
            for (s in t)
                vi(n, s, r, u, t[s], e);
            return n
        }
        if (u == null && f == null ? (f = r,
        u = r = undefined) : f == null && (typeof r == "string" ? (f = u,
        u = undefined) : (f = u,
        u = r,
        r = undefined)),
        f === !1)
            f = rt;
        else if (!f)
            return n;
        return e === 1 && (o = f,
        f = function(n) {
            return i().off(n),
            o.apply(this, arguments)
        }
        ,
        f.guid = o.guid || (o.guid = i.guid++)),
        n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }
    function yu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function pu(n) {
        return n.type = (i.find.attr(n, "type") !== null) + "/" + n.type,
        n
    }
    function wu(n) {
        var t = fo.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function bu(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; f < o; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function so(n, t) {
        var u, e, f;
        if (t.nodeType === 1) {
            if (u = t.nodeName.toLowerCase(),
            !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events)
                    i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            u === "script" && t.text !== n.text ? (pu(t).text = n.text,
            wu(t)) : u === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML),
            r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : u === "input" && si.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
            t.value !== n.value && (t.value = n.value)) : u === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (u === "input" || u === "textarea") && (t.defaultValue = n.defaultValue)
        }
    }
    function k(n, t, u, e) {
        t = sr.apply([], t);
        var l, o, a, h, p, c, s = 0, v = n.length, b = v - 1, y = t[0], w = i.isFunction(y);
        if (w || v > 1 && typeof y == "string" && !r.checkClone && uo.test(y))
            return n.each(function(i) {
                var r = n.eq(i);
                w && (t[0] = y.call(this, i, r.html()));
                k(r, t, u, e)
            });
        if (v && (c = hu(t, n[0].ownerDocument, !1, n, e),
        l = c.firstChild,
        c.childNodes.length === 1 && (c = l),
        l || e)) {
            for (h = i.map(f(c, "script"), pu),
            a = h.length; s < v; s++)
                o = c,
                s !== b && (o = i.clone(o, !0, !0),
                a && i.merge(h, f(o, "script"))),
                u.call(n[s], o, s);
            if (a)
                for (p = h[h.length - 1].ownerDocument,
                i.map(h, wu),
                s = 0; s < a; s++)
                    o = h[s],
                    fu.test(o.type || "") && !i._data(o, "globalEval") && i.contains(p, o) && (o.src ? i._evalUrl && i._evalUrl(o.src) : i.globalEval((o.text || o.textContent || o.innerHTML || "").replace(eo, "")));
            c = l = null
        }
        return n
    }
    function ku(n, t, r) {
        for (var u, o = t ? i.filter(t, n) : n, e = 0; (u = o[e]) != null; e++)
            r || u.nodeType !== 1 || i.cleanData(f(u)),
            u.parentNode && (r && i.contains(u.ownerDocument, u) && ci(f(u, "script")),
            u.parentNode.removeChild(u));
        return n
    }
    function du(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body)
          , u = i.css(r[0], "display");
        return r.detach(),
        u
    }
    function yt(n) {
        var r = u
          , t = pi[n];
        return t || (t = du(n, r),
        t !== "none" && t || (ht = (ht || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement),
        r = (ht[0].contentWindow || ht[0].contentDocument).document,
        r.write(),
        r.close(),
        t = du(n, r),
        ht.detach()),
        pi[n] = t),
        t
    }
    function bi(n, t) {
        return {
            get: function() {
                if (n()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }
    function ef(n) {
        if (n in ff)
            return n;
        for (var i = n.charAt(0).toUpperCase() + n.slice(1), t = uf.length; t--; )
            if (n = uf[t] + i,
            n in ff)
                return n
    }
    function of(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++)
            (r = n[u],
            r.style) && (e[u] = i._data(r, "olddisplay"),
            f = r.style.display,
            t ? (e[u] || f !== "none" || (r.style.display = ""),
            r.style.display === "" && st(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = st(r),
            (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; u < s; u++)
            (r = n[u],
            r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }
    function sf(n, t, i) {
        var r = lo.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function hf(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2)
            r === "margin" && (o += i.css(n, r + b[e], !0, f)),
            u ? (r === "content" && (o -= i.css(n, "padding" + b[e], !0, f)),
            r !== "margin" && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f),
            r !== "padding" && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
        return o
    }
    function cf(n, t, u) {
        var o = !0
          , f = t === "width" ? n.offsetWidth : n.offsetHeight
          , e = d(n)
          , s = r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box";
        if (f <= 0 || f == null) {
            if (f = p(n, t, e),
            (f < 0 || f == null) && (f = n.style[t]),
            pt.test(f))
                return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + hf(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }
    function e(n, t, i, r, u) {
        return new e.prototype.init(n,t,i,r,u)
    }
    function vf() {
        return n.setTimeout(function() {
            ut = undefined
        }),
        ut = i.now()
    }
    function bt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
            r = b[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function yf(n, t, i) {
        for (var u, f = (h.tweeners[t] || []).concat(h.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function vo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this, y = {}, o = n.style, c = n.nodeType && st(n), e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"),
        s.unqueued == null && (s.unqueued = 0,
        w = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || w()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height"in t || "width"in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY],
        h = i.css(n, "display"),
        b = h === "none" ? i._data(n, "olddisplay") || yt(n.nodeName) : h,
        b === "inline" && i.css(n, "float") === "none" && (r.inlineBlockNeedsLayout && yt(n.nodeName) !== "inline" ? o.zoom = 1 : o.display = "inline-block"));
        u.overflow && (o.overflow = "hidden",
        r.shrinkWrapBlocks() || l.always(function() {
            o.overflow = u.overflow[0];
            o.overflowX = u.overflow[1];
            o.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f],
            lf.exec(a)) {
                if (delete t[f],
                p = p || a === "toggle",
                a === (c ? "hide" : "show"))
                    if (a === "show" && e && e[f] !== undefined)
                        c = !0;
                    else
                        continue;
                y[f] = e && e[f] || i.style(n, f)
            } else
                h = undefined;
        if (i.isEmptyObject(y))
            (h === "none" ? yt(n.nodeName) : h) === "inline" && (o.display = h);
        else {
            e ? "hidden"in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in y)
                    i.style(n, t, y[t])
            });
            for (f in y)
                v = yf(c ? e[f] : 0, f, l),
                f in e || (e[f] = v.start,
                c && (v.end = v.start,
                v.start = f === "width" || f === "height" ? 1 : 0))
        }
    }
    function yo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function h(n, t, r) {
        var f, o, s = 0, a = h.prefilters.length, e = i.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var s = ut || vf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, f = u.tweens.length; r < f; r++)
                u.tweens[r].run(i);
            return e.notifyWith(n, [u, i, t]),
            i < 1 && f ? t : (e.resolveWith(n, [u]),
            !1)
        }, u = e.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {},
                easing: i.easing._default
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: ut || vf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i < r; i++)
                    u.tweens[i].run(1);
                return t ? (e.notifyWith(n, [u, 1, 0]),
                e.resolveWith(n, [u, t])) : e.rejectWith(n, [u, t]),
                this
            }
        }), c = u.props;
        for (yo(c, u.opts.specialEasing); s < a; s++)
            if (f = h.prefilters[s].call(u, n, c, u.opts),
            f)
                return i.isFunction(f.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(f.stop, f)),
                f;
        return i.map(c, yf, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(l, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function nt(n) {
        return i.attr(n, "class") || ""
    }
    function re(n) {
        return function(t, r) {
            typeof t != "string" && (r = t,
            t = "*");
            var u, f = 0, e = t.toLowerCase().match(s) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    u.charAt(0) === "+" ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function ue(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o)
                        return !(h = s)
                } else
                    return t.dataTypes.unshift(s),
                    e(s),
                    !1
            }),
            h
        }
        var f = {}
          , o = n === tr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function rr(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function ts(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes; r[0] === "*"; )
            r.shift(),
            e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0]in i)
            u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u)
            return u !== r[0] && r.unshift(u),
            i[u]
    }
    function is(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift(),
            u)
                if (u === "*")
                    u = e;
                else if (e !== "*" && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]],
                            f)) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function rs(n) {
        return n.style && n.style.display || i.css(n, "display")
    }
    function us(n) {
        if (!i.contains(n.ownerDocument || u, n))
            return !0;
        while (n && n.nodeType === 1) {
            if (rs(n) === "none" || n.type === "hidden")
                return !0;
            n = n.parentNode
        }
        return !1
    }
    function ur(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || es.test(n) ? u(n, i) : ur(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u)
            });
        else if (r || i.type(t) !== "object")
            u(n, t);
        else
            for (f in t)
                ur(n + "[" + f + "]", t[f], r, u)
    }
    function fr() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function ee() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function oe(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var c = [], u = n.document, a = c.slice, sr = c.concat, ti = c.push, hr = c.indexOf, lt = {}, ce = lt.toString, tt = lt.hasOwnProperty, r = {}, cr = "1.12.4", i = function(n, t) {
        return new i.fn.init(n,t)
    }, le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, ve = /-([\da-z])/gi, ye = function(n, t) {
        return t.toUpperCase()
    }, w, ui, yr, pr, wr, br, s, at, gr, o, su, li, ht, pi, d, p, tf, ut, wt, lf, af, pf, wf, kf, df, dt, er, ni, or, se, he;
    i.fn = i.prototype = {
        jquery: cr,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return n != null ? n < 0 ? this[n + this.length] : this[n] : a.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ti,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
        for (typeof n == "boolean" && (h = n,
        n = arguments[u] || {},
        u++),
        typeof n == "object" || i.isFunction(n) || (n = {}),
        u === c && (n = this,
        u--); u < c; u++)
            if ((o = arguments[u]) != null)
                for (f in o)
                    (r = n[f],
                    t = o[f],
                    n !== t) && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1,
                    s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {},
                    n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (cr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function(n) {
            return i.type(n) === "array"
        }
        ,
        isWindow: function(n) {
            return n != null && n == n.window
        },
        isNumeric: function(n) {
            var t = n && n.toString();
            return !i.isArray(n) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            if (!r.ownFirst)
                for (t in n)
                    return tt.call(n, t);
            for (t in n)
                ;
            return t === undefined || tt.call(n, t)
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? lt[ce.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(ae, "ms-").replace(ve, ye)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t) {
            var r, i = 0;
            if (ii(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1)
                        break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1)
                        break;
            return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(le, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (ii(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ti.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (hr)
                    return hr.call(t, n, i);
                for (r = t.length,
                i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; i < r; )
                n[u++] = t[i++];
            if (r !== r)
                while (t[i] !== undefined)
                    n[u++] = t[i++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++)
                u = !t(n[r], r),
                u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0, f = [];
            if (ii(n))
                for (e = n.length; r < e; r++)
                    u = t(n[r], r, i),
                    u != null && f.push(u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    u != null && f.push(u);
            return sr.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return (typeof t == "string" && (f = n[t],
            t = n,
            n = f),
            !i.isFunction(n)) ? undefined : (u = a.call(arguments, 2),
            r = function() {
                return n.apply(t || this, u.concat(a.call(arguments)))
            }
            ,
            r.guid = n.guid = n.guid || i.guid++,
            r)
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    typeof Symbol == "function" && (i.fn[Symbol.iterator] = c[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        lt["[object " + t + "]"] = t.toLowerCase()
    });
    w = function(n) {
        function u(n, t, r, u) {
            var l, w, a, s, nt, d, y, g, p = t && t.ownerDocument, v = t ? t.nodeType : 9;
            if (r = r || [],
            typeof n != "string" || !n || v !== 1 && v !== 9 && v !== 11)
                return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t),
            t = t || i,
            h)) {
                if (v !== 11 && (d = sr.exec(n)))
                    if (l = d[1]) {
                        if (v === 9)
                            if (a = t.getElementById(l)) {
                                if (a.id === l)
                                    return r.push(a),
                                    r
                            } else
                                return r;
                        else if (p && (a = p.getElementById(l)) && et(t, a) && a.id === l)
                            return r.push(a),
                            r
                    } else {
                        if (d[2])
                            return k.apply(r, t.getElementsByTagName(n)),
                            r;
                        if ((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName)
                            return k.apply(r, t.getElementsByClassName(l)),
                            r
                    }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (v !== 1)
                        p = t,
                        g = n;
                    else if (t.nodeName.toLowerCase() !== "object") {
                        for ((s = t.getAttribute("id")) ? s = s.replace(hr, "\\$&") : t.setAttribute("id", s = e),
                        y = ft(n),
                        w = y.length,
                        nt = yi.test(s) ? "#" + s : "[id='" + s + "']"; w--; )
                            y[w] = nt + " " + yt(y[w]);
                        g = y.join(",");
                        p = gt.test(n) && ii(t.parentNode) || t
                    }
                    if (g)
                        try {
                            return k.apply(r, p.querySelectorAll(g)),
                            r
                        } catch (tt) {} finally {
                            s === e && t.removeAttribute("id")
                        }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }
        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function l(n) {
            return n[e] = !0,
            n
        }
        function a(n) {
            var t = i.createElement("div");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ti(n, i) {
            for (var r = n.split("|"), u = r.length; u--; )
                t.attrHandle[r[u]] = i
        }
        function wi(n, t) {
            var i = t && n
              , r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }
        function it(n) {
            return l(function(t) {
                return t = +t,
                l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ii(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }
        function bi() {}
        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++)
                i += n[t].value;
            return i
        }
        function ri(n, t, i) {
            var r = t.dir
              , u = i && r === "parentNode"
              , f = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (t.nodeType === 1 || u)
                        return n(t, i, f)
            }
            : function(t, i, o) {
                var s, h, c, l = [v, f];
                if (o) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || u) && n(t, i, o))
                            return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || u) {
                            if (c = t[e] || (t[e] = {}),
                            h = c[t.uniqueID] || (c[t.uniqueID] = {}),
                            (s = h[r]) && s[0] === v && s[1] === f)
                                return l[2] = s[2];
                            if (h[r] = l,
                            l[2] = n(t, i, o))
                                return !0
                        }
            }
        }
        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function ar(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++)
                u(n, t[r], i);
            return i
        }
        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                h && t.push(f));
            return o
        }
        function fi(n, t, i, r, u, f) {
            return r && !r[e] && (r = fi(r)),
            u && !u[e] && (u = fi(u, f)),
            l(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, b = f || ar(t || "*", o.nodeType ? [o] : o, []), v = n && (f || !t) ? pt(b, p, n, o, s) : b, h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = pt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = pt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : k.apply(e, h)
            })
        }
        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                return n === o
            }, c, !0), a = ri(function(n) {
                return nt(o, n) > -1
            }, c, !0), f = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; i < s; i++)
                if (u = t.relative[n[i].type])
                    f = [ri(ui(f), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches),
                    u[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    f.push(u)
                }
            return ui(f)
        }
        function vr(n, r) {
            var f = r.length > 0
              , e = n.length > 0
              , o = function(o, s, c, l, a) {
                var y, nt, d, g = 0, p = "0", tt = o && [], w = [], it = ht, rt = o || e && t.find.TAG("*", a), ut = v += it == null ? 1 : Math.random() || .1, ft = rt.length;
                for (a && (ht = s === i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                    if (e && y) {
                        for (nt = 0,
                        s || y.ownerDocument === i || (b(y),
                        c = !h); d = n[nt++]; )
                            if (d(y, s || i, c)) {
                                l.push(y);
                                break
                            }
                        a && (v = ut)
                    }
                    f && ((y = !d && y) && g--,
                    o && tt.push(y))
                }
                if (g += p,
                f && p !== g) {
                    for (nt = 0; d = r[nt++]; )
                        d(tt, w, s, c);
                    if (o) {
                        if (g > 0)
                            while (p--)
                                tt[p] || w[p] || (w[p] = gi.call(l));
                        w = pt(w)
                    }
                    k.apply(l, w);
                    a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                }
                return a && (v = ut,
                ht = it),
                tt
            };
            return f ? l(o) : o
        }
        var rt, f, t, st, oi, ft, wt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date, c = n.document, v = 0, ki = 0, hi = ni(), ci = ni(), lt = ni(), bt = function(n, t) {
            return n === t && (ut = !0),
            0
        }, li = -2147483648, di = {}.hasOwnProperty, g = [], gi = g.pop, nr = g.push, k = g.push, ai = g.slice, nt = function(n, t) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]", dt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)", tr = new RegExp(r + "+","g"), at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), ir = new RegExp("^" + r + "*," + r + "*"), rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]","g"), fr = new RegExp(dt), yi = new RegExp("^" + tt + "$"), vt = {
            ID: new RegExp("^#(" + tt + ")"),
            CLASS: new RegExp("^\\.(" + tt + ")"),
            TAG: new RegExp("^(" + tt + "|[*])"),
            ATTR: new RegExp("^" + vi),
            PSEUDO: new RegExp("^" + dt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
            bool: new RegExp("^(?:" + kt + ")$","i"),
            needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)","i")
        }, er = /^(?:input|select|textarea|button)$/i, or = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, hr = /'|\\/g, y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        }, pi = function() {
            b()
        };
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (yr) {
            k = {
                apply: g.length ? function(n, t) {
                    nr.apply(n, ai.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        f = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ;
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l === i || l.nodeType !== 9 || !l.documentElement ? i : (i = l,
            s = i.documentElement,
            h = !oi(i),
            (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)),
            f.attributes = a(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            f.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            f.getElementsByClassName = ot.test(i.getElementsByClassName),
            f.getById = a(function(n) {
                return s.appendChild(n).id = e,
                !i.getElementsByName || !i.getElementsByName(e).length
            }),
            f.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }
            ,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete t.find.ID,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            t.find.TAG = f.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++])
                        i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = f.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName != "undefined" && h)
                    return t.getElementsByClassName(n)
            }
            ,
            d = [],
            o = [],
            (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]")
            }),
            a(function(n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })),
            (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                f.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", dt)
            }),
            o = o.length && new RegExp(o.join("|")),
            d = d.length && new RegExp(d.join("|")),
            v = ot.test(s.compareDocumentPosition),
            et = v || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            bt = v ? function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1,
                r & 1 || !f.sortDetached && t.compareDocumentPosition(n) === r) ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : r & 4 ? -1 : 1
            }
            : function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (o && s) {
                    if (o === s)
                        return wi(n, t)
                } else
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }
            ,
            i)
        }
        ;
        u.matches = function(n, t) {
            return u(n, null, null, t)
        }
        ;
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n),
            t = t.replace(ur, "='$1']"),
            f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))
                try {
                    var r = ct.call(n, t);
                    if (r || f.disconnectedMatch || n.document && n.document.nodeType !== 11)
                        return r
                } catch (e) {}
            return u(t, i, null, [n]).length > 0
        }
        ;
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n),
            et(n, t)
        }
        ;
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var e = t.attrHandle[r.toLowerCase()]
              , u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : undefined;
            return u !== undefined ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        }
        ;
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        u.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ut = !f.detectDuplicates,
            w = !f.sortStable && n.slice(0),
            n.sort(bt),
            ut) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return w = null,
            n
        }
        ;
        st = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string")
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (t === 3 || t === 4)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        }
        ;
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    n[2] === "~=" && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")),
                    n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "",
                        t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth"
                      , o = n.slice(-4) !== "last"
                      , f = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling", d = t.parentNode, nt = f && t.nodeName.toLowerCase(), g = !h && !f, l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k]; )
                                        if (f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1)
                                            return !1;
                                    b = k = n === "only" && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild],
                            o && g) {
                                for (c = d,
                                y = c[e] || (c[e] = {}),
                                w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                                p = w[n] || [],
                                a = p[0] === v && p[1],
                                l = a && p[2],
                                c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop(); )
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t,
                            y = c[e] || (c[e] = {}),
                            w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                            p = w[n] || [],
                            a = p[0] === v && p[1],
                            l = a),
                            l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[e] || (c[e] = {}),
                                    w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                                    w[n] = [v, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--; )
                            u = nt(n, f[e]),
                            n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, f)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = []
                      , r = []
                      , i = wt(n.replace(at, "$1"));
                    return i[e] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: l(function(n) {
                    return yi.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || i.indexOf(n + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return or.test(n.nodeName)
                },
                input: function(n) {
                    return er.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[rt] = cr(rt);
        for (rt in {
            submit: !0,
            reset: !0
        })
            t.pseudos[rt] = lr(rt);
        return bi.prototype = t.filters = t.pseudos,
        t.setFilters = new bi,
        ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (r = n,
            h = [],
            c = t.preFilter; r; ) {
                (!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r),
                h.push(s = []));
                e = !1;
                (f = rr.exec(r)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }),
                r = r.slice(e.length));
                for (o in t.filter)
                    (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    r = r.slice(e.length));
                if (!e)
                    break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }
        ,
        wt = u.compile = function(n, t) {
            var r, u = [], f = [], i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)),
                r = t.length; r--; )
                    i = ei(t[r]),
                    i[e] ? u.push(i) : f.push(i);
                i = lt(n, vr(f, u));
                i.selector = n
            }
            return i
        }
        ,
        si = u.select = function(n, i, r, u) {
            var s, e, o, a, v, l = typeof n == "function" && n, c = !u && ft(n = l.selector || n);
            if (r = r || [],
            c.length === 1) {
                if (e = c[0] = c[0].slice(0),
                e.length > 2 && (o = e[0]).type === "ID" && f.getById && i.nodeType === 9 && h && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0],
                    i)
                        l && (i = i.parentNode);
                    else
                        return r;
                    n = n.slice(e.shift().value.length)
                }
                for (s = vt.needsContext.test(n) ? 0 : e.length; s--; ) {
                    if (o = e[s],
                    t.relative[a = o.type])
                        break;
                    if ((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1),
                        n = u.length && yt(e),
                        !n)
                            return k.apply(r, u),
                            r;
                        break
                    }
                }
            }
            return (l || wt(n, c))(u, i, !h, r, !i || gt.test(n) && ii(i.parentNode) || i),
            r
        }
        ,
        f.sortStable = e.split("").sort(bt).join("") === e,
        f.detectDuplicates = !!ut,
        b(),
        f.sortDetached = a(function(n) {
            return n.compareDocumentPosition(i.createElement("div")) & 1
        }),
        a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            n.firstChild.getAttribute("href") === "#"
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }),
        f.attributes && a(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            n.firstChild.getAttribute("value") === ""
        }) || ti("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input")
                return n.defaultValue
        }),
        a(function(n) {
            return n.getAttribute("disabled") == null
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        u
    }(n);
    i.find = w;
    i.expr = w.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = w.uniqueSort;
    i.text = w.getText;
    i.isXMLDoc = w.isXML;
    i.contains = w.contains;
    var it = function(n, t, r) {
        for (var u = [], f = r !== undefined; (n = n[t]) && n.nodeType !== 9; )
            if (n.nodeType === 1) {
                if (f && i(n).is(r))
                    break;
                u.push(n)
            }
        return u
    }
      , lr = function(n, t) {
        for (var i = []; n; n = n.nextSibling)
            n.nodeType === 1 && n !== t && i.push(n);
        return i
    }
      , ar = i.expr.match.needsContext
      , vr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , pe = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r = [], u = this, f = u.length;
            if (typeof n != "string")
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < f; t++)
                        if (i.contains(u[t], this))
                            return !0
                }));
            for (t = 0; t < f; t++)
                i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        filter: function(n) {
            return this.pushStack(ri(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ri(this, n || [], !0))
        },
        is: function(n) {
            return !!ri(this, typeof n == "string" && ar.test(n) ? i(n) : n || [], !1).length
        }
    });
    yr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    pr = i.fn.init = function(n, t, r) {
        var f, e;
        if (!n)
            return this;
        if (r = r || ui,
        typeof n == "string") {
            if (f = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : yr.exec(n),
            f && (f[1] || !t)) {
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t,
                    i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                    vr.test(f[1]) && i.isPlainObject(t))
                        for (f in t)
                            i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                if (e = u.getElementById(f[2]),
                e && e.parentNode) {
                    if (e.id !== f[2])
                        return ui.find(n);
                    this.length = 1;
                    this[0] = e
                }
                return this.context = u,
                this.selector = n,
                this
            }
            return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this.context = this[0] = n,
        this.length = 1,
        this) : i.isFunction(n) ? typeof r.ready != "undefined" ? r.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector,
        this.context = n.context),
        i.makeArray(n, this))
    }
    ;
    pr.prototype = i.fn;
    ui = i(u);
    wr = /^(?:parents|prev(?:Until|All))/;
    br = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = ar.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return it(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return it(n, "parentNode", i)
        },
        next: function(n) {
            return kr(n, "nextSibling")
        },
        prev: function(n) {
            return kr(n, "previousSibling")
        },
        nextAll: function(n) {
            return it(n, "nextSibling")
        },
        prevAll: function(n) {
            return it(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return it(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return it(n, "previousSibling", i)
        },
        siblings: function(n) {
            return lr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return lr(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
            this.length > 1 && (br[n] || (f = i.uniqueSort(f)),
            wr.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    s = /\S+/g;
    i.Callbacks = function(n) {
        n = typeof n == "string" ? we(n) : i.extend({}, n);
        var e, r, h, f, t = [], o = [], u = -1, c = function() {
            for (f = n.once,
            h = e = !0; o.length; u = -1)
                for (r = o.shift(); ++u < t.length; )
                    t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length,
                    r = !1);
            n.memory || (r = !1);
            e = !1;
            f && (t = r ? [] : "")
        }, s = {
            add: function() {
                return t && (r && !e && (u = t.length - 1,
                o.push(r)),
                function f(r) {
                    i.each(r, function(r, u) {
                        i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && i.type(u) !== "string" && f(u)
                    })
                }(arguments),
                r && !e && c()),
                this
            },
            remove: function() {
                return i.each(arguments, function(n, r) {
                    for (var f; (f = i.inArray(r, t, f)) > -1; )
                        t.splice(f, 1),
                        f <= u && u--
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : t.length > 0
            },
            empty: function() {
                return t && (t = []),
                this
            },
            disable: function() {
                return f = o = [],
                t = r = "",
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return f = !0,
                r || s.disable(),
                this
            },
            locked: function() {
                return !!f
            },
            fireWith: function(n, t) {
                return f || (t = t || [],
                t = [n, t.slice ? t.slice() : t],
                o.push(t),
                e || c()),
                this
            },
            fire: function() {
                return s.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!h
            }
        };
        return s
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return n != null ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = a.call(arguments), r = u.length, e = r !== 1 || n && i.isFunction(n.promise) ? r : 0, f = e === 1 ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? a.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, o, c, s;
            if (r > 1)
                for (o = new Array(r),
                c = new Array(r),
                s = new Array(r); t < r; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().progress(h(t, c, o)).done(h(t, s, u)).fail(f.reject) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0,
            n !== !0 && --i.readyWait > 0) || (at.resolveWith(u, [i]),
            i.fn.triggerHandler && (i(u).triggerHandler("ready"),
            i(u).off("ready")))
        }
    });
    i.ready.promise = function(t) {
        if (!at)
            if (at = i.Deferred(),
            u.readyState !== "complete" && (u.readyState === "loading" || u.documentElement.doScroll))
                if (u.addEventListener)
                    u.addEventListener("DOMContentLoaded", v),
                    n.addEventListener("load", v);
                else {
                    u.attachEvent("onreadystatechange", v);
                    n.attachEvent("onload", v);
                    var r = !1;
                    try {
                        r = n.frameElement == null && u.documentElement
                    } catch (e) {}
                    r && r.doScroll && function f() {
                        if (!i.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (t) {
                                return n.setTimeout(f, 50)
                            }
                            dr();
                            i.ready()
                        }
                    }()
                }
            else
                n.setTimeout(i.ready);
        return at.promise(t)
    }
    ;
    i.ready.promise();
    for (gr in i(r))
        break;
    r.ownFirst = gr === "0";
    r.inlineBlockNeedsLayout = !1;
    i(function() {
        var f, t, n, i;
        (n = u.getElementsByTagName("body")[0],
        n && n.style) && (t = u.createElement("div"),
        i = u.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        typeof t.style.zoom != "undefined" && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        r.inlineBlockNeedsLayout = f = t.offsetWidth === 3,
        f && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var n = u.createElement("div");
        r.deleteExpando = !0;
        try {
            delete n.test
        } catch (t) {
            r.deleteExpando = !1
        }
        n = null
    }();
    var ot = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()]
          , r = +n.nodeType || 1;
        return r !== 1 && r !== 9 ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    }
      , be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ke = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !fi(n)
        },
        data: function(n, t, i) {
            return tu(n, t, i)
        },
        removeData: function(n, t) {
            return iu(n, t)
        },
        _data: function(n, t, i) {
            return tu(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return iu(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0], o = r && r.attributes;
            if (n === undefined) {
                if (this.length && (e = i.data(r),
                r.nodeType === 1 && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--; )
                        o[f] && (u = o[f].name,
                        u.indexOf("data-") === 0 && (u = i.camelCase(u.slice(5)),
                        nu(r, u, e[u])));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? nu(r, n, i.data(r, n)) : undefined
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n)
                return t = (t || "fx") + "queue",
                u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            u === "inprogress" && (u = r.shift(),
            e--);
            u && (t === "fx" && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n,
            n = "fx",
            r--),
            arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1, e = i.Deferred(), u = this, o = this.length, s = function() {
                --f || e.resolveWith(u, [u])
            };
            for (typeof n != "string" && (t = n,
            n = undefined),
            n = n || "fx"; o--; )
                r = i._data(u[o], n + "queueHooks"),
                r && r.empty && (f++,
                r.empty.add(s));
            return s(),
            e.promise(t)
        }
    }),
    function() {
        var n;
        r.shrinkWrapBlocks = function() {
            if (n != null)
                return n;
            n = !1;
            var t, i, r;
            if (i = u.getElementsByTagName("body")[0],
            i && i.style)
                return t = u.createElement("div"),
                r = u.createElement("div"),
                r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                i.appendChild(r).appendChild(t),
                typeof t.style.zoom != "undefined" && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                t.appendChild(u.createElement("div")).style.width = "5px",
                n = t.offsetWidth !== 3),
                i.removeChild(r),
                n
        }
    }();
    var ei = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , oi = new RegExp("^(?:([+-])=|)(" + ei + ")([a-z%]*)$","i")
      , b = ["Top", "Right", "Bottom", "Left"]
      , st = function(n, t) {
        return n = t || n,
        i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    };
    var y = function(n, t, r, u, f, e, o) {
        var s = 0
          , c = n.length
          , h = r == null;
        if (i.type(r) === "object") {
            f = !0;
            for (s in r)
                y(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0,
        i.isFunction(u) || (o = !0),
        h && (o ? (t.call(n, u),
        t = null) : (h = t,
        t = function(n, t, r) {
            return h.call(i(n), r)
        }
        )),
        t))
            for (; s < c; s++)
                t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    }
      , si = /^(?:checkbox|radio)$/i
      , uu = /<([\w:-]+)/
      , fu = /^$|\/(?:java|ecma)script/i
      , hi = /^\s+/
      , eu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    (function() {
        var n = u.createElement("div")
          , f = u.createDocumentFragment()
          , t = u.createElement("input");
        n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        r.leadingWhitespace = n.firstChild.nodeType === 3;
        r.tbody = !n.getElementsByTagName("tbody").length;
        r.htmlSerialize = !!n.getElementsByTagName("link").length;
        r.html5Clone = u.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>";
        t.type = "checkbox";
        t.checked = !0;
        f.appendChild(t);
        r.appendChecked = t.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
        f.appendChild(n);
        t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        r.noCloneEvent = !!n.addEventListener;
        n[i.expando] = 1;
        r.attributes = !n.getAttribute(i.expando)
    }
    )();
    o = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    };
    o.optgroup = o.option;
    o.tbody = o.tfoot = o.colgroup = o.caption = o.thead;
    o.th = o.td;
    su = /<|&#?\w+;/;
    li = /<tbody/i,
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            i = "on" + t,
            (r[t] = i in n) || (f.setAttribute(i, "t"),
            r[t] = f.attributes[i].expando === !1);
        f = null
    }();
    var ai = /^(?:input|select|textarea)$/i
      , ge = /^key/
      , no = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , cu = /^(?:focusinfocus|focusoutblur)$/
      , lu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var p, v, w, y, o, h, c, l, e, b, k, a = i._data(n);
            if (a) {
                for (r.handler && (y = r,
                r = y.handler,
                f = y.selector),
                r.guid || (r.guid = i.guid++),
                (v = a.events) || (v = a.events = {}),
                (h = a.handle) || (h = a.handle = function(n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(h.elem, arguments) : undefined
                }
                ,
                h.elem = n),
                t = (t || "").match(s) || [""],
                w = t.length; w--; )
                    (p = lu.exec(t[w]) || [],
                    e = k = p[1],
                    b = (p[2] || "").split(".").sort(),
                    e) && (o = i.event.special[e] || {},
                    e = (f ? o.delegateType : o.bindType) || e,
                    o = i.event.special[e] || {},
                    c = i.extend({
                        type: e,
                        origType: k,
                        data: u,
                        handler: r,
                        guid: r.guid,
                        selector: f,
                        needsContext: f && i.expr.match.needsContext.test(f),
                        namespace: b.join(".")
                    }, y),
                    (l = v[e]) || (l = v[e] = [],
                    l.delegateCount = 0,
                    o.setup && o.setup.call(n, u, b, h) !== !1 || (n.addEventListener ? n.addEventListener(e, h, !1) : n.attachEvent && n.attachEvent("on" + e, h))),
                    o.add && (o.add.call(n, c),
                    c.handler.guid || (c.handler.guid = r.guid)),
                    f ? l.splice(l.delegateCount++, 0, c) : l.push(c),
                    i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(s) || [""],
                p = t.length; p--; ) {
                    if (h = lu.exec(t[p]) || [],
                    e = k = h[1],
                    w = (h[2] || "").split(".").sort(),
                    !e) {
                        for (e in a)
                            i.event.remove(n, e + t[p], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType : c.bindType) || e,
                    l = a[e] || [],
                    h = h[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    b = y = l.length; y--; )
                        o = l[y],
                        (f || k === o.origType) && (!r || r.guid === o.guid) && (!h || h.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1),
                        o.selector && l.delegateCount--,
                        c.remove && c.remove.call(n, o));
                    b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
                    delete a[e])
                }
                i.isEmptyObject(a) && (delete v.handle,
                i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u], s = tt.call(t, "type") ? t.type : t, v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((o = h = f = f || u,
            f.nodeType !== 3 && f.nodeType !== 8) && !cu.test(s + i.event.triggered) && (s.indexOf(".") > -1 && (v = s.split("."),
            s = v.shift(),
            v.sort()),
            a = s.indexOf(":") < 0 && "on" + s,
            t = t[i.expando] ? t : new i.Event(s,typeof t == "object" && t),
            t.isTrigger = e ? 2 : 3,
            t.namespace = v.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = undefined,
            t.target || (t.target = f),
            r = r == null ? [t] : i.makeArray(r, [t]),
            c = i.event.special[s] || {},
            e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s,
                    cu.test(p + s) || (o = o.parentNode); o; o = o.parentNode)
                        y.push(o),
                        h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0; (o = y[w++]) && !t.isPropagationStopped(); )
                    t.type = w > 1 ? p : c.bindType || s,
                    l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"),
                    l && l.apply(o, r),
                    l = a && o[a],
                    l && l.apply && ot(o) && (t.result = l.apply(o, r),
                    t.result === !1 && t.preventDefault());
                if (t.type = s,
                !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && ot(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = undefined;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, o, f, r, t, s = [], h = a.call(arguments), c = (i._data(this, "events") || {})[n.type] || [], u = i.event.special[n.type] || {};
            if (h[0] = n,
            n.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c),
                e = 0; (r = s[e++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = r.elem,
                    o = 0; (t = r.handlers[o++]) && !n.isImmediatePropagationStopped(); )
                        (!n.rnamespace || n.rnamespace.test(t.namespace)) && (n.handleObj = t,
                        n.data = t.data,
                        f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h),
                        f !== undefined && (n.result = f) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, t) {
            var e, u, f, o, h = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && (n.type !== "click" || isNaN(n.button) || n.button < 1))
                for (; r != this; r = r.parentNode || this)
                    if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
                        for (u = [],
                        e = 0; e < s; e++)
                            o = t[e],
                            f = o.selector + " ",
                            u[f] === undefined && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length),
                            u[f] && u.push(o);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }),
            h
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, s, r = n.type, f = n, t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = no.test(r) ? this.mouseHooks : ge.test(r) ? this.keyHooks : {}),
            s = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(f),
            e = s.length; e--; )
                o = s[e],
                n[o] = f[o];
            return n.target || (n.target = f.srcElement || u),
            n.target.nodeType === 3 && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button, o = t.fromElement;
                return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u,
                r = e.documentElement,
                i = e.body,
                n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o),
                n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== au() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === au() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && this.type === "checkbox" && this.click)
                        return this.click(),
                        !1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t);
            u.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? vt : rt) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: rt,
        isPropagationStopped: rt,
        isImmediatePropagationStopped: rt,
        preventDefault: function() {
            var n = this.originalEvent;
            (this.isDefaultPrevented = vt,
            n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            (this.isPropagationStopped = vt,
            n && !this.isSimulated) && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = vt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    r.submit || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target
                  , t = i.nodeName(r, "input") || i.nodeName(r, "button") ? i.prop(r, "form") : undefined;
                t && !i._data(t, "submit") && (i.event.add(t, "submit._submit", function(n) {
                    n._submitBubble = !0
                }),
                i._data(t, "submit", !0))
            })
        },
        postDispatch: function(n) {
            n._submitBubble && (delete n._submitBubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n))
        },
        teardown: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.remove(this, "._submit")
        }
    });
    r.change || (i.event.special.change = {
        setup: function() {
            if (ai.test(this.nodeName))
                return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                    n.originalEvent.propertyName === "checked" && (this._justChanged = !0)
                }),
                i.event.add(this, "click._change", function(n) {
                    this._justChanged && !n.isTrigger && (this._justChanged = !1);
                    i.event.simulate("change", this, n)
                })),
                !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                ai.test(t.nodeName) && !i._data(t, "change") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n)
                }),
                i._data(t, "change", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !ai.test(this.nodeName)
        }
    });
    r.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0),
                i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return vi(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return vi(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if (typeof n == "object") {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t,
            t = undefined),
            r === !1 && (r = rt),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    var to = / jQuery\d+="(?:null|\d+)"/g
      , vu = new RegExp("<(?:" + eu + ")[\\s/>]","i")
      , io = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , ro = /<script|<style|<link/i
      , uo = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fo = /^true\/(.*)/
      , eo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , oo = ou(u)
      , yi = oo.appendChild(u.createElement("div"));
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(io, "<$1><\/$2>")
        },
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !vu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (yi.innerHTML = n.outerHTML,
            yi.removeChild(s = yi.firstChild)),
            (!r.noCloneEvent || !r.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = f(s),
                h = f(n),
                o = 0; (c = h[o]) != null; ++o)
                    e[o] && so(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n),
                    e = e || f(s),
                    o = 0; (c = h[o]) != null; o++)
                        bu(c, e[o]);
                else
                    bu(n, s);
            return e = f(s, "script"),
            e.length > 0 && ci(e, !l && f(n, "script")),
            e = h = c = null,
            s
        },
        cleanData: function(n, t) {
            for (var u, o, f, e, l = 0, s = i.expando, h = i.cache, a = r.attributes, v = i.event.special; (u = n[l]) != null; l++)
                if ((t || ot(u)) && (f = u[s],
                e = f && h[f],
                e)) {
                    if (e.events)
                        for (o in e.events)
                            v[o] ? i.event.remove(u, o) : i.removeEvent(u, o, e.handle);
                    h[f] && (delete h[f],
                    a || typeof u.removeAttribute == "undefined" ? u[s] = undefined : u.removeAttribute(s),
                    c.push(f))
                }
        }
    });
    i.fn.extend({
        domManip: k,
        detach: function(n) {
            return ku(this, n, !0)
        },
        remove: function(n) {
            return ku(this, n)
        },
        text: function(n) {
            return y(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return k(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = yu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return k(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = yu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return k(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return k(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; (n = this[t]) != null; t++) {
                for (n.nodeType === 1 && i.cleanData(f(n, !1)); n.firstChild; )
                    n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
            t = t == null ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return y(this, function(n) {
                var t = this[0] || {}
                  , u = 0
                  , e = this.length;
                if (n === undefined)
                    return t.nodeType === 1 ? t.innerHTML.replace(to, "") : undefined;
                if (typeof n == "string" && !ro.test(n) && (r.htmlSerialize || !vu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !o[(uu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; u < e; u++)
                            t = this[u] || {},
                            t.nodeType === 1 && (i.cleanData(f(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (s) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return k(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(f(this)),
                r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                ti.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    pi = {
        HTML: "block",
        BODY: "block"
    };
    var gu = /^margin/
      , pt = new RegExp("^(" + ei + ")(?!px)[a-z%]+$","i")
      , wi = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    }
      , nf = u.documentElement;
    (function() {
        function o() {
            var i, r, o = u.documentElement;
            o.appendChild(s);
            t.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            f = c = a = !1;
            h = l = !0;
            n.getComputedStyle && (r = n.getComputedStyle(t),
            f = (r || {}).top !== "1%",
            a = (r || {}).marginLeft === "2px",
            c = (r || {
                width: "4px"
            }).width === "4px",
            t.style.marginRight = "50%",
            h = (r || {
                marginRight: "4px"
            }).marginRight === "4px",
            i = t.appendChild(u.createElement("div")),
            i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            i.style.marginRight = i.style.width = "0",
            t.style.width = "1px",
            l = !parseFloat((n.getComputedStyle(i) || {}).marginRight),
            t.removeChild(i));
            t.style.display = "none";
            e = t.getClientRects().length === 0;
            e && (t.style.display = "",
            t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
            t.childNodes[0].style.borderCollapse = "separate",
            i = t.getElementsByTagName("td"),
            i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            e = i[0].offsetHeight === 0,
            e && (i[0].style.display = "",
            i[1].style.display = "none",
            e = i[0].offsetHeight === 0));
            o.removeChild(s)
        }
        var f, h, c, e, l, a, s = u.createElement("div"), t = u.createElement("div");
        t.style && (t.style.cssText = "float:left;opacity:.5",
        r.opacity = t.style.opacity === "0.5",
        r.cssFloat = !!t.style.cssFloat,
        t.style.backgroundClip = "content-box",
        t.cloneNode(!0).style.backgroundClip = "",
        r.clearCloneStyle = t.style.backgroundClip === "content-box",
        s = u.createElement("div"),
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        t.innerHTML = "",
        s.appendChild(t),
        r.boxSizing = t.style.boxSizing === "" || t.style.MozBoxSizing === "" || t.style.WebkitBoxSizing === "",
        i.extend(r, {
            reliableHiddenOffsets: function() {
                return f == null && o(),
                e
            },
            boxSizingReliable: function() {
                return f == null && o(),
                c
            },
            pixelMarginRight: function() {
                return f == null && o(),
                h
            },
            pixelPosition: function() {
                return f == null && o(),
                f
            },
            reliableMarginRight: function() {
                return f == null && o(),
                l
            },
            reliableMarginLeft: function() {
                return f == null && o(),
                a
            }
        }))
    }
    )();
    tf = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (d = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = n),
        i.getComputedStyle(t)
    }
    ,
    p = function(n, t, u) {
        var o, s, h, f, e = n.style;
        return u = u || d(n),
        f = u ? u.getPropertyValue(t) || u[t] : undefined,
        f !== "" && f !== undefined || i.contains(n.ownerDocument, n) || (f = i.style(n, t)),
        u && !r.pixelMarginRight() && pt.test(f) && gu.test(t) && (o = e.width,
        s = e.minWidth,
        h = e.maxWidth,
        e.minWidth = e.maxWidth = e.width = f,
        f = u.width,
        e.width = o,
        e.minWidth = s,
        e.maxWidth = h),
        f === undefined ? f : f + ""
    }
    ) : nf.currentStyle && (d = function(n) {
        return n.currentStyle
    }
    ,
    p = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || d(n),
        r = i ? i[t] : undefined,
        r == null && u && u[t] && (r = u[t]),
        pt.test(r) && !tf.test(t) && (o = u.left,
        f = n.runtimeStyle,
        e = f && f.left,
        e && (f.left = n.currentStyle.left),
        u.left = t === "fontSize" ? "1em" : r,
        r = u.pixelLeft + "px",
        u.left = o,
        e && (f.left = e)),
        r === undefined ? r : r + "" || "auto"
    }
    );
    var ki = /alpha\([^)]*\)/i
      , ho = /opacity\s*=\s*([^)]*)/i
      , co = /^(none|table(?!-c[ea]).+)/
      , lo = new RegExp("^(" + ei + ")(.*)$","i")
      , ao = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , rf = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , uf = ["Webkit", "O", "Moz", "ms"]
      , ff = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = p(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var e, h, o, s = i.camelCase(t), c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = ef(s) || s),
                o = i.cssHooks[t] || i.cssHooks[s],
                u !== undefined) {
                    if (h = typeof u,
                    h === "string" && (e = oi.exec(u)) && e[1] && (u = ru(n, t, e),
                    h = "number"),
                    u == null || u !== u)
                        return;
                    if (h === "number" && (u += e && e[3] || (i.cssNumber[s] ? "" : "px")),
                    r.clearCloneStyle || u !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit"),
                    !o || !("set"in o) || (u = o.set(n, u, f)) !== undefined)
                        try {
                            c[t] = u
                        } catch (l) {}
                } else
                    return o && "get"in o && (e = o.get(n, !1, f)) !== undefined ? e : c[t]
            }
        },
        css: function(n, t, r, u) {
            var s, f, o, e = i.camelCase(t);
            return (t = i.cssProps[e] || (i.cssProps[e] = ef(e) || e),
            o = i.cssHooks[t] || i.cssHooks[e],
            o && "get"in o && (f = o.get(n, !0, r)),
            f === undefined && (f = p(n, t, u)),
            f === "normal" && t in rf && (f = rf[t]),
            r === "" || r) ? (s = parseFloat(f),
            r === !0 || isFinite(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return co.test(i.css(n, "display")) && n.offsetWidth === 0 ? wi(n, ao, function() {
                        return cf(n, t, u)
                    }) : cf(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && d(n);
                return sf(n, u, f ? hf(n, t, f, r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box", e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return ho.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , f = u && u.filter || r.filter || "";
            (r.zoom = 1,
            (t >= 1 || t === "") && i.trim(f.replace(ki, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"),
            t === "" || u && !u.filter)) || (r.filter = ki.test(f) ? f.replace(ki, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = bi(r.reliableMarginRight, function(n, t) {
        if (t)
            return wi(n, {
                display: "inline-block"
            }, p, [n, "marginRight"])
    });
    i.cssHooks.marginLeft = bi(r.reliableMarginLeft, function(n, t) {
        if (t)
            return (parseFloat(p(n, "marginLeft")) || (i.contains(n.ownerDocument, n) ? n.getBoundingClientRect().left - wi(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            }) : 0)) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++)
                    f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        gu.test(n) || (i.cssHooks[n + t].set = sf)
    });
    i.fn.extend({
        css: function(n, t) {
            return y(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (i.isArray(t)) {
                    for (f = d(n),
                    e = t.length; u < e; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return of(this, !0)
        },
        hide: function() {
            return of(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                st(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : e.propHooks._default.set(this),
            this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""),
                !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    lf = /^(?:toggle|show|hide)$/;
    af = /queueHooks$/;
    i.Animation = i.extend(h, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return ru(i.elem, n, oi.exec(t), i),
                i
            }
            ]
        },
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.match(s);
            for (var r, u = 0, f = n.length; u < f; u++)
                r = n[u],
                h.tweeners[r] = h.tweeners[r] || [],
                h.tweeners[r].unshift(t)
        },
        prefilters: [vo],
        prefilter: function(n, t) {
            t ? h.prefilters.unshift(n) : h.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (u.queue == null || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n)
              , e = i.speed(t, r, u)
              , f = function() {
                var t = h(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return typeof n != "string" && (r = t,
            t = n,
            n = undefined),
            t && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = n != null && n + "queueHooks"
                  , e = i.timers
                  , f = i._data(this);
                if (t)
                    f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f)
                        f[t] && f[t].stop && af.test(t) && u(f[t]);
                for (t = e.length; t--; )
                    e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(r),
                    o = !1,
                    e.splice(t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                for (f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = u.length; t--; )
                    u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0),
                    u.splice(t, 1));
                for (t = 0; t < o; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers, t = 0;
        for (ut = i.now(); t < n.length; t++)
            r = n[t],
            r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        ut = undefined
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        wt || (wt = n.setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.stop = function() {
        n.clearInterval(wt);
        wt = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx ? i.fx.speeds[t] || t : t,
        r = r || "fx",
        this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    }
    ,
    function() {
        var i, n = u.createElement("input"), t = u.createElement("div"), f = u.createElement("select"), e = f.appendChild(u.createElement("option"));
        t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        n.setAttribute("type", "checkbox");
        t.appendChild(n);
        i = t.getElementsByTagName("a")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = t.className !== "t";
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = i.getAttribute("href") === "/a";
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = n.getAttribute("value") === "";
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = n.value === "t"
    }();
    pf = /\r/g;
    wf = /[\x20\t\r\n\f]+/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n),
            this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n,
                u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })),
                t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()],
            t && "get"in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value,
            typeof r == "string" ? r.replace(pf, "") : r == null ? "" : r) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : i.trim(i.text(n)).replace(wf, " ")
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = n.type === "select-one" || u < 0, h = f ? null : [], c = f ? u + 1 : s.length, e = u < 0 ? c : f ? u : 0; e < c; e++)
                        if (t = s[e],
                        (t.selected || e === u) && (r.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            f)
                                return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--; )
                        if (r = u[e],
                        i.inArray(i.valHooks.option.get(r), o) > -1)
                            try {
                                r.selected = f = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return f || (n.selectedIndex = -1),
                    u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        }
        )
    });
    var ft, bf, l = i.expr.attrHandle, di = /^(?:checked|selected)$/i, g = r.getSetAttribute, kt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return y(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute == "undefined")
                    return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(),
                f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bf : ft)),
                r !== undefined) {
                    if (r === null) {
                        i.removeAttr(n, t);
                        return
                    }
                    return f && "set"in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""),
                    r)
                }
                return f && "get"in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t),
                u == null ? undefined : u)
            }
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t),
                        u && (n.value = u),
                        t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(s);
            if (f && n.nodeType === 1)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) ? kt && g || !di.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                    n.removeAttribute(g ? r : u)
        }
    });
    bf = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : kt && g || !di.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = l[t] || i.find.attr;
        l[t] = kt && g || !di.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = l[t],
            l[t] = u,
            u = r(n, t, i) != null ? t.toLowerCase() : null,
            l[t] = f),
            u
        }
        : function(n, t, r) {
            if (!r)
                return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    kt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            if (i.nodeName(n, "input"))
                n.defaultValue = t;
            else
                return ft && ft.set(n, t, r)
        }
    });
    g || (ft = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)),
            r.value = t += "",
            i === "value" || t === n.getAttribute(i) ? t : void 0
        }
    },
    l.id = l.name = l.coords = function(n, t, i) {
        var r;
        if (!i)
            return (r = n.getAttributeNode(t)) && r.value !== "" ? r.value : null
    }
    ,
    i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified)
                return i.value
        },
        set: ft.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ft.set(n, t === "" ? !1 : t, i)
        }
    },
    i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if (i === "")
                    return n.setAttribute(t, "auto"),
                    i
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || undefined
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    kf = /^(?:input|select|textarea|button|object)$/i;
    df = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return y(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = undefined;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2)
                return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                r !== undefined) ? u && "set"in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get"in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : kf.test(n.nodeName) || df.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    dt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, r, t, u, f, h, e, c = 0;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, nt(this)))
                });
            if (typeof n == "string" && n)
                for (o = n.match(s) || []; r = this[c++]; )
                    if (u = nt(r),
                    t = r.nodeType === 1 && (" " + u + " ").replace(dt, " "),
                    t) {
                        for (h = 0; f = o[h++]; )
                            t.indexOf(" " + f + " ") < 0 && (t += f + " ");
                        e = i.trim(t);
                        u !== e && i.attr(r, "class", e)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, u, f, h, e, c = 0;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, nt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if (typeof n == "string" && n)
                for (o = n.match(s) || []; r = this[c++]; )
                    if (u = nt(r),
                    t = r.nodeType === 1 && (" " + u + " ").replace(dt, " "),
                    t) {
                        for (h = 0; f = o[h++]; )
                            while (t.indexOf(" " + f + " ") > -1)
                                t = t.replace(" " + f + " ", " ");
                        e = i.trim(t);
                        u !== e && i.attr(r, "class", e)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return typeof t == "boolean" && r === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t)
            }) : this.each(function() {
                var t, f, u, e;
                if (r === "string")
                    for (f = 0,
                    u = i(this),
                    e = n.match(s) || []; t = e[f++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    (n === undefined || r === "boolean") && (t = nt(this),
                    t && i._data(this, "__className__", t),
                    i.attr(this, "class", t || n === !1 ? "" : i._data(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++]; )
                if (t.nodeType === 1 && (" " + nt(t) + " ").replace(dt, " ").indexOf(i) > -1)
                    return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    var po = n.location
      , gi = i.now()
      , nr = /\?/
      , wo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse)
            return n.JSON.parse(t + "");
        var f, r = null, u = i.trim(t + "");
        return u && !i.trim(u.replace(wo, function(n, t, i, u) {
            return (f && t && (r = 0),
            r === 0) ? n : (f = i || t,
            r += !u - !i,
            "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    }
    ;
    i.parseXML = function(t) {
        var r, u;
        if (!t || typeof t != "string")
            return null;
        try {
            n.DOMParser ? (u = new n.DOMParser,
            r = u.parseFromString(t, "text/xml")) : (r = new n.ActiveXObject("Microsoft.XMLDOM"),
            r.async = "false",
            r.loadXML(t))
        } catch (f) {
            r = undefined
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    }
    ;
    var bo = /#.*$/
      , gf = /([?&])_=[^&]*/
      , ko = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg
      , go = /^(?:GET|HEAD)$/
      , ns = /^\/\//
      , ne = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , te = {}
      , tr = {}
      , ie = "*/".concat("*")
      , ir = po.href
      , et = ne.exec(ir.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ir,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(et[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? rr(rr(n, i.ajaxSettings), t) : rr(i.ajaxSettings, n)
        },
        ajaxPrefilter: re(te),
        ajaxTransport: re(tr),
        ajax: function(t, r) {
            function w(t, r, s, c) {
                var y, rt, it, w, tt, l = r;
                o !== 2 && (o = 2,
                k && n.clearTimeout(k),
                a = undefined,
                b = c || "",
                f.readyState = t > 0 ? 4 : 0,
                y = t >= 200 && t < 300 || t === 304,
                s && (w = ts(u, f, s)),
                w = is(u, w, f, y),
                y ? (u.ifModified && (tt = f.getResponseHeader("Last-Modified"),
                tt && (i.lastModified[e] = tt),
                tt = f.getResponseHeader("etag"),
                tt && (i.etag[e] = tt)),
                t === 204 || u.type === "HEAD" ? l = "nocontent" : t === 304 ? l = "notmodified" : (l = w.state,
                rt = w.data,
                it = w.error,
                y = !it)) : (it = l,
                (t || !l) && (l = "error",
                t < 0 && (t = 0))),
                f.status = t,
                f.statusText = (r || l) + "",
                y ? g.resolveWith(h, [rt, l, f]) : g.rejectWith(h, [f, l, it]),
                f.statusCode(p),
                p = undefined,
                v && d.trigger(y ? "ajaxSuccess" : "ajaxError", [f, u, y ? rt : it]),
                nt.fireWith(h, [f, l]),
                v && (d.trigger("ajaxComplete", [f, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            typeof t == "object" && (r = t,
            t = undefined);
            r = r || {};
            var c, l, e, b, k, v, a, y, u = i.ajaxSetup({}, r), h = u.context || u, d = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, g = i.Deferred(), nt = i.Callbacks("once memory"), p = u.statusCode || {}, tt = {}, it = {}, o = 0, rt = "canceled", f = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (o === 2) {
                        if (!y)
                            for (y = {}; t = ko.exec(b); )
                                y[t[1].toLowerCase()] = t[2];
                        t = y[n.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function() {
                    return o === 2 ? b : null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return o || (n = it[i] = it[i] || n,
                    tt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return o || (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (o < 2)
                            for (t in n)
                                p[t] = [p[t], n[t]];
                        else
                            f.always(n[f.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || rt;
                    return a && a.abort(t),
                    w(0, t),
                    this
                }
            };
            if (g.promise(f).complete = nt.add,
            f.success = f.done,
            f.error = f.fail,
            u.url = ((t || u.url || ir) + "").replace(bo, "").replace(ns, et[1] + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""],
            u.crossDomain == null && (c = ne.exec(u.url.toLowerCase()),
            u.crossDomain = !!(c && (c[1] !== et[1] || c[2] !== et[2] || (c[3] || (c[1] === "http:" ? "80" : "443")) !== (et[3] || (et[1] === "http:" ? "80" : "443"))))),
            u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)),
            ue(te, u, r, f),
            o === 2)
                return f;
            v = i.event && u.global;
            v && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !go.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (nr.test(e) ? "&" : "?") + u.data,
            delete u.data),
            u.cache === !1 && (u.url = gf.test(e) ? e.replace(gf, "$1_=" + gi++) : e + (nr.test(e) ? "&" : "?") + "_=" + gi++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]),
            i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + ie + "; q=0.01" : "") : u.accepts["*"]);
            for (l in u.headers)
                f.setRequestHeader(l, u.headers[l]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || o === 2))
                return f.abort();
            rt = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                f[l](u[l]);
            if (a = ue(tr, u, r, f),
            a) {
                if (f.readyState = 1,
                v && d.trigger("ajaxSend", [f, u]),
                o === 2)
                    return f;
                u.async && u.timeout > 0 && (k = n.setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    o = 1;
                    a.send(tt, w)
                } catch (ut) {
                    if (o < 2)
                        w(-1, ut);
                    else
                        throw ut;
                }
            } else
                w(-1, "No Transport");
            return f
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u,
            u = r,
            r = undefined),
            i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ;
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return r.reliableHiddenOffsets() ? n.offsetWidth <= 0 && n.offsetHeight <= 0 && !n.getClientRects().length : us(n)
    }
    ;
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    ;
    var fs = /%20/g
      , es = /\[\]$/
      , fe = /\r?\n/g
      , os = /^(?:submit|button|image|reset|file)$/i
      , ss = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [], f = function(n, t) {
            t = i.isFunction(t) ? t() : t == null ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                f(this.name, this.value)
            });
        else
            for (r in n)
                ur(r, n[r], t, f);
        return u.join("&").replace(fs, "+")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ss.test(this.nodeName) && !os.test(n) && (this.checked || !si.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(fe, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(fe, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
        return this.isLocal ? ee() : u.documentMode > 8 ? fr() : /^(get|post|head|put|delete|options)$/i.test(this.type) && fr() || ee()
    }
    : fr;
    var hs = 0
      , gt = {}
      , ct = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function() {
        for (var n in gt)
            gt[n](undefined, !0)
    }),
    r.cors = !!ct && "withCredentials"in ct,
    ct = r.ajax = !!ct,
    ct && i.ajaxTransport(function(t) {
        if (!t.crossDomain || r.cors) {
            var u;
            return {
                send: function(r, f) {
                    var o, e = t.xhr(), s = ++hs;
                    if (e.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        r[o] !== undefined && e.setRequestHeader(o, r[o] + "");
                    e.send(t.hasContent && t.data || null);
                    u = function(n, r) {
                        var o, c, h;
                        if (u && (r || e.readyState === 4))
                            if (delete gt[s],
                            u = undefined,
                            e.onreadystatechange = i.noop,
                            r)
                                e.readyState !== 4 && e.abort();
                            else {
                                h = {};
                                o = e.status;
                                typeof e.responseText == "string" && (h.text = e.responseText);
                                try {
                                    c = e.statusText
                                } catch (l) {
                                    c = ""
                                }
                                o || !t.isLocal || t.crossDomain ? o === 1223 && (o = 204) : o = h.text ? 200 : 404
                            }
                        h && f(o, c, h, e.getAllResponseHeaders())
                    }
                    ;
                    t.async ? e.readyState === 4 ? n.setTimeout(u) : e.onreadystatechange = gt[s] = u : u()
                },
                abort: function() {
                    u && u(undefined, !0)
                }
            }
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        i || f(200, "success"))
                    }
                    ;
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    if (t)
                        t.onload(undefined, !0)
                }
            }
        }
    }),
    er = [],
    ni = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = er.pop() || i.expando + "_" + gi++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ni.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp")
            return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
            t.converters["script json"] = function() {
                return o || i.error(f + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            e = n[f],
            n[f] = function() {
                o = arguments
            }
            ,
            u.always(function() {
                e === undefined ? i(n).removeProp(f) : n[f] = e;
                t[f] && (t.jsonpCallback = r.jsonpCallback,
                er.push(f));
                o && i.isFunction(e) && e(o[0]);
                o = e = undefined
            }),
            "script"
    }),
    i.parseHTML = function(n, t, r) {
        if (!n || typeof n != "string")
            return null;
        typeof t == "boolean" && (r = t,
        t = !1);
        t = t || u;
        var f = vr.exec(n)
          , e = !r && [];
        return f ? [t.createElement(f[1])] : (f = hu([n], t, e),
        e && e.length && i(e).remove(),
        i.merge([], f.childNodes))
    }
    ,
    or = i.fn.load,
    i.fn.load = function(n, t, r) {
        if (typeof n != "string" && or)
            return or.apply(this, arguments);
        var u, o, s, f = this, e = n.indexOf(" ");
        return e > -1 && (u = i.trim(n.slice(e, n.length)),
        n = n.slice(0, e)),
        i.isFunction(t) ? (r = t,
        t = undefined) : t && typeof t == "object" && (o = "POST"),
        f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, s || [n.responseText, t, n])
            })
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(),
            h = e.top,
            o = e.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using"in t ? t.using.call(n, f) : a.css(f)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return n === undefined ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var t, f, u = {
                top: 0,
                left: 0
            }, r = this[0], e = r && r.ownerDocument;
            if (e)
                return (t = e.documentElement,
                !i.contains(t, r)) ? u : (typeof r.getBoundingClientRect != "undefined" && (u = r.getBoundingClientRect()),
                f = oe(e),
                {
                    top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                })
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, u = this[0];
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                i.nodeName(n[0], "html") || (t = n.offset()),
                t.top += i.css(n[0], "borderTopWidth", !0),
                t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && !i.nodeName(n, "html") && i.css(n, "position") === "static"; )
                    n = n.offsetParent;
                return n || nf
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return y(this, function(n, u, f) {
                var e = oe(n);
                if (f === undefined)
                    return e ? t in e ? e[t] : e.document.documentElement[u] : n[u];
                e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f
            }, n, u, arguments.length, null)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = bi(r.pixelPosition, function(n, r) {
            if (r)
                return r = p(n, t),
                pt.test(r) ? i(n).position()[t] + "px" : r
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || typeof u != "boolean")
                  , o = r || (u === !0 || f === !0 ? "margin" : "border");
                return y(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement,
                    Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : undefined, e, null)
            }
        })
    }),
    i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }),
    i.fn.size = function() {
        return this.length
    }
    ,
    i.fn.andSelf = i.fn.addBack,
    typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }),
    se = n.jQuery,
    he = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = he),
        t && n.jQuery === i && (n.jQuery = se),
        i
    }
    ,
    t || (n.jQuery = n.$ = i),
    i
});
var cookie = new function() {
    function t(n, t) {
        for (var f, i, o = document.cookie.split(";"), s = !1, e = 0; e < o.length; e++) {
            var r = o[e]
              , a = $.trim(r.substring(0, r.indexOf("=")))
              , v = $.trim(r.substring(r.indexOf("=") + 1, r.length));
            if (n.bucket && a == n.bucket.name) {
                s = !0;
                var h = !1
                  , c = !1
                  , u = []
                  , l = v.split("&");
                for (f = 0; f < l.length; f++)
                    i = l[f].split("="),
                    i.length == 2 && (i[0] == n.name ? (h = !0,
                    (n.value || n.value == 0) && !c && (c = !0,
                    i[1] = n.value,
                    u.push(i.join("=")))) : u.push(i.join("=")));
                !h && (n.value || n.value == 0) && u.push(n.name + "=" + n.value);
                document.cookie = n.bucket.name + "=" + u.join("&") + t + ";path=/"
            }
        }
        s == !1 && (n.value || n.value == 0) && (document.cookie = n.bucket.name + "=" + n.name + "=" + n.value + t + ";path=/")
    }
    function i(n, t) {
        document.cookie = n.name + "=" + n.value + t + ";path=/"
    }
    var n = 365;
    this.buckets = {
        func: {
            name: "b_fn",
            temp: !1
        },
        funcTemp: {
            name: "b_fn_t",
            temp: !0
        },
        frameWork: {
            name: "b_fw",
            temp: !1
        },
        frameWorkTemp: {
            name: "b_fw_t",
            temp: !0
        },
        siteSpect: {
            name: "b_ss",
            temp: !1,
            expSec: 1800
        }
    };
    this.Set = function(r) {
        var u, f, e, o;
        if ((r.value != null && (r.value = r.value.toString().replaceAll("/", "/S").replaceAll("&", "/A").replaceAll("=", "/E").replaceAll(";", "/C")),
        !r.name) || r.name == this.buckets.frameWork.name || r.name == this.buckets.frameWorkTemp.name || r.name == this.buckets.func.name || r.name == this.buckets.funcTemp.name)
            return !1;
        u = "";
        (!r.bucket || r.bucket.temp) && (!r.expires || r.bucket) && (r.value || r.value == 0 || r.bucket) || (f = new Date,
        e = n,
        r.value || r.value == 0 || r.bucket || (e = -1),
        o = e * 864e5,
        r.bucket.expSec && r.bucket.expSec > 0 && (o = r.bucket.expSec * 1e3),
        f.setTime(f.getTime() + o),
        u = "; expires=" + f.toGMTString());
        r.bucket ? t(r, u) : i(r, u)
    }
    ;
    this.Get = function(n) {
        for (var i, f, o = document.cookie.split(";"), e = 0; e < o.length; e++) {
            var r = o[e]
              , t = $.trim(r.substring(0, r.indexOf("=")))
              , u = $.trim(r.substring(r.indexOf("=") + 1, r.length));
            if (n.bucket && t == n.bucket.name) {
                if (i = u.indexOf(n.name + "="),
                i >= 0)
                    return i = i + n.name.length + 1,
                    f = u.indexOf("&", i),
                    f < 0 && (f = u.length),
                    u.substring(i, f).replaceAll("/C", ";").replaceAll("/E", "=").replaceAll("/A", "&").replaceAll("/S", "/")
            } else if (n.name == t && t != this.buckets.frameWork.name && t != this.buckets.frameWorkTemp.name && t != this.buckets.func.name && t != this.buckets.funcTemp.name)
                return u.replaceAll("/C", ";").replaceAll("/E", "=").replaceAll("/A", "&").replaceAll("/S", "/")
        }
        return ""
    }
    ;
    this.Remove = function(n) {
        return n.name ? (n.value = "",
        this.Set(n)) : !1
    }
}
  , pageList = ["sku", "supercategory", "homepage", "spotlight", "skuset", "itfinder", "compareskus", "orderhistory", "sharedcart", "brand", "login", "content", "pmpage", "recycle", "payment", "alerts", "returns", "account", "register", "address", "qchome", "invoice", "lists", "itempurchasedreport", "softwaredownloads", "recyclehistory", "accountbalance", "quillcash", "search", "browse", "rebate"]
  , isSticky = !1;
typeof console == "undefined" && (console = {
    log: function() {}
});
var g_minPriceThreshold = 0
  , g_adjustScroll = !1
  , isTriggered = !1;
$(document).ready(function() {
    var n, t;
    try {
        $("#page").Accordion();
        $("#page").customCheckbox();
        $("#page").customRadio();
        $(document).BindQtyInput();
        $(document).BindCouponInput();
        BindClearButtonToInputs()
    } catch (i) {}
    SKUEmailHelper = new SKUEmailNotify;
    $("div.tabMenu").each(function(n, t) {
        $(t).TabMenu()
    });
    Utilities.BindEnter();
    n = !1;
    $("#HdrEmailSignup").click(function() {
        var i = this.getAttribute("href"), t, r;
        n || i || (n = !0,
        t = $(this),
        r = $.ajax({
            cache: !0,
            url: "/Master/EmailPopUp",
            type: "get",
            dataType: "html"
        }).done(function(i) {
            n = !1;
            var u = $("<div id='emailPopUpView'><\/div>").append(i).PopUp({
                button: t,
                showLightBox: !0,
                width: 450
            })
              , r = u.find("form");
            r[0] && r.ValidateForm()
        }))
    });
    try {
        $("#page").setplaceholder()
    } catch (i) {}
    ShowMergeCart();
    ie8 || ie7 || ie6 || $("#PageTypeName").length && (t = $(document.getElementById("PageTypeName")).attr("name"),
    isSticky = $.inArray(t.toLowerCase(), pageList) > -1,
    isSticky && $(window).scroll(function() {
        $(window).scrollTop() >= $("#searchBoxHeader").offset().top && !$("#HeaderRow").hasClass("is-sticky") ? ($("#HeaderRow").addClass("is-sticky"),
        $(".coach_marks").css("top", "-150px")) : $(window).scrollTop() == 0 && ($("#HeaderRow").removeClass("is-sticky"),
        $(".coach_marks").css("top", "0"))
    }));
    $(".promoImageInner").attr("data-showpopup") == "True" && $(".promoImageInner").bind("mouseover", function() {
        var n = $(this);
        n.Tooltip($(".dvSmartBuy").html(), 265, {
            hasCloseButton: !0,
            orientation: 2,
            unique: !0,
            index: 0,
            skin: ""
        })
    });
    $("#hideList").val() === "true" ? ShowMoreHotDeals(".showLessDeals") : ShowMoreHotDeals(".showMoreDeals")
});
cpnDisclaimers = {};
$(window).on("load", function() {
    loadDisclaimers()
});
$.extend($.expr[":"], {
    containsIN: function(n, t, i) {
        return (n.textContent || n.innerText || "").toLowerCase().indexOf((i[3] || "").toLowerCase()) >= 0
    }
});
$(function() {
    var n = {
        setup: function() {
            var n = cookie.Get({
                bucket: cookie.buckets.funcTemp,
                name: "qpdashboard"
            });
            n != undefined && n == "" ? cookie.Set({
                bucket: cookie.buckets.funcTemp,
                name: "qpdashboard",
                value: "1"
            }) : n == "1" ? $(".qp-banner-blue-ribbon, .bottom-strip").removeClass("slideup") : n == "0" && $(".qp-banner-blue-ribbon, .bottom-strip").addClass("slideup")
        },
        toggle: function() {
            var n = cookie.Get({
                bucket: cookie.buckets.funcTemp,
                name: "qpdashboard"
            });
            n == "1" ? ($(".qp-banner-blue-ribbon, .bottom-strip").addClass("slideup"),
            cookie.Set({
                bucket: cookie.buckets.funcTemp,
                name: "qpdashboard",
                value: "0"
            })) : n == "0" && ($(".qp-banner-blue-ribbon, .bottom-strip").removeClass("slideup"),
            cookie.Set({
                bucket: cookie.buckets.funcTemp,
                name: "qpdashboard",
                value: "1"
            }))
        }
    };
    n.setup();
    $(".qp-bnr-show-less, .qp-bnr-show-more").on("click", n.toggle)
});
$.ajaxPrefilter(function(n, t, i) {
    function c(n) {
        typeof n != undefined && (window.location.href = n)
    }
    function p() {
        var r, t;
        if (i.CurrentIndex >= 0) {
            for (r = this.Buckets[n.bucket].length,
            t = 0; t < r; t++)
                t < i.CurrentIndex && (this.Buckets[n.bucket][t].abort(),
                this.Buckets[n.bucket][t].callComplete = !0);
            i.callComplete = !0
        }
    }
    var h, r, v, e, u, f, o, s, y, l, a;
    if (n.type.toUpperCase() === "GET" && window.combinedResults && (h = window.combinedResults[n.url.toLowerCase()],
    h != null && (window.combinedResults._count--,
    window.combinedResults._count < 1 && (window.combinedResults = null),
    i.abort(),
    n.success(h))),
    n.type.toUpperCase() === "POST" && (r = $("input[name^=__RequestVerificationToken]"),
    r && r.length > 0 && (r = $(r[r.length - 1]),
    v = r.attr("name"),
    n.contentType.indexOf("application/json") >= 0 ? n.url += (n.url.indexOf("?") === -1 ? "?" : "&") + r.serialize() : typeof n.data == "string" && n.data.indexOf(v) === -1 ? n.data += (n.data ? "&" : "") + r.serialize() : n.data || (n.processData = !0,
    n.data = r.serialize()))),
    this.Buckets || (this.Buckets = {}),
    n.bucket) {
        for (this.Buckets[n.bucket] || (this.Buckets[n.bucket] = []),
        e = this.Buckets[n.bucket].length,
        u = [],
        f = 0; f < e; f++)
            this.Buckets[n.bucket][f].callComplete || u.push(this.Buckets[n.bucket][f]);
        for (e = u.length; o < e; o++)
            u[n.bucket][o].CurrentIndex = o;
        i.CurrentIndex = u.length;
        u.push(i);
        this.Buckets[n.bucket] = u
    }
    s = n.complete;
    n.complete = function(t, r) {
        var u, f;
        p();
        try {
            u = Utilities.GetRedirectUrlIfExists(t.responseText, n.url);
            !u && typeof AnalyticsHelper != "undefined" && window.AnalyticsHelper.isTaggingEnabled && (f = i.getResponseHeader("content-type"),
            t.responseText = AnalyticsHelper.FilterResponse(n.url, t.responseText, f, "complete"))
        } catch (e) {
            console.log && console.log(e)
        }
        s && s.call(s, t, r)
    }
    ;
    n.success && (y = n.success,
    n.success = function(t) {
        var r = Utilities.GetRedirectUrlIfExists(t), u;
        !r && typeof AnalyticsHelper != "undefined" && window.AnalyticsHelper.isTaggingEnabled && (u = i.getResponseHeader("content-type"),
        t = AnalyticsHelper.FilterResponse(n.url, t, u, "success"));
        r ? c(r) : y(t)
    }
    );
    i.error && (l = i.error,
    i.error = function() {
        l.call(l, function(t) {
            if (Loading.Hide(),
            t) {
                var i = Utilities.GetRedirectUrlIfExists(t.responseText);
                !i && typeof AnalyticsHelper != typeof undefined && window.AnalyticsHelper.IsAjaxUrl(n.url) && window.AnalyticsHelper.isTaggingEnabled && (t.responseText = AnalyticsHelper.UpdateResponse(t, "error"));
                i && c(i)
            }
        })
    }
    );
    i.done && (a = i.done,
    i.done = function(t) {
        a.call(a, function(r) {
            var u = Utilities.GetRedirectUrlIfExists(r), f;
            !u && typeof AnalyticsHelper != "undefined" && window.AnalyticsHelper.isTaggingEnabled && (f = i.getResponseHeader("content-type"),
            r = AnalyticsHelper.FilterResponse(n.url, r, f, "done"));
            u ? c(u) : t.call(t, r)
        })
    }
    )
});
jQuery.ajaxSettings.cache = !1;
Number.prototype.ToCurrency = function() {
    return this.toString().ToCurrency()
}
;
Number.prototype.formatMoney = function(n, t, i) {
    var u = this
      , n = isNaN(n = Math.abs(n)) ? 2 : n
      , t = t == undefined ? "." : t
      , i = i == undefined ? "," : i
      , e = u < 0 ? "-" : ""
      , f = parseInt(u = Math.abs(+u || 0).toFixed(n)) + ""
      , r = (r = f.length) > 3 ? r % 3 : 0;
    return to,
    e + (r ? f.substr(0, r) + i : "") + f.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + i) + (n ? t + Math.abs(u - f).toFixed(n).slice(2) : "")
}
;
var currency = "$"
  , currencySeperator = "."
  , currencyPattern = "0"
  , currencyGroupSeperator = ","
  , currencyGroupSize = "3";
String.prototype.ToCurrency = function() {
    var n = parseFloat(this.replace(currencySeperator, ".")), t, i, r;
    if (n = Math.round(parseFloat(n) * 100) / 100,
    n = n.toString().replace(".", currencySeperator),
    (n == 0 || n == undefined || n == "NaN") && (n = "0"),
    n.indexOf(currencySeperator) < 0 ? n += currencySeperator + "00" : n.indexOf(currencySeperator) == n.length - 2 && (n += "0"),
    n.length > 6) {
        for (t = n.split(currencySeperator),
        n = "",
        i = 0; i < t[0].length; i++)
            n += t[0].charAt(i),
            r = t[0].length - (i + 1),
            r >= currencyGroupSize && r % currencyGroupSize == 0 && (n += currencyGroupSeperator);
        n = n + currencySeperator + t[1]
    }
    return currencyPattern == 1 ? n + currency : currencyPattern == 2 ? currency + "&nbsp;" + n : currencyPattern == 3 ? n + "&nbsp;" + currency : currency + n
}
;
String.prototype.IsNumber = function(n, t) {
    for (var u, i = n.val(), r = 0; r < i.length; r++)
        u = i.charAt(r),
        $.isNumeric(u) || ((t == undefined || t === "") && tooltip.init(n, "Please enter a valid number", 120, {
            index: 18e3
        }),
        n.val(i.replace(/[^0-9\.]+/g, "")));
    var f = 0
      , e = i.charAt(f)
      , o = i.charAt(f + 1)
      , s = i.length;
    return n.hasClass("input.formText.qtyInput") && e == 0 && o == 0 && e != "" && s > 1 && (n.value = 0),
    !0
}
;
String.prototype.replaceAll = function(n, t) {
    return this.split(n).join(t)
}
;
String.prototype.Trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}
;
String.prototype.LTrim = function(n) {
    var t = "" + this;
    return n && t[0] == n ? t.substring(1, t.length) : t.replace(/^\s*/g, "")
}
;
String.prototype.RTrim = function(n) {
    var t = "" + this;
    return n && t[t.length - 1] == n ? t.substring(0, t.length - 1) : t.replace(/\s*$/g, "")
}
;
String.prototype.Format = function(n) {
    for (var t = this, i = n.length; i--; )
        t = t.replace(new RegExp("\\{" + i + "\\}","gm"), n[i]);
    return t
}
;
String.prototype.AddUrlValue = function(n, t) {
    var i = this, r, u, e, f;
    if (i && n && t != undefined) {
        if (r = i.indexOf(n + "="),
        r >= 0) {
            if (u = i.indexOf("&", r + 1),
            u < 0 && (u = i.length),
            e = i.substring(r, u),
            f = e.split("="),
            f[1] == t)
                return i;
            f[1] = t;
            i = i.replace(e, f.join("="))
        } else
            i = i.indexOf("?") < 0 ? i + "?" + n + "=" + t : i + "&" + n + "=" + t;
        return i
    }
    return i || null
}
;
String.prototype.Camelize = function() {
    return this[0].toLowerCase() + this.replace(/-([a-z])/g, function(n, t) {
        return t.toUpperCase()
    }).slice(1)
}
;
jQuery.Event.prototype.TrueMouseOut = function(n) {
    var i = this, t;
    if (n) {
        for (n[0] && (n = n[0]),
        t = i.toElement || i.target || i.relatedTarget; t; ) {
            if (t == n)
                return !1;
            t = t.parentNode
        }
        return !0
    }
}
,
function(n) {
    var t = null;
    n.event.special.easymouseenter = {
        delegateType: "mouseenter",
        bindType: "mouseenter",
        t: null,
        handle: function(i) {
            var r = function() {
                clearTimeout(t);
                n(i.delegateTarget).unbind("mouseleave", r)
            }, u, f;
            n(i.delegateTarget).bind("mouseleave", r);
            u = this;
            f = jQuery.data(i.target);
            t = setTimeout(function() {
                i.handleObj.handler.apply(u, arguments)
            }, 300)
        }
    }
}(jQuery),
function() {
    function n(n, t) {
        var r = Math.abs(n.clientX - t.clientX)
          , u = Math.abs(n.clientY - t.clientY)
          , i = Math.atan(u / r) * 57.295779513082323;
        return i ? i < 70 ? !0 : !1 : !0
    }
    var t = 300;
    jQuery.Event.prototype.isDiagonal = function(t) {
        return n(this, t)
    }
    ;
    jQuery.event.special.onvertical = {
        delegateType: "mousemove",
        bindType: "mousemove",
        t: null,
        handle: function(i) {
            var r, u, f;
            if (i.time = (new Date).getMilliseconds(),
            r = jQuery.data(i.target),
            u = i,
            r.prevLocus && (f = r.prevLocus.time - u.time,
            f < t && n(r.prevLocus, u) == !1))
                return i.handleObj.handler.apply(this, arguments);
            (!r.prevLocus || u.time - r.prevLocus.time > 50) && (r.prevLocus = i);
            r.t && clearTimeout(r.t);
            r.t = setTimeout(function() {
                r.prevLocus = null
            }, 300)
        }
    }
}(jQuery);
Array.prototype.indexOf = function(n) {
    for (var t = 0; t < this.length; t++)
        if (this[t] == n)
            return t;
    return -1
}
;
Array.prototype.remove = function(n) {
    var t, i, r;
    if (typeof n == "number")
        if ($(this[n]).exists())
            t = n;
        else
            return null;
    else if (i = this.indexOf(n),
    i >= 0)
        t = i;
    else
        return null;
    r = this.splice(t, 1)
}
;
fxStopOld = jQuery.fx.stop;
jQuery.fx.stop = function(n) {
    var t = fxStopOld.call(fxStopOld, n);
    return $(document).trigger("HeightChange"),
    t
}
;
showOld = jQuery.fn.show;
hideOld = jQuery.fn.hide;
jQuery.fn.show = function(n) {
    var t = showOld.call(this, n);
    return $(document).trigger("HeightChange"),
    t
}
;
jQuery.fn.hide = function(n) {
    var t = hideOld.call(this, n);
    return $(document).trigger("HeightChange"),
    t
}
;
jQuery.fn.OnEnter = function(n) {
    if (n) {
        var t = $(this)
          , i = function(i) {
            i.keyCode == 13 && (t.hasClass("qtyInput") === !0 ? Utilities.IsValidQty(t) === !0 && n.call(n, t, i) : t.hasClass("couponInputText") == !0 ? Utilities.IsValidCoupon(t) === !0 && n.call(n, t, i) : n.call(n, t, i))
        };
        t.data("UnbindOnEnter", function() {
            t.unbind("keypress", i)
        });
        t.keypress(i)
    }
}
;
jQuery.fn.ScrollTo = function(n, t) {
    if (el = $(this),
    el[0]) {
        var i = el.offset();
        el.data("scrollingTo") || (el.data("scrollingTo", !0),
        $("html, body").animate({
            scrollTop: el.offset().top
        }, t >= 0 ? t : 1e3).promise().done(function() {
            el.data("scrollingTo", !1);
            n && n.call(el)
        }))
    }
    return el
}
;
jQuery.fn.UpdateQSParam = function(n, t, i) {
    var r = new RegExp("([?&])" + t + "=.*?(&|$)","i")
      , u = n.indexOf("?") !== -1 ? "&" : "?";
    return n.match(r) ? n.replace(r, "$1" + t + "=" + i + "$2") : n + u + t + "=" + i
}
;
jQuery.fn.BindQtyInput = function() {
    var n = $(this).find("input.qtyInput");
    n.each(function(n, t) {
        $(t).BindQty()
    })
}
;
jQuery.fn.BindQty = function() {
    var n = $(this);
    if (n.data("initialized") != !0) {
        if (!n.is("input.qtyInput"))
            return;
        Utilities.BindEnter(n);
        n.keyup(function() {
            n.attr("data-UserEdited", "ture");
            var t = $(this).data("ownbrandupdate");
            $("#" + t).length > 0 && ($("#" + t + " .OwnBrandATC .qtyInput").val($(this).val()),
            t != "true" && (isTriggered = !0,
            $("#" + t + " .OwnBrandATC .qtyInput").trigger("keyup")),
            $("#ListType").val() == "19" && MyList.CalculateTotalSavings(n.attr("sku")));
            t == !0 && ($("#ListType").val() == "19" ? (n.parents(".OBItem_" + n.attr("parentsku")).find(".showFavList-" + n.attr("parentsku")).val($(this).val()),
            MyList.CalculateTotalSavings(n.attr("parentsku"))) : ($(".QtyInputWrapper input.qtyInput").val($(this).val()),
            isTriggered || $(".QtyInputWrapper input.qtyInput").trigger("keyup"),
            isTriggered = !1));
            Utilities.IsValidQty(n)
        });
        n.keydown(function(n) {
            var t = n.which ? parseInt(n.which) : parseInt(n.keyCode);
            $(this).attr("data-disabletabbing") == "True" && t == 9 && n.preventDefault()
        });
        n.keypress(function(n) {
            var t = n.which ? parseInt(n.which) : parseInt(n.keyCode)
              , i = String.fromCharCode(t);
            $(this).attr("data-disabletabbing") == "True" && t == 9 && n.preventDefault();
            t == 13 || t == 8 || t == 0 || t == 9 || t == 37 || $.isNumeric(i) || parseInt(n.charCode) == 0 && t == 46 || n.preventDefault()
        });
        n.data("initialized", !0);
        n.attr("data-showminsellqty") == "True" ? Utilities.UpdateSaveStorey(n, !0) : Utilities.UpdateSaveStorey(n)
    }
}
;
jQuery.fn.BindCouponInput = function() {
    var n = $(this).find("input.couponText");
    n.each(function(n, t) {
        t = $(t);
        t.data("initialized") != !0 && (Utilities.BindEnter(t),
        t.keyup(function() {
            Utilities.IsValidCoupon(t)
        }),
        t.data("initialized", !0))
    })
}
;
jQuery.fn.ShowPriceBreak = function() {
    Utilities.ShowPriceBreakInfo($(this))
}
;
jQuery.fn.Accordion = function(n) {
    var t = $(this);
    if (!t.hasClass("accordion")) {
        t.find("div.accordion").each(function(t, i) {
            $(i).Accordion(n)
        });
        return
    }
    if (n && t.data("callback", n),
    t.data("initialized") != !0) {
        var i = t.find("div.AcHeader")
          , r = t.attr("data-option-closeSingle") == "true" ? !0 : !1
          , u = t.attr("data-option-closeSelected") == "true" ? !0 : !1;
        return i.off("click").click(function() {
            var f, i, e, o, s;
            (n = t.data("callback") || n,
            f = $(this).parent(),
            u || !f.hasClass("AcPanelSelected")) && (i = null,
            e = null,
            r == !0 ? f.hasClass("AcPanelSelected") ? e = f.find("div.AcContent") : i = f.find("div.AcContent") : (e = t.find("div.AcPanelSelected div.AcContent"),
            i = f.find("div.AcContent")),
            i != null && (i.stop(),
            o = i.outerHeight(),
            i.css("height", "auto"),
            s = i.outerHeight(),
            i.css("height", o),
            f.removeClass("AcPanel").addClass("AcPanelSelected"),
            i.animate({
                height: s
            }, 250, function() {
                n && n.call(t);
                i.css({
                    height: "auto"
                })
            })),
            e != null && e.each(function(i, r) {
                var u, f;
                r = $(r);
                r.stop();
                u = r.outerHeight();
                r.css("height", u);
                f = 0;
                r.parent().removeClass("AcPanelSelected").addClass("AcPanel");
                r.animate({
                    height: f
                }, 250, function() {
                    n && n.call(t)
                })
            }))
        }),
        t.data("initialized", !0),
        this
    }
}
;
tooltip = new function() {
    function t(t) {
        var f, u, i;
        if (t && (f = t.attr("data-tooltips"),
        f)) {
            var o = f.split(",")
              , r = 0
              , s = 0
              , h = 0
              , c = 0
              , l = 0;
            for (u = 0; u < o.length; u++)
                i = n[o[u]],
                i && (u == 0 ? (c = i.StackDirection,
                l = i.Orientation,
                e(i, t),
                s = i.Left,
                h = i.Width,
                i.ShowTail(),
                r = i.StackDirection == 2 ? i.Top - i.Height - 5 : i.Top + i.Height + 5) : (i.Orientation = l,
                i.StackDirection = c,
                i.Left = s + h - i.Width,
                i.Top = r,
                i.Css += i.Hook.TailRight,
                i.HideTail(),
                r = i.StackDirection == 2 ? r - i.Height - 5 : r + i.Height + 5),
                i.Update())
        }
    }
    function e(n, t) {
        var u = 0, r = 0, l, a = tooltip.stack.below, f = {
            l: $(window).scrollLeft(),
            t: $(window).scrollTop(),
            w: $(window).width(),
            h: $(window).height()
        }, i = t.offset(), e, o, s;
        if (i.top = i.top - parseInt(t.css("padding-top")) - parseInt(t.css("margin-top")) - 12,
        i.left = i.left + parseInt(t.css("padding-left")) + parseInt(t.css("margin-left")),
        i.width = t.outerWidth(),
        i.height = t.outerHeight(),
        n.Orientation == tooltip.orientation.toRight)
            r = i.left + i.width + parseInt(t.css("padding-right")) + parseInt(t.css("margin-right")),
            l = 20,
            u = i.top;
        else if (n.Orientation == tooltip.orientation.toLeft)
            r = i.left - n.Width - parseInt(t.css("padding-left")) + parseInt(t.css("margin-left")) - 14,
            u = i.top;
        else {
            e = i.top + i.height + n.Height;
            e > f.t + f.h && (n.StackDirection = 2);
            n.StackDirection == 2 ? (u = i.top - n.Height - 15,
            n.Css += n.Hook.TailBottom) : (u = i.top + i.height + 15,
            e = u + n.Height,
            e > f.t + f.h && (u = i.top - i.height - 15,
            n.StackDirection = 2));
            var h = i.left
              , c = i.left + i.width - 25
              , r = h;
            f.l > h && (r = f.l);
            r > c && (r = c);
            r > f.w / 2 && (n.Css += n.Hook.TailRight,
            r = i.left + 40 - n.Width);
            o = 0;
            s = 0;
            s += n.options && n.options.adjustX ? n.options.adjustX : 0;
            o += n.options && n.options.adjustY ? n.options.adjustY : 0;
            r += s;
            u += o
        }
        n.Top = u;
        n.Left = r
    }
    var r = "#cooltipPh", u = "#cooltipPhCompare", f = 0, n, i;
    this.T = 2e3;
    this.stack = {
        below: 1,
        top: 2
    };
    this.orientation = {
        toLeft: 1,
        toRight: 2,
        Vertical: 3
    };
    this.skinError = "toolTipError";
    this.skinPromo = "toolTipPromo";
    this.mouseupClose = !0;
    n = {};
    i = function(i, e, o, s) {
        var c = this
          , h = null;
        this.Timeout = 0;
        this.Top = 0;
        this.Left = 0;
        this.Width = 0;
        this.Height = 0;
        this.Id = f++;
        this.Msg = e;
        this.Closing = !1;
        this.Closed = !1;
        this.Css = "";
        this.Hook = {
            TailLeft: " tailLeft",
            TailRight: " tailRight",
            TailBottom: " coolTipBottom"
        };
        this.Orientation = s && s.orientation ? s.orientation : tooltip.orientation.Vertical;
        this.StackDirection = s && s.stackDirection ? s.stackDirection : tooltip.stack.below;
        h = $("<div><\/div>").addClass("coolTip " + (s && s.skin ? s.skin : ""));
        s && s.hasCloseButton && (h.append($("<span><\/span>").bind("click", function() {
            c.Remove();
            t(i)
        }).addClass("coolTipClose").attr({
            alt: "Close"
        })),
        h.click(function(n) {
            n.stopPropagation()
        }));
        h.append($("<div><\/div>").addClass("coolTipTail")).append($("<div><\/div>").addClass("coolTipCont").append($("<div><\/div>").addClass("coolTipContInner").html(e)));
        s && s.index && h.css("z-index", s.index);
        o && h.css("width", o);
        this.HideTail = function() {
            h.find(".coolTipTail").hide()
        }
        ;
        this.ShowTail = function() {
            h.find(".coolTipTail").show()
        }
        ;
        this.Update = function() {
            h.css({
                left: this.Left,
                top: this.Top
            })
        }
        ;
        this.Show = function() {
            h.find(".coolTipTail").addClass();
            this.Top || h.find(".coolTipTail").hide();
            this.Orientation == 1 ? h.find(".coolTipTail").addClass(" coolTipTailRight") : this.Orientation == 2 && h.find(".coolTipTail").addClass(" coolTipTailLeft");
            this.StackDirection == 2 && this.Orientation == 3 && h.find(".coolTipTail").addClass("coolTipBottomTail");
            s && s.compareToolTip ? $(u).append(h) : $(r).append(h);
            this.Width = h.width();
            this.Height = h.height();
            t(i);
            h.addClass(this.Css);
            h.css({
                left: this.Left,
                top: this.Top - 5,
                opacity: "0"
            });
            h.animate({
                top: this.Top,
                opacity: 1
            }, 250, function() {
                s && (s.tipHeight && h.css("top", s.tipHeight),
                s.tipLeft && h.css("left", s.tipLeft));
                s && (s.hasCloseButton || s.mouseover) || (this.Timeout = setTimeout(function() {
                    c.Remove();
                    t(i)
                }, s && s.time ? s.time : tooltip.T))
            })
        }
        ;
        this.Remove = function() {
            var u = [], f = i.attr("data-tooltips"), r, t;
            if (f)
                for (r = f.split(","),
                t = 0; t < r.length; t++)
                    r[t] && r[t] != this.Id && u.push(r[t]);
            i.attr("data-tooltips", u.join(","));
            this.Closing = !0;
            h.animate({
                top: this.Top + 5,
                opacity: 0
            }, 250, function() {
                this.Closed = !0;
                h.remove()
            });
            delete n[this.Id];
            s && s.onclose && s.onclose.call()
        }
        ;
        this.Container = h
    }
    ;
    this.init = function(t, r, u, f) {
        var s, o, e, h, a, l;
        if (!t[0] || !r)
            return !1;
        if (t.attr("data-tooltips"))
            for (s = t.attr("data-tooltips").split(","),
            o = 0; o < s.length; o++)
                if (n[o] !== null && !n[s[o]].Closing && n[s[o]].Msg == r)
                    return !1;
        if (f && f.unique && this.close(),
        f && f.extDisclaimer && !$.isEmptyObject(cpnDisclaimers) && (r = cpnDisclaimers[r]),
        f && !f.mouseupnoClose && $(document).bind("mouseup", function(t) {
            for (var i in n)
                t.TrueMouseOut(n[i].Container) && n[i].Remove()
        }),
        e = new i(t,r,u,f),
        n[e.Id] = e,
        h = "",
        t.attr("data-tooltips") ? (e.HideTail(),
        h = t.attr("data-tooltips") + "," + e.Id) : (e.ShowTail(),
        h = e.Id),
        t.attr("data-tooltips", h),
        a = tooltip.stack.below,
        f && f.stackDirection && (a = f.stackDirection),
        t.attr("data-stackDirection") && (a = t.attr("data-stackDirection")),
        f && f.mouseover) {
            var c = "tMouseOver" + e.Id
              , v = "tMouseOut" + e.Id
              , y = t.data(c);
            y || (l = function() {
                t.data(v, setTimeout(function() {
                    clearTimeout(t.data(c));
                    e.Remove();
                    t.unbind("mEvent", l);
                    t.data(c, null)
                }, 300))
            }
            ,
            t.data(c, setTimeout(function() {
                e.Show()
            }, 300)),
            t.bind("mouseout", l),
            e.Container.bind("mouseover", function() {
                clearTimeout(t.data(v))
            }),
            e.Container.bind("mouseout", l))
        } else
            e.Show();
        return e
    }
    ;
    this.close = function(i) {
        var f, r, u;
        if (i)
            if (typeof i == "string") {
                f = i.split(",");
                for (r in n)
                    for (u = 0; u < f.length; u++)
                        n[r].Id == f[u] && n[r].Remove()
            } else
                i && i.Remove && i.Remove();
        else
            for (r in n)
                n[r].Remove(),
                t()
    }
}
;
jQuery.fn.Tooltip = function(n, t, i) {
    return tooltip.init($(this), n, t, i)
}
;
jQuery.fn.Eoffer = function() {}
;
jQuery.fn.Reposition = function(n, t) {
    return Utilities.Reposition(this, n, t),
    this
}
;
jQuery.fn.BindEnter = function() {
    return Utilities.BindEnter(this)
}
;
jQuery.fn.InitializeStuff = function() {
    var n = $(this);
    n.BindEnter();
    $(n).Accordion();
    $(n).BindQtyInput();
    $(n).BindCouponInput();
    $("div.tabMenu", n).each(function(n, t) {
        $(t).TabMenu()
    });
    Utilities.BindEnter();
    Nav.init(n);
    $("form.customForm", n).each(function(n, t) {
        $(t).ValidateForm()
    });
    n.Carousel();
    n.RenderQtyHelpers && n.RenderQtyHelpers();
    n.UpdateAttr && n.UpdateAttr();
    n.OpenWindowInsideOverlay && n.OpenWindowInsideOverlay("data-shippinglink");
    n.OpenWindowInsideOverlay && n.OpenWindowInsideOverlay("data-parcellink")
}
;
jQuery.fn.PopUp = String.prototype.PopUp = function(n) {
    function u() {
        var i, r;
        $(t).find("#PopUpPlaceHolder") != undefined && $("#PopUpPlaceHolder").parent().next().each(function() {
            $("#PopUpPlaceHolder").parent().next().attr("id") == "popup" && $("#PopUpPlaceHolder").parent().next().remove()
        });
        n && n.unique && delete jQuery.fn.PopUp.Unique[n.unique];
        t.remove();
        i = $("#popup").is(":visible") && !$("#popup").is(":empty") || $("#QViewInfo").is(":visible") && !$("#QViewInfo").is(":empty");
        h && !i && LightBox.Hide();
        n && n.onclose && n.onclose.call(this, t);
        r = !1;
        r || tooltip.close()
    }
    var k = $(this), l = 15e3, f = null, h = !1, a = !1, v = "350px", y = !0, p = !0, r = !1, w = "top:-15px;right:-15px", i = !1, b = "", c = "closewithx", t, e, o, s;
    n && (n.index && (l = n.index),
    n.button && (f = $(n.button)),
    n.adjustScroll && (g_adjustScroll = !0),
    n.cssClass && (b = n.cssClass),
    n.width && (v = n.width + "px"),
    h = n.showLightBox || !1,
    a = n.closePopupOnLightBoxClick == !0 ? !0 : !1,
    y = n.showCloseButton == !1 ? !1 : !0,
    p = n.showCloseIcon == !1 ? !1 : !0,
    r = n.fixed ? !0 : !1,
    i = n.hide,
    n && n.unique && jQuery.fn.PopUp.Unique[n.unique] && jQuery.fn.PopUp.Unique[n.unique].Close(),
    typeof n.scvalue != "undefined" && (c = n.scvalue));
    t = $('<div id="popup" class="popups ' + b + '" style="width:' + v + ";position:" + (r ? "fixed" : "absolute") + ";top:-4000;left:-4000;border:5px solid #555;border-radius:5px;background:#fff;box-shadow:0 0 3px 2px #777;z-index:" + l + (i ? ";display:none;" : "") + '"><\/div>');
    e = $('<a style="margin-right:10px' + (i ? ";display:none;" : "") + '" class="button" tabindex="0">Close<\/a>');
    typeof n.locater == "undefined" ? (o = $('<span class="popUpClose popUpCloseQview scTrack scLink" scType="scLink" scValue="' + c + '" title="Close" style="' + w + (i ? ";display:none;" : "") + '"><\/span>'),
    s = $('<div class="formRow clear alignRight popFotSec scTrack scLink"  scType="scLink" scValue="close" style="border-top:1px solid #ccc;background:#f4f4f4;' + (i ? ";display:none;" : "") + '"><\/div>')) : (o = $('<span class="popUpClose popUpCloseQview scTrack scLink" scType="scLink" scValue="' + c + '" locater="' + n.locater + '" title="Close" style="' + w + (i ? ";display:none;" : "") + '"><\/span>'),
    s = $('<div class="formRow clear alignRight popFotSec scTrack scLink"  scType="scLink" scValue="close" locater="' + n.locater + '" style="border-top:1px solid #ccc;background:#f4f4f4;' + (i ? ";display:none;" : "") + '"><\/div>'));
    t.on("Close", function() {
        t.Close()
    });
    return t.Close = u,
    e.click(u),
    e.keypress(function(n) {
        n.keyCode == 13 && u()
    }),
    o.click(u),
    p && t.append(o),
    t.append(this),
    s.append(e),
    y && t.append(s),
    n && n.relative && f ? f.parent().append(t) : $("#page").append(t),
    h && (LightBox.Show(),
    a && $("#light_box_global").click(u)),
    r && $(window).height() < t.height() + 150 && (t.css("position", "absolute"),
    r = !1),
    t.Reposition(f, r),
    t
}
;
var QConfig = {
    hideLoading: !0,
    hideLightbox: !0,
    ForceHide: !0
}
  , VatDisplayHelper = new function() {
    this.GetVatText = function() {
        return ""
    }
}
  , Utilities = new function() {
    function h(n, i) {
        var u = t[n], r;
        u ? i(u) : n.indexOf("/") < 0 && $(n)[0] ? (r = $(n).html(),
        t[n] = r,
        i(r)) : $.get(n, function(r) {
            t[n] = r;
            i(r)
        })
    }
    function f(n, t, i) {
        var r = n.replace("{{", "").replace("}}", "").Trim(" "), o, e, f, u;
        if (i && (r = r.replace(i + ".", "")),
        o = "",
        r == i)
            return t;
        if (t[r] || t[r] == 0)
            return t[r];
        for (e = r.split(/[^A-Za-z]/),
        f = 0; f < e.length; f++)
            u = e[f],
            u && t[u] && (r = r.replace(u, t[u]));
        if (r && r.match(/^([0-9\.,\/+*-/(/) ]+)?(Math\..+\()?[0-9\.,\/+*-/(/) ]+$/))
            try {
                if (r = eval(r),
                r || r == 0)
                    return r
            } catch (s) {}
        else
            return "{{" + r + "}}";
        return ""
    }
    function c() {
        var t = $(".EmployeeSpan").find(".NumberOfEmployees"), n;
        $.each(t, function(n, t) {
            t.id == $("#EmployeeRangeId").val() && $(this).addClass("selected")
        });
        n = $(".PrimaryMarektDiv").find(".PrimaryMarketCategory");
        $.each(n, function(n, t) {
            t.id == $("#PrimaryMarketId").val() && $(this).addClass("selected")
        });
        $("#PrimaryMarketId").val() != "" && ($("#SpecialtyDiv").empty(),
        $("#SpecialtyDiv").append($("#SpecialityDropDown").html()));
        $("#Specialty option:selected").val() == "3001" && ($("#OfficeSpecialtyDiv").empty(),
        $("#OfficeSpecialtyDiv").append($("#OfficeSpecialityDropDown").html()))
    }
    function s(n, t, i) {
        var r = n.find("form");
        r.ValidateForm();
        t == "1" && c();
        r.bind("preValidation", function() {});
        r.bind("postServerValidation", function(n, u, f) {
            f.toLowerCase() == "false" ? (r = $(this),
            Utilities.BindRegistrationform(r, t),
            QConfig.hideLightbox = !1) : f.toLowerCase() == "true" && ($("#hdnSave").val(!0),
            t == "1" ? (QConfig.hideLightbox = !0,
            $(".popUpClose.popUpCloseQview").trigger("click"),
            $("#InvoiceThanksMsg").show(),
            $("#InvoiceOpenCreditBtn").hide(),
            $("#InvoiceThanksMsg").ScrollTo(),
            $(".errorDiv").hide()) : (r = $(this),
            QConfig.hideLightbox = !1,
            Utilities.BindCategoryInfo(r, i, t)))
        });
        Utilities.BindRegistrationform(n, t)
    }
    function l() {
        var n = $("#OptionalFormID .PrimaryMarketCategory.selected").attr("id")
          , t = $.trim($("#OptionalFormID .PrimaryMarketCategory.selected").text());
        t == "Other Business" || n == "6" || n == "7" ? ($("#SpecialtyDiv").empty(),
        $("#Specialty").hide(),
        $("#OfficeSpecialtyDiv").empty().hide()) : $.ajax({
            url: "/Registration/LoadSpecialityDropDown",
            data: {
                param1: n
            },
            type: "post",
            success: function(n) {
                $("#SpecialtyDiv").empty();
                $("#SpecialtyDiv").append($("#SpecialityDropDown").html());
                $("#Specialty").empty();
                $.each(n, function(n, t) {
                    $("<option>", {
                        value: t.SecSpecialtyId
                    }).html(t.SecSpecialtyDesc).appendTo("#Specialty")
                });
                $("#OfficeSpecialtyDiv").hide();
                $("#OfficeSpecialityDropDown").hide()
            },
            error: function(n) {
                Utilities.logsErrorMessage("03", "Account", encodeURIComponent(n.responseText))
            }
        })
    }
    var t = {}, r = !1, n = !1, u = !1, e = null, o;
    this.FillTemplate = function(n, t, i) {
        h(n, function(n) {
            var s = new RegExp("({{.*?}})","g"), r = n.match(s), e, h, u, c, o;
            if (!r)
                return i(n),
                !1;
            for (e = 0; e < r.length; e++)
                h = r[e],
                n = n.replace(h, f(h, t));
            u = $(document.createElement("div")).html(n);
            o = u.find("[ng-if]");
            o.each(function(n, i) {
                var e = i.getAttribute("ng-if"), f = e.split("=="), r, u;
                f.length == 2 && (r = f[0].Trim(),
                u = f[1].Trim().LTrim('"').RTrim('"').LTrim("'").RTrim("'"),
                u == "true" && t[r] == !0 ? i.style.display = "none" : u == "false" && t[r] == !0 ? i.style.display = "none" : t[r] != u && (i.style.display = "none"))
            });
            c = u.find("[ng-repeat]");
            c.each(function(n, i) {
                var l = i.getAttribute("ng-repeat").split(" in "), e, n, o, h, c, u, p;
                if (l.length == 2 && (e = t[l[1]],
                e && e.length))
                    for (n = 0; n < e.length; n++) {
                        var a = i.innerHTML
                          , v = document.createElement(i.tagName)
                          , y = $(i).prop("attributes");
                        for (r = a.match(s),
                        u = 0; u < y.length; u++) {
                            if (o = y[u].value,
                            h = o.match(s),
                            h)
                                for (c = 0; c < h.length; c++)
                                    o = o.replace(h[c], f(h[c], e[n], l[0]));
                            v.setAttribute(y[u].name, o)
                        }
                        if (r)
                            for (u = 0; u < r.length; u++)
                                p = r[u],
                                a = a.replace(p, f(p, e[n], l[0]));
                        v.innerHTML = a;
                        i.parentNode.insertBefore(v, i)
                    }
                i.parentNode.removeChild(i)
            });
            o = u.find("[ng-if]");
            o.each(function(n, t) {
                var i = t.getAttribute("ng-if");
                eval("'" + i + "'") == !1 && t.parentNode.removeChild(t)
            });
            u.find("[ng-click]").each(function(n, i) {
                var u = $(i).attr("ng-click"), r = u.indexOf("("), e = u.indexOf(")", r), f;
                r > 0 && e > r && (f = u.substring(0, r),
                $(i).click(function() {
                    for (var e = null, h = t, o, s, n; h; ) {
                        if (e = h[f],
                        e && e.call)
                            break;
                        h = t.$parent
                    }
                    if (e && e.call) {
                        for (o = u.substring(r).replace("(", "").replace(")", "").split(","),
                        s = 0; s < o.length; s++)
                            n = o[s].replaceAll("'", ""),
                            o[s] = t[n] || t[n] == 0 ? t[n] : n.match(/^[0-9]+$/) ? parseInt(n) : n;
                        e.apply(i, o)
                    }
                }))
            });
            i(u)
        })
    }
    ;
    o = "abcdefghijklmnopqrstuvwxyz";
    this.LowerCase = function() {
        return o
    }
    ;
    this.AddUrlValue = function() {}
    ;
    this.UpdateQdpPrice = function(n, t) {
        var i = 0, r;
        n = n == null || n == undefined ? $("input[rel='qdpAddToCart']") : $("input[rel=" + n.attr("rel") + "]");
        n.each(function() {
            !isNaN(this.value) && $.isNumeric(this.value) && (i += parseInt(this.value))
        });
        i == 0 && (i = 1);
        r = VatDisplayHelper.GetVatText();
        n.each(function(n, u) {
            var f, s, e, o, h, c;
            u = $(u);
            f = t ? $("." + u.attr("data-QDPlabel")) : $("#" + u.attr("data-label"));
            u[0] && !u.prop("disabled") && (s = u.attr("data-priceBreak"),
            e = u.attr("data-totalecotax"),
            e == null && (e = "0"),
            o = u.val() || 0,
            h = 0,
            o <= 0 && (o = 1),
            o && s && (c = Utilities.GetUnitPrice(i, s),
            h = (parseFloat(c) + parseFloat(e)).toString().ToCurrency()),
            f.parent().show(),
            f.show(),
            f.html(h.toString() + r))
        })
    }
    ;
    this.AddedtoCartCheckout = function() {
        QView.close();
        this.ShowsGuestCheckoutPopup();
        cookie.Set({
            name: "__showATCOverlay",
            value: "1"
        })
    }
    ;
    this.ShowsGuestCheckoutPopup = function() {
        $.ajax({
            url: "/Registration/GuestCartLogin",
            data: {},
            type: "Get",
            success: function(n) {
                n != null && n != "" && ($content = $('<div id="GuestCheckoutCartPopup">' + n + "<\/div>").PopUp({
                    showLightBox: !0,
                    showCloseButton: !1,
                    width: 650
                }),
                $content.find("#btnContinueGuest").click(function() {
                    window.location.href = "/Registration/ContinueGuestCheckout"
                }),
                $content.find("#CreateProfileId").click(function() {
                    $(".popUpClose.popUpCloseQview").trigger("click");
                    PLP.ShowEasyLoginPopUp("Register")
                }),
                $content.find("#GuestLoginForm").ValidateForm())
            },
            error: function() {
                console.log(arguments)
            }
        })
    }
    ;
    this.EnrollPointsPrgmTeaser = function(n) {
        var u, t, i, r;
        if (!window.isUserLoggedIn) {
            u = "/Account/Login?returnUrl=" + window.location.href;
            window.location.href = u;
            return
        }
        t = {};
        t = n;
        t.tier == null && typeof t.tier == "undefined" && (t.tier = "QP1");
        i = "/PaidLoyalty/EnrollPlpTeaser?tier=" + t.tier + "&skuNum=" + t.skuNum;
        r = "";
        t.skuNum == "12345" && (i = "/PaidLoyalty/EnrollPlpTeaser?tier=QP4&editMode=" + t.isEditMode);
        r = t.width != null && typeof t.width != "undefined" ? n.width : 1145;
        $("#atcPopup").length > 0 && $(".popUpClose").trigger("click");
        t.uos != null && typeof t.uos != "undefined" && t.uos == "true" && (i = i + "&updateovelaystatus=true");
        t.enrollFlowId != null && typeof t.enrollFlowId != "undefined" && (i = i + "&enrollFlowId=" + t.enrollFlowId);
        t.paperTeaser != null && typeof t.paperTeaser != "undefined" && t.paperTeaser == "true" && (i = i + "&paperTeaser=true");
        $.get(i, function(t) {
            var i = t.PopUp({
                showLightBox: !0,
                width: r,
                showCloseButton: !1,
                scvalue: "teaseroverlay:<cancel|close with X",
                cssClass: n.cssClass
            })
              , u = i.find("form");
            u.ValidateForm();
            $(".lightBox,.cancelBtn").click(function() {
                i.Close()
            });
            u.bind("preValidation", function() {})
        })
    }
    ;
    this.UpdateBasePrice = function(n) {
        if (n = $(n),
        n.attr("rel") == "qdpAddToCart")
            return Utilities.UpdateQdpPrice(n),
            !0;
        n.each(function(n, t) {
            var i, f;
            if (t = $(t),
            i = $("#" + t.attr("data-label")),
            f = 0,
            t[0] && !t.prop("disabled") && $.isNumeric(t.val())) {
                var r = t.attr("data-priceBreak")
                  , e = $("#" + t.attr("data-showbaseprice"))
                  , u = t.val() || 0;
                u && r && i && i.html(Utilities.GetUnitPrice(u, r).toString().ToCurrency())
            } else
                t.attr("rel") != "qdpAddToCart" && (priceLbl.parent().hide(),
                priceLbl.hide(),
                priceLbl.empty())
        })
    }
    ;
    this.UpdatePrice = function(n, t) {
        var u = 0, c = !1, e = 0, i, h, o, r, f, s;
        if (n = $(n),
        n.attr("rel") == "qdpAddToCart")
            return Utilities.UpdateQdpPrice(n),
            !0;
        if (n.attr("rel") == "AddtoCartAccessoryItems")
            return !0;
        if (n.attr("rel") == "qdpMixMatchAddToCart" && (Utilities.UpdateQdpPrice(n, !0),
        !0),
        i = "",
        h = "",
        n.attr("data-label") != null && (t = !0),
        !t)
            for (o = 0; o < n.parents().length; o++)
                if ($(n.parents()[o]).find(".priceupdate").length > 0) {
                    i = $(n.parents()[o]).find(".priceupdate")[0];
                    c = !0;
                    break
                }
        (i == null || i == "") && (i = $("#" + n.attr("data-pricebreak-label")));
        r = $("#" + n.attr("data-label-total"));
        f = $("#" + n.attr("data-label-mixmatchsavings"));
        $(".vert-FBT-wrapper") && $(".vert-FBT-wrapper").css("display") == "none" && $("#FBT-horizontal") && (r = $("#FBT-horizontal").find("#" + $("#" + n.attr("data-label-total")).attr("id")));
        r[0] && n.attr("name") && (n = n.add($("input[name=" + n.attr("name") + "]")));
        s = VatDisplayHelper.GetVatText();
        n.each(function(r, f) {
            var r, g, b, nt, rt, a, p, l, w, k, ft, et;
            f = $(f);
            var y = f.attr("data-priceBreak")
              , it = ""
              , o = ""
              , d = !1;
            for (r = 0; r < f.parents().length; r++)
                if ($(n.parents()[r]).find(".priceupdate").length > 0) {
                    $(f.parents()[r]).find(".currentPrice").length <= 0 && (d = !0);
                    break
                }
            if ((o == null || o == "" || d) && (o = $("#" + f.attr("data-label"))),
            g = 0,
            b = 0,
            f[0] && (!f.prop("disabled") || f.data("qty-disabled") == !0) && $.isNumeric(f.val())) {
                nt = f.attr("data-basepricebreak");
                rt = f.attr("data-updateUnitPrice");
                g_minPriceThreshold = f.attr("data-minPriceThreshold");
                var ut = $("#" + f.attr("data-eachpricelabel"))
                  , ct = $("#" + f.attr("data-showbaseprice"))
                  , v = f.attr("data-totalecotax")
                  , ot = f.attr("data-isCustomize");
                v == null && (v = 0);
                v != 0 && (v = v.replace(",", "."));
                var st = f.attr("data-isSubscriptionSku")
                  , ht = f.attr("data-useredited")
                  , tt = !1;
                st == "true" && ht == "false" && (tt = !0,
                f.attr("data-isSubscriptionSku", !1));
                a = f.val() || 0;
                p = 0;
                f.attr("rel") == "qdpMixMatchAddToCart" && (n.each(function() {
                    !isNaN(this.value) && $.isNumeric(this.value) && (p += parseInt(this.value))
                }),
                p);
                tt && (a = f.attr("data-maxqty"));
                a && y && (i && (!t || rt) && (k = Utilities.GetUnitPrice(a, y),
                l = (parseFloat(k) + parseFloat(v)).toString().ToCurrency() + s,
                f.attr("data-SubscriptionPrice") != null && $("#" + f.attr("data-SubscriptionPrice")).html(l),
                ot && (l = l.replace(currency, "").replace(s, ""),
                $(".whenYouBuyQty").hide()),
                (f.attr("data-pricebreak-label") == "SkuPriceUpdate" || f.attr("data-pricebreak-label") == "OBPriceUpdate") && (l = l.replace(currency, ""),
                l = l.replace(currency, "").replace(s, "")),
                c ? i.innerHTML = l : i.html(l)),
                h && it && (b = parseFloat(Utilities.GetUnitPrice(a, it)),
                h.html(b.toString().ToCurrency())),
                w = Utilities.GetPrice(a, y, v),
                f.attr("rel") == "qdpMixMatchAddToCart" && (k = Utilities.GetUnitPrice(p, y),
                w = k * a,
                ft = Utilities.GetMixMatchSavings(a, p, y),
                e += ft),
                w > 0 && (g = w,
                u += w),
                Utilities.UpdateSaveStorey(f, t, tt, b));
                o.parent().show();
                o.show();
                o.html(g.toString().ToCurrency());
                ut && nt && (et = f.attr("data-umConversion"),
                et != "" && ut.html(Utilities.GetBaseBreakUnitPrice(a, nt)))
            } else
                f.data("ismaxlimit") == "True" && f.val() == "" ? (o.html("0".ToCurrency()),
                i.html("0".ToCurrency())) : d || f.attr("rel") != "qdpAddToCart" && (o.parent().hide(),
                o.hide(),
                o.empty())
        });
        r[0] && (r[0].tagName === "SCRIPT" || r.selector === "#undefined" || (u > 0 ? (r.show(),
        u = Math.round(parseFloat(u) * 100),
        u = u / 100,
        r.html(u.toString().ToCurrency())) : r.html("0".ToCurrency())));
        f[0] && (f[0].tagName === "SCRIPT" || f.selector === "#undefined" || (e > 0 ? (f.show(),
        e = parseFloat(e) * 100,
        f.html(e.toString().ToCurrency())) : f.html("0".ToCurrency())))
    }
    ;
    this.UpdateSaveStorey = function(n, t, i, r) {
        var h = $("#" + n.attr("data-whenYouBuy")), e = n.attr("data-priceBreak"), v, s, f, y, b, k, p;
        if (h[0] && e) {
            var c = h.find("span.whenYouBuyQty")
              , o = h.find("span.whenYouSave")
              , l = $("#" + n.attr("data-saveStory")).find("span.savingStory")
              , u = parseInt(n.val()) || 0
              , w = $("#" + n.attr("data-SubscriptionWhenYouBuy"))
              , a = n.attr("data-minqty");
            u < a && (u = a);
            i && (u = n.attr("data-maxqty"));
            t || (v = Utilities.GetPriceBreakQuantity(u, e),
            v > a ? c.html("When you buy " + v + "+") : c.html(""));
            w.length > 0 && w.html(c.html());
            o[0] && l[0] ? (s = parseFloat(n.attr("data-wasPrice") || ""),
            r && (s = r),
            f = e.split("|"),
            t && f != null && f.length > 0 && (y = f[f.length - 1].split("="),
            y.length > 0 && (b = y[0].split(","),
            u = parseInt(b) || 0)),
            k = Utilities.GetUnitPrice(u, e),
            p = s - k,
            s > 0 & p > 0 ? o.html((l.attr("data-savemsg") || "You save") + " " + p.toString().ToCurrency() + " " + l.attr("data-saveuommsg")) : o.html("")) : o.html("")
        }
    }
    ;
    this.Reposition = function(n, t, i) {
        var n = $(n)
          , t = $(t);
        if (!n)
            return !1;
        n.show();
        t.show();
        var u = 0
          , f = 0
          , r = {
            l: $(window).scrollLeft(),
            t: $(window).scrollTop(),
            w: $(window).width(),
            h: $(window).height()
        }
          , s = n.offset();
        if (i)
            f = r.w / 2 - n.outerWidth() / 2 - r.l,
            u = r.h / 2 - n.outerHeight() / 2;
        else if (t.length > 0) {
            var o = r.w / 2
              , h = r.h / 2
              , e = t.offset();
            f = e.left > o ? e.left - n.outerWidth() : t.outerWidth() + e.left;
            u = t.outerHeight() + e.top;
            f + n.outerWidth() > r.w + r.l && (f = r.w - n.outerWidth() + r.l);
            u + n.outerHeight() > r.h + r.t && (u = r.h - n.outerHeight() + r.t);
            u < r.t && (u = r.t);
            u < 0 && (u = 0);
            f < r.l ? f = r.t : u < r.t && (u = r.t)
        } else
            u = r.h / 2 - n.outerHeight() / 2 + r.t,
            f = r.w / 2 - n.outerWidth() / 2 + r.l;
        (!$.isNumeric(u) || u < 0) && (u = 0);
        !$.isNumeric(f) || f < r.l ? f = r.l : u < r.t && (u = r.t + 10);
        u < 150 && (u = 150);
        n.css({
            top: u,
            left: f
        });
        g_adjustScroll && $("html, body").animate({
            scrollTop: u
        }, 1e3)
    }
    ;
    this.CreatePriceDropDown = function(n) {
        var o = !0, s, u, f, l;
        if (o && o == "1" && n.parent("li").length <= 0) {
            s = n.parent();
            n.wrap('<ul class="navigation selectBoxEdit" style="width: 55px;"><li class="li2 navDelay"><\/li><\/ul>');
            var h = $('<ul class="navigation priceDD"><\/ul>')
              , a = parseInt(n.attr("data-minqty"))
              , v = parseInt(n.attr("data-multqty"))
              , i = parseInt(n.attr("data-maxqty"))
              , r = a
              , t = parseInt("10");
            for ((!$.isNumeric(t) || t <= 0) && (t = 5),
            i > 0 && i < t && (t = i),
            u = 0; u < t; u++)
                f = $('<li class="qtyItem">' + r + "<\/li>"),
                r = r + v,
                f.click(function() {
                    n.val($(this).text());
                    n.hasClass("js-bundleqty") ? n.trigger("blur") : Utilities.IsValidQty(n);
                    var t = n.parent("li");
                    t && t.removeClass(" navOver")
                }),
                h.append(f);
            n.parent().append($('<span class="formIco dropDownIco" style="position:absolute"><\/span>'));
            n.parent().append(h);
            Nav.init(s);
            var e = n.attr("data-basepricebreak")
              , c = $("#" + n.attr("data-eachpricelabel"))
              , e = n.attr("data-basepricebreak");
            e && c && e && (l = n.attr("data-umConversion"),
            l != "" && c.html(Utilities.GetBaseBreakUnitPrice(n.val(), e)))
        }
    }
    ;
    this.UpdateSharedCartHeader = function() {
        $.ajax({
            url: "/Master/UpdateSharedCartHeader",
            type: "GET"
        }).done(function(n) {
            $("#HdrSharedCartLi").html(n)
        })
    }
    ;
    this.IsValidQty = function(n) {
        var e = 0, r = !1, u, t, h, l;
        if ((n.data("allowzero") == "true" || n.data("allowzero") == !0) && (r = !0),
        n && n.data("pricebreak") && n.data("minqty") && n.data("multqty")) {
            n = $(n);
            u = n.data("qtytimeout");
            u && (clearTimeout(u),
            n.data("qtytmeout", null));
            var a = n.data("pricebreak").split("|")
              , o = n.data("minqty")
              , s = n.data("multqty")
              , c = n.data("ismaxlimit") == "True"
              , f = parseInt(n.data("actualqty") || 0)
              , i = n.val().Trim();
            if (i != "" || r)
                i != "" && (i.indexOf(".") >= 0 && (i = i.substring(0, i.indexOf(".")),
                n.val(i)),
                i.indexOf("-") >= 0 && (i = i.replace("-", ""),
                n.val(i)));
            else
                return Utilities.UpdatePrice(n),
                !1;
            return (t = parseInt(n.val(), 10),
            c && f < t && (n.val(f),
            t = f),
            t = parseInt(n.val(), 10),
            h = t,
            r && isNaN(t) && (t = ""),
            !r && (isNaN(t) || t == 0)) ? (n.Tooltip("Please enter a valid number", 200, {
                index: 18e3
            }),
            n.val(""),
            n[0].focus(),
            Utilities.UpdatePrice(n),
            !1) : (h != t && n.val(t),
            t && (!r || r && t != 0) && (t < o || t % s != 0) && e++,
            !1 && (l = Utilities.GetPrice(n.val(), n.attr("data-priceBreak"))),
            e != 0 ? (n.data("qtytimeout", setTimeout(function() {
                n.Tooltip("Only available in increments of {0} with a minimum of {1}".Format([s, o]), 200, {
                    index: 18e3
                });
                n.val("");
                n[0].focus();
                Utilities.UpdatePrice(n);
                n.trigger("qtyfieldValidated")
            }, 500)),
            !1) : (n.attr("rel") != "qdpMixMatchAddToCart" && Utilities.UpdatePrice(n),
            !0))
        }
    }
    ;
    this.CheckMaxQuantityError = function(n, t) {
        var i = t ? n : $("#" + $(n).attr("rel"));
        if (parseInt(i.val()) > parseInt(i.attr("data-maxqty")))
            return i.Tooltip("The maximum quantity for this item is {0}. Please enter quantity less than the maximum quantity.".Format([i.attr("data-maxqty")]), 200, {
                index: 18e3
            }),
            i.val(""),
            i.focus(),
            !1
    }
    ;
    this.ProcessOOSPage = function(t) {
        var i = {
            Sku: t.sku,
            EffortCode: t.effortcode,
            FindNumber: t.findnumber,
            ReqQuantity: t.quantity,
            CallBackID: t.callbackid
        };
        $.ajax({
            url: "/Item/CheckSkuOutOfStock",
            data: i,
            type: "POST",
            success: function(n) {
                n != null && n != "" ? Utilities.ShowOOSPopup(n) : t.callback()
            },
            error: function(t) {
                n = !1;
                Utilities.logsErrorMessage("01", "OOSPage", encodeURIComponent(t.responseText));
                LightBox.Hide();
                Loading.Hide()
            }
        })
    }
    ;
    this.ProcessOOS = function(n) {
        $(n).attr("skipOOSValidation", "true");
        $(n).click()
    }
    ;
    this.ShowOOSPopup = function(n) {
        var t = "";
        $.trim("False".toLowerCase()) == "true" ? ($content = $('<div id="OOSPopUpPlaceHolder">' + n + "<\/div>").PopUp({
            showLightBox: !0,
            showCloseButton: !1,
            width: 600
        }),
        $("#popup").css("background-color", "#FFF4CB")) : (LightBox.Show(),
        QView = new QViewHelper,
        t = $("#QViewInfo"),
        t.html("").html(n),
        t.show(),
        t.Reposition(),
        t.Carousel())
    }
    ;
    this.PopulateCompanyInfo = function(t, i, r, u) {
        u != null && u != "" ? (t != null && t != "" && ($content = $(t).html(u),
        $(t).height("auto")),
        s($content, r, t)) : $.ajax({
            url: "/Registration/PopulateCompanyInformation",
            data: {
                sourceType: r,
                pageType: window.pageType
            },
            type: "Get",
            success: function(u) {
                if (u != null && u != "") {
                    var f = $(u.Trim());
                    t != null && t != "" || (f = $('<div id="AddtionalPopUpPlaceHolder">' + u + "<\/div>").PopUp({
                        showLightBox: !0,
                        showCloseButton: !1,
                        width: 600
                    }),
                    t = "#" + f.children("div").attr("id"));
                    s(f, r, t)
                } else
                    n = !1,
                    LightBox.Hide(),
                    Loading.Hide();
                n = !1;
                i
            },
            error: function(t) {
                n = !1;
                Utilities.logsErrorMessage("01", "Account", encodeURIComponent(t.responseText));
                LightBox.Hide();
                Loading.Hide()
            }
        })
    }
    ;
    this.BindRegistrationform = function(n, t) {
        n.find("#btnClickSkip").click(function() {
            t == "1" ? Utilities.CompleteRegistration({}, popupid, !1, t) : ($("#hdnSave").val(!0),
            Utilities.UpdateOptionalUserInfo(popupid))
        });
        n.find("#btncomCancel").click(function() {
            $(".popUpClose.popUpCloseQview").trigger("click")
        });
        n.find(".NumberOfEmployees").click(function() {
            var n = $(this);
            $(".NumberOfEmployees.selected").removeClass("selected");
            n.addClass("selected");
            $("#EmployeeRangeId").val(n.attr("id"))
        });
        n.find(".popUpCloseQview").click(function() {
            t == "1" || t == "2" ? $(".popUpClose.popUpCloseQview").trigger("click") : window.location = window.location.href
        });
        n.find(".PrimaryMarketCategory").click(function() {
            var n = $(this);
            $(".PrimaryMarketCategory.selected").removeClass("selected");
            n.addClass("selected");
            $("#PrimaryMarketId").val(n.attr("id"));
            l()
        })
    }
    ;
    this.ShowFavoriteList = function(n, t, i) {
        t && $("#popup .popUpClose").trigger("click");
        r = i;
        var u = $(n).data("url")
          , f = $(n).data("sku")
          , e = $(n).data("printnumber");
        u == "" && (u = "/mylist/CreateUpdateFavorite/?Mode=0");
        $.ajax({
            url: u,
            type: "GET",
            data: {
                sku: f,
                isCreate: t,
                printnumber: e
            }
        }).done(function(n) {
            var i = $("<div id='createFavoriteDivForm'><\/div>").html(n).PopUp({
                width: 400,
                showLightBox: !0,
                showCloseButton: !1,
                showCloseIcon: !0,
                index: 14e3
            })
              , t = $("#createShareCartDivForm").find("form");
            $(".lightBox,.cancelBtn").click(function() {
                i.Close()
            });
            t.bind("preValidation", function() {});
            t.bind("postServerValidation", function() {})
        })
    }
    ;
    this.AddItemtoList = function(n, t, i, u) {
        var f = $("#ListNamesAll").val() != undefined ? $("#ListNamesAll").val().split("_") : "", s = t == undefined ? f[0] : t, h = t == undefined ? $("#ListNamesAll :selected").text().Trim() : $("#createFavoriteDivForm #ListName").val().Trim(), c = t == undefined ? f[1] : i, e = [], l = r ? $('.prdName[rel="saveasList"]') : $(n), o;
        $.each(l, function(n, t) {
            var u = $(t), i;
            u.attr("locater") != "ownbrand" && (i = [],
            i.sku = u.attr("data-sku"),
            i.skuDescription = r ? u.text().replace(/"/g, "'") : $("#ATL_" + i.sku).data("description").replace(/"/g, "'"),
            i.printNumber = u.attr("data-printnumber"),
            i.qty = "1",
            e.push(i))
        });
        o = Utilities.Perify(e);
        $.ajax({
            url: "/MyList/InsertListItem",
            type: "POST",
            data: {
                listId: s,
                listType: c,
                data: o,
                listName: h,
                isListNew: u
            }
        }).done(function(n) {
            n != "" && $("#createFavoriteDivForm").html("").html(n)
        })
    }
    ;
    this.ProcessFavList = function(n, t) {
        var f, u;
        n = n == undefined ? 0 : n;
        var a = t
          , r = $("#ListID").val()
          , e = !1
          , i = {}
          , o = "";
        if (n == 0 || n == 1 || n == 4) {
            var s = $("#createFavoriteDivForm #ListName").val().Trim()
              , h = $("#createFavoriteDivForm #IsPrimary").is(":checked")
              , u = $("#createFavoriteDivForm #EmailReminder").val()
              , c = $("#createFavoriteDivForm input[type=radio]:checked").val()
              , l = $("input[name=IsSharedList]:checked", ".SharedList").val();
            s === "" ? ($("#validation-for-ListName").removeClass("field-validation-valid").addClass("field-validation-error").html("* Enter Name"),
            e = !0) : $("#validation-for-ListName").addClass("field-validation-valid").removeClass("field-validation-error").html("");
            f = $(".isItmAdded", ".fvrtPnl");
            f !== undefined && (o = f.data("sku"));
            i = {
                Mode: n == 4 ? 0 : n,
                ListId: r,
                ListName: s,
                IsPrimary: h,
                EmailReminder: u,
                IsCompanyList: c,
                IsSharedList: l,
                ListType: $("#createFavoriteDivForm #ListType").val(),
                Sku: o
            }
        } else
            n == 2 ? i = {
                Mode: n,
                ListId: r,
                ListType: $("#createFavoriteDivForm #ListType").val()
            } : n == 3 && (u = $("#createFavoriteDivForm #EmailReminder").val(),
            i = {
                Mode: n,
                ListId: r,
                ListType: $("#createFavoriteDivForm #ListType").val(),
                EmailReminder: u
            });
        e || $.ajax({
            url: "/MyList/ProcessFavorite",
            data: i,
            type: "post"
        }).done(function(u) {
            var f, e, o, s;
            if (u.ListID == "0" && (n == 0 || n == 4))
                $("#validation-for-ListName").show(),
                $("#validation-for-ListName").addClass("red"),
                $("#validation-for-ListName").html("List Name Already Exists.");
            else if (n == 4 && u.ListID != "0")
                Utilities.AddItemtoList(t, u.ListID, u.ListType, !0);
            else if (n == 3)
                $(".popUpClose").trigger("click"),
                $(".noRemindFav").length == 1 ? $(".noRemindFav").addClass("remindFav").removeClass("noRemindFav") : $(".remindFav").addClass("noRemindFav").removeClass("remindFav");
            else if (f = window.location.protocol + "//" + window.location.host + "/",
            n == 0 || n == 1)
                e = n == 0 ? "<h1>Your new list '" + i.ListName + "' has been created.<\/h1>" : "<h1>Your list '" + i.ListName + "' has been successfully edited.<\/h1>",
                o = $("#CreateListConfirm").html(),
                $("#createFavoriteDivForm").html("").html(o),
                $(".cl_c", "#createFavoriteDivForm").html("").html(e),
                $(".btnViewList").click(function() {
                    var n = u.ListID == "0" ? r : u.ListID;
                    return window.location.href = f + "MyList/MyList?listid=" + n + "&listType=1",
                    !1
                });
            else
                return s = u.ListID == "0" ? r : u,
                window.location.href = f + "MyList/MyList?listid=" + s + "&listType=1",
                !1
        })
    }
    ;
    this.IsCompanyListChange = function(n) {
        console.log("in radio change");
        $("#createFavoriteDivForm #ListType").val($(n).val());
        $(n).val() === "1" ? $(".remEmail").css("display", "block") : $(".remEmail").css("display", "none")
    }
    ;
    this.ListContinueShopping = function() {
        var n = $("#ListId").val();
        $("#popup .popUpClose").trigger("click")
    }
    ;
    this.UpdateOptionalUserInfo = function(n, t, i) {
        var r = "", f, u;
        i != null && i != "" ? (r = $(n).html(i),
        Utilities.BindCategoryInfo(r, n, t)) : (f = $("#OptionalFormID"),
        u = {
            IsSave: !0,
            SourceType: t,
            SourcePage: window.pageType
        },
        $.ajax({
            url: "/Registration/SaveCompanyInfo",
            data: u,
            type: "post",
            success: function(i) {
                i != null && i != "" && (n != null && n != "" ? r = $(n).html(i) : (r = $('<div id="AddtionalPopUpPlaceHolder">' + i + "<\/div>").PopUp({
                    showLightBox: !0,
                    showCloseButton: !1,
                    width: 600
                }),
                n = "#" + r.children("div").attr("id")),
                $(n).height("auto"),
                Utilities.BindCategoryInfo(r, n, t))
            }
        }))
    }
    ;
    this.BindCategoryInfo = function(n, t, i) {
        var r = [];
        n.find("#btnClickComplete").click(function() {
            var n = $("#purchaseCategory").find("input:radio:checked");
            $.each(n, function(n, t) {
                r.push({
                    PurchaseCategoryId: t.id,
                    PurchaseStatusId: t.value
                })
            });
            Utilities.CompleteRegistration(r, t, !0, "", i)
        });
        n.find("#btnClickSkip").click(function() {
            Utilities.CompleteRegistration(r, t, !1, "", i)
        });
        n.find("#btnCompleteReg").click(function() {
            i === "2" ? $(".popUpClose.popUpCloseQview").trigger("click") : window.location = window.location.href
        })
    }
    ;
    this.CompleteRegistration = function(t, i, r, u, f) {
        var e = "";
        u != null && u != "" ? (e = $(i).html(u),
        e.find("#btnCompleteReg").click(function() {
            f === "2" ? $(".popUpClose.popUpCloseQview").trigger("click") : window.location = window.location.href
        })) : (t = JSON.stringify({
            PurchaseCategoryInfo: t,
            SaveMode: r,
            pageType: window.pageType,
            SourceType: f
        }),
        $.ajax({
            url: "/Registration/SavePurchaseCategoryInfo",
            type: "post",
            data: t,
            contentType: "application/json",
            success: function(n) {
                n != "" && (e = $(i).html(n),
                e.find("#btnCompleteReg").click(function() {
                    f === "2" ? $(".popUpClose.popUpCloseQview").trigger("click") : window.location = window.location.href
                }))
            },
            error: function(t) {
                n = !1;
                Utilities.logsErrorMessage("02", "Account", encodeURIComponent(t.responseText));
                LightBox.Hide();
                Loading.Hide()
            }
        }))
    }
    ;
    this.FillHealthCareSpecialtyDropdownlist = function() {
        $("#OfficeSpecialtyDiv").empty();
        $("#OfficeSpecialityDropDown").hide();
        var n = $("#Specialty option:selected").val();
        n == "3001" && $.ajax({
            url: "/Registration/LoadDoctorsSpecialityDropDown",
            data: {
                param1: n
            },
            type: "post",
            success: function(n) {
                $("#OfficeSpecialtyDiv").empty().append($("#OfficeSpecialityDropDown").html());
                $("#HealthSpecialityType").empty();
                $.each(n, function(n, t) {
                    $("<option>", {
                        value: t.HealthCareSpecialtyId
                    }).html(t.HealthCareSpecialtyDesc).appendTo("#HealthSpecialityType")
                });
                $("#OfficeSpecialtyDiv").show()
            },
            error: function(n) {
                Utilities.logsErrorMessage("03", "Account", encodeURIComponent(n.responseText))
            }
        })
    }
    ;
    this.StripHtml = function(n) {
        return Utilities.StripScripts(n)
    }
    ;
    this.StripScripts = function(n) {
        return n.replace(/<\s*script.*?>.*?(<\s*\/script.*?>|$)/ig, "")
    }
    ;
    this.RemoveElements = function(n, t) {
        var i = $("<div>" + n + "<\/div>");
        return i.find(t).remove(),
        i.html()
    }
    ;
    this.GetRedirectUrlIfExists = function(n) {
        var t, i;
        return n && n.length > 0 && n.indexOf("redirect||||") > -1 && (t = n.split("||||")[1],
        i = t.indexOf("<"),
        i > -1 && (t = t.substring(0, i))),
        t
    }
    ;
    this.IsValidCoupon = function(n) {
        var t = n.val(), i;
        return t ? (i = /^[A-Za-z0-9_ -]{0,25}$/,
        !i.test(t)) ? (n.data("50", setTimeout(function() {
            n.Tooltip("Invalid characters in coupon", 200, {
                index: 18e3
            });
            n.val("");
            n.focus()
        }, 300)),
        !1) : !0 : !1
    }
    ;
    this.GetPrice = function(n, t, i) {
        var r, f, u, o, s, e;
        if (n && t && (r = t.split("|"),
        r != null && r.length > 0))
            for (f = 0; f < r.length; f++)
                if (u = r[f].split("="),
                u && u.length > 1 && (t = u[0].split(","),
                t && t.length > 1 && (o = parseFloat(t[0]),
                s = parseFloat(t[1]),
                n >= o && n <= s)))
                    return e = parseFloat(u[1]) * 100,
                    i != null && i != 0 && (i = i.replace(",", "."),
                    e = e + parseFloat(i) * 100),
                    n * e / 100;
        return 0
    }
    ;
    this.GetPriceBreakQuantity = function(n, t) {
        var i = t.split("|"), r, u, f, e;
        if (i != null && i.length > 0)
            for (r = 0; r < i.length; r++)
                if (u = i[r].split("="),
                u && u.length > 1 && (t = u[0].split(","),
                t && t.length > 1 && (f = parseFloat(t[0]),
                e = parseFloat(t[1]),
                n >= f && n <= e)))
                    return f;
        return 0
    }
    ;
    this.GetUnitPrice = function(n, t) {
        var r = t.split("|"), u, i, f, e;
        if (r != null && r.length > 0)
            for (u = 0; u < r.length; u++)
                if (i = r[u].split("="),
                i && i.length > 1 && (t = i[0].split(","),
                t && t.length > 1 && (f = parseFloat(t[0]),
                e = parseFloat(t[1]),
                n >= f && n <= e)))
                    return i[1];
        return 0
    }
    ;
    this.GetMixMatchSavings = function(n, t, i) {
        var r = i.split("|"), f = 0, u, e, o, s;
        return r != null && r.length > 0 && (u = r[0].split("="),
        u.length > 0 && (e = u[0].split(","),
        firstBreakPointQty = parseInt(e) || 0),
        f = Utilities.GetUnitPrice(firstBreakPointQty, i)),
        o = Utilities.GetUnitPrice(t, i),
        s = (f - o) * n / 100,
        s
    }
    ;
    this.GetBaseBreakUnitPrice = function(n, t) {
        var u = "", s = !1, h = "", f = t.split(";"), e, i, r, c, l, a, o;
        if (f != null && f.length > 0)
            for (e = 0; e < f.length; e++)
                i = f[e].split("/"),
                i && i.length > 1 && (r = i[0].split("="),
                r && r.length > 1 && (t = r[0].split("-"),
                t && t.length > 1 && !s && (c = parseFloat(t[0]),
                l = parseFloat(t[1]),
                n >= c && n <= l && (s = !0,
                u = r[1].toString().ToCurrency(),
                a = Number(u.replace(/[^0-9\.]+/g, "")),
                a > g_minPriceThreshold ? (o = i[1].split(","),
                o && o.length > 0 && (h = o[0])) : u = ""))));
        return u.toString() + " " + h
    }
    ;
    this.SetMarketValue = function(n) {
        cookie.Set({
            name: "SessionMarket",
            value: n
        });
        window.location = "/"
    }
    ;
    this.BindEnter = function(n) {
        var n = $(n), t, i, r;
        n.attr("data-button") ? (t = n.attr("data-button"),
        t && (t = t.replace("#", ""),
        n.data("BindEnter") && t == n.data("BindEnter") || (i = $("#" + t),
        n.data("UnbindOnEnter") && n.data("UnbindOnEnter").call(),
        n.OnEnter(function(n, t) {
            t.preventDefault();
            i.trigger("click", n, t)
        }),
        n.data("BindEnter", t),
        i.data("BindEnter") || (i.keypress(function(n) {
            n.keyCode == 13 && (n.preventDefault(),
            i.trigger("click"))
        }),
        i.data("BindEnter", !0))))) : (n[0] || (n = $(document)),
        r = "input[type=text],input[type=password]",
        n.find(r).each(function(n, t) {
            Utilities.BindEnter(t)
        }))
    }
    ;
    this.BindFocusBlur = function(n) {
        var n = n ? $(n) : $(".formBox .formText[type=text]");
        n.data("BindFocusBlur") || (n.focus(function() {
            $("label.formLabel[for=" + $(this).attr("id") + "]").css("display", "none")
        }).blur(function() {
            $(this).val() || $("label.formLabel[for=" + $(this).attr("id") + "]").css("display", "")
        }),
        n.data("BindFocusBlur", !0))
    }
    ;
    this.ChatHelp = function() {
        Utilities.FillTemplate("/Templates/Chat/ChatHelp", {}, function(n) {
            n.PopUp({
                locater: null
            })
        })
    }
    ;
    this.CardTypeCheck = function(n) {
        var u, i, t, r, f;
        if (defaultFormat = /(\d{1,4})/g,
        u = [{
            type: "discover",
            pattern: /^(6011|65|64[4-9]|622)/,
            format: defaultFormat,
            length: [16],
            cvcLength: [3],
            valid: !0,
            showui: !0
        }, {
            type: "mastercard",
            pattern: /^5[1-5]/,
            format: defaultFormat,
            length: [16],
            cvcLength: [3],
            valid: !0,
            showui: !0
        }, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            valid: !0,
            showui: !0
        }, {
            type: "visa",
            pattern: /^4/,
            format: defaultFormat,
            length: [13, 16],
            cvcLength: [3],
            valid: !0,
            showui: !0
        }, {
            type: "v",
            pattern: /^9[1-5]/,
            format: defaultFormat,
            length: [16],
            cvcLength: [3],
            valid: !0,
            showui: !0
        }],
        isValidLength = function(n, t) {
            for (var i = 0, r = t.length.length; i < r; i++)
                if (t.length[i] == n.length)
                    return !0;
            return !1
        }
        ,
        isValidluhn = function(n) {
            var t, i, r, u, e, f;
            for (r = 0,
            f = n.split("").reverse(),
            i = u = 0,
            e = f.length; u < e; i = ++u)
                t = f[i],
                t = +t,
                i % 2 ? (t *= 2,
                r += t < 10 ? t : t - 9) : r += t;
            return r % 10 == 0
        }
        ,
        i = n.val(),
        i.indexOf("|") < 0) {
            for (i = (i + "").replace(/\D/g, ""),
            r = 0,
            f = u.length; r < f; r++)
                if (t = u[r],
                t.pattern.test(i))
                    return t.valid = !1,
                    isValidluhn(i) && isValidLength(i, t) && (t.valid = !0),
                    t.showui = !0,
                    t
        } else
            return {
                valid: !0
            };
        return t
    }
    ;
    this.getDateFromDdls = function(n) {
        var i = n.find("select:nth(0)").val()
          , r = n.find("select:nth(1)").val()
          , u = n.find("select:nth(2)").val();
        if (i == "" || r == "" || u == "")
            return NaN;
        var f = parseInt(i, 10)
          , e = parseInt(r, 10)
          , o = parseInt(u, 10)
          , t = new Date(f,e - 1,o)
          , s = t.getFullYear() == f && t.getMonth() + 1 == e && t.getDate() == o;
        return s ? t : NaN
    }
    ;
    this.RegexCheck = function(n, t, i, r) {
        var f = 0
          , u = n.val()
          , e = 0;
        if (t == "/^[0-9]/") {
            while (/[^0-9]/.test(u) == !0)
                if (r != null && r.preventDefault(),
                f++,
                u = u.replace(/[^0-9]/, ""),
                e++,
                e > 10)
                    return !1
        } else if (t.test(u) == !1)
            return !1;
        return (n.val(u),
        f > 0) ? !1 : (i && f > 0 && tooltip.init(n, "Please enter a valid number", 120, {
            index: 18e3
        }),
        !0)
    }
    ;
    this.IsAlphaNumeric = function(n, t) {
        if (t)
            return Utilities.RegexCheck(n, /^[a-zA-Z0-9 ]*$/, !0);
        String.prototype.IsNumber(n)
    }
    ;
    this.validateEmailAddress = function(n) {
        var t = !0, i;
        return n.indexOf("@") <= 0 ? !1 : n.split("@").length - 1 > 1 ? !1 : (i = /^(([^<>()[\]\\.,;:\s\"]+(\.[^<>()[\]\\.,;:\s\"]+)*)|(\".+\"))((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        t = i.test(n),
        t)
    }
    ;
    this.logsErrorMessage = function(n, t, i) {
        try {
            var r = "UserAgent:" + navigator.userAgent + ";AppVersion:" + navigator.appVersion + ";Language:" + navigator.language + ";Vendor:" + navigator.vendor + ";ErrorCode:" + n + ";ErrorSection:" + t + ";ErrorMessage:" + i;
            $.ajax({
                url: "/Error/LogErrors",
                type: "post",
                data: {
                    ErrorData: r
                },
                success: function() {},
                error: function() {}
            })
        } catch (u) {}
    }
    ;
    this.Perify = function(n) {
        if (n.length == 0)
            return "";
        var t = "[";
        return $.each(n, function(n, i) {
            var r, u;
            t += "{";
            for (r in i) {
                u = "";
                switch (typeof i[r]) {
                case "function":
                case "object":
                    continue;
                case "number":
                case "boolean":
                    u = i[r];
                    break;
                case "string":
                    u = '"' + i[r] + '"';
                    break;
                default:
                    continue
                }
                t += '"' + r + '":' + u + ","
            }
            t = t.substring(0, t.length - 1) + "},"
        }),
        t = t.substring(0, t.length - 1),
        t += "]"
    }
    ;
    this.sendEmail = function(n, t) {
        try {
            var i = {
                EmailAddress: n,
                EmailType: t
            };
            $.post("/Master/EmailSignUp", i, function() {})
        } catch (r) {
            console.log("Error Section:emailSignupProcess")
        }
    }
    ;
    this.PrintWindow = function() {
        window.print()
    }
    ;
    this.ShowPriceBreakInfo = function(n) {
        var w = (n.attr("data-base-pricebreak") || "").split("|"), e = (n.attr("data-pricebreak") || "").split("|"), o = n.attr("data-subscription") != null ? !0 : !1, y = n.attr("data-ismixmatchsku") != null ? !0 : !1, s = n.attr("data-wasPrice") != null ? n.attr("data-wasPrice") : 0, h = n.attr("data-discount") != null ? n.attr("data-discount") : 0, p = n.attr("data-isimprintitem") == "True", t = '<div class="purBreak"><table class="table" cellspacing="0" cellpadding="0"><tbody><tr><th class="hdr red" colspan="' + (e.length + 1) + '">Buy more &amp; save!<\/th><\/tr>', c = [], l = [], u = [], i = 0, r = n.attr("data-ecotaxvat"), a, v, f;
        r = r == null || r == "0" ? 0 : r.replace(",", ".");
        $.each(e, function(n, t) {
            var e = p && n == 0 ? t.split(",")[1].split("=")[0] : t.split(",")[0]
              , f = t.split("=")[1];
            c.push(e < 1 ? parseFloat(e) : parseInt(e));
            l.push((parseFloat(f) + parseFloat(r)).toString().ToCurrency());
            n > 0 && Math.floor((i - f) / i * 100) > 0 ? u.push(Math.floor((i - f) / i * 100) + "%") : (h > 0 ? u.push(h + "%") : u.push(""),
            i = o && s > 0 ? s : f)
        });
        a = y ? "Mix &amp; Match Qty" : "Qty";
        t += '<tr><td class="alignLeft"><strong>' + a + "<\/strong><\/td>";
        $.each(c, function(n, i) {
            t += '<td class="' + (n % 2 == 0 ? "grey" : "") + '"><span>' + i + "<\/span><\/td>"
        });
        t += "<\/tr>";
        v = cookie.Get({
            bucket: cookie.buckets.func,
            name: "includevat"
        });
        f = o ? "Subscription Price" : "Price";
        t += v == 0 ? '<tr><td class="alignLeft"><strong>' + f + " <\/strong><\/td>" : '<tr><td class="alignLeft"><strong>' + f + " <\/strong><\/td>";
        $.each(l, function(n, i) {
            t += '<td class="' + (n % 2 == 0 ? "grey" : "") + '"><span>' + i + "<\/span><\/td>"
        });
        t += "<\/tr>";
        t += '<tr><td class="alignLeft"><strong>Qty. Savings<\/strong><\/td>';
        $.each(u, function(n, i) {
            t += '<td me=1 class="' + (n % 2 == 0 ? "grey" : "") + '"><span>' + i + "<\/span><\/td>"
        });
        t += "<\/tr>";
        t += "<\/tbody><\/table><\/div>";
        tooltip.init(n, t, "", {
            index: 17001,
            skin: "prBreakTip",
            mouseover: !0
        })
    }
    ;
    this.showPassword = function(n, t) {
        $(t).each(function() {
            var t = $("<input/>"), i;
            Utilities.copyAttributes($(this)[0], t);
            n.checked || $(n).hasClass("showMe") ? t.prop("type", "text") : t.prop("type", "password");
            t.val($($(this)[0]).val());
            t.bind("blur", function() {
                $(this).ValidateField()
            });
            t.insertBefore($(this));
            t.hasClass("password") && (i = $.extend({
                verdects: ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"],
                colors: ["#f00", "#c06", "#f60", "#01CA19", "#009712"],
                scores: [10, 15, 30, 40],
                common: ["password", "sex", "god", "123456", "123", "liverpool", "letmein", "qwerty", "monkey"],
                minchar: eval(8)
            }, i),
            t.keyup(function() {
                $.fn.runPassword($(this).val(), t.attr("id"), i)
            }));
            $(this).remove()
        })
    }
    ;
    this.copyAttributes = function(n, t) {
        for (i = 0; i < n.attributes.length; i++) {
            var r = n.attributes[i];
            r.name != "type" && t.attr(r.name, r.value)
        }
    }
    ;
    this.copyEvents = function(n, t) {
        var i = n
          , r = t;
        $.each($._data(i.get(0), "events"), function() {
            $.each(this, function() {
                r.bind(this.type, this.handler)
            })
        })
    }
    ;
    this.removeURLParameter = function(n, t) {
        var u = n.split("?"), f, i, r;
        if (u.length >= 2) {
            for (f = encodeURIComponent(t) + "=",
            i = u[1].split(/[&;]/g),
            r = i.length; r-- > 0; )
                i[r].lastIndexOf(f, 0) !== -1 && i.splice(r, 1);
            return u[0] + "?" + i.join("&")
        }
        return n
    }
    ;
    this.getQueryString = function(n, t) {
        t || (t = window.location.href);
        n = n.replace(/[\[]/, "\\[").replace(/[\]]/, /\\\]/);
        var r = new RegExp("[\\?&]" + n + "=([^&#]*)")
          , i = r.exec(t);
        return i != null ? i[1] : 0
    }
    ;
    this.updateQueryString = function(n, t, i) {
        var u, f, r;
        if (i)
            return u = new RegExp("([?&])" + n + "=.*?(&|#|$)(.*)","gi"),
            u.test(i) ? typeof t != "undefined" && t !== null ? i.replace(u, "$1" + n + "=" + t + "$2$3") : (r = i.split("#"),
            i = r[0].replace(u, "$1$3").replace(/(&|\?)$/, ""),
            typeof r[1] != "undefined" && r[1] !== null && (i += "#" + r[1]),
            i) : typeof t != "undefined" && t !== null ? (f = i.indexOf("?") !== -1 ? "&" : "?",
            r = i.split("#"),
            i = r[0] + f + n + "=" + t,
            typeof r[1] != "undefined" && r[1] !== null && (i += "#" + r[1]),
            i) : i
    }
    ;
    this.ShowAlternateSku = function(n, t) {
        var i = $("#alternateSku")
          , r = i.attr("data-sku")
          , u = i.attr("data-effortcode")
          , f = i.attr("data-findnumber")
          , e = i.attr("data-promocode");
        $.ajax({
            url: "/Item/Item",
            data: {
                sku: r,
                effort_code: u,
                find_number: f,
                promoCode: e,
                isSkuPopUp: n,
                showAddToCart: t
            },
            type: "Post",
            success: function(n) {
                $("#popup").length > 0 ? ($("#OOSPopUpPlaceHolder").empty().append(n),
                popup = $("#popup"),
                $("#popup").css("background-color", "#FFF")) : popup = $('<div id="OOSPopUpPlaceHolder"><\/div>').append(n).PopUp({
                    showLightBox: !0,
                    width: "650",
                    showCloseButton: !1,
                    onclose: function() {
                        QConfig.hideLightbox = !0
                    }
                });
                $("#popup #dvFloatingAddToCart").remove();
                $("#OOSPopUpPlaceHolder #HeaderRow").hide();
                $("#OOSPopUpPlaceHolder").find("#FooterRow").hide();
                $("#OOSPopUpPlaceHolder").css("clear", "both")
            }
        })
    }
    ;
    this.CloseSkuPanel = function() {
        var n = $("#QViewInfo");
        n.html("");
        $("#HeaderRow").show();
        n.css("z-index", "-1");
        $("#PageInner #FooterRow").removeAttr("style");
        n.animate({
            left: "-2000px",
            top: "0"
        }, "slow")
    }
    ;
    this.ShowRestrictedItemPopup = function(n) {
        var t = $("<div id='ShowRestrictedPopup'><\/div>").append($("#ShowRestrictedPopup").html())
          , i = t.PopUp({
            showLightBox: !0,
            width: 528,
            showCloseButton: !1,
            showCloseIcon: n,
            closePopupOnLightBoxClick: n
        });
        t.find("#btnOk").click(function() {
            i.Close()
        });
        t.find("#btnCancel").click(function() {
            i.Close()
        })
    }
    ;
    this.RestrictedPopUpClick = function() {
        var n = $("#ShowRestrictedPopup input[name=businesstype]:checked").val();
        cookie.Set({
            bucket: cookie.buckets.funcTemp,
            name: "spat",
            value: n
        });
        window.location = window.location.href
    }
    ;
    this.ShowOwnBrandInlineSuggestions = function(t, i, r, f, o, s) {
        n || (n = !0,
        $(".lnkAlsoConsider_" + i).attr("data-opened") == "true" && ($(".list_accessories").animate({
            height: 0
        }, 250, function() {
            n = !1
        }),
        MyList.isOpened = !1,
        $(".list_accessories").remove(),
        $(".lnkAlsoConsider_" + i).attr("data-opened", "false")),
        u ? ($(".ownbrand_suggestions").slideToggle(500, function() {
            $(".ownbrand_suggestions").remove()
        }),
        $("#obAlsoConsider" + i).attr("data-opened", "false"),
        $(".ownBrandUpArrow").addClass("ownBrandDownArrow").removeClass("ownBrandUpArrow"),
        $(".ownBrandSuggestionLink a .linkTextOption").html("").html("View Lower-Priced Option"),
        $(".ownBrandSuggestionLink a").removeAttr("ctatype").attr("ctaType", "lowerpriceoption"),
        u = !1,
        n = !1,
        e.btn != t && setTimeout(function() {
            Utilities.ShowOwnBrandInlineSuggestions(t, i, r, f, o)
        }, 700)) : $.ajax({
            url: $("#obAlsoConsider" + i).attr("data-url"),
            data: {
                sku: i,
                isExact: r,
                checkInv: f,
                qty: s
            },
            type: "GET"
        }).done(function(s) {
            var c = $(".OBItem_" + i)
              , h = $('<div class="ownbrand_suggestions clear" style="display:none"><\/div>').append(s);
            c.append(h);
            $("#obAlsoConsider" + i + " .ownBrandDownArrow").addClass("ownBrandUpArrow").removeClass("ownBrandDownArrow");
            $("#obAlsoConsider" + i + " .linkTextOption").html("").html("Hide Lower-Priced Option");
            $("#obAlsoConsider" + i).removeAttr("ctatype").attr("ctaType", "hidelowerpriceoptions");
            $(".OBItem_" + i + " .obSkuDetailsInner .button").attr("parentsku", i);
            $(".OBItem_" + i + " .obSkuDetailsInner .desc2 a").attr("parentsku", i);
            $(".OBItem_" + i + " .obSkuDetailsInner .Img_Sku").attr("parentsku", i);
            $(".OBItem_" + i + " .OwnBrandATC input").attr("parentsku", i);
            o || ($(".obSkuDetailsInner #OBCompare").hide(),
            $("#ListType").val() == "19" ? (MyList.CalculateTotalSavings(i),
            $(".OBItem_" + i + " .obSkuDetailsInner").attr("id", "suggestion_" + i),
            $(".OwnBrandATC input.qtyInput").bind("keyup", function() {
                MyList.CalculateTotalSavings(i)
            })) : $(".OwnBrandATC input").removeAttr("data-ownbrandupdate"));
            $(".obSkuDetailsInner input[type=checkbox]").each(function(n, t) {
                var i = $(t).attr("sku");
                $(".BrowseItem #ItemSrchCompare #CChckBx" + i).is(":checked") && ($(".obSkuDetailsInner #CChckBx" + i).attr("checked", !0),
                $(".obSkuDetailsInner #CChckBx" + i).parent().find("label").html("Comparing"))
            });
            h.slideToggle(500);
            u = !0;
            n = !1;
            e = {
                btn: t,
                sku: i,
                isExact: r,
                checkInv: f
            };
            $("#obAlsoConsider" + i).attr("data-opened", "true")
        }))
    }
}
  , Loading = new function() {
    this.Show = function(n) {
        this.Hide();
        n ? $("#Loading_box_global").html('<div id="Loading_Text" class="loading"><span class="ICO"><\/span><span class="formLabel">' + n + "<\/span><\/div>") : $("#Loading_box_global").html('<div id="Loading_Text" class="loading"><span class="ICO"><\/span><span class="formLabel">Loading...<\/span><\/div>');
        $("#Loading_box_global").css("display", "block").Reposition(null, !0)
    }
    ;
    this.Hide = function() {
        $("#Loading_box_global").empty()
    }
}
;
$.fn.ShowLoading = function() {
    this.Image = function(n) {
        $(n).addClass("LoadingImg ico")
    }
    ;
    this.ImageN = function(n) {
        $(n).addClass("LoadingError ico")
    }
    ;
    this.ImageY = function(n) {
        $(n).addClass("LoadingCheck ico")
    }
    ;
    this.ImageReset = function(n) {
        $(n).addClass("ico")
    }
}
;
LightBox = new function() {
    function n() {
        var n = $("#light_box_global")
          , t = $("#Body")
          , r = document.body
          , i = document.documentElement
          , u = Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight, t.height());
        n[0] && t[0] && (ie8 ? n.css({
            width: t.width(),
            height: u
        }) : n.css({
            width: "100%",
            height: u
        }))
    }
    var t = "#333333";
    this.Show = function() {
        var t = $("#light_box_global");
        t[0] && (t.css({
            display: "block"
        }),
        n());
        $(window).on("resize", n)
    }
    ;
    this.ShowCustom = function(n) {
        var t = n.div
          , i = n.width
          , r = n.height
          , u = n.color
    }
    ;
    this.Hide = function() {
        var i = $("#light_box_global");
        i[0] && i.css({
            display: "none",
            background: t
        });
        $(window).unbind("resize", n)
    }
}
;
$.fn.TabMenu = function() {
    var i = this
      , n = $(this).find("a.tab")
      , t = $(this).find("div.tabPanel");
    n.length > 0 && (this.OpenTab = function(i) {
        var u = null, r;
        for (i = $(i),
        u = $(t[n.index(i)]),
        r = 0; r < n.length; r++)
            $(n[r]).hasClass("tabNotSelected") || $(n[r]).addClass("tabNotSelected");
        i.removeClass("tabNotSelected");
        t.hide();
        u.show()
    }
    ,
    n.click(function() {
        i.OpenTab(this)
    }),
    $(n[0]).click())
}
;
ScriptHelper = new function() {
    function s(n, t, i) {
        if (n) {
            if (n.addEventListener)
                return t.toLowerCase() == "mouseover" || t.toLowerCase() == "mouseout" ? n.addEventListener(t, function(n) {
                    trueMouseOut(element, n) && i(n)
                }, !1) : n.addEventListener(t, i, !1),
                !0;
            if (n.attachEvent)
                return t.toLowerCase() == "mouseover" ? t = "mouseenter" : t.toLowerCase() == "mouseout" && (t = "mouseleave"),
                n.attachEvent("on" + t, i);
            n["on" + t] = i
        }
    }
    function o() {
        if (i == 0) {
            for (var n = 0; n < t.length; n++)
                t[n].call();
            t = []
        }
    }
    var n = !1, u = [], f = [], t = [], i = 0, e = null, r;
    this.OnLoad = function(t, i) {
        n && t.call(t);
        var r = r || 0;
        i ? u.push(t) : f.push(t)
    }
    ;
    this.OnLateLoad = function(n) {
        this.OnLoad(function() {
            setTimeout(function() {
                n.call()
            }, 50)
        })
    }
    ;
    this.OnDocumentWriteLoad = function(n) {
        t.push(n)
    }
    ;
    this.ScriptExists = function(n) {
        for (var r = document.getElementsByTagName("head")[0] || document.documentElement, i = r.getElementsByTagName("script"), t = 0; t < i.length; t++)
            if (i[t].src.indexOf(n) >= 0)
                return i[t].src.indexOf("recaptcha") >= 0 || i[t].src.indexOf("pstrength") >= 0 ? (i[t].parentNode.removeChild(i[t]),
                !1) : !0;
        return !1
    }
    ;
    this.AddCss = function(n, t) {
        var i = document.createElement("link"), r, u, f;
        i.async = "async";
        i.type = "text/css";
        i.rel = "stylesheet";
        i.href = n;
        r = !1;
        t && (navigator.userAgent.indexOf("Safari") >= 0 && navigator.userAgent.indexOf("Chrome") < 0 ? (u = (new Date).getTime() + 2e3,
        f = setInterval(function() {
            r || (i.sheet || (new Date).getTime() > u) && (r = !0,
            clearInterval(f),
            t.call())
        }, 50)) : i.onload = i.onreadystatechange = function() {
            r || this.readyState && this.readyState !== "loaded" && this.readyState !== "complete" || (r = !0,
            t && setTimeout(t, 100),
            i.onload = i.onreadystatechange = null)
        }
        );
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(i)
    }
    ;
    this.AddScript = function(t, r, u) {
        var f, e, s;
        if (t) {
            if (this.ScriptExists(t)) {
                r && r.call(r);
                return
            }
            f = document.createElement("script");
            u && u.async != !1 && (f.async = "async");
            f.type = "text/javascript";
            t = t.trim();
            e = t.indexOf("://");
            (e == 4 || e == 5) && (t = t.substring(e + 1));
            f.src = t;
            f.done = !1;
            s = document.getElementsByTagName("head")[0] || document.documentElement;
            f.IsOnLoad = n;
            f.IsOnLoad && i++;
            f.onload = f.onreadystatechange = function() {
                !f || f.done || f.readyState && f.readyState !== "loaded" && f.readyState !== "complete" || (f.done = !0,
                setTimeout(function() {
                    r && $.isFunction(r) && r();
                    f.IsOnLoad && (i--,
                    o())
                }, 100),
                f.onload = f.onreadystatechange = null)
            }
            ;
            f.timeout = setTimeout(function() {
                f.done || (f.IsOnLoad && (i--,
                o()),
                delete f)
            }, 1e3);
            s && s.appendChild(f)
        }
    }
    ;
    this.RemoveScript = function(n) {
        for (var r = document.getElementsByTagName("head")[0] || document.documentElement, i = r.getElementsByTagName("script"), t = 0; t < i.length; t++)
            i[t].src.indexOf(n) >= 0 && i[t].parentNode.removeChild(i[t]);
        return !0
    }
    ;
    s(window, "load", function() {
        var t;
        for (document.write = function(n) {
            var u, t, f, r, s, o, h, i, c;
            if (n != "") {
                for (u = !0; u; )
                    t = n.indexOf("<script"),
                    t >= 0 ? (f = n.indexOf("src=", t),
                    r = n.indexOf(" ", f),
                    r < 0 && (r = n.indexOf(">") - 1),
                    s = n.indexOf("<\/script", t),
                    o = n.substring(f, r).replace('"', "").replace("src=", "").replace('"', ""),
                    argslower = null,
                    h = n.substring(t, s + 9),
                    n = n.replace(h, ""),
                    o != "" && ScriptHelper.AddScript(o)) : u = !1;
                n != "" && (i = document.createElement("div"),
                i.innerHTML = n,
                e ? e.appendChild(i) : n.indexOf("recaptcha") > 0 ? (c = document.getElementById("Captcha-Sec-Wrapper"),
                c.appendChild(i)) : document.body.appendChild(i))
            }
        }
        ,
        t = 0; t < f.length; t++)
            f[t].call();
        for (t = 0; t < u.length; t++)
            u[t].call();
        n = !0
    });
    this.Loaded = function() {
        return n
    }
    ;
    r = document.write;
    document.write = function(n) {
        if (n.toLowerCase().indexOf("jquery.min") > 0)
            return !1;
        r.call ? r.call(document, n) : r(n)
    }
}
;
Scene7 = new function() {
    var n = this
      , t = !1;
    this.ScriptsUrl = null;
    this.FlyoutJs = null;
    this.CssUrl = null;
    this.LoadFlyout = function(i) {
        t || (ScriptHelper.AddCss(n.CssUrl, function() {
            ScriptHelper.AddScript(n.FlyoutJs, function() {
                ScriptHelper.AddScript(n.ScriptsUrl)
            });
            ScriptHelper.OnDocumentWriteLoad(function() {
                Scene7.LoadFlyout(i)
            })
        }),
        t = !0,
        delete n)
    }
}
;
$.fn.EvalScripts = function() {
    try {
        $(this).find("script[type=text/javascript]").each(function(n, t) {
            eval(t.innerHTML)
        })
    } catch (n) {}
    return this
}
;
$.fn.pval = function() {
    var n = $(this)
      , t = n.eq(0).val();
    return t == n.attr("placeholder") ? "" : t
}
;
CountDownOffer = new function() {
    this.Refresh = function() {
        $.ajax({
            url: "/DynamicContent/DynamicAlley",
            type: "get"
        }).done(function(n) {
            var t = $("#DynamicAlley");
            t.replaceWith(n);
            Nav.init($("#DynamicAlley"))
        })
    }
}
;
$(document).bind("click", function(n) {
    var t = n.target, i, r;
    t && t.tagName.toLowerCase() != "a" && (t = $(t).closest("a")[0]);
    t && t.getAttribute("hidden_qs") && t.tagName.toLowerCase() == "a" && t.href && (i = t.getAttribute("hidden_qs"),
    r = t.href + (t.href.indexOf("?") > -1 ? "&" : "?") + i,
    n.preventDefault(),
    document.location.href = r)
});
$.fn.ShowInstantCoupon = function() {
    var t = $(this), d, c, u, l;
    if (t.attr("data-eoffer") == "true")
        return $(t).show(),
        !1;
    $(t).hide();
    var f = t.attr("data-offerType"), e = t.attr("data-Orientation"), o = t.attr("data-newcustomerflag"), a = o == "1" ? $("<span class='newCustomerSpan'>New Customers only<\/span>") : "", v = o == "1" ? $('<a class="restrictionApplySpan" onclick="$(this).Tooltip(\'If your business has a pre-negotiated contract price on this product, you will receive that contracted price.\',300,{hasCloseButton:true,unique:true})">See Details<\/a>') : "", r, s = t.attr("data-DescountAmount"), y = t.attr("data-title"), p = t.attr("data-desc"), w = t.attr("data-index") || 18e3, i = "eOfferTip EofferTipb EofferTipAmmount EofferTip1b", n = $("<div class='" + i + "'><span class='coolTipClose'  alt='Close'><\/span><div class='coolTipCont' id='CoolTip0Content'><div class='PromoAmountDiv'><div class='promoAmount'>Save <br><\/div><\/div><div class='promoTitle'><\/div><div class='eOfferLogo'><\/div><div class='promoContent'><span class='txtSmall'><\/span><\/div><\/div><\/div>"), h = n.find(".promoAmount"), b = t.offset(), g = n.offset(), k = this.outerWidth(), nt = this.outerHeight();
    n.css({
        width: 156,
        "z-index": w
    });
    d = n.outerHeight();
    c = n.outerWidth();
    alert(s);
    u = {
        l: $(window).scrollLeft(),
        t: $(window).scrollTop(),
        w: $(window).width(),
        h: $(window).height()
    };
    l = b.left + k + c;
    r = l > u.l + u.w ? "left" : "right";
    t.attr("data-eoffer", "true");
    n.find(".PromoAmountDiv").after(a);
    n.find(".promoTitle").append(y);
    n.find(".promoContent").append(p);
    n.find(".promoTitle").after(v);
    n.find(".promoAmount").append(s);
    $(t).before(n);
    toolTipHeight = n.outerHeight();
    toolTipWidth = n.outerWidth();
    e == 2 && r == "right" ? (n.show(function() {
        $(this).animate({
            opacity: 1
        })
    }),
    f != "4" ? i = "eOfferTip EofferTipb EofferTipAmmount EofferTip2b" : (h.hide(),
    i = "eOfferTip EofferTipb EofferTip2b")) : (e == 1 || r == "left") && (f == "4" && h.hide(),
    n.show(function() {
        $(this).animate({
            opacity: 1
        })
    }));
    n.attr("class", i);
    t.attr("data-eoffer", "true");
    n.find(".coolTipClose").bind("click", function() {
        n.remove();
        $(t).show();
        t.attr("data-eoffer", "false")
    })
}
;
$(document).ready(function() {
    $(".HasEoffer").each(function(n, t) {
        $(t).attr("data-ShowPop") == "1" && $(t).ShowInstantCoupon()
    })
});
$(document).on("QViewOpen", function(n, t) {
    $(document).find(".eOfferTip").remove();
    var i = $(".HasEoffer", t);
    i[0] && (i.ShowInstantCoupon(),
    $(document).find(".eCoupon").attr("data-eoffer", "false"))
});
$(document).on("click", ".favListICO", function() {
    var n = $(".helpIcon").Tooltip($(".helpContent").html(), 300, {
        skin: "ListsErrorTip couponTip",
        showLightBox: !0,
        hasCloseButton: !1,
        time: 5e3
    })
});
$(document).on("QViewClose", function() {
    $(document).find(".eCoupon").attr("data-eoffer", "false")
});
$(document).on("click", ".showLessDeals, .showMoreDeals", function() {
    ShowMoreHotDeals($(this))
});
$.fn.seelessormore = function() {
    $("span.seeMore").unbind().click(function() {
        var n = $(this);
        n.parent().children("span.seeMore").removeClass("Show").addClass("Hide");
        n.parent().children("span.moreDetails").removeClass("Hide").addClass("Show");
        n.parent().children("span.seeLess").removeClass("Hide").addClass("Show")
    });
    $("span.seeLess").unbind().click(function() {
        var n = $(this);
        n.parent().children("span.seeMore").removeClass("Hide").addClass("Show");
        n.parent().children("span.moreDetails").removeClass("Show").addClass("Hide");
        n.parent().children("span.seeLess").removeClass("Show").addClass("Hide")
    })
}
;
$.fn.getCursorPosition = function() {
    return this.lengh == 0 ? -1 : $(this).getSelectionStart()
}
;
$.fn.getSelectionStart = function() {
    var n, t;
    return this.lengh == 0 ? -1 : (input = this[0],
    n = input.value.length,
    input.createTextRange ? (t = document.selection.createRange().duplicate(),
    t.moveEnd("character", input.value.length),
    t.text == "" && (n = input.value.length),
    n = input.value.lastIndexOf(t.text)) : typeof input.selectionStart != "undefined" && (n = input.selectionStart),
    n)
}
;
$.fn.maskPasswordValue = function() {
    var n = $(this), t;
    if (n.is("input") && n.attr("type") == "password") {
        $(n).keypress(function(t) {
            setTimeout(function() {
                i(t, n)
            }, 500)
        });
        $(n).attr("type", "text");
        $(n).append("<input style='display:block' id='maskPassword' name='maskPassword' type='text'>");
        $(n).keydown(function(t) {
            t.keyCode == 8 && setTimeout(function() {
                i(t, n)
            }, 1)
        });
        function r(n) {
            for (var t = "", i = 0; i < n; i++)
                t += "*";
            return t
        }
        function r(n) {
            for (var t = "", i = 0; i <= n.length - 1; i++)
                t += "*";
            return t
        }
        function i(n, t) {
            var u = $("#maskPassword").val()
              , f = $("#maskPassword").val().length
              , i = n.keyCode ? n.keyCode : n.charCode
              , e = $(t).getCursorPosition()
              , o = $(t).val().length;
            i != 9 && i != 13 && i != 37 && i != 40 && i != 37 && i != 39 && (i != 8 && i != 46 ? (u = u + String.fromCharCode(i),
            f += 1) : (i == 8 || i == 46) && f != o && (f -= 1,
            u = u.substr(0, e) + u.substr(e + 1)),
            $("#maskPassword").val(u),
            $(t).val(r(u)))
        }
    } else
        n.length > 0 && (t = n.find("input"),
        t.length > 0 && t.each(function(n, t) {
            $(t).maskPasswordValue()
        }))
}
;
$.fn.changeValFromToID = function(n) {
    $(this).attr("toID", n);
    $(this).on("change", function() {
        var n = $(this)
          , t = $("#" + n.attr("toID"));
        n.attr("toID") != undefined && changeValFromToID(n, t)
    })
}
;
changeValFromToID = function(n, t) {
    n.length > 0 && t.length > 0 && t.val(n.val())
}
;
$.fn.setplaceholder = function() {
    var n = $(this), t;
    n.is("input") ? n.each(function(n, t) {
        !$.support.placeholder && $(t).attr("placeholder") != undefined && $(t).attr("placeholder") && ($('<label class="formLabel  ptext" for="' + $(t).attr("id") + '">' + $(t).attr("placeholder") + "<\/label>").insertBefore($(t)),
        $(t).on("blur", function() {
            this.value.length > 0 ? $("label[for='" + $(this).attr("id") + "'].ptext").hide() : $("label[for='" + $(this).attr("id") + "'].ptext").show()
        }).on("keypress", function() {
            $("label[for='" + $(this).attr("id") + "'].ptext").hide()
        }).on("click", function() {
            $("label[for='" + $(this).attr("id") + "'].ptext").hide()
        }).triggerHandler("blur"));
        $.support.placeholder && $(t).attr("placeholder") != undefined && $(t).attr("placeholder") && $("label[for='" + $(this).attr("id") + "'].ptext").hide()
    }) : n.length > 0 && (t = n.find("input"),
    t.length > 0 && t.each(function(n, t) {
        $(t).setplaceholder()
    }))
}
;
jQuery.support.placeholder = function() {
    var n = document.createElement("input");
    return "placeholder"in n
}();
var BrowserDevice = {}
  , SKU = new function() {
    this.EnterZipCode = function(n) {
        $(n).val("")
    }
    ;
    this.SetUpInputFoZipCode = function(n, t, i, r, u, f, e, o, s) {
        var h = $(o)
          , c = $(e);
        return h.focus(function() {
            c && c.removeClass(" navOver").addClass("").removeClass(" navClick").addClass("");
            h.val() == "Enter Zip Code" && h.val("")
        }).blur(function() {
            h.val() == "" && h.val("Enter Zip Code")
        }).keyup(function(t) {
            var c, l;
            c = t ? t : window.event;
            l = c.keyCode ? c.keyCode : c.which;
            l == 13 ? (t.stopPropagation(),
            (h.val() != "" || h.val() != "Enter Zip Code") && SKU.GetDeliveryDates(n, h.val(), i, r, u, f, e, o, s)) : String.prototype.IsNumber(h)
        }).keypress(function(n) {
            n.keyCode == 13 && (h.val() != "Enter Zip Code" ? n.preventDefault() : String.prototype.IsNumber(h))
        }),
        !0
    }
    ;
    this.GetDeliveryDates = function(n, t, i, r, u, f, e, o, s, h) {
        var l = typeof h != "undefined" ? h : "none", c;
        t.length != 5 || t == "00000" ? tooltip.init($(o), "Zip code should be a valid five digit number", 300, {
            index: 18e3
        }) : ($(s).text("Loading..."),
        c = n,
        $.ajax({
            url: "/Item/GetDeliveryDate",
            data: {
                sku: c,
                zip: t,
                vendor: i,
                quantity: r,
                shipViaCode: u,
                leadTimeDays: f
            },
            success: function(n) {
                var r, f, t;
                if (n.indexOf("|") >= 0) {
                    r = $(e);
                    r && r.removeClass(" navOver").addClass("").removeClass(" navClick").addClass("");
                    var i = n.split("|")
                      , h = i[0] || "Estimates are unavailable!"
                      , u = i[1];
                    $(o).val(u);
                    $(s).html("");
                    setTimeout(function() {
                        $(s).html(h)
                    }, 100);
                    f = typeof i[0] != "undefined" && i[0] !== "";
                    t = {};
                    t.events = "event93";
                    t.eVar53 = u || "NA";
                    t.prop21 = c + (l == "0" ? ":delivery date change:dropdown_arrow" : ":delivery date change:go_button");
                    f || (t.prop22 = c + ":Estimates are unavailable!")
                }
            },
            error: function() {
                $(s).html("Estimates are unavailable!")
            }
        }))
    }
    ;
    $.fn.EcoFee = function(n) {
        Utilities.FillTemplate("/NgTemplate/EcoFee", n, function(n) {
            n.PopUp({
                hasCloseButton: !0,
                width: 400,
                showLightBox: !0,
                index: 18e3
            })
        })
    }
    ;
    this.AssignQuantity = function(n, t) {
        var i = $(this).prevAll("li[name='skuSelectQuantity']:first");
        i && i.removeClass(" navOver").addClass("").removeClass(" navClick").addClass("");
        $("#QuantityInput").val(t);
        Utilities.IsValidQty($("#QuantityInput"))
    }
}
  , SkuEmailNotifyPopUp = new function() {
    this.showPopup = function(n) {
        function o(n) {
            var t = "";
            $.trim("False".toString().toLowerCase()) == "true" ? t = $("<div><\/div>").html(n).PopUp({
                showCloseButton: !1,
                showLightBox: !0,
                width: "auto",
                height: "auto"
            }) : (LightBox.Show(),
            t = $("#QViewInfo"),
            t.html(n),
            t.show(),
            t.Reposition(),
            t.Carousel());
            t.find("#Cancel").click(function() {
                popup.Close()
            });
            SKUEmailHelper.init()
        }
        $(n).attr("href", "#");
        var t = $(n).data("sku")
          , i = $(n).data("findnumber")
          , r = $(n).data("effortcode")
          , u = $(n).data("promocode")
          , f = $(n).data("emailalerttype")
          , e = $(n).data("emailalertseqnum");
        return $.ajax({
            url: "/Item/GetSkuEmailMe",
            type: "get",
            data: {
                sku: t,
                effortCode: r,
                findNumber: i,
                promoCode: u,
                emailAlertType: f,
                emailAlertSeqNum: e
            }
        }).done(function(n) {
            o(n)
        }),
        event != undefined && event.preventDefault && event.preventDefault(),
        event != undefined && event.preventDefault && event.stopPropagation(),
        !1
    }
}
  , SKUEmailNotify = function() {
    function n() {
        var n, t, r;
        $("#skuEmailErrorMsg").hide();
        $("#skuEmailThankYou").hide();
        $("#skuEmailServerError").hide();
        n = $("#txtSkuEmailNotify").val();
        Utilities.validateEmailAddress(n) ? i(n) : (t = $("#skuEmailErrorMsg"),
        t.show(),
        $("#txtSkuEmailNotify").focus(),
        $(document).trigger(AnalyticsEvents.AjaxScResponseError, {
            stat: "/Item/SkuEmailNotifyMe"
        }),
        r = $("#emailMeMainDiv").data("sku"))
    }
    function t() {
        var i = $("input[name=priceAlert]:checked").val(), e = parseFloat($("#emailMeMainDiv").data("brandid")), r = 0, n = 0, u, t, f, o, s;
        if (e == 1 ? (r = parseFloat($("#emailMeMainDiv").data("skuprice")),
        n = parseFloat($(".targetprice").val())) : (r = parseFloat($("#emailMeMainDiv").data("skuprice").replace(",", ".")),
        u = $(".targetprice").val(),
        t = u.split(","),
        t.length == 2 ? /^\d+$/.test(t[0]) && /^\d+$/.test(t[1]) && (n = parseFloat($(".targetprice").val().replace(",", "."))) : t.length == 1 && /^\d+$/.test(t[0]) && (n = parseFloat($(".targetprice").val()))),
        i == "targetPrice") {
            if (n > 0 && n < r)
                return {
                    choice: i,
                    targetprice: n
                };
            if (Loading.Hide(),
            $("#btnSkuEmailNotify").show(),
            !$("#priceError").length)
                return f = "Please enter a valid price.",
                o = $("#emailMeMainDiv").data("sku"),
                $(".targetprice").after('<div id="priceError" class="red txtBold" style="margin:3px 10px">' + f + "<\/div>"),
                !1
        } else
            return $("#tarPriceDiv").hide(),
            {
                choice: i
            }
    }
    function i(n) {
        var f = $("#btnSkuEmailNotify").attr("data-emailType"), o = $("#emailMeMainDiv").data("findnum"), s = $("#emailMeMainDiv").data("effortcode"), c = $("input[name=priceAlert]:radio:checked").val(), l = $("input[name=priceAlert]:radio:checked").attr("data-omnimsg"), a = $("input#txtTargetPrice").val(), e, r, u, h, i;
        if (Loading.Show(),
        $("#btnSkuEmailNotify").hide(),
        f == "notInStock")
            try {
                r = $("#emailMeMainDiv").data("sku");
                i = {
                    alerttype: "1",
                    email: n,
                    sku: r,
                    findnum: o,
                    effortcode: s
                };
                $.post("/Item/SkuEmailNotifyMe", i, function(n) {
                    n === "true" ? ($("#btnSkuEmailNotify").hide(),
                    $("#txtSkuEmailNotify").hide(),
                    $("#skuEmailThankYou").show()) : n === "false" && ($("#skuEmailServerError").show(),
                    $(document).trigger(AnalyticsEvents.AjaxScResponseError, {
                        stat: "/Item/SkuEmailNotifyMe"
                    }));
                    Loading.Hide()
                })
            } catch (v) {
                $("#skuEmailErrorMsg").hide();
                $("#skuEmailThankYou").hide();
                $("#skuEmailServerError").show()
            }
        else
            (f == "loginPrAlert" || f == "nLoginPrAlert") && (e = $("#txtSkuEmailNotify").data("price"),
            e = $("#SkuPriceUpdate").text().replace($("div#emailMeMainDiv").data("currencysymbol"), "").Trim(),
            r = $("#txtSkuEmailNotify").data("sku"),
            u = t(),
            u && (u.name = $(".name").val(),
            h = JSON.stringify(u),
            i = {
                alerttype: "2",
                email: n,
                sku: r,
                findnum: o,
                effortcode: s,
                payload: h
            },
            $.post("/Item/SkuEmailNotifyMe", i, function(n) {
                var r, t;
                n === "true" && (r = $("div#emailMeMainDiv").data("currencysymbol"),
                $("#email").text(i.email),
                $("#skuNo").text(i.findnum),
                $("#price").text(r + e),
                $(".OptVat").text($(".priceAlertDiv").find(".VAT").text()),
                $("#tarPrice").text(r + $("#txtTargetPrice").val()),
                $(".emailDiv").hide(),
                $("#currentPriceDiv").hide(),
                $("#priceAlertHeaderMsg").hide(),
                $("#vatDisclaimer").hide(),
                $("#QViewTabMenu, #QViewInfo .formRow.alignRight").hide(),
                t = new Date,
                $("#priceAlertSetTime").text(("0" + t.getDate()).slice(-2) + "/" + ("0" + (t.getMonth() + 1)).slice(-2) + "/" + t.getFullYear() + " " + t.toLocaleTimeString()),
                $("#AlertConfirm").show());
                Loading.Hide();
                $("#btnSkuEmailNotify").show()
            })))
    }
    this.init = function() {
        $("div.priceAlertDiv").length > 0 && $("div.priceAlertDiv").data("seqnum") > 0 && $("div.priceAlertDiv").data("hastargetprice") > 0 && ($("#txtTargetPrice").removeAttr("disabled"),
        $("#txtTargetPrice").val($("div.priceAlertDiv").data("targetprice")),
        $("input[name='priceAlert'][value='targetPrice']").attr("checked", "checked"),
        $("input[name='priceAlert'][value='priceDown']").removeAttr("checked"));
        $("#btnSkuEmailNotify").bind("click", function() {
            n()
        });
        $("#btnSkuEmailNotify").bind("keypress tap", function(t) {
            var i = t.which ? parseInt(t.which) : parseInt(t.keyCode);
            i == 13 && n()
        });
        $("#txtSkuEmailNotify").bind("keypress", function(t) {
            var i = t.which ? parseInt(t.which) : parseInt(t.keyCode);
            i == 13 && n()
        });
        $("input[name=priceAlert]").on("click tap", function(n) {
            if (n.target.value == "targetPrice")
                $("#txtTargetPrice").removeAttr("disabled");
            else {
                var t = $("#priceError");
                t && t.remove();
                $("#txtTargetPrice").attr("disabled", "disabled")
            }
        });
        $("#txtTargetPrice").bind("keyup", function() {
            var n = $(this).val();
            isNaN(n) && (n = n.replace(/[^0-9\.]/g, ""),
            n.split(".").length > 2 && (n = n.replace(/\.+$/, "")));
            $(this).val(n)
        })
    }
};
(function(n) {
    function t(t) {
        if (t != undefined) {
            var i = n(t).children();
            n(i).attr("type") === "checkbox" && (i.is(":checked") && n(t).attr("class", "checkboxSpan isChecked"),
            i.is(":checked") != !0 && n(t).attr("class", "checkboxSpan notChecked"))
        }
    }
    function i(t) {
        var i = n(t).children()
          , r = i.attr("name")
          , u = n("input[name='" + r + "']");
        u.each(function(t, i) {
            n(i).attr("type") === "radio" && (n(i).is(":checked") && (n(i).parent().attr("class", "radioSpan radisCheck"),
            n(i).trigger("onchange")),
            n(i).is(":checked") != !0 && n(i).parent().attr("class", "radioSpan radnotCheck"))
        })
    }
    n.fn.customCheckbox = function() {
        n(this).on("click", "span.checkboxSpan", function() {
            t(this)
        });
        return this
    }
    ;
    n.fn.customCheckBoxInit = function() {
        n("span.checkboxSpan").each(function() {
            t(this)
        })
    }
    ;
    n.fn.customRadio = function() {
        n(this).on("click", "span.radioSpan", function() {
            i(this)
        });
        return this
    }
    ;
    n.fn.customRadioInit = function() {
        n("span.radioSpan").each(function() {
            i(this)
        })
    }
}
)(jQuery);
ScriptHelper.OnLoad(function() {
    LoadDeferedImages()
}),
function(n) {
    var u = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: !1,
        getWidthFrom: "",
        responsiveWidth: !1
    }
      , f = n(window)
      , s = n(document)
      , t = []
      , e = f.height()
      , r = function() {
        for (var r, u = f.scrollTop(), h = s.height(), c = h - e, l = u > c ? c - u : 0, o = 0; o < t.length; o++) {
            var i = t[o]
              , a = i.stickyWrapper.offset().top
              , v = a - i.topSpacing - l;
            u <= v ? i.currentTop !== null && (i.stickyElement.css("width", "").css("position", "").css("top", ""),
            i.stickyElement.trigger("sticky-end", [i]).parent().removeClass(i.className),
            i.currentTop = null) : (r = h - i.stickyElement.outerHeight() - i.topSpacing - i.bottomSpacing - u - l,
            r = r < 0 ? r + i.topSpacing : i.topSpacing,
            i.currentTop != r && (i.stickyElement.css("width", i.stickyElement.width()).css("position", "fixed").css("top", r),
            typeof i.getWidthFrom != "undefined" && i.stickyElement.css("width", n(i.getWidthFrom).width()),
            i.stickyElement.trigger("sticky-start", [i]).parent().addClass(i.className),
            i.currentTop = r))
        }
    }
      , o = function() {
        var r, i;
        for (e = f.height(),
        r = 0; r < t.length; r++)
            i = t[r],
            typeof i.getWidthFrom != "undefined" && i.responsiveWidth === !0 && i.stickyElement.css("width", n(i.getWidthFrom).width())
    }
      , i = {
        init: function(i) {
            var r = n.extend({}, u, i);
            return this.each(function() {
                var i = n(this), f = i.attr("id"), s = f ? f + "-" + u.wrapperClassName : u.wrapperClassName, o = n("<div><\/div>").attr("id", f + "-sticky-wrapper").addClass(r.wrapperClassName), e;
                i.wrapAll(o);
                r.center && i.parent().css({
                    width: i.outerWidth(),
                    marginLeft: "auto",
                    marginRight: "auto"
                });
                i.css("float") == "right" && i.css({
                    float: "none"
                }).parent().css({
                    float: "right"
                });
                e = i.parent();
                e.css("height", i.outerHeight());
                t.push({
                    topSpacing: r.topSpacing,
                    bottomSpacing: r.bottomSpacing,
                    stickyElement: i,
                    currentTop: null,
                    stickyWrapper: e,
                    className: r.className,
                    getWidthFrom: r.getWidthFrom,
                    responsiveWidth: r.responsiveWidth
                })
            })
        },
        update: r,
        unstick: function() {
            return this.each(function() {
                for (var r = n(this), u = -1, i = 0; i < t.length; i++)
                    t[i].stickyElement.get(0) == r.get(0) && (u = i);
                u != -1 && (t.splice(u, 1),
                r.unwrap(),
                r.removeAttr("style"))
            })
        }
    };
    window.addEventListener ? (window.addEventListener("scroll", r, !1),
    window.addEventListener("resize", o, !1)) : window.attachEvent && (window.attachEvent("onscroll", r),
    window.attachEvent("onresize", o));
    n.fn.sticky = function(t) {
        if (i[t])
            return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t != "object" && t)
            n.error("Method " + t + " does not exist on jQuery.sticky");
        else
            return i.init.apply(this, arguments)
    }
    ;
    n.fn.unstick = function(t) {
        if (i[t])
            return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t != "object" && t)
            n.error("Method " + t + " does not exist on jQuery.sticky");
        else
            return i.unstick.apply(this, arguments)
    }
    ;
    n(function() {
        setTimeout(r, 0)
    })
}(jQuery);
$promise = function(n) {
    function t() {
        var u, e, o;
        if (r || (r = !0),
        u = n.shift(),
        u) {
            if (u.resolve)
                u.resolve(function(n) {
                    if (n)
                        for (var r in n)
                            i[r] = n[r];
                    t()
                });
            else if (u.success)
                u.success(function(n) {
                    if (n)
                        for (var r in n)
                            i[r] = n[r];
                    t()
                });
            else if (u.call) {
                if (e = u(i),
                e && (e.resolve || e.call))
                    n.unshift(e);
                else if (e instanceof Object)
                    for (o in e)
                        i[o] = e[o];
                t()
            }
        } else
            f.length > 0 ? (n = [].concat(f.shift()),
            t()) : r = !1
    }
    var u = this
      , f = []
      , r = !1
      , i = {};
    n = [].concat(n);
    this.resolve = function(n) {
        return u.then(function() {
            n(i)
        }),
        u
    }
    ;
    this.then = function(n) {
        return f.push([].concat(n)),
        r || t(),
        u
    }
    ;
    t()
}
;
$(document).ready(function() {
    $("form.customForm").each(function(n, t) {
        $(t).ValidateForm()
    })
});
FormValidationHelper = function(n, t) {
    function u() {
        return t && t.type == "keypress" ? !0 : !1
    }
    function f(n) {
        var i = t.which ? parseInt(t.which) : parseInt(t.keyCode);
        return i && i != 13 && i != 8 && i != 0 && i != 9 && i != 39 && t.ctrlKey == !1 && t.altKey == !1 ? (parseInt(t.charCode) == 0 && i == 46 || parseInt(t.charCode) == 0 && i == 37 || n == "/^[0-9]/" && n.test(String.fromCharCode(i)) == !1 && t.preventDefault(),
        !0) : !1
    }
    var i = $(n);
    if (i.data("formValidator"))
        return i.data("formValidator");
    var c = i.attr("ajax-url")
      , o = []
      , v = ["required", "ifrequired", "email", "creditcard", "cardtype", "zipcode", "phone", "minlength", "maxlength", "numeric", "equalto", "regex", "emptyspacecheck", "htmlcheck", "specialcharacter", "regexcheck", "date", "money", "cardexpirydate"]
      , r = function(n, r) {
        var e, h;
        if (!t || t.type != "keypress") {
            o.push(r);
            var f = n.attr("data-error-elementname")
              , u = i.find("span[data-valmsg-for=" + n.attr("name").replace(/\./g, "\\.") + "]")
              , s = n.attr("data-val-ifrequired-optionalclass");
            s ? $("." + s).empty().css("display", "inline-block").html(r).addClass("field-validation-error") : f && u.length > 1 ? (e = $('[name="' + f + '"]:checked') || $('[name="' + f + '"] option:selected'),
            e && ($(u).empty().hide(),
            h = $("span[data-target-id='" + e.attr("id") + "']"),
            h.empty().css("display", "inline-block").html(r).addClass("field-validation-error"))) : ($(u).empty().css("display", "inline-block").html(r),
            $(u).addClass("field-validation-error"));
            n.addClass("input-validation-error");
            n.data("validationError", !0)
        }
    }
      , y = function(n) {
        var i = 20, t;
        return n < 100 && (t = (new Date).getFullYear(),
        n += Math.floor(t / 100) * 100,
        n > t + i ? n -= 100 : n <= t - 100 + i && (n += 100)),
        n
    };
    var s = {
        required: function(n) {
            return t && t.type == "keypress" ? !0 : n.val().Trim() == "" ? (r(n, n.attr("data-val-required")),
            !1) : !0
        },
        email: function(n) {
            if (t && t.type == "keypress")
                return !0;
            var i = Utilities.validateEmailAddress(n.val());
            return i || r(n, n.attr("data-val-email")),
            i
        },
        cardtype: function(n) {
            var e = /^[0-9]/, i;
            return (n.attr("cchiddenval") == undefined || n.attr("cchiddenval") != "true") && (i = Utilities.CardTypeCheck(n, e, !1, t),
            i != null && (i.valid == !0 || i.valid == !1 && i.showui == !0) ? (i.valid ? $("#" + n.attr("data-val-typeid")).val(i.type) : $("#" + n.attr("data-val-typeid")).val(""),
            $("#" + n.attr("data-val-typeviewid")).removeClass().addClass(i.type)) : ($("#" + n.attr("data-val-typeid")).val(""),
            $("#" + n.attr("data-val-typeviewid")).removeClass()),
            u() && f(e) || i != null && i.valid == !1) ? (r(n, n.attr("data-val-cardtype")),
            !1) : !0
        },
        creditcard: function(n) {
            if (t && t.type == "keypress")
                return !0;
            var u = n.val()
              , i = !0;
            return i || r(n, n.attr("data-val-creditcard")),
            i
        },
        zipcode: function(n) {
            var i = /^[0-9]/;
            return u() && f(i) || Utilities.RegexCheck(n, i, !1, t) == !1 || n.val() && (n.val().length < 5 || n.val().length > 5) ? (r(n, n.attr("data-val-zipcode")),
            !1) : !0
        },
        phone: function(n) {
            var i = /^[0-9]/;
            return u() && f(i) || Utilities.RegexCheck(n, i, !1, t) == !1 || n.val() && n.val().length != 10 ? (r(n, n.attr("data-val-phone")),
            !1) : !0
        },
        minlength: function(n) {
            var f, o;
            if (t && t.type == "keypress")
                return !0;
            if (n.val().length < n.attr("data-val-minlength-value"))
                if (f = n.attr("data-val-ifrequired-name"),
                f) {
                    var e = n.attr("data-val-ifrequired-value")
                      , s = n.attr("data-val-ifrequired-optionalclass")
                      , h = n.attr("name")
                      , u = $("input[name=" + f + "]", i);
                    if ((u.attr("type") == "radio" || u.attr("type") == "checkbox") && (u = u.filter(":checked")),
                    o = !1,
                    u.val() == e)
                        return r(n, n.attr("data-val-minlength")),
                        !1
                } else
                    return r(n, n.attr("data-val-minlength")),
                    !1;
            return !0
        },
        maxlength: function(n) {
            return t && t.type == "keypress" ? !0 : n.val().length > n.attr("data-val-maxlength-value") ? (r(n, n.attr("data-val-maxlength")),
            !1) : !0
        },
        equalto: function(n) {
            if (t && t.type == "keypress")
                return !0;
            var u;
            return (n.attr("data-val-equalto-other") && (u = n.attr("data-val-equalto-other").substring(2)),
            u || (u = n.attr("data-val-equalto-comparefield")),
            n.val().toLowerCase() != $("#" + u, i).val().toLowerCase()) ? (r(n, n.attr("data-val-equalto")),
            !1) : !0
        },
        emptyspacecheck: function(n) {
            return t && t.type == "keypress" ? !0 : /[^\S]/g.test(n.val()) ? (r(n, n.attr("data-val-emptyspacecheck")),
            !1) : !0
        },
        htmlcheck: function(n) {
            return t && t.type == "keypress" ? !0 : /[>]/g.test(n.val()) || /[<]/g.test(n.val()) ? (r(n, n.attr("data-val-htmlcheck")),
            !1) : !0
        },
        regex: function(n) {
            var t = new RegExp(n.attr("data-val-regex-pattern").replace(/\//g, ""),"g");
            return t.test(n.val()) ? !0 : (r(n, n.attr("data-val-regex")),
            !1)
        },
        numeric: function(n) {
            var i = /^[0-9]/;
            return u() && f(i) || Utilities.RegexCheck(n, i, !1, t) == !1 ? (r(n, n.attr("data-val-numeric")),
            !1) : !0
        },
        money: function(n) {
            var i = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
            return u() && f(i) || Utilities.RegexCheck(n, i, !1, t) == !1 ? (r(n, n.attr("data-val-money")),
            !1) : !0
        },
        cardexpirydate: function(n) {
            for (var t, i, o, e = String(n.val()), u = "", f = 0; f < e.length; f++)
                f == 1 && e.charAt(f) == "/" && (u = 0 + e.charAt(0)),
                /^[0-9]+$/.test(e.charAt(f)) && (u += e.charAt(f));
            for (t = "",
            i = 0; i < u.length; i++)
                /^[0-9]+$/.test(u.charAt(i)) && (i == 0 && u.charAt(i) > 1 ? (t += 0,
                t += u.charAt(i),
                t += "/") : i == 1 ? (t += u.charAt(i),
                t += "/") : t += u.charAt(i));
            if (n.val(t),
            t.length == 5) {
                if (o = t.match(/^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/),
                !o)
                    return r(n, n.attr("data-val-cardexpirydate")),
                    !1;
                var h = new Date(y(1 * o[2]),1 * o[1] - 1,1).valueOf()
                  , s = new Date
                  , c = new Date(s.getFullYear(),s.getMonth(),1).valueOf();
                return h <= c ? (r(n, n.attr("data-val-cardexpirydate")),
                !1) : !0
            }
            return r(n, n.attr("data-val-cardexpirydate")),
            !1
        },
        specialcharacter: function(n) {
            var t = /[-$@#%*<>()//\\!=+:¿?{-~!""^_\[\]]/;
            return u() && f(t) ? (r(n, n.attr("data-val-specialcharacter")),
            !1) : t.test(n.val()) ? (r(n, n.attr("data-val-specialcharacter")),
            !1) : !0
        },
        regexcheck: function(n) {
            var l = n.attr("data-val-regexcheck-cleanregex"), e, o, t, s, i, h, c;
            if (e = l ? new RegExp(n.attr("data-val-regexcheck-value"),"g") : new RegExp(n.attr("data-val-regexcheck-value").replace(/\//g, ""),"g"),
            o = n.attr("data-val-regexcheck-arrayvalue"),
            o != "") {
                if (t = $("input[name=" + n.attr("data-val-regexcheck-fieldname") + "]:checked"),
                t != undefined && t != "" && t.value != "")
                    for (s = o.split(","),
                    i = 0; i < s.length; i++)
                        if (h = s[i].split("B"),
                        t.val() === h[0] && (c = new RegExp(h[1].replace(/\//g, ""),"g"),
                        c.test(n.val()) == !1))
                            return r(n, n.attr("data-val-regexcheck")),
                            !1
            } else if (u() && f(e) || e.test(n.val()) == !1)
                return r(n, n.attr("data-val-regexcheck")),
                !1;
            return !0
        },
        ifrequired: function(n) {
            var e;
            if (t && t.type == "keypress")
                return !0;
            var h = n.attr("data-val-ifrequired-name")
              , s = n.attr("data-val-ifrequired-value")
              , u = n.attr("data-val-ifrequired-optionalclass")
              , o = n.attr("name")
              , f = $("input[name=" + h + "]", i);
            if ((f.attr("type") == "radio" || f.attr("type") == "checkbox") && (f = f.filter(":checked")),
            e = !1,
            f.val() == s || s == "#VALCHK#" && $.trim(f.val()).length > 0) {
                if (u && !n.val().Trim())
                    return $('input[data-val-ifrequired-optionalclass="' + u + '"]').each(function() {
                        if ($.trim($(this).val()))
                            return e = !0,
                            $('input[data-val-ifrequired-optionalclass="' + u + '"]').each(function() {
                                $("#lbl" + $(this).attr("id")).removeClass("requiredLabel");
                                $("#validation-for-" + $(this).attr("id")).removeClass("field-validation-valid").removeClass("field-validation-error").text("").hide();
                                $("." + u).empty().removeClass("field-validation-error").hide()
                            }).removeClass("input-validation-error"),
                            !1
                    }),
                    e ? ($("#req" + o).addClass("notRequiredSymbol").removeClass("requiredSymbol").html("&nbsp;"),
                    e) : (r(n, n.attr("data-val-ifrequired")),
                    !1);
                if (n.val().Trim())
                    u && ($('input[data-val-ifrequired-optionalclass="' + u + '"]').each(function() {
                        $("#lbl" + $(this).attr("id")).removeClass("requiredLabel");
                        $("#validation-for-" + $(this).attr("id")).removeClass("field-validation-valid").removeClass("field-validation-error").text("").hide()
                    }).removeClass("input-validation-error"),
                    $("." + u).empty().removeClass("field-validation-error").hide());
                else
                    return r(n, n.attr("data-val-ifrequired")),
                    !1;
                u || $("#req" + o).removeClass("notRequiredSymbol").addClass("requiredSymbol").text("*")
            } else
                $("#req" + o).addClass("notRequiredSymbol").removeClass("requiredSymbol").html("&nbsp;");
            return !0
        },
        date: function(n) {
            var i = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
            return u() && f(i) || Utilities.RegexCheck(n, i, !1, t) == !1 ? (r(n, n.attr("data-val-date")),
            !1) : !0
        }
    }
      , e = {
        text: function(n) {
            if (n.attr("data-val")) {
                var t = !0;
                $(v).each(function(i, r) {
                    n.attr("data-val-" + r) && t && (t = s[r](n))
                })
            }
        },
        password: function(n) {
            var e, t;
            if (n.attr("data-val-required") || n.val() || (t = $(n.attr("data-val-equalto-comparefield")),
            e = i.find("#validation-for-" + t.attr("id")),
            t.data("validationError", !1),
            t.removeClass("input-validation-error"),
            $(e).removeClass("field-validation-valid").removeClass("field-validation-error"),
            $(e).text("")),
            n.attr("data-val") && (n.attr("data-val-required") || !n.attr("data-val-required") && n.val())) {
                if (!s.required(n))
                    return;
                if (n.attr("data-val-password")) {
                    var o = parseInt(n.attr("data-val-password-minlength"))
                      , h = parseInt(n.attr("data-val-password-maxlength"))
                      , u = n.val()
                      , f = n.attr("data-val-password").split("|");
                    if (u.Trim() == "")
                        return r(n, f[0]),
                        !1;
                    if (u.length < o || u.length > h)
                        return r(n, f[1]),
                        !1;
                    if (1) {
                        if (!IsPasswordOk(u) && !1)
                            return r(n, f[2]),
                            !1
                    } else if (!/\d/.test(u) || !/[a-zA-z¡¿ÄäÀàÁáÂâÃãÅåǍǎĄąĂăÆæÇçĆćĈĉČčĎđĐďðÈèÉéÊêËëĚěĘęĜĝĢģĤĥÌìÍíÎîÏïĴĵĶķĹĺĻļŁłĽľÑñŃńŇňÖöÒòÓóÔôÕõŐőØøŒœŔŕŘřẞßŚśŜŝŞşŠšŤťŢţÞþÜüÙùÚúÛûŰűŨũŲųŮůŴŵÝýŸÿŶŷŹźŽžŻż]/.test(u))
                        return r(n, f[3]),
                        !1
                } else if (n.attr("data-val-htmlcheck") && n.hasClass("loginregular") && (/[>]/g.test(n.val()) || /[<]/g.test(n.val())))
                    return r(n, n.attr("data-val-htmlcheck")),
                    !1;
                t = n.attr("data-val-equalto-comparefield");
                t && $("#" + t, i).val() != n.val() && r(n, n.attr("data-val-equalto"))
            } else
                n.attr("data-val-equalto") && s.equalto(n)
        },
        checkbox: function(n) {
            n.attr("data-val-checkboxrequired") && !n.is(":checked") && r(n, n.attr("data-val-checkboxrequired"));
            var t = n.attr("data-val-ifrequired-name")
              , u = $("input[name=" + t + "]", i);
            n.attr("data-val-ifrequired-value") == "#VALCHK#" && u.val().length > 0 && !n.is(":checked") && r(n, n.attr("data-val-ifrequired"))
        },
        selectlist: function(n) {
            if (!n.val() || n.val() == "")
                if (n.attr("data-val-ifrequired")) {
                    var u = n.attr("data-val-ifrequired-name")
                      , t = n.attr("data-val-ifrequired-value")
                      , f = $("input[name=" + u + "]", i);
                    (n.find("option:selected").length == 0 || t && f.val() == t && n.find("option:selected").length > 0 && n.find("option:selected").val() == "") && r(n, n.attr("data-val-ifrequired"))
                } else
                    r(n, n.attr("data-val-required"))
        },
        radio: function(n) {
            var t = n.attr("name")
              , u = $("input[name='" + t + "']:checked", i);
            !u[0] && n.attr("data-val-required") && r(n, n.attr("data-val-required"))
        }
    }
      , l = function(n) {
        var t = i.find("#validation-for-" + n.attr("id"));
        n.data("validationError", !1);
        n.removeClass("input-validation-error");
        $(t).removeClass("field-validation-valid").removeClass("field-validation-error");
        $(t).text("");
        n.closest("form").find('label[for="' + n.attr("id") + '"]').removeClass("requiredLabel")
    }
      , a = {}
      , h = function(n) {
        var t = n.attr("type");
        if (t === undefined && n.is("textarea") && (t = "text"),
        (t == "tel" || t == "email") && (t = "text"),
        t == "radio") {
            if (a[n.attr("name")])
                return;
            a[n.attr("name")] = !0
        }
        (l(n),
        n.attr("data-val-required") || n.val() != "" || n.attr("data-val-ifrequired")) && (t == "text" && (n.attr("name") == "Password" || n.attr("name") == "EnteredPassword" || n.attr("name") == "ContactPassword") && (t = "password"),
        e[t] && e[t](n),
        n.ValidateMagicName(),
        n.hasClass("input-validation-error") && i.find('label[for="' + n.attr("id") + '"]').addClass("requiredLabel"))
    };
    return this.Init = function() {
        var l, r, u, s, e, a, f;
        if (i.data("posting"))
            return !1;
        if (i.attr("data-noform-validation") === "true")
            return !0;
        (i.data("formValidator", null),
        l = $("input,select,textarea", i).not('[type="hidden"]').not('[type="submit"]').not('[type="button"]'),
        i.trigger("preValidation", [t]),
        r = !1,
        l.each(function() {
            var n = $(this);
            if (n.attr("disabled"))
                return !0;
            h(n);
            n.data("data-validation-blur") || n.bind("blur", function() {
                n.data("validationError") && h(n);
                n.data("data-validation-blur", !0)
            });
            n.attr("type") == "checkbox" && (n.data("validation-click") || n.bind("click", function() {
                h(n);
                n.data("validation-click", !0)
            }));
            n.data("validationError") == !0 && (r = !0)
        }),
        u = $('[data-valmsg-summary="true"]', i)[0],
        u && $("ul", u).html(""),
        s = !0,
        r && (s = !1,
        u && ($(u).removeClass("validation-summary-valid").addClass("validation-summary-errors"),
        $(o).each(function(n, t) {
            $("ul", u).append("<li> " + t + "<\/li>")
        })),
        t && t.preventDefault()),
        typeof AnalyticsHelper != typeof undefined && window.AnalyticsHelper.isTaggingEnabled && (r ? AnalyticsHelper.PopulateErrMsg($(o)) : AnalyticsHelper.PopulateErrMsg("")),
        i.trigger("postClientValidation", [t, s]),
        r && scrolltoErrorMsg(r),
        $(document).trigger("HeightChange"),
        s && (t == undefined || !t.isDefaultPrevented())) && (l.each(function(n) {
            var n = $(this), t;
            n.attr("data-validation-type") && n.data("rawMaskFn") ? n.val(n.data("rawMaskFn").call()) : n.attr("data-validation-cardtype") && (t = $("#" + n.attr("bind-control-input")),
            t[0] && t.val().indexOf("****") < 0 && t.val(t.val().replace(/ /g, "")))
        }),
        c && t != undefined && !t.isDefaultPrevented() ? (t.preventDefault(),
        LightBox.Show("#ffffff"),
        Loading.Show(),
        a = i.serialize(),
        f = i.attr("SubmitName") || "",
        a += "&" + f + "=True&SubmitName=" + f,
        i.data("posting", !0),
        $.ajax({
            url: c,
            type: "post",
            dataType: "html",
            data: a,
            success: function(n) {
                var o, s, h, c, u;
                return i.data("posting", !1),
                o = null,
                jQuery._data(i[0], "events").preValidation && (o = jQuery._data(i[0], "events").preValidation[0].handler),
                s = null,
                jQuery._data(i[0], "events").postClientValidation && (s = jQuery._data(i[0], "events").postClientValidation[0].handler),
                h = null,
                jQuery._data(i[0], "events").postServerValidation && (h = jQuery._data(i[0], "events").postServerValidation[0].handler),
                c = $(i.parent()),
                n.Trim().length > 0 && c.empty().html($("<div><\/div>").html(n).find("form")),
                u = $("form", c),
                o && u.bind("preValidation", o),
                s && u.bind("postClientValidation", s),
                h && u.bind("postServerValidation", h),
                e = u.attr("data-form-valid"),
                t.SubmitButton = f,
                u.trigger("postServerValidation", [t, e, u.attr("data-error-code"), n]),
                u.ValidateForm(),
                i = u,
                (e == "False" || e == !1) && scrolltoErrorMsg(r),
                QConfig.hideLightbox && LightBox.Hide(),
                Loading.Hide(),
                e
            },
            error: function(n) {
                i.data("posting", !1);
                Utilities.logsErrorMessage("1001", "FormValidation", encodeURIComponent(n.responseText));
                LightBox.Hide();
                Loading.Hide()
            }
        })) : (f = i.attr("SubmitName") || "",
        n.append($('<input type="hidden" name="SubmitName" value="' + f + '" />')),
        t == undefined || t.isDefaultPrevented() || i.data("posting", !0)))
    }
    ,
    this.ValidateField = function(n) {
        i = $(n.closest("form"));
        var t = n.attr("type")
          , r = n.attr("name");
        return (l(n),
        (t == "tel" || t == "email" || n.is("textarea")) && (t = "text"),
        t == "text" && (r == "Password" || r == "EnteredPassword" || r == "ContactPassword") && (t = "password"),
        e[t] && e[t](n),
        n.hasClass("input-validation-error")) ? (i.find('label[for="' + n.attr("id") + '"]').addClass("requiredLabel"),
        !1) : !0
    }
    ,
    i.data("formValidator", this),
    this
}
;
jQuery.fn.ValidateField = function(n) {
    return new FormValidationHelper(null,n).ValidateField($(this))
}
;
jQuery.fn.ValidateMagicName = function() {
    ValidateMagicName(null, $(this))
}
;
jQuery.fn.ValidateForm = function() {
    var n = $(this)
      , t = !1;
    return n.find("[data-blur-validation]").each(function() {
        var n = $(this)
          , t = function() {
            n.ValidateField()
        };
        n.unbind("blur", t).bind("blur", t)
    }),
    $("input[data-input-ajax] , textarea[data-input-ajax]", n).each(function() {
        var n = $(this)
          , t = function() {
            n.ValidateMagicName()
        };
        n.unbind("blur", t).bind("blur", t)
    }),
    n.data("bound") != !0 && (n.get(0) && (n.find("input[type=submit]").click(function() {
        n.attr("SubmitName", "");
        var t = $(this);
        t.attr("name") && n.attr("SubmitName", t.attr("name"));
        t.attr("data-noform-validation") === "true" && n.attr("data-noform-validation", !0)
    }),
    n.bind("submit", function(i) {
        if (n.data("posting") && i.preventDefault(),
        t === !1) {
            t = !0;
            var r = new FormValidationHelper(n,i);
            r.Init();
            t = !1
        }
    })),
    n.data("bound", !0)),
    n.find("input[data-val-keyup]").each(function(n, t) {
        var t = $(t);
        t.data("boundkey") != !0 && t.bind("keypress", function(n) {
            $(n.target).ValidateField(n)
        });
        t.data("boundkey", !0)
    }),
    n.find("[data-val-ifrequired]").each(function(t, i) {
        var i = $(i), u;
        if (i.data("bounditem") != !0) {
            var s = i.attr("data-val-ifrequired-name")
              , f = i.attr("data-val-ifrequired-value")
              , e = f ? undefined : i.attr("data-val-ifrequired-values").split(",")
              , o = i.attr("data-val-ifrequired-optionalclass")
              , h = i.attr("data-val-ifrequired-triggervalidation")
              , r = $("input[name=" + s + "]", n);
            (r.attr("type") == "radio" || r.attr("type") == "checkbox") && (r = r.filter(":checked"));
            u = i.attr("name").replace(/\./g, "_");
            !o && f && r.val() == f || !o && f == "#VALCHK#" && $.trim(r.val()).length > 0 ? $("div #req" + u).removeClass("notRequiredSymbol").addClass("requiredSymbol").text("*") : e && e.indexOf(r.val()) > -1 ? $("div #req" + u).removeClass("notRequiredSymbol").addClass("requiredSymbol").text("*") : $("div #req" + u).addClass("notRequiredSymbol").removeClass("requiredSymbol").html("&nbsp;");
            $("input[name=" + s + "]").bind("change", function() {
                r = $("input[name=" + s + "]", n);
                (r.attr("type") == "radio" || r.attr("type") == "checkbox") && (r = r.filter(":checked"));
                f && r.val() == f ? (o || $("div #req" + u).removeClass("notRequiredSymbol").addClass("requiredSymbol").text("*"),
                h && i.ValidateField()) : e && e.indexOf(r.val()) > -1 || f == "#VALCHK#" && $.trim(r.val()).length > 0 ? (o || $("div #req" + u).removeClass("notRequiredSymbol").addClass("requiredSymbol").text("*"),
                h && i.ValidateField()) : (e && n.find("span[data-valmsg-for='" + u + "']").removeClass("field-validation-error").hide(),
                $("#req" + u, n).addClass("notRequiredSymbol").removeClass("requiredSymbol").html("&nbsp;"),
                $(" #lbl" + u, n).removeClass("requiredLabel"),
                $("#" + u, n).removeClass("input-validation-error"),
                $("#validation-for-" + u, n) && ($("#validation-for-" + u, n).removeClass("field-validation-error").addClass("field-validation-valid"),
                $("#validation-for-" + u, n).empty().hide()),
                $("." + o, n).empty().removeClass("field-validation-error").hide())
            })
        }
        i.data("bounditem", !0)
    }),
    n
}
;
$(document).ready(function() {
    QView = new QViewHelper
});
QViewHelper = function() {
    var t = this, r, i, n, u, f, e, o;
    this.loadMiniCart = !0;
    r = !1;
    i = {};
    this._busy = !1;
    u = !1;
    this.updateCart = !1;
    this.init = function(f) {
        $("#HdrCartLi").removeClass("cartOver");
        $("#FloatingMiniCartInfo").empty().hide();
        clearTimeout(floatingCartTimer);
        tooltip != undefined && tooltip.close();
        u = !0;
        $("#HdrCartLi").removeClass("cartOver");
        $("#FloatingMiniCartInfo").empty().hide();
        $("#MiniCartInfo").removeClass("navOver");
        n = "";
        f.effortCode = f.effort;
        i = f;
        r = !1;
        t.LoadTabData("/Item/GetSkuQView")
    }
    ;
    this.tabClick = function(n, r, u, f, e) {
        var o;
        f == "Reviews" ? o = {
            data: {
                tab: "tbReviews"
            }
        } : f == "Images" ? (o = {
            data: {
                tab: "tbImages"
            }
        },
        i.imageIndex = e) : f == "CompatiblePrinters" && (o = {
            data: {
                tab: "tbCompatiblePrinters"
            }
        });
        t.TabClickHandler(o)
    }
    ;
    this.close = function() {
        $placeHolder = $("#QViewInfo");
        $(document).trigger("QViewClose", [$placeHolder]);
        $placeHolder.html("");
        $placeHolder.hide();
        var n = !$.trim($("#QViewInfo").html()).length;
        !n || $("#popup")[0] && $("#QViewInfo")[0] || LightBox.Hide();
        tooltip.close();
        $("#ecouponbtn" + i.sku).show();
        r = !1;
        u = !1;
        t.updateCart && $(document).trigger("cartUpdated")
    }
    ;
    this.LoadTabData = function(f, e) {
        !t._busy && u && (t._busy = !0,
        Loading.Show(),
        $.ajax({
            url: f,
            data: i,
            dataType: "html",
            success: function(u) {
                var o, s, h, c;
                r == !1 ? (o = $("#QViewInfo"),
                o.show(),
                o.html(u),
                t.BindTabEvents(),
                o.Reposition(),
                s = $("div.panelInner", o),
                MagicZoom(),
                i.qtyTextID != undefined && (h = $("#" + i.qtyTextID).val(),
                h != "" && s.find("#txtQuantity").val(h)),
                r = !0) : (o = $("#QViewContent"),
                f == "/Item/GetSkuOverview" ? (o.append(u),
                s = $("div.panelInner", o).last()) : (o.prepend(u),
                s = $("div.panelInner", o).first()));
                Nav.init("#QViewInfo");
                t.HandleUpgradeSection(o);
                LightBox.Show();
                (n == "" || n == "tbOverview") && $(document).trigger("QViewOpen", [o]);
                o.BindQtyInput();
                o.Carousel();
                $(".promoImageInner").attr("data-showpopup") == "True" && $(".promoImageInner").bind("mouseover", function() {
                    var n = $(this);
                    n.Tooltip($(".dvSmartBuy").html(), 265, {
                        hasCloseButton: !0,
                        orientation: 2,
                        unique: !0,
                        index: 0,
                        skin: ""
                    })
                });
                c = $("#" + s.attr("data-tab"));
                c.data("panel", s).removeClass("tabNotSelected").addClass("tabSelected");
                e && e.call();
                t._busy = !1;
                Loading.Hide()
            },
            error: function(n, i, r) {
                t._busy = !1;
                window.console && console.log(r);
                Loading.Hide()
            }
        }))
    }
    ;
    this.HandleUpgradeSection = function(t) {
        $.each($("li.multiUpgradeItem", t), function(r, u) {
            var o = $("#DescSection", t).html()
              , s = $("#PriceSection", t).html()
              , h = $(".skuPrBrk", t).html()
              , c = $(".skuImageSTD", t).attr("src")
              , f = $("#SkuAction").height()
              , e = $("li.item_ph.itemSelected", t).attr("rel");
            n != "" && n != "tbOverview" && $("li.item_ph", t).css({
                opacity: ""
            });
            $(u).bind("mouseenter", function() {
                var r = $(this).attr("rel"), h, c, l, a, s;
                if ((r != e && (h = $("div.item_over", $(u)),
                h.animate({
                    top: 140
                }, 400)),
                n == "" || n == "tbOverview") && ($.each($("li.item_ph", t), function() {
                    $(this).removeClass("itemSelected");
                    $(this).attr("rel") != r ? $(this).css({
                        opacity: "0.3"
                    }) : ($(this).css({
                        opacity: ""
                    }),
                    $(this).addClass("itemSelected"))
                }),
                r != i.sku)) {
                    var v = $(this).attr("res")
                      , o = $(this).siblings('div[rel="' + r + '"]')
                      , y = o.find("#upgradeDescr").text();
                    $("#DescSection", t).html(y);
                    c = o.find("#upgradePriceSection").html();
                    $("#PriceSection", t).html(c);
                    l = o.find("#upgradePriceBreakInfo").html();
                    $(".skuPrBrk", t).html(l);
                    v == "True" ? (a = $("#UpgradeSkuBuyButton" + r).html(),
                    $(".skuPrBrk", t).html(a),
                    $("#AddToCartButtonSection", t).css({
                        display: "none"
                    })) : $("#AddToCartButtonSection", t).css({
                        display: "inline"
                    });
                    $(".skuImageSTD", t).attr("src", o.find("#upgradeSkuImage img").attr("src"));
                    s = $("#SkuAction", t);
                    s.height() < f ? s.height(f) : f = s.height();
                    $("#AddToCartSection", t).css({
                        opacity: "0.3"
                    });
                    $("#QViewMisc", t).css({
                        opacity: "0.3"
                    });
                    $("#TotalPriceRow", t).css({
                        display: "none"
                    });
                    $(".js-qviewUom", t).css({
                        display: "none"
                    })
                }
            });
            $(u).bind("mouseleave", function() {
                (n == "" || n == "tbOverview") && ($("div.item_over", $(this)).css({
                    top: "230px"
                }),
                $.each($("li.item_ph", t), function() {
                    $(this).removeClass("itemSelected");
                    $(this).attr("rel") == e ? ($(this).css({
                        opacity: ""
                    }),
                    $(this).addClass("itemSelected")) : $(this).css({
                        opacity: "0.3"
                    })
                }),
                $("#AddToCartSection", t).css({
                    opacity: ""
                }),
                $("#QViewMisc", t).css({
                    opacity: ""
                }),
                $("#TotalPriceRow", t).css({
                    display: ""
                }),
                $(".js-qviewUom", t).css({
                    display: ""
                }),
                $(this).attr("rel") != i.sku) && ($("#DescSection", t).html(o),
                $("#PriceSection", t).html(s),
                $(".skuPrBrk", t).html(h),
                $(".skuImageSTD", t).attr("src", c))
            })
        })
    }
    ;
    f = ["tbOverview", "tbDescription", "tbReviews", "tbOfferDetails", "tbSpecifications", "tbWhatsInTheBox", "tbCompatiblePrinters", "tbImages", "tbDownload", "tbMyCompatibleMachines"];
    e = {
        tbOverview: "/Item/GetSkuOverview",
        tbDescription: "/Item/GetSkuDescription",
        tbReviews: "/Item/GetSkuReviews",
        tbOfferDetails: "/Item/GetSkuOfferDetails",
        tbSpecifications: "/Item/GetSkuSpecification",
        tbWhatsInTheBox: "/Item/GetWhatsIntheBox",
        tbCompatiblePrinters: "/Item/GetSkuCompatiblePrinterData",
        tbImages: "/Item/GetSkuImages",
        tbDownload: "/Item/GetSkuDownloadDetails",
        tbMyCompatibleMachines: "/InkToner/GetMyCompatibleMachines"
    };
    this.TabClickHandler = function(i) {
        var u = i.data.tab
          , f = $("a.tab", $("#QViewInfo"))
          , r = $("a#" + u);
        n = u;
        r.data("panel") ? (f.removeClass("tabSelected").addClass("tabNotSelected"),
        r.removeClass("tabNotSelected").addClass("tabSelected"),
        $("#QViewContent .panelInner").hide(),
        r.data("panel").show()) : t.LoadTabData(e[u], function() {
            f.removeClass("tabSelected").addClass("tabNotSelected");
            r.removeClass("tabNotSelected").addClass("tabSelected");
            $("#QViewContent .panelInner").hide();
            var n = r.data("panel");
            n && n.show()
        });
        n != "" && n != "tbOverview" && ($(".eOfferTip").remove(),
        $(".eCoupon").attr("data-eoffer", "false"))
    }
    ;
    this.BindTabEvents = function() {
        $.each(f, function(n, i) {
            $("a#" + i).bind("click", {
                tab: i
            }, t.TabClickHandler)
        })
    }
    ;
    this.ImageGalleryClick = function(n) {
        $("img#imgSTDpopup", $("#QViewInfo")).attr("src", n)
    }
    ;
    this.ShowSkuImagesPopUp = function(n) {
        $.ajax({
            url: "/Sku/ShowSkuImagesPopUp",
            dataType: "html",
            data: n,
            success: function(n) {
                $placeHolder = $("#QViewInfo");
                $placeHolder.css("display", "block");
                $placeHolder.html(n);
                $placeHolder.Reposition();
                $placeHolder.Carousel();
                LightBox.Show()
            },
            error: function(n, t, i) {
                window.console && console.log(i)
            }
        })
    }
    ;
    this.hideImagePopUp = function() {
        if (this.showImagePopUpOK != 0) {
            clearTimeout(this.showImagePopUpOK);
            this.showImagePopUpOK = 0;
            var n = $("#zoomImgSmall");
            n && n.remove()
        }
    }
    ;
    o = 0;
    this.showImagePopUp = function(n, t) {
        o == 0 && (this.showImagePopUpOK = setTimeout(function() {
            var r = $(".pageMode_upgrade").find("#DivPhGlobal")
              , i = $("<div><\/div>");
            i.attr("id", "zoomImgSmall");
            i.css({
                position: "absolute",
                zIndex: 2e4,
                padding: "10px",
                border: "solid #ccc 1px",
                boxShadow: "0 2px 10px #000",
                borderRadius: "5px",
                background: "#fff"
            });
            i.html("<img src='" + t + "' alt='' />");
            r.append(i);
            r.css({
                display: ""
            });
            i = $("#zoomImgSmall");
            Utilities.Reposition(i, n)
        }))
    }
}
;
Nav = new function() {
    this.ShowLoginPopup = !1;
    var t = this
      , n = [];
    this.LoginTimer = null;
    $(document).ready(function() {
        Nav.bind();
        Nav.ShowWidgetNotification(!0)
    });
    this.bind = function() {
        function l(n) {
            var t = [];
            $(n).each(function() {
                var n, i;
                $(this).data("groupbytype") == !0 ? (n = $(this).data("notificationunreadids").toString(),
                n.indexOf(",") > 0 ? (i = n.split(","),
                $.merge(t, i)) : t.push(n)) : t.push($(this).data("notificationids"))
            });
            $.ajax({
                url: "/Master/MarkWidgetNotificationAsRead",
                type: "Post",
                data: {
                    unreadIds: t
                },
                success: function(t) {
                    t.success == !0 && (i.addClass("dataViewed"),
                    $("#wnHeaderCount").hide(),
                    n.addClass("wnDataViewed"),
                    n.removeClass("wnData"))
                }
            })
        }
        function a(n) {
            if (u != 0) {
                var t = $(n).data("notificationids");
                $.ajax({
                    url: "/Master/MarkWidgetNotificationAsDelete",
                    type: "Post",
                    data: {
                        notificationID: t
                    },
                    success: function(t) {
                        t.success == !0 && ($(n).remove(),
                        $(".wnRow").length == 0 && $(".wnRow_noData").show());
                        window.pageType == "managemyaccount" && MyAcNotify.LoadMyAccWidgetNotification(!1)
                    }
                })
            }
        }
        var u, s, f, h, c;
        $(document).ready(function() {
            isUserLoggedIn || typeof sessionStorage != "undefined" && sessionStorage.removeItem("OrderHistortSessionKey")
        });
        $(document.body).mouseup(function() {});
        Nav.init();
        var e = $("#OrderTrackingWrap")
          , t = $("#trackingWidget")
          , i = $("#WidgetNotificationContainer")
          , n = $("#widgetnotification")
          , o = $("#blkMnu")
          , v = $(".primaryNav")
          , y = $(".wrapPrimarySubnav")
          , p = $(".primarySubnav")
          , r = $(".fav-reorder-dd-wrap");
        this.WidgetNotificationOpen = function() {
            i.show();
            n.addClass("navClickOpen");
            $("#HeaderRow").css("z-index", "999999");
            LightBox.Show()
        }
        ;
        this.WidgetNotificationClose = function() {
            i.hide();
            n.removeClass("navClickOpen");
            $("#HeaderRow").css("z-index", "");
            LightBox.Hide()
        }
        ;
        this.TrackWidgetClose = function() {
            e.hide();
            t.removeClass("navClickOpen")
        }
        ;
        this.closeFreqReorder = function() {
            r.hide();
            $("#reorderMenuList").removeClass("navOver");
            $("#reorderMenuList").removeClass("ltbox");
            $("#HeaderRow").css("z-index", "");
            LightBox.Hide()
        }
        ;
        $(document).mouseup(function(u) {
            t.is(u.target) || t.has(u.target).length !== 0 || Nav.TrackWidgetClose(u);
            i.is(":visible") && !n.is(u.target) && n.has(u.target).length === 0 && Nav.WidgetNotificationClose(u);
            !o.is(":visible") || o.has(u.target).length || o.find(":focus").length || Nav.LoginWidgetClose(u);
            r.is(":visible") && !r.is(u.target) && r.has(u.target).length === 0 && Nav.closeFreqReorder(u)
        });
        this.TrackPreview = function() {
            if (t.hasClass("navOver") && t.removeClass("navOver"),
            t.hasClass("navClickOpen")) {
                Nav.TrackWidgetClose();
                return
            }
            var i = sessionStorage.getItem("OrderHistortSessionKey")
              , n = $.parseJSON(i);
            n == null || typeof n == "undefined" || window.location.href.indexOf("/OrderHistory") > -1 || !isUserLoggedIn ? (Loading.Show(),
            LightBox.Show(),
            $.ajax({
                url: "/Master/OrderTrackingWidget",
                data: {
                    md: "hdr"
                },
                type: "Post",
                success: function(n) {
                    Loading.Hide();
                    LightBox.Hide();
                    e.empty().html(n).show();
                    isUserLoggedIn && sessionStorage.setItem("OrderHistortSessionKey", JSON.stringify(n));
                    t.addClass("navClickOpen");
                    TrackingWidget.BindForm()
                }
            })) : (e.empty().html(n).show(),
            t.addClass("navClickOpen"))
        }
        ;
        u = 0;
        s = 3e3;
        $("#UndoMilliSeconds").length > 0 && (f = $("#UndoMilliSeconds").val(),
        !isNaN(f) && $.isNumeric(f) && (h = parseInt(f),
        h > 0 && (s = h)));
        this.ProcessDelete = function(n) {
            var t = $(n).parents("tr");
            t.find("td").hide();
            t.find("td.wn_undoColumn").show();
            u = 1;
            setTimeout(function() {
                a(t)
            }, s)
        }
        ;
        this.UndoDelete = function(n) {
            var t = $(n).parents("tr");
            t.find("td").hide();
            t.find("td:not(.wn_undoColumn)").show();
            u = 0
        }
        ;
        this.ShowWidgetNotification = function(t) {
            if (n.length != 0) {
                if (!isUserLoggedIn) {
                    n.hide();
                    Nav.WidgetNotificationClose();
                    return
                }
                if (n.hasClass("navOver") && n.removeClass("navOver"),
                n.hasClass("navClickOpen")) {
                    Nav.WidgetNotificationClose();
                    return
                }
                if (i.hasClass("dataLoaded")) {
                    if (!i.hasClass("dataViewed")) {
                        var r = $(".wnTable tr.wnData");
                        r.length > 0 && l(r)
                    }
                    Nav.WidgetNotificationOpen();
                    return
                }
                Nav.LoadWidgetNotification(t)
            }
        }
        ;
        this.LoadWidgetNotification = function(n) {
            $.ajax({
                url: "/Master/GetWidgetNotification",
                type: "Post",
                success: function(t) {
                    if (i.empty().html(t),
                    i.addClass("dataLoaded"),
                    n == undefined || n == !1)
                        Nav.WidgetNotificationOpen();
                    else {
                        var r = 0;
                        $(".wnTable tr.wnData").each(function() {
                            var n = $(this).data("notificationcount");
                            r += n
                        });
                        r > 0 && $("#widgetnotification").prepend("<span id='wnHeaderCount' class='wn_round_yellow'>" + r + "<\/span>")
                    }
                }
            })
        }
        ;
        this.LoginWidgetClose = function() {
            isUserLoggedIn && LightBox.Hide();
            $("#HeaderRow").css("z-index", "");
            $("#liwmsg").removeClass("navClickLoginOpen")
        }
        ;
        this.LoginWidgetOpen = function() {
            $("#HeaderRow").css("z-index", "999999");
            $("#liwmsg").addClass("navClickLoginOpen");
            isUserLoggedIn && LightBox.Show()
        }
        ;
        $("#liwmsg").children().not("#blkMnu").click(function(n) {
            $("#liwmsg").hasClass("navClickLoginOpen") ? n.preventDefault() : $("#liwmsg").find("#blkMnu").length > 0 && Nav.LoginWidgetOpen()
        });
        c = $("#LoginPop").find(".userNameRow, .passWordRow");
        c.find("label").click(function(n) {
            $(this).siblings("input").focus();
            n.preventDefault()
        })
    }
    ;
    this.showhideViews = function(n, t) {
        var i = $("#" + n.attr("data-relview"));
        t ? $(i).slideToggle().show() : $(i).slideToggle().hide()
    }
    ;
    this.epxand = function(n, t) {
        var i = $("#" + t);
        n = $(n);
        n && i && (n.toggleClass("navButtonSelected"),
        i.toggleClass("navDivSelected"))
    }
    ;
    this.init = function(t, i) {
        var u = 0, r;
        if (t = t && t[0] ? $(t) : $("#page,.topNavBar"),
        r = $(t).find("ul.navigation"),
        !r.get(0))
            return !1;
        r.each(function(t, r) {
            var w = 100, o, a, p, l;
            if (r = $(r),
            r.data("initialized") != !0) {
                o = r.children("li");
                a = i || o.length > 1 && o[0].offsetLeft == o[1].offsetLeft;
                function s(n) {
                    n.hasClass("navOver") || n[0].tagName != "LI" || (n.siblings("li.rbn_li").hasClass("navOver") && n.siblings("li.rbn_li").removeClass("navOver"),
                    n.addClass("navOver"),
                    (n.attr("id") == "HdrCartLi" || n.attr("id") == "liwmsg" || n.attr("id") == "reorderMenuList" || n.attr("id") == "HdrSharedCartLi") && ($(".wrapPrimarySubnav").hasClass("expanded") && (n.attr("id") == "HdrCartLi" || n.attr("id") == "HdrSharedCartLi") && PrimaryMenu.CloseNavigation(this),
                    (n.attr("id") == "HdrCartLi" || n.attr("id") == "liwmsg" || n.attr("id") == "reorderMenuList" || n.attr("id") == "HdrSharedCartLi" && parseInt(n.attr("data-count")) > 1) && (n.addClass("ltbox"),
                    $("#HeaderRow").css("z-index", "10000"),
                    LightBox.Show()),
                    n.attr("id") == "HdrSharedCartLi" && Utilities.UpdateSharedCartHeader()))
                }
                function h(n) {
                    n.find("#LoginPop").length != 1 && n.hasClass("navOver") && n.attr("id") != "reorderMenuList" && (n.removeClass("navOver"),
                    n.hasClass("ltbox") && (n.removeClass("ltbox"),
                    $("#HeaderRow").css("z-index", ""),
                    LightBox.Hide()))
                }
                var e = null
                  , f = null
                  , v = null
                  , y = (new Date).getTime()
                  , c = null;
                r.on("mousemove", function(n) {
                    var i = (new Date).getTime(), u, t;
                    if (!(i - y < w)) {
                        for (y = i,
                        u = n.target,
                        t = u; t.tagName != "LI" && t.tagName != "UL" && t.parentNode; )
                            t = t.parentNode;
                        f == null ? t.className.indexOf("navClick") < 0 && e == null && (e = setTimeout(function() {
                            f = t;
                            s($(t));
                            e = null
                        }, 300)) : t.tagName == "UL" ? t == r[0] && t.className.indexOf("primarySubnav") < 0 && h($(f)) : f != t && t.parentNode == r[0] && t.className.indexOf("navClick") < 0 && (a ? c && !n.isDiagonal(c) && (h($(f)),
                        s($(t)),
                        f = t) : v != t && (clearTimeout(e),
                        e = setTimeout(function() {
                            h($(f));
                            s($(t));
                            f = t;
                            e = null
                        }, 300)));
                        c = n;
                        v = t
                    }
                });
                o.filter(".navClick").click(function(t) {
                    if (t.target.tagName != "INPUT") {
                        var i = $(this);
                        i.hasClass("stopNavClick") || (i.hasClass("navOver") ? h($(this)) : (n.push(i),
                        s($(this))))
                    }
                });
                r.hasClass("primarySubnav") || r.mouseleave(function() {
                    clearTimeout(e);
                    e = null;
                    h($(f));
                    f = null
                });
                r.data("initialized", !0);
                r.hasClass("CustomDrDownHGN") && r.hasClass("CustomDrDownHeight") && (p = r.find("li.navClick").first().find("ul.navigation").first().find("li.clearFilter").first(),
                (u < 3 || p.has("a").length) && (l = r.find("li.navClick").first(),
                n.push(l),
                s(l)),
                u++)
            }
        })
    }
}
;
$(document).ready(function() {
    PrimaryMenu.init()
});
var PrimaryMenu = new function() {
    function c(i, r, u) {
        if ($(i).hasClass("coupon-clip-board"))
            return CouponClipper.showClipBoard(),
            !0;
        if ($(i).hasClass("noExpand"))
            return !0;
        $(i).hasClass("showInkTonerFinder") && d();
        r.preventDefault();
        u === "show" ? (l(n),
        a(e, u),
        f(e),
        nt(i, r),
        g(e),
        v(i, u)) : u === "hide" && (a(t, u),
        f(t),
        f(n),
        v(i, u))
    }
    function d() {
        $(".ink-toner-nav-wrapper").show();
        $(".inktoner-subnav-wrap").append($(".ink-toner-nav-wrapper"))
    }
    function l(n) {
        var t = $(n);
        t.addClass("expanded")
    }
    function f(n) {
        var t = $(n);
        t.removeClass("expanded")
    }
    function a(n) {
        var t = $(n).find(".primarySubnav.active");
        t.animate({
            opacity: 0
        }, 1e3, function() {
            $(this).removeClass("active")
        })
    }
    function v(t, f) {
        if (f === "show") {
            $(n).find(".primaryNav .navLink.active").on("click", null).off("click", null);
            $(n).find(".primaryNav .navLink.active").removeClass("active").on("click", this, r).off("click", this, i);
            $(t).on("click", null);
            $(t).off("click", null);
            $(t).addClass("active").on("click", this, i).off("click", this, r);
            $("#inkTonerPage").length && $("a.navLink.noExpand[id=2]").attr("class", "navLink noExpand")
        } else
            f === "hide" && ($(u).on("click", null).off("click", null),
            $(u).removeClass("active").on("click", this, r).off("click", this, i))
    }
    function g(n) {
        var t = $(n).find(".primarySubnav");
        t.animate({
            opacity: 1
        }, 1e3, function() {
            $(this).addClass("active")
        })
    }
    function nt(n) {
        h = $(u).index(n);
        o = $(t[h]);
        l(o);
        f(k);
        e = o
    }
    var r = null
      , i = null
      , y = null
      , s = null
      , n = null
      , p = null
      , u = null
      , w = null
      , t = null
      , b = null
      , h = null
      , o = null
      , e = null
      , tt = $(".subnavContent")
      , k = null;
    this.init = function() {
        s = "wrapPrimaryNav";
        n = $("#" + s);
        p = $(n).outerHeight(!1);
        u = $(n).find(".primaryNav .navLink");
        w = null;
        t = $(n).find(".wrapPrimarySubnav");
        b = $(".primarySubnav");
        $(u).on("click", this, r);
        $("#inkTonerPage").length && $('a.navLink.noExpand[href*="/inkandtonerfinder"]').removeClass("InkTonerLinkWidget").addClass("active");
        var f = $("#blkMnu")
          , e = $(".primaryNav")
          , o = $(".wrapPrimarySubnav");
        $(document).mouseup(function(n) {
            t.hasClass("expanded") && (t.is(n.target) || t.has(n.target).length || i(n))
        });
        $(".primarySubnav>.navItem").mouseenter(function() {
            $(this).hasClass("navOver") || ($(".primarySubnav>.navItem").removeClass("navOver"),
            $(this).addClass("navOver"))
        })
    }
    ;
    this.CloseNavigation = function(n) {
        i(n)
    }
    ;
    r = function(n) {
        c(this, n, "show");
        $("#HeaderRow").css("z-index", "10000");
        $(".subHeader").css("z-index", "10000");
        LightBox.Show()
    }
    ;
    i = function(n) {
        c(this, n, "hide");
        $("#HeaderRow").css("z-index", "");
        $(".subHeader").css("z-index", "");
        LightBox.Hide()
    }
    ;
    y = function(n) {
        f(n)
    }
}
  , Master = new function() {
    function t() {
        var n = "price";
        $("#IncludeVat").off("click").on("click", function() {
            cookie.Set({
                bucket: cookie.buckets.func,
                name: "includevat",
                value: "1"
            });
            i.cleanAndRefreshPage(n)
        });
        $("#ExcludeVat").off("click").on("click", function() {
            cookie.Set({
                bucket: cookie.buckets.func,
                name: "includevat",
                value: "0"
            });
            i.cleanAndRefreshPage(n)
        })
    }
    var i = this
      , n = "Search"
      , n = "";
    this.BindLogin = function() {}
    ;
    this.SetInputFocus = function() {
        var t = $("#searchKeywords");
        t.focus();
        t.val() == n && t.val("");
        $("#SearchSubmit").removeClass("disableSearch").addClass("enableSearch")
    }
    ;
    this.cleanAndRefreshPage = function(n) {
        var t = window.location.href, i = n, r, u;
        t.indexOf("filter") > 0 && (i = "filter");
        r = Utilities.getQueryString(i, t);
        r !== 0 && (u = Utilities.removeURLParameter(t, i),
        t = u);
        t.lastIndexOf("#", t.length - 1) === t.length - 1 && t.split("#").length > 0 && (t = t.substring(0, t.length - 1));
        t.indexOf("#skuTabReviews") > -1 && (t = t.substring(0, t.indexOf("#skuTabReviews")));
        window.location.href = t
    }
    ;
    this.RefreshHeader = function(n) {
        var i = $.ajax({
            cache: !0,
            url: "/Master/HeaderAjax?" + n,
            type: "get",
            dataType: "html",
            data: {
                pagelayout: pageLayout
            }
        }).done(function(n) {
            $("#HeaderRow").replaceWith(n);
            Nav.init($("#HeaderRow"));
            t()
        });
        ShowFreeGiftLostMessage()
    }
    ;
    this.RefreshHeaderMenu = function() {
        var n = $.ajax({
            cache: !0,
            url: "/Master/GetXmlMenuAjax",
            type: "get",
            dataType: "html",
            data: {
                pagelayout: pageLayout,
                menuId: "headerNavB"
            }
        }).done(function(n) {
            $("#HeaderNavB").replaceWith(n);
            Nav.init($("#HeaderNavB").parent());
            t()
        })
    }
    ;
    this.SetVertical = function(n, t, i) {
        var r = 0
          , u = ""
          , f = $("#" + i.id + " a")
          , e = f.find("#spnNavItemName")
          , o = $(f).attr("data-defaultval");
        n.is(":checked") != null && n.is(":checked") != undefined && n.is(":checked") == !0 ? (n.attr("data-marketid") != null && n.attr("data-marketid") != undefined && (r = n.attr("data-marketid")),
        $(".chkIndustry").prop("checked", !1),
        $(e).text(t),
        o = t,
        $(n).prop("checked", !0),
        n.attr("data-url") != null && n.attr("data-url") != undefined && n.attr("data-url") != "#" && (u = n.attr("data-url")),
        u != "" && (window.location = u + r)) : ($(n).prop("checked", !1),
        $(e).text(o));
        cookie.Set({
            bucket: cookie.buckets.func,
            name: "SetVertical",
            value: r
        })
    }
    ;
    $(document).ready(function() {
        var r = $("#searchForm")
          , i = $("#searchKeywords")
          , u = $("#searchSubmit");
        i.focus(function() {
            $(this).val() == n && $(this).val("");
            $("#SearchSubmit").removeClass("disableSearch").addClass("enableSearch")
        });
        i.blur(function() {
            $(this).val() == "" && $(this).val(n);
            $("#SearchSubmit").removeClass("enableSearch").addClass("disableSearch")
        });
        r.bind("submit", function(t) {
            if (i.val() == "" || i.val() == n)
                t.preventDefault(),
                i.Tooltip("Please enter a valid search term", 250);
            else {
                var r = {};
                r.type = "search";
                r.search = {};
                r.search.actkeyword = i.val();
                $(document).trigger(AnalyticsEvents.AnalyticsActions, {
                    src: r
                })
            }
        });
        Utilities.BindEnter("#lipClose_hdr");
        $("#lipClosePop, #lipClose_hdr").click(function() {
            $("#LoginWidget_hdr").toggleClass("navOver")
        });
        $("#DynamicAlley").data("callback", function() {
            $("div.AcPanelSelected", this)[0] ? $("span.alleyExpand", this).text("[ Collapse Deal ]") : $("span.alleyExpand", this).text("[ Expand Deal ]")
        });
        window.loginEnabled && cookie.Get({
            name: "ltkovr",
            bucket: cookie.buckets.funcTemp
        }) != "1" && !$("#VATSelectionTakeOver")[0] && cookie.Set({
            name: "ltkovr",
            bucket: cookie.buckets.funcTemp,
            value: "1"
        });
        t()
    });
    ScriptHelper.OnLoad(function() {
        $("#FbFtr").html('<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.quill.com%2F&amp;send=false&amp;layout=button_count&amp;width=200&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:200px; height:21px;" allowTransparency="true"><\/iframe>')
    })
}
  , copypopup = "";
$(document).ready(function() {
    PLP = new PaidLoyaltyProgram;
    PLP.init();
    var n = $("#plpPaymentdiv").find("form");
    n.length > 0 && (n.ValidateForm(),
    n.bind("postServerValidation", function() {}).bind("postClientValidation", function(n, t, i) {
        if ($("input[name=PaymentTypeId]:checked").val() == "CR" && i) {
            var e = $(this).find(":selected").attr("data-cardType")
              , s = $("#CCSecurityCode").val()
              , u = s.length
              , r = !1
              , f = ""
              , o = "Please Enter Valid SecurityCode"
              , h = $("#DisableCVV").val();
            h.toLowerCase() == "false" && (u != 3 ? (r = !0,
            f = o) : e == "amex" && u != 4 ? (r = !0,
            f = "Security code length should be 4 digits!") : e != "amex" && u != 3 && (r = !0,
            f = "Security code length should be 3 digits!"));
            r ? (i = !1,
            $("#lblCCSecurityCode").addClass("requiredLabel"),
            $("#CCSecurityCode").addClass("input-validation-error"),
            AnalyticsHelper.PopulateErrMsg(o),
            t.preventDefault(),
            n.preventDefault()) : AnalyticsHelper.PopulateErrMsg("No Errors")
        }
    }).bind("preValidation", function() {}))
});
PaidLoyaltyProgram = function() {
    function i(t) {
        var i = $(t).val();
        $("#HasAnyBillingAddress").val() == "False" || i == "CR" && $("#HasAnyCreditCard").val() == "False" || i == "CR" && $("#IsCardExpired").val() == "True" ? n(0) : n(1)
    }
    function f(n) {
        $("input[name=PaymentTypeId]").each(function() {
            n == this ? ($(this).parent().parent().removeClass("tabNotSelected"),
            $(this).parent().parent().addClass("tabSelected")) : ($(this).parent().parent().removeClass("tabSelected"),
            $(this).parent().parent().addClass("tabNotSelected"))
        })
    }
    function n(n) {
        n == 1 ? ($("#btnPlpEnroll").removeAttr("disabled"),
        $("#btnPlpEnroll").css("background", "#0079c2"),
        $("#btnPlpEnroll").css("cursor", "pointer")) : ($("#btnPlpEnroll").attr("disabled", "disabled"),
        $("#btnPlpEnroll").css("background", "grey"),
        $("#btnPlpEnroll").css("cursor", "not-allowed"))
    }
    var r = "1", t, u;
    this.init = function() {
        var n = $("#InvoiceInfoPanelPlp").css("display")
          , t = $("#CreditCardInfoPanelPlp").css("display");
        return $("#plpPaymentdiv input[name=PaymentTypeId]").each(function() {
            var i = $(this).val();
            i == "IV" && n == "block" || i == "CR" && t == "block" ? $(this).prop("checked", !0) : $(this).prop("checked", !1)
        }),
        $("#plpPaymentdiv input[name=PaymentTypeId]").change(function() {
            var n = $(this).val();
            n == "CR" ? ($("#InvoiceInfoPanelPlp").css("display", "none"),
            $("#CreditCardInfoPanelPlp").css("display", "block")) : ($("#InvoiceInfoPanelPlp").css("display", "block"),
            $("#CreditCardInfoPanelPlp").css("display", "none"));
            i(this);
            f(this)
        }),
        $("#plpBillingAddress").change(function() {
            $("#SelectedBillingAddressGuid").val($("option:selected", this).attr("data-guid"));
            $("#DefaultBillingCompany").html($("option:selected", this).attr("data-company"));
            $("#DefaultBillingAddress").html($("option:selected", this).attr("data-address"));
            $("#DefaultBillingCity").html($("option:selected", this).attr("data-city"));
            $("#DefaultBillingState").html($("option:selected", this).attr("data-state"));
            $("#DefaultBillingZip").html($("option:selected", this).attr("data-zip"))
        }),
        i($("input[name=PaymentTypeId]:checked")),
        $("#hdnEnrollPointsPrgm").length > 0 && PLP.EnrollPointsPrgm(),
        $("#hdnPNIRedirectUrl").length > 0 && PLP.ShowEasyLoginPopUp("Register"),
        $("#IsShowEasyLogin").length > 0 && PLP.ShowEasyLoginPopUp("SharedCart"),
        !0
    }
    ;
    this.ShowSignUpConfirmation = function() {
        var n = $("#plpSignUpConfirmation").html();
        $("<div id='plpConfirmPopUp' style='padding: 25px;'><\/div>").append(n).PopUp({
            showLightBox: !0,
            width: 750,
            showCloseButton: !1,
            showCloseIcon: !1
        })
    }
    ;
    this.PlacePlpOrder = function() {}
    ;
    this.CloseConfirmPopUp = function() {
        return $("#popup").remove(),
        LightBox.Hide(),
        !1
    }
    ;
    t = new function() {
        this.showPopup = function() {
            var n = $("#lbRequestQuote").data("findnum")
              , t = $("#lbRequestQuote").data("effortcode")
              , i = $("#lbRequestQuote").data("sku")
              , r = {
                sku: i,
                findnumber: n,
                effortcode: t
            };
            $.ajax({
                url: "/Item/GetRequestQuote",
                type: "get",
                data: r
            }).done(function(n) {
                var i = $("<div id='reqQuoteDivForm'><\/div>").html(n).PopUp({
                    width: 550,
                    showLightBox: !0,
                    showCloseButton: !1,
                    showCloseIcon: !0,
                    fixed: !0
                })
                  , t = $("#reqQuoteDivForm").find("form");
                t.ValidateForm();
                $(".lightBox").click(function() {
                    i.Close()
                });
                t.bind("preValidation", function() {});
                t.bind("postServerValidation", function(n, i, r) {
                    if (r.toLowerCase() == "false")
                        t = $(this),
                        QConfig.hideLightbox = !1;
                    else if (r.toLowerCase() == "true") {
                        var u = $(this);
                        QConfig.hideLightbox = !1
                    }
                })
            })
        }
    }
    ;
    this.ShowEasyLoginPopUp = function(n) {
        var t, i, u;
        if (!0 && window.location.protocol != "https:") {
            t = "https:" + window.location.href.substring(window.location.protocol.length);
            t = t + (t.indexOf("?") > -1 ? "&" : "?") + "__iha=1";
            cookie.Set({
                name: "__showEasyLogin",
                value: "1"
            });
            window.location.href = t;
            return
        }
        i = !1;
        cookie.Get({
            name: "__showATCOverlay"
        }) == "1" && (i = !0,
        cookie.Remove({
            name: "__showATCOverlay"
        }));
        u = "/Registration/EasyRegistration" + ($("#hdnPNIRedirectUrl").length > 0 ? "?returnURL=" + $("#hdnPNIRedirectUrl").val() + "&pageType=" + window.pageType + "&fromAtcOverlay=" + i : "?pageType=" + window.pageType + "&fromAtcOverlay=" + i);
        n === "Guest" ? u = "/Registration/EasyRegistration?returnURL=Guest&pageType=" + window.pageType : n === "SharedCart" && (u = "/Registration/EasyRegistration?pageType=" + n);
        $("#CaptchaSecWrapperDiv").remove();
        $.get(u, function(t) {
            var f = !1, o = t.PopUp({
                showLightBox: !0,
                width: 610,
                showCloseButton: !1,
                locater: "registrationoverlay"
            }), i = o.find("form"), u, e;
            i.ValidateForm();
            i.bind("preValidation", function() {});
            i.bind("postServerValidation", function(n, t, u) {
                var f, e;
                u.toLowerCase() == "false" ? (i = $(this),
                QConfig.hideLightbox = !1) : u.toLowerCase() == "true" && (popupid = "#easyRegistrationDiv",
                $(".registrationForm").hide(),
                f = $(this),
                r == "1" ? (e = i.find("#AccountTypeId:radio:checked").val(),
                e == "1000" ? Utilities.PopulateCompanyInfo(popupid, "", "0", f) : Utilities.CompleteRegistration({}, popupid, !1, f, "0")) : Utilities.CompleteRegistration({}, popupid, !1, f, "0"),
                QConfig.hideLightbox = !1)
            });
            i.bind("postClientValidation", function() {
                f = !0
            });
            !1 && (u = "0",
            e = $("#IsGuestUser").val(),
            e == "True" && u != -1 && (_guestRegisterTimer = setTimeout(function() {
                $(".popUpClose").click()
            }, u),
            $("#easyRegistrationDiv").bind("mousemove", function() {
                clearTimeout(_guestRegisterTimer)
            })));
            $("#EmailAddress").val() !== "" ? $("#EmailAddress").focus() : n === "SharedCart" && $("#EmailAddress").focus();
            $(".popUpClose.popUpCloseQview").bind("click", function() {
                $("#hdnPNIRedirectUrl").length > 0 ? window.location = ".." + ConfigService.Site.Common.HomePageRedirection : f || window.location.href.indexOf("__iha=1") > -1 ? window.location = window.location.href.replace("__iha=1", "") : $(".popUpClose.popUpCloseQview").trigger("click")
            })
        })
    }
    ;
    u = cookie.Get({
        name: "__showEasyLogin"
    });
    cookie.Get({
        name: "__showEasyLogin"
    }) == "1" && (cookie.Remove({
        name: "__showEasyLogin"
    }),
    this.ShowEasyLoginPopUp());
    $("#Register").click(function() {
        Nav && Nav.LoginWidgetClose && Nav.LoginWidgetClose();
        PLP.ShowEasyLoginPopUp("Register")
    });
    $("#lbRequestQuote").click(function() {
        t.showPopup(this)
    });
    this.CreditCardSelected = function(t) {
        return $(t).attr("data-IsCardExpired").toLowerCase() == "y" ? ($("#CCNickName").val($(t).html()).addClass("red txtBold"),
        $("#CreditCardInfoPanelExistingCardDetails").css("display", "block"),
        $("#CreditCardInfoPanelExistingDetails").val($(t).attr("data-details")),
        n(0)) : ($("#CCNickName").val($(t).html()).removeClass("red txtBold"),
        $("#CreditCardInfoPanelExistingCardDetails").css("display", "none"),
        n(1)),
        $(t).attr("data-disablecvv").toLowerCase() == "true" ? $("[id^='CreditCardInfoPanel.SecurityCode']").hide() : $("[id^='CreditCardInfoPanel.SecurityCode']").show(),
        $("#SelectedCreditCardName").val($(t).attr("data-nickname")),
        !0
    }
    ;
    this.EnrollPointsPrgm = function() {
        var n = $("#hdnEnrollPointsPrgm").val()
          , t = "/PaidLoyalty/Enroll?tier=" + n;
        $.get(t, function(n) {
            var i = n.PopUp({
                showLightBox: !0,
                width: 990,
                showCloseButton: !1,
                locater: "Qplus"
            })
              , t = i.find("form");
            t.ValidateForm();
            t.bind("preValidation", function() {})
        })
    }
}
;
StickyFtr = new function() {
    function n() {
        return clearTimeout(StickyFtr.emailSignUpTimer),
        !0
    }
    this.ShowEmailSignUp = !0;
    this.emailSignUpTimer = null;
    this.IsHomePage = !1;
    this.hideEsbUp = function() {
        return cookie.Set({
            name: "hi_es_up",
            value: "1"
        }),
        $("#txtEmailSignUpEmailAddress").val().length > 0 || $("#txtEmailSignUpEmailAddress").is(":focus"),
        !0
    }
    ;
    this.exFnHideEmailSignUp = function() {
        return $("#sticky_for_a_while").hide(),
        cookie.Set({
            name: "hi_es_up",
            value: "1"
        }),
        n(),
        !0
    }
    ;
    this.exFnHideEmailSignUpNew = function() {
        return $("#sticky_for_a_while").hide(),
        cookie.Set({
            name: "hi_esnew_up",
            value: "1"
        }),
        n(),
        !0
    }
    ;
    this.init = function() {
        $("#sticky_for_a_while").css("position", "fixed")
    }
}
;
$(document).ready(function() {
    var n, t;
    FastGuestTracking.BindForm();
    n = cookie.Get({
        name: "hi_es_up"
    });
    StickyFtr.ShowEmailSignUp = n == "1" ? !1 : !0;
    !StickyFtr.ShowEmailSignUp && StickyFtr.IsHomePage && $("#sticky_for_a_while").hide();
    t = cookie.Get({
        name: "hi_esnew_up"
    });
    StickyFtr.ShowEmailSignUpNew = t == "1" ? !1 : !0;
    !StickyFtr.ShowEmailSignUpNew && StickyFtr.IsHomePage && $("#sticky_for_a_while").hide();
    StickyFtr.init();
    $(".dvConnectadptive #EmailAddress, #btnEmailSignUp").click(function(n) {
        (n.target.id == "EmailAddress" || n.target.id == "VerifyEmailAddress" || n.target.id == "btnEmailSignUp") && ($(".dvConnectadptive #VerifyEmailAddress").show("slow"),
        $(".dvConnectadptive .ConfirmEmail").show("slow"))
    })
});
var TrackingWidget = new function() {
    this.BindForm = function() {
        var n = $("#OrderPackageTracking");
        n.ValidateForm();
        n.bind("postClientValidation", function(n, t, i) {
            if (i) {
                n.preventDefault();
                t.preventDefault();
                var r = $(".trackOrderNum").val()
                  , u = $(".trackOrderEmail").val();
                $.ajax({
                    url: "/PackageTracking/TrackingShipment",
                    type: "Post",
                    data: {
                        orderNumber: $(".trackOrderNum").val(),
                        orderEmail: $(".trackOrderEmail").val()
                    },
                    success: function(n) {
                        var t = $(n).find("#TrackOrderAnonimousWidget");
                        $("#OrderPackageTracking").empty().html(t);
                        $(".TrackOrderLink").addClass(" navClickOpen")
                    }
                })
            } else
                n.preventDefault(),
                t.preventDefault()
        })
    }
}
  , FastGuestTracking = new function() {
    this.BindForm = function() {
        var n = $("#GuestOrderDetails");
        n.ValidateForm();
        n.bind("postClientValidation", function(n, t, i) {
            i ? (n.preventDefault(),
            t.preventDefault(),
            $.ajax({
                url: "/OrderHistory/NewOrderDetail",
                type: "Post",
                data: {
                    OrderNum: $("#OrderNumber").val(),
                    OrderEmail: $("#OrderEmail").val(),
                    fromGuest: !0
                },
                success: function() {}
            })) : (n.preventDefault(),
            t.preventDefault())
        })
    }
}
  , SkuRolling = new function() {
    this.HeaderHover = function(n) {
        !0 && $(n).hasClass("hovered") == !1 && ($(n).addClass("hovered"),
        $(n).siblings(".rolling-content").show(),
        $(n).children(".plus").html("-"),
        $(n).attr("scValue", "hide product transition detail"))
    }
    ;
    this.HeaderClick = function(n) {
        $(n).siblings(".rolling-content").is(":visible") ? ($(n).siblings(".rolling-content").hide(),
        $(n).children(".plus").html("+"),
        $(n).attr("scValue", "show product transition detail")) : ($(n).siblings(".rolling-content").show(),
        $(n).children(".plus").html("-"),
        $(n).attr("scValue", "hide product transition detail"))
    }
    ;
    this.CloseClick = function(n) {
        $(n).parent(".rolling-content").hide();
        $(n).parent(".rolling-content").siblings(".new-packg-header").children(".plus").html("+");
        $(n).attr("scValue", "show product transition detail")
    }
}
;
$(document).ready(function() {
    var i, r, u, f;
    if (pageType != "undefined" && pageType == "savingsdashboard" && $("#cust_savings").length > 0) {
        i = $("#cust_savings").position();
        $(".coachMark-heading").css({
            top: i.top,
            left: i.left - 128
        });
        r = $(".date-filters").position();
        $(".overLay-dates").css({
            top: r.top + 44,
            left: r.left - 147
        });
        u = $(".cust-savings-list").position();
        $(".overlay-savings").css({
            top: u.top + 13 + $(".cust-savings-list").height(),
            left: u.left - 243
        });
        f = $(".download-pdf-link").position();
        $(".overlay-download").css({
            top: f.top - 49,
            left: f.left + 199
        });
        var e = cookie.Get({
            bucket: cookie.buckets.func,
            name: "TimeCookie"
        })
          , n = new Date
          , s = n.getFullYear() + "-" + ("0" + (n.getMonth() + 1)) + "-" + ("0" + n.getDate()).slice(-2)
          , h = n.getHours() + ":" + n.getMinutes()
          , o = new Date(s + " " + h)
          , t = new Date(Date.parse(e))
          , c = t.getFullYear() + "-" + ("0" + (t.getMonth() + 1)) + "-" + ("0" + t.getDate()).slice(-2)
          , l = t.getHours() + ":" + t.getMinutes()
          , a = new Date(c + " " + l)
          , v = o - a
          , y = Math.floor(v / 6e4);
        e != "Viewd" && (e == "" ? (cookie.Set({
            bucket: cookie.buckets.func,
            name: "TimeCookie",
            value: o
        }),
        $("#phModalPopUp").hide(),
        $(".CoachMarkDivWrap").html().PopUp({
            showCloseButton: !1,
            showLightBox: !0,
            showCloseIcon: !1,
            closePopupOnLightBoxClick: !0,
            cssClass: "SDCoachMarkPopUp"
        })) : y > 20 && (cookie.Set({
            bucket: cookie.buckets.func,
            name: "TimeCookie",
            value: "Viewd"
        }),
        $("#phModalPopUp").hide(),
        $(".CoachMarkDivWrap").html().PopUp({
            showCloseButton: !1,
            showLightBox: !0,
            showCloseIcon: !1,
            closePopupOnLightBoxClick: !0,
            cssClass: "SDCoachMarkPopUp"
        })))
    }
});
SearchSuggest = new function() {
    function ot() {
        $("#clearSrch").hide();
        $(".searchBtn").show();
        i()
    }
    function pt() {
        var r = $(n), u;
        n = $(n);
        u = $(u);
        r.val() != vt && (oldKeywords = r.val());
        e = $(e);
        s = $(s);
        k = Math.random();
        $("#clearSrch").bind("mousedown", function() {
            n.val("");
            t = null;
            ot()
        });
        r.bind("blur", function() {
            if ($(".searchSuggest:hover").length)
                return !1;
            ot();
            i()
        });
        r.bind("keyup", st);
        r.bind("keydown", ht);
        r.bind("focus", ht);
        r.bind("focus", st)
    }
    function st(r) {
        var o = r.keyCode, u, l, e, s;
        if (o == tt || o == p || o == at || o == it || o == rt)
            return !0;
        if (u = $(n).val(),
        $(".searchBtn").hide(),
        $("#clearSrch").show(),
        u.length > 2) {
            var w = escape(t) + "|" + escape(n.val()) + "|" + escape(h) + "|" + escape(c)
              , a = cookie.Get({
                name: "searchTrack"
            })
              , nt = !a || !d;
            $(document).trigger(AnalyticsEvents.AnalyticsActions, {
                src: {
                    type: "searchsuggestinput"
                }
            });
            nt ? cookie.Set({
                name: "searchTrack",
                value: w
            }) : (l = a.split("|"),
            l.length > 1 && (e = {},
            e.type = "searchsuggest",
            e.search = {},
            e.search.keyword = l[0],
            e.search.actkeyword = u,
            $(document).trigger(AnalyticsEvents.AnalyticsActions, {
                src: e
            })))
        }
        return u !== oldKeywords && (oldKeywords = t = u,
        b.value = ""),
        u.length >= et ? typeof suggestData != "undefined" ? (s = "a=" + suggestData.Anon + "&r=" + suggestData.Recent + "&q=" + encodeURIComponent(u) + "&" + suggestData.Data,
        $.ajax({
            url: suggestData.Url + "/SearchSuggest/Suggest?" + s,
            type: "get",
            cache: !0,
            bucket: "searchsuggest",
            SearchTerm: u,
            success: function(n) {
                y(n);
                v = !1
            }
        })) : (s = "q=" + encodeURIComponent(u) + "&rnd=" + k,
        $.ajax({
            url: "/Master/SearchSuggest?" + s,
            type: "get",
            cache: !0,
            bucket: "searchsuggest",
            SearchTerm: u,
            dataType: "html",
            success: function(n) {
                y(n);
                v = !1
            }
        })) : u.length < et && ft < 3 ? f && f != null && f != "" ? (g = !0,
        y(f)) : (ft++,
        $.ajax({
            url: "/Master/SearchSuggestRecentSearchTerms?r=" + k,
            type: "get",
            cache: !0,
            bucket: "searchsuggest",
            SearchTerm: u,
            dataType: "html",
            success: function(n) {
                n.length > 0 && (f = n,
                g = !0,
                y(f))
            },
            error: function(n, t, i) {
                console.log && console.log(i)
            }
        })) : i(),
        !0
    }
    function ht(f) {
        var a = f.which, e, s;
        if (a === rt)
            return !r || r.length == 0 ? !0 : u ? (nt(null),
            i(),
            !0) : !0;
        if (a === this.KEYENTER || a === it) {
            var v = escape(t) + "|" + escape(n.val()) + "|" + escape(h) + "|" + escape(c)
              , y = cookie.Get({
                name: "searchTrack"
            })
              , w = !y || !d;
            return w && cookie.Set({
                name: "searchTrack",
                value: v
            }),
            t = oldKeywords = n.val(),
            i(),
            $(document.forms[0]).submit(function() {
                var n = $("<input>").attr("type", "hidden").attr("name", "ajx").val("1");
                $(document.forms[0]).append($(n))
            }),
            !0
        }
        return a != tt && a != p ? (l = (new Date).getTime() + 500,
        !0) : !u && (this.show(),
        !u) ? !0 : (e = -1,
        o && (e = r.index(o)),
        a == p ? e == null ? e = 0 : (e++,
        e > r.length - 1 && (e = 0)) : e == null ? e = r.length - 1 : (e--,
        e < 0 && (e = r.length - 1)),
        s = $(r[e]),
        nt(s),
        !s[0]) ? (t && ((new Date).getTime() > l && n.val(t),
        $(b).val("")),
        !0) : (oldKeywords = s.attr("keyword").replace("<strong>", "").replace("<\/strong>", ""),
        n.val(oldKeywords),
        $(b).val(s.attr("url") || ""),
        h = s.attr("keywordText") || "",
        c = s.attr("type") || "",
        !0)
    }
    function wt() {
        if (u || e.css("display") == "block" || !g && n.val().length == 0 || n.val() == "Keyword or Item #" || !w || ut)
            return !0;
        e.show();
        u = !0
    }
    function i() {
        if (u)
            return t && n.val() != t && (new Date).getTime() > l && n.val(t),
            u = !1,
            e.hide(),
            s.empty(),
            n.val().length < 3 && (w = !1),
            !0
    }
    function nt(n) {
        n && (ct(o),
        n.addClass("keySelected"),
        o = n);
        o = n
    }
    function ct(n) {
        n && n.removeClass("keySelected")
    }
    function y(n) {
        var t, u, f;
        n ? (t = $(s),
        t.html(n),
        u = t.find("div.searchSuggestL"),
        r = u.find("a.anc"),
        f = t.find("a.anc, div.reviewclass"),
        f.length == 0 ? i() : ($.each(f, function(n, t) {
            $(t).hasClass("reviewclass") && $(t).find("#hypReadReviews").off("click");
            t = $(t);
            t.parent() == u && t.attr("data-leftCol");
            t.mousedown(function() {
                lt(t)
            });
            t.mouseover(function() {
                nt(t)
            });
            t.mouseout(function() {
                ct(t)
            })
        }),
        w = !0,
        wt())) : i()
    }
    function lt(r) {
        var s = $(yt), o;
        if (s[0] && r) {
            var e = r.attr("keyword") || ""
              , f = r.attr("type") || ""
              , a = r.attr("keywordText") || ""
              , u = r.attr("url") || "";
            searchTrachDet = n.val();
            (new Date).getTime() > l && (n.val(e),
            t = oldKeywords = e);
            searchTrachDet = escape(searchTrachDet) + "|" + escape(n.val()) + "|" + escape(a) + "|" + escape(f);
            cookie.Set({
                name: "searchTrack",
                value: searchTrachDet
            });
            o = "";
            r.attr("urlhashtag") && (o = r.attr("urlhashtag"));
            cookie.Set({
                name: "UrlHashTag",
                value: o
            });
            ut = !0;
            u ? (u = u.AddUrlValue("keywords", encodeURIComponent(e)),
            u = f == "2" || f == "3" ? u.AddUrlValue("promoCode=", encodeURIComponent(200200556)) : f == "4" ? u.AddUrlValue("promoCode=", encodeURIComponent(200200557)) : f == "9" ? u.AddUrlValue("promoCode", encodeURIComponent(200200559)) : u.AddUrlValue("promoCode=", encodeURIComponent(200200555)),
            location.href = u + "&ajx=1&tray=1") : ($(h).val(a),
            $(c).val(f),
            $(document.forms[0]).submit(function() {
                var n = $("<input>").attr("type", "hidden").attr("name", "ajx").val("1");
                $(document.forms[0]).append($(n));
                n = $("<input>").attr("type", "hidden").attr("name", "tray").val("1");
                $(document.forms[0]).append($(n))
            }),
            s[0].click());
            d = !0;
            n.focus();
            i()
        }
    }
    var bt = this
      , tt = 38
      , p = 40
      , it = 13
      , at = 9
      , rt = 27
      , vt = "Keyword or Item #"
      , u = (!1).oldKeywords = null
      , n = "#searchKeywords"
      , e = "#SearchSuggestInfo"
      , s = "#SearchSuggestInner"
      , o = null
      , w = !1
      , t = null
      , yt = "#SearchSubmit"
      , b = "#redirecturl"
      , h = ""
      , c = ""
      , l = (new Date).getTime()
      , k = Math.random()
      , r = null
      , ut = !1
      , a = !1
      , v = !1
      , d = !1
      , g = !1
      , f = null
      , ft = 0
      , et = 3;
    $(document).ready(function() {
        pt()
    });
    this.Close = function() {
        i()
    }
}
;
AjaxSuggest = function(n) {
    function v() {
        i.find("a.anc").bind("mousedown", function() {
            var n = $(this);
            n.hasClass("seeAllLink") ? u(6) : (h(n),
            t.val(n.attr("text").replace(" ", "+").replace("[^a - zA - Z0 - 9à- üs -]", "").replace(/\//g, "") + "|" + n.attr("value") + "|" + n.attr("manufid")),
            n.attr("seriesid") != undefined && t.val(t.val() + "|" + n.attr("seriesid") + "|" + n.attr("seriesname").replace("/", "").replace("[^a - zA - Z0 - 9à- üs -]", "")),
            n.attr("searchSuggestCartridge") != undefined && t.val(t.val() + "|" + n.attr("searchSuggestCartridge")),
            u(6))
        });
        i.find("a.add-machine-model").bind("mousedown", function() {
            QuickFind.Init("", 1, $(this))
        })
    }
    function f(n) {
        var t, i;
        return typeof n == "undefined" || n === null ? n : (t = /[&$%#?"<>(),]/g,
        n = n.replace(t, ""),
        i = /[/]/g,
        n.replace(i, " "))
    }
    function u(i) {
        var e = n.attr("data-tracking") || "", o = $(".searchSuggestL", n).attr("data-tracking") || "", r, s, h, u;
        if (e.indexOf("&cm_sp") != -1 && o.indexOf("&cm_sp") != -1 && (e = ""),
        r = t.val().split("|"),
        r[0] = f(r[0]),
        s = f("Search by Cartridge or Machine Model"),
        r[0] && escape(r[0]) != escape(s))
            if (h = cookie.Get({
                bucket: cookie.buckets.funcTemp,
                name: "SearchType"
            }),
            $("#srch_Model").children(t).length > 0) {
                if (i != 2) {
                    var c = r[0].substr(0, r[0].indexOf("+"))
                      , l = r[0].substr(r[0].indexOf("+") + 1)
                      , a = r[4];
                    $("#hdn_brandId").attr("name", c);
                    $("#hdn_modelId").attr("name", l);
                    $("#hdn_brandId").val(r[2]);
                    $("#hdn_modelId").val(r[1]);
                    $("#TrEdit #brands_displayText").text(c);
                    $("#TrEdit #model_displayText").text(l);
                    InkTonerQuickFindScripts.getSeries(r[2], "MachineBrand_PopUp");
                    r[3] != undefined ? ($(".machineSeries").show(),
                    $("#hdn_seriesId").val(r[3]),
                    InkTonerQuickFindScripts.getModels(r[3], "MachineBrand_PopUp"),
                    $("#TrEdit #series_displayText").text(a)) : (InkTonerQuickFindScripts.getModels(r[2], "MachineBrand_PopUp"),
                    $(".machineSeries").hide());
                    t.val("");
                    setTimeout(function() {
                        $("#TrEdit #NickNameEdit").focus()
                    }, 10)
                }
            } else
                h == "new" ? (u = "/SearchEngine/Search?keywords=" + r[0].replace(" ", "+") + "&FinderID=1&IandTSearch=2" + e + o,
                r[1] && r[0] != r[1] && r[r.length - 1] != "Cartridge Series_" && (u += "&ModelID=" + r[1],
                u += "&mid=" + r[2]),
                r[r.length - 1] == "Cartridge Series_" && (u += "&filter=Cartridge+Series_" + +encodeURIComponent(r[1])),
                window.location.href = u) : (u = "/search/?keywords=" + r[0].replace(" ", "+") + "&FinderID=1&IandTSearch=2" + e + o,
                r[1] && r[0] != r[1] && r[r.length - 1] != "Cartridge Series_" && (u += "&ModelID=" + r[1],
                u += "&mid=" + r[2]),
                r[r.length - 1] == "Cartridge Series_" && (u += "&filter=Cartridge+Series_" + encodeURIComponent(r[1])),
                window.location.href = u);
        else
            t.Tooltip("Please enter a valid search term")
    }
    function y() {
        var n = t.val();
        n = f(n);
        n.length > 2 && (s = !1,
        l = n,
        $.ajax({
            url: "/InkToner/InkTonerWidgetAjax?keyword=" + n + "&rnd=" + a,
            type: "post",
            cache: !0
        }).done(function(n) {
            r = null;
            s || !n || t.val().length <= 2 ? o() : (i.html(n),
            i.show(),
            v())
        }))
    }
    function h(n) {
        r && r.removeClass("keySelected");
        n.addClass("keySelected");
        r = n
    }
    function o() {
        i.hide()
    }
    var p = this;
    if (n = $(n),
    n.data("initialized") == !0) {
        delete this;
        return
    }
    var t = n.find("input.formText")
      , c = n.find("input.button")
      , i = n.find("div#InnerResults")
      , s = !1
      , l = ""
      , r = null
      , a = Math.random();
    c.bind("click", function() {
        u()
    });
    t.bind("blur", function() {
        o()
    });
    i.bind("mouseover", function(n) {
        var t = $(n.target);
        t.className == "anc" && h(t)
    });
    n.bind("keyup", function(n) {
        n.stopPropagation();
        n.preventDefault();
        var t = n.keyCode;
        t == 13 ? u(2) : t == 38 || t == 40 || t == 9 || (t == 27 ? o() : y())
    });
    n.data("initialized", !0)
}
;
$(document).ready(function() {
    $("#hdnInkTonerNewVersion").val() != "New/V1" && new AjaxSuggest("div.inkToner")
});
jQuery.fn.Carousel = function() {
    function at() {
        var u, t, f;
        if (o || (o = n.find(".carouselInner")),
        l != c.CarouselTypeList && n.show().width("auto").height(n.height()),
        v = i.outerWidth(),
        isMobile && n.hasClass("carouselSupercat") && (i.outerWidth($(window).outerWidth()),
        v = i.outerWidth()),
        k = i.outerHeight(),
        r = 0,
        d == !0 && ($(i).removeClass("item_1"),
        v = lt.outerWidth()),
        n.width() == 0 || v == 0 ? (v = n.attr("data-itemwidth"),
        k = n.attr("data-itemheight"),
        r = n.attr("data-itemsperpage")) : l == c.CarouselTypeVertical || et == "HalfCarousel" ? r = n.attr("data-itemsperpage") : d == !0 ? (u = parseInt(lt.css("padding-left")),
        r = u >= 0 ? Math.floor((n.width() + u) / v) || 1 : Math.floor(n.width() / v) || 1) : r = Math.floor(n.width() / v) || 1,
        d == !0 && i && r > 1) {
            for (_numItems = i.length,
            _numPages = Math.ceil(_numItems / r),
            t = 0; t < _numPages; t++)
                f = t == 0 ? 0 : t * r,
                $(i).eq(f).addClass("item_1");
            ui()
        }
    }
    function ui() {
        if (i) {
            var n = $(i).eq(0);
            n && parseInt(n.css("padding-left")) > 0 && (ft = !0)
        }
    }
    function fi() {
        _pause ? (a.className = "pauseBtn",
        ni(),
        _pause = !1) : (a.className = "pauseBtn pauseBtnPlay",
        window.clearTimeout(rt),
        _pause = !0)
    }
    function ni() {
        rt = setInterval(function() {
            var n = t + 1 >= u ? 0 : t + 1;
            y(n, !0)
        }, ri * 1e3)
    }
    function ei() {
        var n = r * t
          , u = n + r > p ? p : n + r;
        return i.slice(n, u)
    }
    function s(n) {
        $(n).parent("ul").children("li.clickedThumbnail").removeClass("clickedThumbnail");
        $(n).addClass("clickedThumbnail");
        i.parent().find(".clickedThumbnail .js-skuthumb").trigger("click")
    }
    function y(n, i) {
        if (n >= 0 && n < u && n != t) {
            if (l == c.CarouselTypeVertical)
                ut ? $(o).animate({
                    top: (-r + 1) * k * n
                }, nt * 1e3) : $(o).animate({
                    top: -r * k * n
                }, nt * 1e3),
                t = n,
                g();
            else if (l == c.CarouselTypeFade)
                $(o).animate({
                    opacity: .1
                }, nt),
                t = n,
                $(o).css({
                    left: -h * n
                }),
                $(o).animate({
                    opacity: 1
                }, nt * 1e3),
                g();
            else {
                var s = h * n;
                ft && (s += dt);
                $(o).animate({
                    left: -s
                }, nt * 1e3);
                t = n;
                $("#divCriteoSponsoredAds").length > 0 && setTimeout(function() {
                    checkVisibility()
                }, nt * 1e3 + 1);
                g()
            }
            e != null && f != null && l != this.CarouselTypeList && (u > 1 ? n == 0 ? ($(f).attr("class", "scLeft ScrPhLeft scTrack scLink"),
            $(e).attr("class", "scRight scTrack scLink")) : n == u - 1 ? ($(f).attr("class", "scLeft scTrack scLink"),
            $(e).attr("class", "scRight ScrPhRight scTrack scLink")) : ($(f).attr("class", "scLeft scTrack scLink"),
            $(e).attr("class", "scRight scTrack scLink")) : ($(f).attr("class", "scLeft ScHide scTrack scLink"),
            $(e).attr("class", "scLeft ScHide scTrack scLink")));
            rt && !i && (a && (a.className = a.className + vt ? "pauseBtn pauseBtnPlay" : ""),
            window.clearTimeout(rt));
            c.CurrentPage = t
        }
    }
    function g() {
        var pt, gt, nt, g, rt, ni, et;
        if (l == c.CarouselTypeList) {
            d == !0 && u > 0 && k > 0 && n.css({
                height: k * u
            });
            return
        }
        if (it == !1) {
            if (p = i.length,
            u = r == 4 && p == 8 && n.hasClass("qImages") ? Math.ceil(p / r) + 1 : Math.ceil(p / r),
            (ti == !0 || w[0] || ht[0]) && f == null && e == null) {
                if (n.hasClass("ImageGallery")) {
                    var ri = n.data("scvalue")
                      , ui = n.data("locater")
                      , oi = n.data("sku");
                    f = $('<span class = "scTrack" scType = "scLink" scValue = "' + ri + '-prev" locater="' + ui + '" sku="' + oi + '"><\/span>');
                    e = $('<span class = "scTrack" scType = "scLink" scValue = "' + ri + '-next" locater="' + ui + '" sku="' + oi + '"><\/span>')
                } else
                    f = $('<span class="scTrack" scType = "scLink" scValue = "prevarrow" locater="' + wt + '"><\/span>'),
                    e = $('<span class="scTrack" scType = "scLink" scValue = "nextarrow" locater="' + wt + '"><\/span>');
                e.onselectstart = function(n) {
                    n.preventDefault()
                }
                ;
                var ot = !1
                  , st = !1
                  , at = !1
                  , vt = !1;
                $(e).mousedown(function(n) {
                    at !== !0 && (at = !0,
                    st = !0,
                    yt && p - t == 1 ? y(0) : (y(t + 1),
                    ut && bt && (t == 0 ? s(i[0]) : t == 1 ? $("li.clickedThumbnail").attr("data-itemnumber") == 3 ? s(i[t * r]) : s(i[t * r - 1]) : t == 2 ? $("li.clickedThumbnail").attr("data-itemnumber") == 6 ? s(i[t * r - 1]) : s(i[t * r - 2]) : t == 3 && u == 4 && ($("li.clickedThumbnail").attr("data-itemnumber") == 9 ? s(i[t * r - 2]) : s(i[t * r - 3])))),
                    n.preventDefault(),
                    at = !1)
                });
                $(e).focus(function(n) {
                    st ? st = !1 : (y(t + 1),
                    n.preventDefault())
                });
                f.onselectstart = function(n) {
                    n.preventDefault()
                }
                ;
                $(f).focus(function(n) {
                    ot ? ot = !1 : (y(t - 1),
                    n.preventDefault())
                });
                $(f).mousedown(function(n) {
                    vt !== !0 && (vt = !0,
                    ot = !0,
                    yt && t == 0 ? y(p - 1) : (y(t - 1),
                    ut && bt && (t == 0 ? $("li.clickedThumbnail").attr("data-itemnumber") == 3 ? s(i[t * r + 2]) : s(i[t * r + 3]) : t == 1 ? $("li.clickedThumbnail").attr("data-itemnumber") == 6 ? s(i[t * r + 1]) : s(i[t * r + 2]) : t == 2 ? $("li.clickedThumbnail").attr("data-itemnumber") == 9 ? s(i[t * r]) : s(i[t * r + 1]) : t == 3 && u == 4 && n.preventDefault())),
                    n.preventDefault(),
                    vt = !1)
                })
            }
            a == null && (a = $("<span><\/span>"),
            a.addClass("pauseBtn"),
            a.onclick = function() {
                fi()
            }
            );
            f != null && e != null && (u > 1 ? g == 0 ? ($(f).attr("class", "scLeft ScrPhLeft"),
            $(e).attr("class", "scRight")) : g == u - 1 ? ($(f).attr("class", "scLeft"),
            $(e).attr("class", "scRight ScrPhRight")) : t + 1 < u && ($(f).attr("class", "scLeft ScrPhLeft"),
            $(e).attr("class", "scRight")) : (t + 1 < u && ($(f).attr("class", "scLeft ScHide"),
            $(e).attr("class", "scLeft ScHide")),
            ct == !0 && u <= 1 && ($(f).attr("class", "ScHide"),
            $(e).attr("class", "ScHide"))));
            tt == null && (o = n.find(".carouselInner"),
            tt = n.find(".carouselWrap"),
            f && e && (n.append(f),
            n.append(e)),
            n.append(tt),
            n.onkeydown = function(n) {
                var t, i;
                t = n ? n : window.event;
                i = t.which ? t.which : t.keyCode;
                i == 9 && (n.preventDefault(),
                eventStopProp(n))
            }
            );
            l == c.CarouselTypeVertical ? (h = v,
            tt.css({
                width: h
            }),
            o.css({
                width: l == c.CarouselTypeVertical ? h : u * h
            }),
            b = u > 1 ? k * r : k * p) : (h = v * r,
            o.css({
                width: l == c.CarouselTypeVertical ? h : u * h
            }),
            d == !0 && r > 1 && (pt = parseInt(lt.css("padding-left")),
            pt >= 0 && !ft && (h = h - pt)),
            tt.css({
                width: h
            }),
            b = n.height() == 0 ? ei().height() : n.height());
            tt.css({
                height: b
            });
            l == c.CarouselTypeVertical ? t + 1 < u && o.css({
                top: 0
            }) : o.css({
                left: ft ? -dt : 0
            });
            it = !0
        }
        if (n.css({
            height: b
        }),
        o.css({
            height: b
        }),
        w[0] && u > 1)
            if (gt = w.find("a"),
            gt.length > 0)
                nt = 0,
                $(gt).each(function(n, i) {
                    i.onclick || (i.setAttribute("i", nt),
                    i.onclick = function() {
                        nt = parseInt(i.getAttribute("i"));
                        y(nt)
                    }
                    );
                    $(i).removeClass("selected").addClass("");
                    nt == t && $(i).addClass(i.className + " selected");
                    nt++
                });
            else {
                for (w.empty(),
                ii && w.append(a),
                w.append(f),
                g = 0; g < u; g++)
                    rt = $("<a><\/a>"),
                    rt.attr("i", g),
                    rt.addClass("carouselHelper " + (g == t ? " selected" : "")),
                    rt.html(g + 1),
                    rt.click(function() {
                        y($(this).attr("i"))
                    }),
                    $(w).append(rt);
                w.append(e);
                ht && (ht.empty(),
                $.each(w, function() {}))
            }
        if (n.height(b),
        n.width(h),
        ni = n.find(".carouselInner li").index($("li.selected")),
        kt == !0 && ni >= 0)
            for (et = 1; et <= u; et++)
                ni >= r * et && (y(et, !0),
                kt = !1)
    }
    function oi() {
        var t = $('<a class="see-all-link scTrack" scType="scLink" scValue="prevpurchase:seeall" href=' + pt + ">" + (et == "HalfCarousel" || et == "Small" ? "View All" : "See All") + "<\/a>")
          , i = $('<li class="item_ph item_view_more_ph nopadding"><div class="itemb item-view-more"><a class="scTrack" scType="scLink" scValue="prevpurchase:viewmore" href=' + pt + ">View More<\/a><\/div><\/li>");
        n.append(t);
        o = n.find(".carouselInner");
        o.append(i)
    }
    var n = $(this), c;
    if (!n.hasClass("carousel") || n.length > 1)
        return n.find("div.carousel").each(function(n, t) {
            $(t).Carousel()
        }),
        !1;
    if (n.data("carousel-init") != !0) {
        n.data("carousel-init", !0);
        c = this;
        this.CarouselTypeHorizontal = "Horizontal";
        this.CarouselTypeVertical = "Vertical";
        this.CarouselTypeFade = "Fade";
        this.CarouselTypeList = "List";
        this.TabClick = function(r, u) {
            var e, f;
            r = $(r);
            r.siblings().removeClass("selected").addClass("tabNotSelected");
            r.removeClass("tabNotSelected").addClass("selected");
            e = n.find(ot + "." + st);
            d == !0 && ct == !0 && $(e).removeClass("item_1");
            f = [];
            $.each(e, function(n, t) {
                var i = t.tagName.toLowerCase() == "li" ? t : t.parentNode;
                u && u != "All" && t.getAttribute("groupid") != u ? i.style.display = "none" : (t.style.display = "",
                i.style.display = "block",
                f.push(t))
            });
            d == !0 && ct == !0 && ($(f).eq(0).addClass("item_1"),
            n.find("ul.AddToCartBtn").css("left", "0"));
            t = 0;
            i = f;
            this.List = f;
            it = !1;
            g()
        }
        ;
        var et = n.attr("data-TemplateType")
          , ti = n.attr("data-ShowArrows") && n.attr("data-ShowArrows").toLowerCase() == "false" ? !1 : !0
          , vt = n.attr("data-AutoStart") || !1
          , ii = !1
          , rt = null
          , ri = n.attr("data-AutoScrollTime") || .5
          , h = 0
          , b = 0
          , yt = n.attr("data-ReStart") || !1
          , nt = n.attr("data-time") || .5
          , si = n.attr("data-hideItems") == !1 ? !1 : !0
          , ot = n.attr("data-itemTag") || "li"
          , st = n.attr("data-itemClass") || "itemb"
          , l = n.attr("data-type") || 0
          , p = 0
          , t = 0
          , pt = n.attr("data-ViewMoreLink")
          , u = 0
          , it = !1
          , hi = n.attr("id")
          , w = n.find("span.helperTop")
          , ht = n.find("span.helperBot")
          , tt = null
          , f = null
          , e = null
          , o = null
          , a = null
          , ci = n.children("div.carouselTitle")
          , i = n.find(ot + "." + st)
          , v = 0
          , k = 0
          , r = 0
          , wt = n.attr("data-alternateName")
          , ut = n.attr("data-SlowVertical") == "true" ? !0 : !1
          , bt = n.attr("data-HighlightCurrItem") == "true" ? !0 : !1
          , kt = !0
          , d = n.attr("data-useNewCarouselTemplate") == "True" ? !0 : !1
          , ct = n.hasClass("QvAcCarousel") && d == !0;
        if (i.length != 0) {
            var lt = i.length > 1 ? $(i).eq(1) : $(i).eq(0)
              , ft = !1
              , dt = 2
              , gt = !1;
            if (n.attr("data-showViewMore") != "undefined" && n.attr("data-showViewMore") != undefined && (gt = n.attr("data-showViewMore").toLowerCase() == "false" ? !1 : !0),
            Adaptive.OnResize(function() {
                at();
                it = !1;
                g()
            }),
            isMobile)
                $(window).on("resize", function() {
                    at();
                    it = !1;
                    g()
                });
            return ut && s(i[0]),
            i != null && (i.length ? null : i = [i],
            gt && (oi(),
            i = n.find(ot + "." + st)),
            at(),
            g(),
            vt && ni(),
            this.ToLeft = f,
            this.ToRight = e,
            n.Carousel = this),
            this.List = i,
            this.CurrentPage = t,
            this.ItemsPerPage = r,
            n.data("Carousel", c),
            n
        }
    }
}
;
$(document).ready(function() {
    $("div.carousel").each(function(n, t) {
        $(t).hasClass("deferLoad") || $(t).Carousel()
    })
});
ScriptHelper.OnLateLoad(function() {
    $("div.carousel").each(function(n, t) {
        $(t).hasClass("deferLoad") && $(t).Carousel()
    })
});
floatingCartTimer = null;
addedSku = "";
$.fn.AddItemsToCart = function(n) {
    function b() {
        var i = $("#counter", $("#QViewInfo"))
          , n = 0;
        $.each($('input.qtyInput[rel="AddtoCartAccessoryItems"]'), function(t, i) {
            $(i).val() > 0 && n++
        });
        $('input[rel="AddtoCartAccessoryItems"]:checked').length > 0 && $('input[rel="AddtoCartAccessoryItems"]:checked').val() != "none" && n++;
        i.text(n);
        s == !1 && n > 0 && (tooltip.init($("#QViewAccAddToCart", t), "Don&#39;t forget to add your accessories to cart!", "", {
            index: 17e3
        }),
        s = !0)
    }
    function k(n, f, e) {
        var o = null
          , s = !1;
        if (n != undefined)
            switch (n.mode) {
            case "qview":
            case "minicart":
            case "fbt":
            case "verticalfbt":
            case "qtyerror":
            case "accessories":
            case "qviewatc":
                u = "/Item/AddItemsToCart";
                o = startRumTrack("ux-pop-addToCart");
                !0 && (u = u + "?pageLayout=" + $("#requestPageLayout").val() + "&returnUrl=" + escape(location.href) + "&combine=true",
                s = !0);
                break;
            case "updatecart":
            case "removeitem":
                u = "/Item/UpdateCartItem";
                o = startRumTrack("ux-pop-updateCart");
                break;
            case "showcartpopup":
                u = "/Item/ShowCartItemsInPopUp";
                break;
            case "cartshowcartpopup":
                u = "/cart/ShowCartItemsInPopUp";
                break;
            case "SkuAddToSharedCart":
            case "SkuAddToSharedCartAccessories":
                u = "/sharedcart/AddItemsToSharedCart";
                break;
            case "SkuAddToCart":
                u = "/item/AddItemsToCart";
                break;
            default:
                u = "/Item/AddItemsToCart"
            }
        $.ajax({
            url: u,
            type: "post",
            dataType: "html",
            data: {
                data: f
            },
            success: function(u) {
                var y, f, a, tt, l, k, h, p, d, w, b, g, nt, it;
                if (s && (y = {
                    _count: 0
                },
                f = u.split("|^_^|"),
                f.length > 1 && f.length % 2 == 1)) {
                    for (u = f[0],
                    a = 1; a < f.length; a += 2)
                        y._count++,
                        y[f[a].Trim().toLowerCase()] = f[a + 1].Trim();
                    window.combinedResults = y
                }
                if (n.mode == "showcartpopup" && u == "") {
                    Loading.Hide();
                    QView._busy = !1;
                    o && o.loaded();
                    return
                }
                if (n.mode == "SkuAddToSharedCart" || n.mode == "SkuAddToSharedCartAccessories") {
                    n.bredirect == "1" && n.sharedcartid != undefined ? (window.location.href = "/SharedCart/SharedCartDetails?SharedCartID=" + n.sharedcartid,
                    n.callback && eval(n.callback)()) : (e = $('a.SharedCartBtn[rel="' + e.attr("rel") + '"][locater="' + e.attr("locater") + '"]'),
                    tt = e.attr("data-sku"),
                    u == "true" ? e.Tooltip($("#AddedToSharedCart").html(), 211, {
                        hasCloseButton: !1,
                        orientation: 3,
                        unique: !0,
                        index: 0,
                        skin: "couponTip",
                        time: 5e3
                    }) : (e.Tooltip($("#AddedToSharedCartError").html(), 211, {
                        hasCloseButton: !1,
                        orientation: 3,
                        unique: !0,
                        index: 0,
                        skin: "errorToolTip",
                        time: 5e3
                    }),
                    setTimeout(function() {
                        location.reload(!0)
                    }, 5e3)),
                    Utilities.UpdateSharedCartHeader());
                    Loading.Hide();
                    QView._busy = !1;
                    return
                }
                if (l = $("<div />").html(u),
                k = $("#isSkuMsgAlert", l),
                k.length > 0) {
                    LightBox.Show();
                    t = $("#QViewInfo");
                    t.show().html(u);
                    t.Reposition();
                    t.BindQtyInput();
                    Loading.Hide();
                    QView._busy = !1;
                    return
                }
                if (h = $("#hdnBasketState", l).val().toUpperCase(),
                h == "NOTINSTOCK" && n.mode == "SkuAddToCart") {
                    $("#divSkuActions").hide();
                    $("#divNotInStock").html(l);
                    Loading.Hide();
                    QView._busy = !1;
                    return
                }
                if ($("#enrollTeaserDiv").length > 0 && ($(".qp-teaser-cnt-wrapper .cancelBtn").trigger("click"),
                location.reload(!0)),
                p = $("#hdnCartType", l).val(),
                d = $("#hdnCartItemQty0", l).val(),
                h == "BASKETSTATEOK" || h == "NOITEMINBASKET" || h == "NOTINSTOCK") {
                    if (QView.updateCart = !1,
                    w = $("#hdnHideMiniCart"),
                    $("#FloatingMiniCartInfo").empty(),
                    n.mode == "updatecart" && (b = $('input.qtyInput[rel="' + r.prop("rel") + '"]'),
                    b.attr("data-oldvalue", b.val())),
                    (n.mode == "updatecart" || n.mode == "removeitem" || w != undefined && w.val() == "true") && n.mode != "cartshowcartpopup" ? (QView.close(),
                    n.mode == "updatecart" && window.location.pathname.toLowerCase().indexOf("checkout/checkout") == -1 && window.location.reload()) : p == "QViewCart" || p == "AddToCartPreview" ? (LightBox.Show(),
                    t = $("#QViewInfo"),
                    t.show().html(u),
                    t.Carousel(),
                    t.Reposition(),
                    t.BindQtyInput(),
                    c.AccessoriesHandler(),
                    t.find(".carouselInner").length > 0 && t.find(".rbQview").css("width", "800px")) : p == "MiniCart" && $("#atcPopup").length > 0 ? (e.Tooltip(u, 600, {
                        hasCloseButton: !1,
                        orientation: 3,
                        unique: !0,
                        index: 0,
                        skin: "hdr_cartHover"
                    }),
                    $("#cooltipPh .hdr_cartHover").show(),
                    $("#cooltipPh .popUpClose").hide()) : n.bredirect != "1" && (QView.close(),
                    t = $("#FloatingMiniCartInfo"),
                    t.show().html(u),
                    t.css("position", "fixed"),
                    g = $("#FilterDivB .narrowSectionB .compareSelectedWrap").length > 0 && $("#FilterContainer .is-sticky").length > 0 ? $("#FilterDivB .narrowSectionB .compareSelectedWrap").position().top + $("#HdrCartLi").height() - v : $("#HdrCartLi").offset().top >= 100 ? $("#HdrCartLi").height() : $("#HdrCartLi").height() + $("#HdrCartLi").offset().top,
                    t.css({
                        left: $("#page").outerWidth() + $("#page").offset().left - $("#FloatingMiniCartInfo").outerWidth() - 10,
                        top: g
                    }),
                    $(".popUpClose", t).bind("click", c.close),
                    $("#HdrCartLi").addClass("cartOver"),
                    r.attr("data-cartitemqty", d),
                    clearTimeout(floatingCartTimer),
                    floatingCartTimer = setTimeout(function() {
                        c.close()
                    }, 3e3)),
                    n.bredirect == "1") {
                        window.location.href = "/Item/AddToCart?sku=" + i[0].sku + "&effortcode=" + i[0].effortcode + "&findnumber=" + i[0].findnumber + "&eventType=0";
                        return
                    }
                } else if (h == "QUANTITYERROR" || h == "QUANTITYERRORBUNDLE") {
                    LightBox.Show();
                    t = $("#QViewInfo");
                    t.show().html(u);
                    t.Reposition();
                    t.BindQtyInput();
                    nt = $(".js-overflowqty", t).text();
                    r.attr("data-overflowqty", nt);
                    $(document).data().originalCartButton = r;
                    Loading.Hide();
                    QView.updateCart = !0;
                    QView._busy = !1;
                    o && o.loaded();
                    return
                }
                n.callback && ($(document).data("originalCartButton") && (r = $(document).data("originalCartButton")),
                $(document).data().originalCartButton = null,
                eval(n.callback)(r));
                n.mode != "showcartpopup" && n.mode != "cartshowcartpopup" ? it = $(document).trigger("cartUpdated") : $(document).trigger("skuAdded", [$("#hdnSkuAdded", t).val()]);
                $(e).hasClass("rewardsATC") && ($(".pointsValue").text($(".pointsValue").text() - $(e).data("points")),
                setTimeout(function() {
                    location.reload(!0)
                }, 2e3));
                Loading.Hide();
                QView._busy = !1;
                o && o.loaded()
            },
            error: function(n, t, i) {
                o && o.loaded(i);
                window.console && console.log(i);
                LightBox.Hide();
                Loading.Hide();
                QView._busy = !1;
                $(document).trigger("scResponseError")
            }
        })
    }
    var d, o, p, w, l, a, f, e, s;
    Loading.Show();
    d = window.pageType;
    QView._busy = !0;
    tooltip.close();
    var c = this, r = $(this), h = !1, u = "", i = [], t, v = 22, y = $(".hdr_cartHover");
    if (addedSku = "",
    $(document.body).mouseup(function(n) {
        y.is(":visible") && !y.has(n.target).length && c.close()
    }),
    n.mode == "qviewatc" && $("#SKUSwatch" + n.skuid).length > 0 && (r.removeAttr("href"),
    v = 45,
    $("#SKUSwatch" + n.skuid).find(".swatch.selected").length <= 0))
        return QView.close(),
        Loading.Hide(),
        QView._busy = !1,
        tooltip.init($("#buyBtn" + n.skuid), "Select a " + $("#SKUSwatch" + n.skuid).find(".swatchTitle").html().slice(0, -1) + " to add to shopping cart.", 200, {
            skin: "SkuAttrTip"
        }),
        !1;
    if (n.mode != "showcartpopup" && n.mode != "cartshowcartpopup") {
        if (o = $('input.qtyInput[rel="' + r.prop("rel") + '"]'),
        p = o,
        n.mode == "qviewatc" && (o = $("input.qviewatc-" + n.skuid + '[rel="' + r.prop("rel") + '"]')),
        n.mode != "accessories" && n.mode != "SkuAddToSharedCartAccessories" && (o = c.parent().find(o)),
        o.length <= 0 && (o = p),
        n.autocomplete != undefined && n.autocomplete && (o = $("input.AutoCompleteQty.qviewatc-" + n.skuid + '[rel="' + r.prop("rel") + '"]')),
        w = "False".toLowerCase() == "true" && (n.mode == "accessories" || n.mode == "SkuAddToSharedCartAccessories" || n.mode == "fbt" || n.mode == "verticalfbt") || this.attr("skipOOSValidation") == null || this.attr("skipOOSValidation") == "false",
        $.each(o, function(t, r) {
            var u = $(r), o, a, c, f, e, s, l;
            if (!u.prop("disabled")) {
                if (o = u.val() == null || u.val().Trim() == "" ? u.prop("value") : u.val().Trim(),
                (n.mode == "accessories" || n.mode == "SkuAddToSharedCartAccessories" || n.mode == "fbt" || n.mode == "verticalfbt" || n.mode == "qdp" || u.data("allowzero")) && (o == "" || o == "0"))
                    return !0;
                if (o == "")
                    return u.Tooltip("Please enter a valid number", 200, {
                        index: 18e3
                    }),
                    u.val(""),
                    u.focus(),
                    h = !0,
                    !1;
                if (!Utilities.IsValidQty(u, !0))
                    return h = !0,
                    !1;
                if (n.mode == "updatecart" && (a = u.attr("data-oldvalue"),
                c = u.val(),
                c != "" && c == a))
                    return !1;
                if (f = u.data(),
                f.qtyincart = u.data("qtyincart"),
                f.umconversion = "",
                f.ecotax = u.closest(".BrowseItem").find(".EcoTax_Total").data("total"),
                addedSku += f.sku + ",",
                f.inputqty = n.mode == "removeitem" ? 0 : u.val(),
                f.isshowoosincart = w,
                f.isSKUPage = n.mode == "SkuAddToCart" ? !0 : !1,
                f.showpostaddtocart = u.data("showpostaddtocart") == "True" ? !0 : !1,
                f.PostATCEnabled = n.postATCEnabled == !0 ? !0 : !1,
                f.isSKUPage && $("#hdnNotInStock").length > 0 && $("#hdnNotInStock").val() == "true" && (f.isNotInStock = !0,
                f.isRemoveItem = $("#divSkuBackOrder > .BackOrderSkuItem").val()),
                e = $(".js-ovItemOption", $("#QViewInfo")),
                e && e.length > 0) {
                    for ($("#OvOptionError", $("#QViewInfo")).hide(),
                    s = "",
                    t = 0; t < e.length; t++) {
                        if (l = $(e[t]).val(),
                        l == "")
                            return $("#OvOptionError", $("#QViewInfo")).show(),
                            h = !0,
                            !1;
                        s += l + "|"
                    }
                    f.optionvalue = s.substring(0, s.length - 1)
                }
                if (n.ismovetocart == "true" && (f.ismovetocart = "true"),
                u.data("ismaxlimit") == "true" && (f.ismaxlimit = !0),
                u.data("ismultiplelimit") == "true" && (f.ismultiplelimit = !0),
                u.data("ismultipleminlimit") == "true" && (f.ismultipleminlimit = !0),
                f.RequestedQty = u.data("reqqty"),
                f.LimitedQty = u.data("limitedqty"),
                f.IsAlertATC = u.data("isalertatc"),
                n.mode == "SharedAddToCart") {
                    if (Utilities.CheckMaxQuantityError(u, !0) == !1)
                        return h = !0,
                        !1;
                    f.SharedCartID = n.sharedcartid;
                    f.EmailAddress = u.data("EmailAddress");
                    u.attr("data-QtySaved") != null && f.inputqty != u.attr("data-QtySaved") && (f.inputqty = u.attr("data-QtySaved"))
                }
                if (f.PageResType = n.resptype !== undefined && n.resptype !== "" ? n.resptype : "",
                n.mode == "SkuAddToSharedCart" || n.mode == "SkuAddToSharedCartAccessories") {
                    if (Utilities.CheckMaxQuantityError(u, !0) == !1)
                        return h = !0,
                        !1;
                    f.SharedCartID = n.sharedcartid
                }
                f.isenrollmentitem != "True" && i.push(f)
            }
        }),
        $.each($('input.skuAccWarrantyRadio[rel="' + r.prop("rel") + '"]:checked'), function(n, t) {
            var r = $(t).val();
            r && r != "" && (eval("var obj=" + r),
            addedSku += obj.sku + ",",
            i.push(obj))
        }),
        r.parents(".rewardsCenter").length > 0 && r.data("points") > $(".rightSectionHeading .pointsValue").text()) {
            r.Tooltip("You currently don&#39;t have enough QPoints to redeem this item.", 211, {
                hasCloseButton: !1,
                orientation: 3,
                unique: !0,
                index: 0,
                time: 2e3
            });
            Loading.Hide();
            QView._busy = !1;
            return
        }
        if (h || i.length == 0) {
            n.mode != "accessories" && n.mode != "SkuAddToSharedCartAccessories" || h || n.cartType == "AddToCartPreview" || (tooltip.close(),
            QView.close());
            Loading.Hide();
            QView._busy = !1;
            return
        }
    }
    if (l = Utilities.Perify(i),
    n.mode == "SkuAddToSharedCart" || n.mode == "SkuAddToSharedCartAccessories") {
        for (a = [],
        f = 0; f < i.length; f++)
            e = {},
            e.sku = i[f].sku,
            e.effortcode = i[f].effortcode,
            e.findnumber = i[f].findnumber,
            e.inputqty = i[f].inputqty,
            e.SharedCartID = i[f].SharedCartID,
            e.pricebreak = i[f].pricebreak,
            a[f] = e;
        if (l = JSON.stringify(a),
        n.sharedcartid == 0) {
            $.ajax({
                url: "/SharedCart/GetSharedCartList",
                type: "get",
                data: {
                    skuData: l,
                    btnRel: r.attr("rel"),
                    locater: r.attr("locater")
                }
            }).done(function(n) {
                $("#popup").length > 0 && $("#popup").remove();
                LightBox.Show();
                var t = $("<div id='showSharedCartPopUp'><\/div>").html(n).PopUp({
                    width: 500,
                    showLightBox: !0,
                    showCloseButton: !1,
                    showCloseIcon: !0,
                    index: 17001,
                    cssClass: "test"
                });
                $(".lightBox,.cancelBtn").click(function() {
                    t.Close()
                });
                Loading.Hide()
            });
            return
        }
    }
    "False".toLowerCase() == "true" && (n.mode != "accessories" || n.mode != "SkuAddToSharedCartAccessories") && n.mode != "fbt" && n.mode != "verticalfbt" && i.length > 0 && (this.attr("skipOOSValidation") == null || this.attr("skipOOSValidation") == "false") ? (e = {
        Sku: i[0].sku,
        EffortCode: i[0].effortcode,
        FindNumber: i[0].findnumber,
        ReqQuantity: i[0].inputqty,
        CallBackID: n.mode == "qview" || this.attr("id") == null ? "" : "#" + this.attr("id")
    },
    $.ajax({
        url: "/Item/CheckSkuOutOfStock",
        data: e,
        type: "POST",
        success: function(t) {
            t != null && t != "" ? (Loading.Hide(),
            Utilities.ShowOOSPopup(t)) : k(n, l, r)
        }
    })) : (k(n, l, r),
    this.removeAttr("skipOOSValidation"));
    this.close = function() {
        $("#HdrCartLi").removeClass("cartOver");
        $("#FloatingMiniCartInfo").empty().hide();
        tooltip.close();
        clearTimeout(floatingCartTimer);
        Loading.Hide();
        $(".wrapPrimarySubnav").hasClass("expanded") || LightBox.Hide();
        QView._busy = !1
    }
    ;
    s = !1;
    this.AccessoriesHandler = function() {
        s = !1;
        $('input.qtyInput[rel="AddtoCartAccessoryItems"]', t).bind("keyup", function() {
            b(s)
        });
        $('input.qtyInput[rel="AddtoCartAccessoryItems"]', t).bind("qtyfieldValidated", function() {
            b(s)
        });
        $('input[type="radio"][rel="AddtoCartAccessoryItems"]', t).bind("click", function() {
            var i = $("#counter", $("#QViewInfo"))
              , n = 0;
            $.each($('input.qtyInput[rel="AddtoCartAccessoryItems"]'), function(t, i) {
                $(i).val() > 0 && n++
            });
            $(this).val() != "none" && n++;
            i.text(n);
            s == !1 && n > 0 && (tooltip.init($("#QViewAccAddToCart", t), "Don&#39;t forget to add your accessories to cart!", "", {
                index: 17e3
            }),
            s = !0)
        })
    }
}
;
$(function() {
    $(".icoActRightNow").click(function() {
        var n = $(this);
        n.Tooltip($(".dvAccDiscount").html(), 265, {
            hasCloseButton: !0,
            orientation: 3,
            unique: !0,
            index: 0,
            skin: ""
        })
    })
});
CartPreview = new function() {
    var t = this
      , n = !1;
    this.Show = function() {
        ($("#blkMnu").is(":visible") && Nav.LoginWidgetClose(),
        $("#FloatingMiniCartInfo").empty().hide(),
        $placeHolder = $("#MiniCartInfo"),
        $hdrCartLi = $("#HdrCartLi"),
        $placeHolder.hasClass("miniCartLoaded")) || n != !0 && (n = !0,
        $.ajax({
            url: "/Item/ShowMiniCart",
            data: {
                pagelayout: pageLayout
            },
            dataType: "html",
            success: function(i) {
                $placeHolder.html(i);
                AddGiftCouponMiniCart();
                $(".popUpClose", $placeHolder).bind("click", t.Close);
                $placeHolder.addClass("miniCartLoaded");
                n = !1
            },
            error: function(n, t, i) {
                window.console && console.log(i)
            }
        }))
    }
    ;
    this.Close = function() {
        $placeHolder.removeClass("navOver");
        $hdrCartLi.removeClass("navOver");
        var n = $(".hdr_cartL");
        n.hasClass("ltbox") && (n.removeClass("ltbox"),
        $("#HeaderRow").css("z-index", ""),
        LightBox.Hide())
    }
    ;
    this.Reload = function(n) {
        var t = $("#requestPageLayout").val();
        $.ajax({
            url: "/Master/HeaderCartAjax",
            data: {
                pagelayout: t,
                returnUrl: location.href
            },
            success: function(t) {
                $("#cartPos").empty().html(t);
                Master.BindLogin();
                $("#Register").click(function() {
                    Nav && Nav.LoginWidgetClose && Nav.LoginWidgetClose();
                    PLP.ShowEasyLoginPopUp("Register")
                });
                Nav.init("#cartPos");
                $("#cartPos").setplaceholder();
                Nav.bind();
                n && n.call()
            },
            error: function(n, t, i) {
                window.console && console.log(i)
            }
        });
        $.ajax({
            url: "/Master/RewardsLink",
            data: {},
            success: function(n) {
                $("#RewardsMsg").empty().html(n)
            },
            error: function(n, t, i) {
                window.console && console.log(i)
            }
        });
        $.ajax({
            url: "/Cart/ShippingMessage",
            data: {},
            success: function(n) {
                $("#headerShippingMssg").empty().html(n)
            },
            error: function(n, t, i) {
                window.console && console.log(i)
            }
        });
        !0 && ($.ajax({
            url: "/Master/HeaderPLPFreeGiftMessage",
            data: {},
            success: function(n) {
                $("#PLPFreeGiftMessage").empty().html(n)
            },
            error: function(n, t, i) {
                window.console && console.log(i)
            }
        }),
        ShowFreeGiftLostMessage())
    }
}
;
$.fn.ignore = function(n) {
    return this.clone().find(n || ">*").remove().end()
}
;
$(document).ready(function() {
    $(this).bind("cartUpdated", function() {
        CartPreview.Reload(function() {
            var t = $("#MiniCartCountDownMsg"), i = $("#AlleyBanner"), n;
            t[0] && i[0] && t.html() && (i.html(t.html()),
            t.empty());
            n = $("#RewardsMsgPh");
            n[0] ? (n = n.html(),
            n ? ($("#LoginRibbon").hasClass("rbn_rewardsCustomer") || $("#LoginRibbon").addClass("rbn_rewardsCustomer"),
            $("#RewardsDiv").css("display", ""),
            $("#programMsgHdr").html(n),
            $("#disclaimer").attr("class", "ICO formIco icoQ")) : $("#RewardsDiv").css("display", "none")) : ($("#LoginRibbon").hasClass("rbn_rewardsCustomer") && $("#LoginRibbon").removeClass("rbn_rewardsCustomer"),
            $("#programMsgHdr").html(""),
            $("#disclaimer").removeClass("ICO formIco icoQ"),
            $("#disclaimer").attr("ONCLICK", "javascript:"))
        })
    })
});
$(document).ready(function() {
    $("#showhidependingorders").click(function() {
        $("#divSubscriptionOrderDetails").css("display") != "none" ? $("#showhidependingorders").text("Show Details +") : $("#showhidependingorders").text("Hide Details");
        $("#divSubscriptionOrderDetails").toggle()
    });
    notifications(!1)
});
Adaptive.OnResize(function() {
    notifications(!0)
});
AnalyticsHelper = new function() {
    var n = this, i, r, t, u;
    n.isTaggingEnabled = !0;
    i = ["/Sku/AddItemsToCart", "/Sku/AddToCart", "/Sku/UpdateCartItem", "/Item/GetDeliveryDate", "/Cart/UpdateCartItem", "/Cart/RemoveCartItem", "/Cart/GetRibbon", "/Cart/GetSaveForLater", "/Cart/UpdateZipCode", "/Cart/Cart", "/Checkout/RemoveCartItem", "/Checkout/ShoppingCartAjaxForm", "/Checkout/RushAirSelected", "/checkout/RushAirSelectedPost", "/Lists/SaveMyFavorites", "/Lists/ManageCustomLists", "/Address/PerformAction", "/Lists/AddItem", "/Item/SkuEmailNotifyMe", "/Master/EmailSignUp", "/PackageTracking/TrackingShipment", "/OrderHistory/OrderhistoryListData", "/Item/AddItemsToCart", "/SharedCart/AddItemsToSharedCart", "/SharedCart/UpdateSharedCartItems", "/SharedCart/DeleteSharedCartItem", "/PaidLoyalty/SignUp", "/mylist/GetMatchingSku", "/mylist/LoadItemDetails", "/mylist/OrderByItem", "/mylist/insertlistitem", "/mylist/ProcessFavorite", "/mylist/LoadMyProjects", "/searchengine/GetOwnBrandSuggestions", "/mylist/GetExactMatchItem", "/Master/ClipCoupon", "/Master/UpdateClippedCouponStatus", "/Item/GetSkuQView", "/PaidLoyalty/ApplyPromoCode", "/PaidLoyalty/EnrollPlpTeaser", "/PaidLoyalty/SavePlpChoices", "/Cart/QuantityErrorContinue", "/Cart/QuantityError", "/Cart/NotInStock", "/Search/GetDealsByFilter", "/Reviews/WriteReview", "/Item/UpdateCartItem", "/Cart/AddRemovedCartItem", "/Cart/UpdateZipCode", "/Cart/Update", "/Cart/ApplyEOffer", "/Cart/AddWarrantyItem", "/Cart/UpdateWarrantyItem", "/Cart/UpdateSelectedWarrantyItem", "/InkToner/GetITFSearchResults", "/mylist/GetSkuDetails", window.location.origin + "/search"];
    r = [];
    jQuery.map(i, function(n) {
        r.push(n.toUpperCase())
    });
    i = r;
    n.toUpdateLater = [];
    n.overlaypagename = "";
    n.UpdateLater = function(t, i) {
        n.toUpdateLater = n.toUpdateLater ? n.toUpdateLater : [];
        n.toUpdateLater[t] || n.toUpdateLater.push({
            key: i
        })
    }
    ;
    t = "";
    u = "";
    n.Initialize = function(n) {
        if (window.Analytics || n === undefined || n === "" || (window.Analytics = n,
        window.Analytics.global && window.Analytics.global.visit && (window.Analytics.global.visit.server = location.host)),
        window.Analytics.tracking) {
            var t = cookie.Get({
                bucket: cookie.buckets.funcTemp,
                name: "searchRedirectTrack"
            });
            t && (window.Analytics.tracking.int_search_type = t,
            cookie.Remove({
                bucket: cookie.buckets.funcTemp,
                name: "searchRedirectTrack"
            }))
        }
    }
    ;
    n.RemoveScResponseScript = function(n) {
        return Utilities.RemoveElements(n, "script#scResponseScriptContainer")
    }
    ;
    n.FilterResponse = function(i, r, f, e) {
        return i = i ? i.split("?")[0] : "",
        i !== "" && (i !== t || typeof e != "undefined" && e === u) && n.IsAjaxUrl(i) && (u = e,
        n.HasScResponseContent(r) ? r = n.UpdateResponse(n.RemoveScResponseScript(r), e) : n.HasScResponseCookie() || (f && f.indexOf("text/html") >= 0 && (r = n.UpdateResponse(r, e)),
        $(document).trigger(AnalyticsEvents.AjaxScResponseError, {
            stat: i
        }))),
        r
    }
    ;
    n.HasScResponseCookie = function() {
        var n = cookie.Get({
            bucket: cookie.buckets.funcTemp,
            name: "AnalyticsScEvent"
        })
          , t = n === "true"
          , i = n === "skip"
          , r = n === "inSession";
        return t || r ? ($(document).trigger(AnalyticsEvents.AnalyticsScResponse),
        !0) : !1 || i
    }
    ;
    n.GetScResponseSession = function() {
        var n = $.getJSON("/Analytics/GetScResponseData", function(n) {
            try {
                var t = decodeURIComponent(encodeURI(n));
                t && AnalyticsHelper.StoreScResponse(JSON.parse(t))
            } catch (i) {
                console && console.log(i)
            }
        })
    }
    ;
    n.StoreScResponse = function(t, i) {
        typeof t != typeof undefined && (t.action !== typeof undefined && AnalyticsHelper.AppendDlo(t),
        window.scResponse = t,
        i ? setTimeout(function() {
            n.TriggerAnalyticsEvent(t)
        }, 1500) : n.TriggerAnalyticsEvent(t))
    }
    ;
    n.TriggerAnalyticsEvent = function(n) {
        $(document).trigger(AnalyticsEvents.AnalyticsActions, {
            src: n
        })
    }
    ;
    n.AppendDlo = function(n) {
        if ((n.action === "listrefresh" || n.type === "lowerpriceoption" || n.type === "addtocart" && typeof n.globalitems != "undefined" || typeof n.globalitems != "undefined" || n.type === "dealsFilter" || n.type === "itfinderresults") && typeof Analytics != "undefined") {
            if (typeof window.Analytics.tracking != "undefined" && typeof window.Analytics.tracking.items != "undefined")
                try {
                    n.type === "addtocart" && typeof n.globalitems != "undefined" && ($.each(n.globalitems, function(n, t) {
                        window.Analytics.tracking.items[t.loc + "_" + t.s] = t
                    }),
                    window.Analytics.tracking.qtyerroritem = n.qtyerroritem,
                    delete n.qtyerroritem,
                    delete n.globalitems);
                    n.items != "undefined" && typeof n.globalitems == "undefined" && n.type != "addtocart" && (n.type === "itfinderresults" && $.each(window.Analytics.tracking.items, function(t, i) {
                        i.loc.toLowerCase().indexOf(n.type) >= 0 && delete window.Analytics.tracking.items[i.loc + "_" + i.s]
                    }),
                    $.each(n.items, function(n, t) {
                        window.Analytics.tracking.items[t.loc + "_" + t.s] = t
                    }),
                    typeof n.type != undefined && n.type === "dealsFilter" && (window.Analytics.tracking.sortBy = n.sortBy,
                    typeof n.filters != "undefined" && (window.Analytics.tracking.filters = n.filters),
                    window.Analytics.tracking.pagination = n.pageIndex,
                    window.Analytics.tracking.visual_filter = typeof n.visual_filter != "undefined" ? n.visual_filter : "",
                    delete n));
                    n.action === "listrefresh" && (window.Analytics.tracking.sortby = n.sortby,
                    window.Analytics.tracking.filterby = n.filterby);
                    typeof n.globalitems != "undefined" && ($.each(n.globalitems, function(n, t) {
                        window.Analytics.tracking.items[t.loc + "_" + t.s] = t
                    }),
                    delete n.globalitems)
                } catch (t) {
                    console.log("error updating dlo tracking items ==> analyticshelper.updatedlotrackingitems")
                }
            typeof window.Analytics.traffic != "undefined" && typeof n.Title != "undefined" && (window.Analytics.traffic.pagename = n.Title)
        }
    }
    ;
    n.UpdateDlo = function(t) {
        var i;
        typeof t != "undefined" && typeof Analytics != "undefined" ? (i = t.type,
        i === "riu" ? n.UpdateDloTrackingItems(t) : i === "ohi" && n.UpdateDloTrackingOrderHistoryItems(t)) : typeof t != "undefined" && (i = t.type,
        (i && i === "riu" || i === "ohi") && n.UpdateLater(i, t))
    }
    ;
    n.UpdateDloTrackingOrderHistoryItems = function(n) {
        if (typeof n != "undefined" && typeof Analytics != "undefined" && typeof window.Analytics.tracking != "undefined" && typeof n.orderdetails != "undefined")
            try {
                window.Analytics.global.testing.orderdetails = n.orderdetails
            } catch (t) {
                console.log("error updating tracking order history ==> analyticshelper.UpdateDloTrackingOrderHistoryItems")
            }
    }
    ;
    n.UpdateDloTrackingItems = function(n) {
        if (typeof n != "undefined" && typeof Analytics != "undefined" && typeof window.Analytics.tracking != "undefined" && typeof window.Analytics.tracking.items != "undefined" && typeof n.items != "undefined")
            try {
                $.each(n.items, function(n, t) {
                    var i = window.Analytics.tracking.items
                      , r = t.loc
                      , u = t.s;
                    i[r + "_" + u] = t
                })
            } catch (t) {
                console.log("error updating dlo tracking items ==> analyticshelper.updatedlotrackingitems")
            }
    }
    ;
    n.IsAjaxUrl = function(n) {
        var r = !1;
        return typeof n != "undefined" && n !== "" && (r = $.inArray(n.toUpperCase(), i) > -1,
        t = r ? n : t),
        r
    }
    ;
    n.UpdateResponse = function(n, t) {
        return n = '<div class="dynamiccontentloading"><\/div>' + n + '<div class="dynamiccontentloaded"><\/div>',
        t && t === "error" && AnalyticsHelper.BuildScErrorResponse(t),
        n
    }
    ;
    n.ExecuteScript = function(n) {
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.innerHTML = n.text();
        document._write || (document._write = document.write);
        document.write = function(n) {
            document.getElementById("analyticsScriptPlaceHolder").innerHTML += n
        }
        ;
        t.complete && (document.write = document._write);
        document.getElementById("analyticsScriptPlaceHolder").appendChild(t)
    }
    ;
    n.HasScResponseContent = function(n) {
        var i, r, t;
        try {
            if (i = JSON.parse(JSON.stringify(n)),
            typeof i != "object" && (n = n.trim()),
            r = "<div>" + n + "<\/div>",
            t = $("script#scResponseScriptContainer", $(r)),
            t.length)
                return AnalyticsHelper.ExecuteScript(t),
                !0
        } catch (u) {
            console.log("error while checking ajax scresponse content" + u)
        }
        return !1
    }
    ;
    n.BuildScErrorResponse = function(n) {
        window.scResponse = {};
        scResponse.version = "1.1";
        scResponse.message = n;
        scResponse.type = t;
        scResponse.error = {};
        scResponse.error.code = "ajax error";
        scResponse.error.desc = n
    }
    ;
    n.PickUpScResponse = function(t) {
        var r = cookie.Get({
            bucket: cookie.buckets.funcTemp,
            name: "AnalyticsScEvent"
        }), u, i;
        if (r === "true") {
            u = cookie.Get({
                bucket: cookie.buckets.funcTemp,
                name: "AnalyticsTemp"
            });
            try {
                i = decodeURIComponent(encodeURI(u));
                i && AnalyticsHelper.StoreScResponse(JSON.parse(i), t)
            } catch (f) {
                console && console.log(f)
            }
            cookie.Remove({
                bucket: cookie.buckets.funcTemp,
                name: "AnalyticsTemp"
            });
            cookie.Remove({
                bucket: cookie.buckets.funcTemp,
                name: "AnalyticsScEvent"
            })
        } else
            r === "inSession" && (n.GetScResponseSession(),
            cookie.Remove({
                bucket: cookie.buckets.funcTemp,
                name: "AnalyticsScEvent"
            }))
    }
    ;
    n.PopulateOverlayPageName = function(t) {
        if (typeof t != "undefined" && t !== "" && typeof Analytics != "undefined")
            try {
                window.Analytics.traffic.overlaypagename = n.overlaypagename = t.trim().replace(" ", "").toLowerCase()
            } catch (i) {}
    }
    ;
    n.PopulateErrMsg = function(n) {
        typeof Analytics != "undefined" && typeof window.Analytics.tracking != "undefined" && typeof n != "undefined" && n !== "" ? window.Analytics.traffic.errormsg = jQuery.makeArray(n).toString() : typeof n != "undefined" && typeof Analytics != "undefined" && typeof window.Analytics.tracking != "undefined" && n == "" && (window.Analytics.traffic.errormsg = null)
    }
    ;
    n.TriggerDloUpdate = function() {
        n.toUpdateLater.length && $.each(n.toUpdateLater, function(t, i) {
            var r = Object.keys(i)[0]
              , u = i[r];
            n.UpdateDlo(u);
            n.toUpdateLater.splice(t, 1)
        })
    }
}
;
AnalyticsEvents = new function() {
    this.AnalyticsLoaded = "__AnalyticsLoaded";
    this.AjaxScResponse = "__AnalyticsScResponse";
    this.AjaxScResponseError = "__AnalyticsAjaxScResponseError";
    this.AnalyticsScResponse = "__AnalyticsScResponse";
    this.AnalyticsLoadedUpdateDlo = "__AnalyticsLoadedUpdateDlo";
    this.AnalyticsActions = "_AnalyticsActions"
}
;
$(document).bind(AnalyticsEvents.AnalyticsLoaded, function() {
    AnalyticsHelper.overlaypagename !== "" && (window.Analytics.traffic.overlaypagename = AnalyticsHelper.overlaypagename);
    AnalyticsHelper.TriggerDloUpdate();
    $('<div class="contentloaded"/>').appendTo("body")
}).bind(AnalyticsEvents.AjaxScResponseError, function(n, t) {
    AnalyticsHelper.BuildScErrorResponse(t.stat)
}).bind(AnalyticsEvents.AnalyticsLoadedUpdateDlo, function() {
    AnalyticsHelper.TriggerDloUpdate()
}).bind(AnalyticsEvents.AnalyticsScResponse, function() {
    AnalyticsHelper.PickUpScResponse(!1)
});
$(document).ready(function() {
    AnalyticsHelper.PickUpScResponse(!0)
});
$(document).ready(function() {
    MagicZoomNew()
});
$(document).ready(function() {
    MagicZoom()
});
counter = 1;
InkTonerFinderScripts = function(n, t, i, r, u) {
    function o(n) {
        if ((ie6 || ie7 || ie8) && (n = $(n),
        n)) {
            var t = n.offsetWidth;
            n.css("min-width", t);
            n.bind("mousedown", function() {
                n.css("width", "auto");
                n.click()
            });
            n.bind("blur", function() {
                n.css("width", "")
            });
            n.bind("change", function() {
                n.css("width", "")
            })
        }
    }
    function s(n) {
        var t = $(n).siblings(".selectBrandLbl").attr("data-defaulttext");
        $(n).siblings(".selectBrandLbl").text(t);
        $(n).find("li.list-item").remove()
    }
    function a(n) {
        var t = $(n)[0];
        t.setAttribute("disabled", "disabled");
        t.disabled = "disabled";
        t.selectedIndex = 0
    }
    function b(n) {
        var t = $(n)[0];
        t.setAttribute("disabled", "");
        t.disabled = ""
    }
    function f(n) {
        var i = $(n)[0]
          , t = $(i).find("option:Selected").val();
        return t && t != 0 ? t : null
    }
    function v(n) {
        var t = $(n)[0];
        return t.options[t.selectedIndex].text
    }
    function h(n) {
        var t = $("#" + n).find(".li-search-box input").val();
        t != "" && ($("#" + n).find(".li-search-box input").val(""),
        $("#" + n).find("li.list-item").show());
        typeof isTabletView != "undefined" && (isTabletView.toLowerCase() == "true" || isTabletView == !0) && $("#" + n).parent().removeClass("navOver")
    }
    function y(r, u) {
        var f = $(r)[0], c = f.parentNode.children[0], h = "", e, s;
        c.tagName == "LABEL" && (h = c.outerHTML);
        var o = ""
          , a = ""
          , l = !0;
        for (e = 0; e < u.length; e++)
            r == n ? (s = u[e].SeriesName,
            $(f).show(),
            s ? u.length <= 1 && (s == "All Others" || s == "Other") ? ($(f).hide(),
            l = !1,
            r == "#MachineSeries" && InkTonerFinderHdr.getModels(u[e].SeriesID, r)) : s : (AllPrinAdded || (s = "All Printers"),
            AllPrinAdded = !0),
            o += "<option value=" + u[e].SeriesID + ">" + u[e].SeriesName + "<\/option>") : r == i ? o += "<option value=" + u[e].ModelId + ">" + u[e].ModelName + "<\/option>" : r == t && (a = u[e].ManufacturerId,
            o += "<option value=" + u[e].ManufacturerId + ">" + u[e].ManufacturerName + "<\/option>");
        r == t ? f.parentNode.innerHTML = h + '<select id="' + f.id + '" class="' + f.className + '" scType="scInput"  scInput="dropdown" scValue="selectbrand" ><option value="0">' + f.options[0].text + "<\/option>" + o + "<\/select>" : r == n && l ? f.parentNode.innerHTML = h + '<select id="' + f.id + '" class="' + f.className + '" scType="scInput"  scInput="dropdown" scValue="selectseries" ><option value="0">' + f.options[0].text + "<\/option>" + o + "<\/select>" : r == i && (f.parentNode.innerHTML = h + '<select id="' + f.id + '" class="' + f.className + '" scType="scInput"  scInput="dropdown" scValue="selectmodel" ><option value="0">' + f.options[0].text + "<\/option>" + o + "<\/select>");
        $(r)[0].onchange = f.onchange
    }
    function c(t, r) {
        var u = $(t), h = 10002, s, c, f, o, l;
        for ($("#EditPh")[0] && (u = $($(u), $("#EditPh")),
        h = 20002),
        s = "",
        c = !1,
        f = 0; f < r.length; f++)
            t == n ? (o = r[f].SeriesName,
            u.closest(".machineSeries").show(),
            o ? r.length <= 1 && (o == "All Others" || o == "Other") ? (u.closest(".machineSeries").hide(),
            t == "#MachineSeries" ? InkTonerFinderHdr.getModels(r[f].SeriesID, t) : t == "#MachineSeries_PopUp" && InkTonerQuickFindScripts.getModels(r[f].SeriesID, t)) : o : (c || (o = "All Printers"),
            c = !0),
            s += '<li class="list-item link" tabindex="' + (h + f) + '"><span class="item-text" data-value="' + r[f].SeriesID + '" data-text="' + o + '">' + o + "<\/span><\/li>") : t == i && (s += '<li class="list-item link" tabindex="' + (h + f) + '"><span class="item-text" data-value="' + r[f].ModelId + '" data-text="' + r[f].ModelName + '">' + r[f].ModelName + "<\/span><\/li>");
        t == n ? ($(u).find("li.list-item").remove(),
        u.append(s),
        $(u).find("input#search_series").bind("keyup", function(n) {
            e.SearchList(n, this)
        }),
        $(u).find("li.list-item, li.dflt-item").each(function() {
            $(this).bind("click", function() {
                e.UpdateModels(this)
            })
        })) : t == i && ($(u).find("li.list-item").remove(),
        u.append(s),
        l = $(u).find("input#search_models"),
        $(u).find("input#search_models").bind("keyup", function(n) {
            e.SearchList(n, this)
        }),
        $(u).find("li.list-item, li.dflt-item").each(function() {
            $(this).bind("click", function() {
                e.GetITResults(this)
            })
        }))
    }
    function k() {
        var n = $(r);
        n && (n.hasClass("goButtonDisabled") && n.removeClass("goButtonDisabled").addClass("goButton"),
        n.hasClass("disabled") && n.removeClass("disabled"))
    }
    function p() {
        var n = $(r);
        n && (n.hasClass("goButtonDisabled") || n.removeClass("goButton").addClass("goButtonDisabled"),
        !n.hasClass("disabled") < 0 && n.addClass("disabled"))
    }
    var e = this
      , w = n
      , d = t
      , l = i;
    $("" + t + " li.list-item, " + t + " li.dflt-item").each(function() {
        $(this).bind("click", function() {
            e.UpdateSeries(this)
        })
    });
    $("" + n + " li.list-item, " + n + " li.dflt-item").each(function() {
        $(this).bind("click", function() {
            e.UpdateModels(this)
        })
    });
    $(n).find("input#search_series_popup").bind("keyup", function(n) {
        e.SearchList(n, this)
    });
    $("" + i + " li.list-item, " + i + " li.dflt-item").each(function() {
        $(this).bind("click", function() {
            e.GetITResults(this)
        })
    });
    $(i).find("input#search_models_popup").bind("keyup", function(n) {
        e.SearchList(n, this)
    });
    $("#searchMachineBrand_popup").bind("keyup", function(n) {
        InkTonerQuickFindScripts.SearchList(n, this)
    });
    this.Search = function() {
        var e = !1;
        if (u == "true")
            var o = v(t).replace(/[^A-Za-z0-9-\s]/gi, "")
              , s = f(t)
              , h = f(i)
              , c = v(i).replace(/[^A-Za-z0-9-\s]/gi, "")
              , r = f(n);
        else
            var o = $("#hdn_brandId").attr("name").replace(/[^A-Za-z0-9-\s]/gi, "")
              , s = $("#hdn_brandId").val()
              , h = $("#hdn_modelId").val()
              , c = $("#hdn_modelId").attr("name").replace(/[^A-Za-z0-9-\s]/gi, "")
              , r = $("#hdn_seriesId").val();
        $("#MachineModel").length > 0 && r != null && r != "" ? o && s && h && c && r && (e = !0) : o && s && h && c && (e = !0);
        e && (location.href = "/search?keywords=" + o.replace(" ", "+") + "+" + c.replace(" ", "+") + "&FinderID=1&IandTSearch=3&ModelID=" + h + "&brandId=" + s + "&seriesId=" + r + "&MachinePage=back")
    }
    ;
    this.getBrands = function() {
        var r, u;
        a(t);
        a(i);
        p();
        r = f(n);
        r && (u = $.getJSON("/InkToner/GetInkTonerBrands", {
            machine: r
        }, function(n) {
            b(t);
            c(t, n)
        }))
    }
    ;
    this.getSeries = function(i) {
        var r, e;
        u == "true" ? (r = f(t),
        r && (e = $.getJSON("/InkToner/GetInkTonerSeries", {
            brand: r
        }, function(t) {
            y(n, t)
        }))) : (r = i,
        r && (e = $.getJSON("/InkToner/GetInkTonerSeries", {
            brand: r
        }, function(t) {
            c(n, t)
        })))
    }
    ;
    this.getModels = function(r) {
        var o, e, s;
        u == "true" ? (o = f(t),
        e = "",
        e = r != undefined ? r : f(n),
        e && o && (s = $.getJSON("/InkToner/GetInkTonerModels", {
            series: e,
            brand: o
        }, function(n) {
            y(i, n)
        }))) : (o = $("#hdn_brandId").val(),
        e = r,
        e && o && (s = $.getJSON("/InkToner/GetInkTonerModels", {
            series: e,
            brand: o
        }, function(n) {
            c(i, n)
        })))
    }
    ;
    this.setBrand = function() {
        var n = f(t);
        $("#hdn_seriesId").val("");
        n && $("#hdn_brandId").val(n)
    }
    ;
    this.setSeries = function() {
        var t = f(n);
        $("#hdn_seriesId").val("");
        t && $("#hdn_seriesId").val(t)
    }
    ;
    this.setModel = function() {
        var n = f(i);
        n && $("#hdn_modelId").val(n)
    }
    ;
    this.handleSearch = function() {
        p();
        var n = f(i);
        n && k()
    }
    ;
    o(n);
    o(t);
    o(i);
    this.UpdateSeries = function(n) {
        var u = $(n).children().text()
          , i = $(n).children().attr("data-value")
          , r = $(n).children().attr("data-text")
          , t = $(n).parent().attr("id");
        i != undefined && r != undefined ? ($("#hdn_brandId", $(".machine_Brand")).val(i),
        $("#hdn_brandId", $(".machine_Brand")).attr("name", r),
        $(n).parent().siblings("#brands_displayText").text(r),
        t == "MachineBrand" ? InkTonerFinderHdr.getSeries(i, t) : (t = "MachineBrand_PopUp") && InkTonerQuickFindScripts.getSeries(i, t)) : $(n).parent().siblings("#brands_displayText").text(u);
        $("#hdn_seriesId", $(".machineSeries")).val("");
        $("#hdn_seriesId", $(".machineSeries")).attr("name", "");
        s(w);
        s(l);
        h(t)
    }
    ;
    this.UpdateModels = function(n) {
        var u = $(n).children().text()
          , i = $(n).children().attr("data-value")
          , r = $(n).children().attr("data-text")
          , t = $(n).parent().attr("id");
        i != undefined && r != undefined ? ($("#hdn_seriesId", $(".machineSeries")).val(i),
        $("#hdn_seriesId", $(".machineSeries")).attr("name", r),
        $(n).parent().siblings("#series_displayText").text(r),
        t == "MachineSeries" ? InkTonerFinderHdr.getModels(i, t) : t == "MachineSeries_PopUp" && InkTonerQuickFindScripts.getModels(i, t)) : ($("#hdn_seriesId", $(".machineSeries")).val(""),
        $("#hdn_seriesId", $(".machineSeries")).attr("name", ""),
        $(n).parent().siblings("#series_displayText").text(u));
        s(l);
        h(t)
    }
    ;
    this.GetITResults = function(n) {
        var u = $(n).children().text()
          , i = $(n).children().attr("data-value")
          , t = $(n).children().attr("data-text")
          , r = $(n).parent().attr("id");
        i != undefined && t != undefined ? ($("#hdn_modelId", $(".machine_Model")).val(i),
        $("#hdn_modelId", $(".machine_Model")).attr("name", t),
        $(n).parent().siblings("#model_displayText").text(t),
        r == "MachineModel" && InkTonerFinderHdr.Search()) : $(n).parent().siblings("#model_displayText").text(u);
        h(r)
    }
    ;
    this.SearchList = function(n, t) {
        var i = $(t).attr("data-rel")
          , u = $(i).find("li.list-item")
          , r = $(t).val().trim().toLowerCase();
        r.length > 0 ? ($("ul#" + i + " li.list-item").hide(),
        $("ul#" + i + " li.list-item").find("span.item-text:containsIN('" + r + "')").parent("li").show()) : $("ul#" + i + " li.list-item").show()
    }
    ;
    $("#TrEdit, .browse_machine").find("ul.navigation li.navClick").bind("click", function() {
        $("#TrEdit, .browse_machine").find("ul.navigation li.navClick").not($(this)).removeClass("navOver")
    })
}
;
$(document).ready(function() {
    $(".panelItem").length == 1 && ($(".modelType").show().addClass("selected"),
    $(".it_search").show(),
    $(".it_searchHdr").html($(".hdnMachineName").val()));
    var n = $("#SelectedMachineTypeID").val();
    n != 0 && typeof n != "undefined" && openList1(n);
    $("#searchMachineBrand").bind("keyup", function(n) {
        InkTonerFinderHdr.SearchList(n, this)
    })
});
var QuickFind = new function() {
    function b(n) {
        var t = $.getJSON("/InkToner/SaveMachineFromCheckout", {
            modelId: n
        }, function(n) {
            n.SuccessCode == "0" || n.SuccessCode == "1" || n.SuccessCode == "2"
        })
    }
    function y(n) {
        if (Loading.Hide(),
        BrowserDevice.isMobileDevice && i() != !0)
            _disabled = !1,
            t = $("<div><\/div>").html(n).PopUp({
                showCloseButton: !0
            }),
            t.find("#Cancel").click(function() {
                t.Close()
            }),
            t.find("#Save").click(function() {
                QuickFind.Save()
            }),
            InkTonerFinderHdr = new InkTonerFinderScripts("#MachineSeries","#MachineBrand","#MachineModel","","true");
        else {
            var r = $(n);
            r.find("#brands_displayText").text($("#hdn_brandId").attr("name"));
            r.find("#series_displayText").text($("#hdn_seriesId").attr("name"));
            r.find("#model_displayText").text($("#hdn_modelId").attr("name"));
            n = r[0];
            t = $("<div id='editmachinePopup'><\/div>").html(n).PopUp({
                width: 600,
                showCloseButton: !1,
                locater: "editmachineoverlay",
                onclose: function() {
                    LightBox.Hide()
                }
            });
            t.find("#Cancel").click(function() {
                t.Close()
            });
            t.find("#Save").click(function() {
                QuickFind.Save()
            });
            Nav.init("#editmachinePopup");
            AjaxSuggest("div#srch_Model");
            LightBox.Show();
            InkTonerQuickFindScripts = new InkTonerFinderScripts(o,s,h)
        }
    }
    function e(n) {
        var u = i();
        if (BrowserDevice.isMobileDevice && u == !1) {
            var t = $("#Master")
              , f = t.attr("data-redirect")
              , o = t.attr("data-desktopWidget")
              , e = t.attr("data-vertical");
            $.ajax({
                url: "/InkToner/MyInkAndTonerPersonal",
                type: "get",
                data: {
                    redirect: f,
                    vertical: e,
                    currentSerialNumber: n || 0
                }
            }).done(function(n) {
                t.parent().empty().html(n).Carousel()
            })
        } else {
            var t = $(".savedMachineConentInner")
              , f = t.attr("data-redirect")
              , o = t.attr("data-desktopWidget")
              , e = t.attr("data-vertical")
              , s = $("#displayMode").val();
            $.ajax({
                url: "/InkToner/MySavedMachines",
                type: "get",
                data: {
                    redirect: f,
                    desktopWidget: o,
                    vertical: e,
                    currentSerialNumber: n || 0,
                    displayMode: s
                }
            }).done(function(n) {
                t.empty().html(n).Carousel();
                var i = $("#savedMachCount").val();
                i && i > 0 && $(".savedMachineConentInner").closest("#dvSavedMachines").addClass("SavedMachinesView");
                r();
                u == !0 && LoadITFCatridgesSection()
            })
        }
    }
    function i() {
        return $("#hdnInkTonerNewVersion").val() == "New/V1"
    }
    function k(u, o) {
        u ? (BrowserDevice.isMobileDevice && i() != !0 || (n ? ($("<div><\/div>").html(u).children("div").insertAfter($(n)),
        $(n).remove(),
        n = null) : $(f).append($("<div><\/div>").html(u).children("div"))),
        t.Close(),
        e(o),
        $(l).empty(),
        r()) : (i() == !0 && Loading.Hide(),
        $(a).Tooltip("&quot;A machine with this nickname already exists, please enter a different nickname&quot;", 150, {
            index: 18e3
        }))
    }
    function d() {
        $("#hdn_brandId").val("").attr("name", "");
        $("#hdn_seriesId").val("").attr("name", "");
        $("#hdn_modelId").val("").attr("name", "")
    }
    function g() {
        for (var i, r, t = $(f).children("div"), n = 0; n < t.length; n++)
            i = $(t[n]).find("span.IcoUp"),
            r = $(t[n]).find("span.IcoDown"),
            i.addClass("IcoUpDisabled"),
            r.addClass("IcoDownDisabled");
        $(f).find("span.link").addClass("disabled");
        $(v).addClass("BtnG")
    }
    function r() {
        for (var t, n, i, r, e = $(f), u = 0; u < e.length; u++)
            for (t = $(e[u]).children("div"),
            n = 0; n < t.length; n++)
                i = $(t[n]).find("span.IcoUp"),
                r = $(t[n]).find("span.IcoDown"),
                i.removeClass("IcoUpDisabled"),
                r.removeClass("IcoDownDisabled"),
                n == 0 ? i.hide() : i.show(),
                n == t.length - 1 ? r.hide() : r.show();
        $(f).find("span.link").removeClass("disabled");
        $(v).removeClass("BtnG")
    }
    var p = this
      , u = null
      , l = "#EditPh"
      , o = "#MachineSeries_PopUp"
      , s = "#MachineBrand_PopUp"
      , h = "#MachineModel_PopUp"
      , a = "#SaveEdit"
      , c = "#NickNameEdit"
      , f = ".savedMachineConentInner"
      , v = "#BtnAdd"
      , n = null
      , w = null
      , t = null;
    this.Init = function(n, f, e) {
        var v = "fromSignUp=" + n ? n : 0
          , c = 0
          , l = 0
          , a = "";
        f != undefined && f == 1 && (e = e.prev("a.anc"),
        c = e.attr("manufid"),
        l = e.attr("value"),
        a = e.attr("text"));
        $.ajax({
            url: "/inktoner/InkTonerQuickFind",
            type: "get",
            data: {
                fromSignUp: n ? n : 0,
                requestFrom: f,
                manufId: c,
                modelId: l,
                modelName: a
            }
        }).done(function(n) {
            Loading.Hide();
            BrowserDevice.isMobileDevice && i() == !1 ? y(n) : (u && u.remove(),
            t = $("<div id='newmachinePopup'><\/div>").html(n).PopUp({
                width: 600,
                locater: "newmachineoverlay",
                showCloseButton: !1,
                onclose: function() {
                    QuickFind.RemindLater();
                    LightBox.Hide()
                }
            }),
            u = t,
            Nav.init("#newmachinePopup"),
            $("#RemindMeLater").click(function() {
                u.Close()
            }),
            AjaxSuggest("div#srch_Model"),
            r(),
            LightBox.Show(),
            d(),
            InkTonerQuickFindScripts = new InkTonerFinderScripts(o,s,h))
        })
    }
    ;
    this.ShowEdit = function(t) {
        var i, r;
        t >= 0 && (n = "#data" + t,
        $("#hdn_brandId", $(".machine_Brand")).attr("name", $(n).attr("manufacturerName")),
        $("#hdn_brandId", $(".machine_Brand")).val($(n).attr("brand")),
        $("#hdn_typeId", $(".machine_Brand")).val($(n).attr("type")),
        i = $(n).attr("seriesName"),
        i != "" || i || (i = "Other"),
        $("#hdn_seriesId", $(".machineSeries")).attr("name", i),
        $("#hdn_seriesId", $(".machineSeries")).val($(n).attr("seriesId")),
        $("#hdn_modelId", $(".machine_Model")).attr("name", $(n).attr("modelName")),
        $("#hdn_modelId", $(".machine_Model")).val($(n).attr("model")));
        r = -1;
        t >= 0 && (r = $(n).attr("serial"));
        $.ajax({
            url: "/inktoner/EditRow",
            type: "get",
            data: {
                serialNumber: r
            }
        }).done(function(n) {
            y(n)
        })
    }
    ;
    this.Save = function() {
        var p = $(a), t = null, r = $(c).val(), u = $("#hdn_seriesId").val(), w = $("#hdn_typeId").val(), e = $("#hdn_brandId").val(), l = $("#hdn_modelId").val(), y = $("#displayMode").val(), f = i(), v;
        if (r || f != !1)
            if (e) {
                if (!u && $("#EditPh").find(".machineSeries").is(":visible") || !u && !1 && $("#MachineSeries option").length > 1 && $("#MachineSeries").is(":visible") == !0)
                    return $(o).parent().Tooltip("Please select a Series", 150, {
                        index: 18e3
                    }),
                    !1;
                if (l)
                    if (r || f != !0)
                        n && (t = $(n).attr("serial")),
                        v = {
                            serialNumber: t,
                            nickname: r,
                            machineId: u,
                            manufacturerId: e,
                            modelId: l,
                            displayMode: y
                        },
                        f == !0 && ($("#newmachinePopup").parents("div.popup").find("span.poppClose").trigger("click"),
                        ShowLoading(!0)),
                        $.ajax({
                            url: "/InkToner/SaveMachine",
                            data: v,
                            type: "get"
                        }).done(function(n) {
                            k(n, t)
                        });
                    else
                        return $(c).Tooltip("Please enter a name", 150, {
                            index: 18e3
                        }),
                        !1;
                else
                    return $(h).parent().Tooltip("Please select a Machine Model", 150, {
                        index: 18e3
                    }),
                    !1
            } else
                return $(s).parent().Tooltip("Please select a Machine Brand", 150, {
                    index: 18e3
                }),
                !1;
        else
            return $(c).Tooltip("Please enter a name", 150, {
                index: 18e3
            }),
            !1
    }
    ;
    this.ChangeDisplaySequence = function(n, t) {
        $.ajax({
            url: "/InkToner/ChangeDisplaySequence",
            type: "get",
            data: {
                moveOrder: t,
                serialNumber: n
            }
        }).done(function() {
            var i = $("#data" + n);
            t == 0 && i.prev()[0] ? i.insertBefore(i.prev()) : t == 1 && i.next()[0] && i.insertAfter(i.next());
            e();
            r()
        })
    }
    ;
    this.RefreshSavedMachines = function() {
        e()
    }
    ;
    this.ShowDelete = function(n, u, f) {
        var e, o;
        g();
        w = u;
        e = '<div class="delete-machine-wrap"><div class="formRow">Are you sure you want to remove this office machine from your list of machines?<\/div>';
        BrowserDevice.isMobileDevice && i() == !1 ? (e += '<div class="formRow alignRight"  style=" margin:20px;"><div class="formButtonRow2 formButtonRow0"><a class="button BtnG" id="CancelDeleteMachine">Cancel<\/a><a class="button BtnO" onclick="QuickFind.Delete(' + u + ');">Delete<\/a><\/div><\/div>',
        o = $(n).Tooltip(e, 400, {
            hasCloseButton: !0,
            index: 16e3,
            onclose: function() {
                r()
            }
        }),
        $("#CancelDeleteMachine").click(function() {
            o.Remove()
        })) : f == "1" ? (e += '<div class="formRow alignCenter"><div class="formRow "><a class="button BtnO form4 scTrack scLink" scType="scLink" scValue ="deletemachine" locater ="deletemachinealert"  onclick="QuickFind.Delete(' + u + ',1);">Delete<\/a><\/div><div class="formRow"><a class="link scTrack scLink" scType = "scLink" scValue = "cancel" locater = "deletemachinealert" id="CancelDeleteMachine">Cancel<\/a><\/div><\/div>',
        deletepopup = $("<div><\/div>").html(e).PopUp({
            width: 300,
            showCloseButton: !1,
            locater: "deletemachinealert",
            onclose: function() {
                LightBox.Hide()
            }
        }),
        deletepopup.find("#CancelDeleteMachine").click(function() {
            deletepopup.Close();
            LightBox.Hide()
        })) : (e += '<div class="formRow alignCenter"><div class="formRow "><a class="button BtnO form4 scTrack scLink" scType="scLink" scValue ="deletemachine" locater ="deletemachinealert"  onclick="QuickFind.Delete(' + u + ');">Delete<\/a><\/div><div class="formRow"><a class="link scTrack scLink" scType = "scLink" scValue = "cancel" locater = "deletemachinealert" id="CancelDeleteMachine">Cancel<\/a><\/div><\/div>',
        t = $("<div><\/div>").html(e).PopUp({
            width: 300,
            showCloseButton: !1,
            locater: "deletemachinealert",
            onclose: function() {
                LightBox.Hide()
            }
        }),
        t.find("#CancelDeleteMachine").click(function() {
            t.Close();
            LightBox.Hide()
        }));
        LightBox.Show()
    }
    ;
    this.Delete = function(n, u) {
        $.ajax({
            url: "/InkToner/DeleteSavedMachine",
            data: {
                serialNumber: n
            },
            type: "get"
        }).done(function() {
            BrowserDevice.isMobileDevice && i() != !0 || ($("#quickFindSavedMachineScroll").children("div").length <= 1 && i() == !1 ? p.Init("", "0", "") : ($("#data" + n).remove(),
            r(),
            $(l).empty()));
            e();
            tooltip.close();
            t.Close();
            u == 1 && deletepopup.Close()
        })
    }
    ;
    this.CloseEdit = function() {
        n = null;
        t.Close()
    }
    ;
    this.RemindLater = function() {
        u.remove();
        LightBox.Hide();
        $.ajax({
            type: "post",
            url: "/inktoner/RemindLater",
            data: {
                rnd: Math.random()
            }
        })
    }
    ;
    this.SelectType = function() {
        var n = $("#SavedMachines")[0];
        if (n.selectedIndex > 0) {
            var i = n.options[n.selectedIndex].value
              , t = this.SavedMachines.filter(function(n) {
                return n.SerialNumber == i
            })
              , r = "/Search/?keywords=" + t[0].ManufacturerName.replace(/ /g, "+") + "+" + t[0].ModelName.replace(/ /g, "+") + "&FinderID=1&IandTSearch=4&ModelID=" + t[0].ModelID;
            window.location.href = r
        }
    }
    ;
    this.SavedMachines = null;
    this.SelectMachine = function() {
        var t = $("#SavedMachines")[0];
        if ($("#phViewMachine").empty(),
        t.selectedIndex > 0) {
            var i = t.options[t.selectedIndex].value
              , n = this.SavedMachines.filter(function(n) {
                return n.SerialNumber == i
            })
              , r = $("#tmplMachine").html().replace("$MachineName$", n[0].Nickname).replace("$MachineType$", n[0].MachineTypeDescription).replace("$MachineBrand$", n[0].ManufacturerName).replace("$MachineModel$", n[0].ModelName).replace(/Serial/g, n[0].SerialNumber).replace("$Url$", "/Search/?keywords=" + n[0].ManufacturerName.replace(/ /g, "+") + "+" + n[0].ModelName.replace(/ /g, "+") + "&FinderID=1&IandTSearch=4&ModelID=" + n[0].ModelID);
            $("#phViewMachine").html(r)
        }
    }
    ;
    $(document).ready(function() {
        $(".orderSubmitedTxtName").each(function(n, t) {
            var i = $(t)
              , r = i.attr("data-model");
            b(r)
        });
        r()
    })
}
  , isTablet = "False"
  , isMbleDevice = "False";
$(document).ready(function() {
    var n, t, i;
    $("#wrapPrimaryNav .primaryNav .Navitems .coupon-clip-board").removeAttr("href");
    $("#wrapPrimaryNav .primaryNav .Navitems .coupon-clip-board #spnNavItemName").append("<span class='cpn-clip_count' style='display:none;'><\/span>");
    n = $("#hdnShowMiniCouponClipper").val();
    n != "" && n == "1" && (t = Utilities.getQueryString("cpncode"),
    i = Utilities.getQueryString("cpnstatus"),
    CouponClipper && CouponClipper.showMiniClip(t, i));
    $(".cpn-images .cpn-img").hover(function() {
        $(this).closest("div.coupon-mod").find(".img-container .cpn-main-img").attr("src", $(this).children().attr("src"))
    });
    $(window).scroll(function() {
        if ($(".popup-wrap").length > 0) {
            var n = $(".popup-wrap").offset().top - $(window).scrollTop();
            n > 0 ? $(".popup-wrap").parent().css({
                position: "fixed",
                top: n
            }) : $(".popup-wrap").parent().css({
                position: "fixed",
                top: 40
            })
        }
    })
});
$(document).click(function(n) {
    window.clipboard_open == undefined || window.clipboard_open != !0 || $(n.target).parent(".coupon-clip-board").length != 0 || $(n.target).hasClass("coupon-clip-board") || $(n.target).parents(".coupon-clipboard-wrapper").length != 0 || $(n.target).parents(".checkout_coupon_inner").length != 0 || pageLayout == "Checkout" || $(n.target).hasClass("popUpCloseQview") || CouponClipper.ClipBoardAnimation(!1);
    $(".popup-wrap").length > 0 && $(n.target).parents("#popup").length === 0 && ($("#popup").remove(),
    LightBox.Hide())
});
jQuery.fn.ClipCoupon = function() {
    var n = $(this);
    n.on("click", function() {
        CouponClipper.clipCoupon(n)
    })
}
;
CouponClipper = new function() {
    function t() {
        var n = $("#car_cpn_images").find("li.item_ph");
        $(n).on("click", function() {
            $(this).find(".video").attr("scType") == "video" ? ($(".cpn-hero-img").hide(),
            $(".cpn-video-wrap").html('<iframe id="cpnVideo" src="" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>'),
            $(".cpn-video-wrap").show(),
            $videoFrame = $("#cpnVideo"),
            $videoFrame.attr("width", "400"),
            $videoFrame.attr("height", "300"),
            $videoFrame.attr("src", $(this).find(".video").attr("data-videoUrl"))) : ($(".cpn-video-wrap").hide().empty(),
            $("div.cpn-hero-img").show().find("#cpn_big_image").attr("src", $(this).find("img").attr("src")))
        })
    }
    var n = this;
    this.init = function() {
        $("button.js-clipCpnBtn").each(function(n, t) {
            $(t).ClipCoupon()
        });
        window.clipboard_open = window.clipboard_open || !1;
        window.userCoupons = [];
        CouponClipper.getValidUserCoupons();
        $("div#PageInner").toggleClass("coupon-clipper-ON")
    }
    ;
    this.ClipBoardAnimation = function(n) {
        if (n)
            if ($("#HeaderRow").css("z-index", "10000"),
            $(".subHeader").css("z-index", "10000"),
            LightBox.Show(),
            isTablet == !0)
                $("#cpn_clipboard_cnt").css({
                    width: "392px"
                });
            else if (isMobile == !0)
                $("#cpn_clipboard_cnt").animate({
                    right: "0"
                }, 500, "linear");
            else {
                var t = $(".coupon-clip-board").offset();
                t.top == 0 && (t.top = 150);
                $("#cpn_clipboard_cnt").css({
                    left: t.left - 185
                }).animate({
                    top: t.top + 40
                })
            }
        else
            isMobile == !0 ? $("#cpn_clipboard_cnt").animate({
                right: "-100%"
            }, 500, "linear") : isTablet == !0 ? $("#cpn_clipboard_cnt").css("width", "0") : $("#cpn_clipboard_cnt").animate({
                top: "-1000px"
            }, function() {}),
            LightBox.Hide(),
            $(".subHeader").css("z-index", ""),
            window.clipboard_open = !1
    }
    ;
    this.getValidUserCoupons = function() {
        $.ajax({
            url: "/Master/GetValidUserCoupons",
            data: {},
            type: "GET",
            success: function(t) {
                t != "" && t != null && (window.userCoupons = t.split(","),
                window.userCoupons.length > 0 ? ($(".cpn-clip_count").show().html(window.userCoupons.length),
                n.updateCpnBtns(window.userCoupons)) : ($("#couponsWallet").hide(),
                $(".cpn-clip_count").hide()))
            },
            error: function(n) {
                Utilities.logsErrorMessage("01", "GetValidUserClippedCoupons", encodeURIComponent(n.responseText));
                LightBox.Hide()
            }
        })
    }
    ;
    this.clipCoupon = function(t) {
        if (window.userCoupons.length < parseInt("10")) {
            var i = $(t).data("cpncode")
              , r = !1;
            $(t).parents(".cpn-quickview-wrapper").length > 0 && !$(t).hasClass("alike-cpns") && (r = !0);
            i != "" && $.inArray(i, window.userCoupons) == -1 ? $.ajax({
                url: "/Master/ClipCoupon",
                data: {
                    couponCode: i
                },
                type: "POST",
                success: function(u) {
                    if ($("#cpn_clipboard_cnt").data("isloaded", !1),
                    u != "" && u != null) {
                        n.getValidUserCoupons();
                        var f = -1;
                        if (u.indexOf("Success") >= 0 ? f = 0 : u.indexOf("Coupon-Use Limit Met") >= 0 ? f = 3 : u.indexOf("Expired") >= 0 ? f = 1 : u.indexOf("Failed") >= 0 && (f = 5),
                        n.showMiniClip(t, f),
                        f == 0) {
                            n.onCpnClip(i);
                            r && ($("#popup").remove(),
                            LightBox.Hide())
                        }
                    }
                    typeof AnalyticsHelper != "undefined" && window.AnalyticsHelper.isTaggingEnabled && AnalyticsHelper.PickUpScResponse(!1)
                },
                error: function(n) {
                    Utilities.logsErrorMessage("01", "ClipCoupon", encodeURIComponent(n.responseText));
                    LightBox.Hide()
                }
            }) : tooltip.init(t, "You already clipped this coupon")
        } else
            LightBox.Show(),
            action = 4,
            action != "" && n.showMiniClip(t, action)
    }
    ;
    this.showMiniClip = function(n, t) {
        var u = "", r, i;
        u = $(n).length > 0 ? $(n).data("cpncode") : n;
        r = 1e3;
        i = "";
        t == 0 ? i = "has been added to your clipboard" : t == 2 ? i = "has been removed from your clipboard" : t == 3 ? i = "<span class='red'>Coupon-Use Limit Met<\/span>" : t == 1 ? (i = "<span class='redalerticon' style='float:left;'><\/span>has expired. More coupons can be found in the <a class='txtL txtBold' href='/coupons'>Coupon Center<\/a>.",
        r = 4e3) : t == 4 ? (i = "<span class='redalerticon' style='float:left;'><\/span>You have reached your limit of 10 saved coupons. You must remove one to save this one.",
        r = 4e3) : t == 5 && (i = "<span class='red'>The Coupon Code is not valid<\/span>",
        r = 3e3);
        $(".floating-clipboard").html() == "" && (LightBox.Show(),
        $(".floating-clipboard").append("<span class='coupon-clip-hdr'>Coupon Clipboard<\/span><aside class='clipped-coupon-wrap'><b class='formRow txtBold txtL'> Coupon " + u + "<\/b><i>" + i + "<\/i><\/aside>").Reposition("#HdrCartLi", !1),
        $(".floating-clipboard").show().delay(r).fadeOut(function() {
            $(".cpn-quickview-wrapper").length <= 0 && LightBox.Hide();
            $(".floating-clipboard").empty()
        }))
    }
    ;
    this.showClipBoard = function() {
        window.clipboard_open == !1 ? (window.clipboard_open = !0,
        $("#cpn_clipboard_cnt").data("isloaded") == !1 ? $.ajax({
            url: "/Master/ShowCouponsClipboard",
            data: {},
            type: "GET",
            success: function(t) {
                t != "" && t != null && (n.ClipBoardAnimation(!0),
                $("#cpn_clipboard_cnt").html(t));
                $("#cpn_clipboard_cnt").data("isloaded", !0)
            },
            error: function(n) {
                Utilities.logsErrorMessage("01", "ShowClipBoard", encodeURIComponent(n.responseText));
                LightBox.Hide()
            }
        }) : n.ClipBoardAnimation(!0)) : n.ClipBoardAnimation(!1)
    }
    ;
    this.removeCoupon = function(t) {
        var i = $(t).data("cpncode"), r;
        n.getValidUserCoupons();
        i != "" && $.inArray(i, window.userCoupons) > -1 && (r = "2",
        $.ajax({
            url: "/Master/UpdateClippedCouponStatus",
            data: {
                couponCodeList: i,
                status: r
            },
            type: "POST",
            success: function(r) {
                if ($("#cpn_clipboard_cnt").data("isloaded", !1),
                r != "" && r != null) {
                    window.clipboard_open = !1;
                    $(t).parent().hasClass("coupon_code") ? n.showMiniClip(t, 2) : $(t).parent().hasClass("clipped-coupon-wrap") && n.showClipBoard();
                    n.onCpnUnClip(i)
                }
                typeof AnalyticsHelper != "undefined" && window.AnalyticsHelper.isTaggingEnabled && AnalyticsHelper.PickUpScResponse(!1)
            },
            error: function(n) {
                Utilities.logsErrorMessage("01", "RemoveClippedCoupon", encodeURIComponent(n.responseText));
                LightBox.Hide()
            }
        }))
    }
    ;
    this.onCpnClip = function(n) {
        n != "" && n != null && ($("[id='unclip_cpn_" + n + "']").each(function() {
            $(this).show()
        }),
        $("[id='cpnCode_" + n + "']").each(function() {
            $(this).hide().closest(".coupon-mod").addClass("clipped-cpn")
        }),
        $("[id='shopNowBtn_" + n + "']").each(function() {
            $(this).show()
        }))
    }
    ;
    this.updateCpnBtns = function(n) {
        n.length > 0 && $(n).each(function(t) {
            $("[id='unclip_cpn_" + n[t] + "']").each(function() {
                $(this).show()
            });
            $("[id='cpnCode_" + n[t] + "']").each(function() {
                $(this).hide().closest(".coupon-mod").addClass("clipped-cpn")
            });
            $("[id='shopNowBtn_" + n[t] + "']").each(function() {
                $(this).show()
            })
        });
        (isTablet == !0 || isMobile == !0) && n.length > 0 ? ($("#couponsWallet").show().html("<div><ul style='display:inline-block' id='cpn-Details'><li><a id='detailsLnk'>Details<\/a><\/li><\/ul><span class='coupons-box'>" + n.length + " Coupon Saved<\/span><\/div"),
        $("#couponList").length > 0 ? $("#HeaderRow").css("padding-top", "59px") : $("#HeaderRow").css("padding-top", "0px")) : ($("#couponsWallet").hide(),
        $("#HeaderRow").css("padding-top", "0px"))
    }
    ;
    this.onCpnUnClip = function(t) {
        n.getValidUserCoupons();
        t != "" && $.inArray(t, window.userCoupons) > -1 && $.each(window.userCoupons, function(n, i) {
            if (i == t)
                return $("[id='unclip_cpn_" + t + "']").each(function() {
                    $(this).hide()
                }),
                $("[id='cpnCode_" + t + "']").each(function() {
                    $(this).show().closest(".coupon-mod").removeClass("clipped-cpn")
                }),
                $("[id='shopNowBtn_" + t + "']").each(function() {
                    $(this).hide()
                }),
                window.userCoupons.splice(n, 1),
                !1
        });
        window.userCoupons.length < 1 ? ($(".cpn-clip_count").hide(),
        $("#couponsWallet").hide()) : $(".cpn-clip_count").show().html(window.userCoupons.length)
    }
    ;
    this.showGiftDetails = function(n) {
        $(n).data("show-details") === !1 ? ($(".clipped-coupon-wrap .view-details-link").each(function() {
            $(this).data("show-details") === !0 && ($(this).data("show-details", !1).html("View Details"),
            $(this).closest("div.clipped-coupon-wrap").css("height", "88").find(".gift-details").toggle())
        }),
        $(n).data("show-details", !0).html("Hide Details"),
        $(n).closest("div.clipped-coupon-wrap").css("height", "auto").find(".gift-details").toggle()) : ($(n).data("show-details", !1).html("View Details"),
        $(n).closest("div.clipped-coupon-wrap").css("height", "88").find(".gift-details").toggle())
    }
    ;
    this.saveCoupon = function(n) {
        if ($(n).siblings("#input_cpnCode").val() !== "" && $(n).siblings("#input_cpnCode").val() !== "Add Coupon Manually") {
            var t = $(n).siblings("#input_cpnCode").val().trim().toUpperCase();
            $(n).data("cpncode", t);
            CouponClipper.clipCoupon($(n))
        } else
            $("#err_msg").show()
    }
    ;
    this.openCouponQuickView = function(n) {
        var i = $(n).data("cpncode")
          , r = "";
        $(n).closest("#featured")[0] !== undefined && (r = "featured-cpn");
        i != "" && i.toLowerCase() != "log in for code" ? $.ajax({
            url: "/Master/OpenCouponQuickView",
            data: {
                couponCode: i
            },
            type: "GET",
            success: function(n) {
                n != "" && n != null && ($("#popup").html() !== null && $("#popup").remove(),
                $("<div class='popup-wrap " + r + "'><\/div>").html(n).PopUp({
                    showCloseButton: !1,
                    showLightBox: !0,
                    width: "auto",
                    height: "auto"
                }),
                $(".js-cpnthumb.video").each(function() {
                    var n = $(this);
                    n.length && $.getJSON(n.data("srcurl"), {
                        format: "json"
                    }, function(t) {
                        n.attr("src", t[0].thumbnail_small)
                    })
                }),
                $("div.tabMenu").each(function(n, t) {
                    $(t).TabMenu()
                }),
                $(".cpn-qv-tabs a.tab").click(function() {
                    $(".tab").removeClass("tabSelected");
                    $(this).addClass("tabSelected")
                }),
                CouponClipper.init(),
                $("div.carousel").each(function(n, t) {
                    $(t).Carousel()
                }),
                $("#couponslikethis").click(CouponClipper.getCouponsLikeThis),
                t())
            },
            error: function(n) {
                Utilities.logsErrorMessage("01", "OpenCouponQuickView", encodeURIComponent(n.responseText));
                LightBox.Hide()
            }
        }) : i != "" && ($("#popup").html() !== null && $("#popup").remove(),
        $("<div class='popup-wrap " + r + "'><div style='padding:30px;' class='font14'> Please log in to view more details. <\/div><\/div>").PopUp({
            showCloseButton: !1,
            showLightBox: !0,
            width: "auto",
            height: "auto"
        }),
        event.stopPropagation())
    }
    ;
    this.getCouponsLikeThis = function() {
        var n = $("#coupon_family").val();
        console.log(n);
        n !== null && n !== "" && $.ajax({
            url: "/Master/GetCouponLikeThis",
            data: {
                couponCodes: n
            },
            type: "GET",
            success: function(n) {
                n != "" && n != null && ($("#coupon_family_wrapper").html(n),
                CouponClipper.init(),
                $("div.carousel").each(function(n, t) {
                    $(t).Carousel()
                }))
            },
            error: function(n) {
                Utilities.logsErrorMessage("01", "GetCouponLikeThis", encodeURIComponent(n.responseText))
            }
        })
    }
    ;
    this.goToCpnCenter = function(n) {
        $(n).trigger("goToCpnCenterClicked")
    }
}
;
QuillReview = new function() {
    var n = this;
    this.Sku = "";
    this.FileName = "";
    this.ProductName = "";
    this.CurrentPage = 0;
    this.CurrentSort = "";
    this.ReviewDiv = "";
    this.SortorFilter = "";
    this.CurrentFilter = -1;
    this.IsQview = !1;
    this.LoginURL = "";
    this.NoReview = !1;
    this.starSelected = "";
    CurrentSortText = "mostRecent";
    this.GetReviewData = function() {
        $.ajax({
            url: "/Reviews/GetReviewData",
            data: {
                sku: n.Sku,
                pageNum: n.CurrentPage,
                sort: n.CurrentSort,
                isQview: n.IsQview,
                loginUrl: n.LoginURL,
                noReview: n.NoReview
            },
            type: "GET",
            success: function(n) {
                $("#QuillReviewsContent").html(n)
            },
            error: function() {}
        })
    }
    ;
    this.SortReview = function(t) {
        n.CurrentPage = t;
        n.IsQview = $("#hdnIsQview").length > 0 ? !0 : !1;
        setSortvalue($("#QRReviewSort").val());
        QuillReview.GetReviewData()
    }
    ;
    this.RefreshReview = function() {
        n.CurrentPage = 0;
        n.CurrentSort = "dateCreated:desc";
        QuillReview.GetReviewData();
        $("#QRShowAll").css("display", "none")
    }
    ;
    this.FilterReviewbyRating = function(t, i) {
        n.CurrentPage = i;
        n.CurrentFilter = t;
        $.ajax({
            url: "/Reviews/GetReviewDatabyRatingFilter",
            data: {
                sku: n.Sku,
                pageNum: n.CurrentPage,
                rating: t,
                isQview: $("#hdnIsQview").length > 0 ? !0 : !1,
                loginUrl: n.LoginURL,
                noReview: n.NoReview
            },
            type: "GET",
            success: function(n) {
                $("#QuillReviewsContent").html(n);
                $("#QRShowAll").css("display", "block")
            },
            error: function() {}
        })
    }
    ;
    this.GoToPage = function(t) {
        n.SortorFilter == "filter" ? QuillReview.FilterReviewbyRating(n.CurrentFilter, (t - 1) * 10) : n.SortorFilter == "sort" && QuillReview.SortReview((t - 1) * 10);
        setTimeout(function() {
            QuillReview.IsQview == "True" || QuillReview.IsQview == !0 ? QuillReview.ScrollToTabNew("#UserReviews", this, ".qOverflow") : QuillReview.ScrollToTabNew("#UserReviews", this)
        }, 200)
    }
    ;
    this.CallFocus = function() {
        if (window.location.href != "" && window.location.href.lastIndexOf("#skuTabReviews") > 0) {
            var n = window.navigator.userAgent
              , t = n.indexOf("MSIE ")
              , i = n.indexOf("rv:");
            t > 0 || i > 0 || $("#flix-inpage").html() != "" || $("#wc-power-page").html() != "" ? setTimeout(function() {
                QuillReview.SetFocusToReviews()
            }, 1e3) : QuillReview.SetFocusToReviews()
        }
    }
    ;
    this.SetFocusToReviews = function() {
        this.ScrollToTabNew("#skuTabReviews", this)
    }
    ;
    this.OpenWriteReviewpop = function() {
        QuillReview.SetFocusToReviews();
        this.WriteReviewpop()
    }
    ;
    this.ScrollToTabNew = function(n, t, i) {
        $(".skuTabDiv").removeClass("border");
        $(t).parent().addClass("border");
        (i == null || i == "") && (i = "html, body");
        QuillReview.IsQview == "True" || QuillReview.IsQview == !0 ? $(i).animate({
            scrollTop: 320
        }, 1e3) : $(".HeaderRow.is-sticky").length > 0 ? $(i).animate({
            scrollTop: $(n).offset().top - $(".HeaderRow.is-sticky").height()
        }, 1e3) : setTimeout(function() {
            $(i).animate({
                scrollTop: $(n).position().top + $(".hdr_banner").height() + $("#DynamicAlley").height() + $("#CookieSaveMsg").height() + $("#QuillPlusBanner").height()
            }, 1e3)
        }, 150)
    }
    ;
    setSortvalue = function(t) {
        switch (t) {
        case "mostRecent":
            n.CurrentSort = "dateCreated:desc";
            n.CurrentSortText = "mostRecent";
            break;
        case "mostHelpful":
            n.CurrentSort = "upVotes:desc";
            n.CurrentSortText = "mostHelpful";
            break;
        case "highLow":
            n.CurrentSort = "rating:desc";
            n.CurrentSortText = "highLow";
            break;
        case "lowHigh":
            n.CurrentSort = "rating:asc";
            n.CurrentSortText = "lowHigh";
            break;
        default:
            n.CurrentSort = "dateCreated:desc";
            n.CurrentSortText = "mostRecent"
        }
    }
    ;
    this.Votereview = function(n, t) {
        $.ajax({
            url: "/Reviews/ReviewVote",
            data: {
                reviewId: n,
                updown: t
            },
            type: "POST",
            success: function(i) {
                t ? $("#UpCount_" + n).html(i) : $("#DownCount_" + n).html(i)
            },
            error: function() {}
        })
    }
    ;
    this.Flagreview = function(n) {
        $.ajax({
            url: "/Reviews/ReviewFlag",
            data: {
                reviewId: n
            },
            type: "POST",
            success: function(t) {
                $("#QRFlag_" + n).html(t)
            },
            error: function() {}
        })
    }
    ;
    this.SelectedRating = function(n) {
        $("#Rating").val(n);
        this.SelectRating(n, !0, !0)
    }
    ;
    this.SelectRating = function(n, t, i) {
        if (n = parseInt(n),
        n > 0 ? t ? $("#start1").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1") : $("#start1").addClass("QuillReviewRating1_1").removeClass("QuillReviewRating0_0") : $("#start1").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1"),
        n > 1 ? t ? $("#start2").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1") : $("#start2").addClass("QuillReviewRating1_1").removeClass("QuillReviewRating0_0") : $("#start2").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1"),
        n > 2 ? t ? $("#start3").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1") : $("#start3").addClass("QuillReviewRating1_1").removeClass("QuillReviewRating0_0") : $("#start3").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1"),
        n > 3 ? t ? $("#start4").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1") : $("#start4").addClass("QuillReviewRating1_1").removeClass("QuillReviewRating0_0") : $("#start4").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1"),
        n > 4 ? t ? $("#start5").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1") : $("#start5").addClass("QuillReviewRating1_1").removeClass("QuillReviewRating0_0") : $("#start5").addClass("QuillReviewRating0_0").removeClass("QuillReviewRating1_1"),
        !i) {
            var r = $("#Rating").val();
            r != "" && t && this.SelectRating(r, !1, !0)
        }
    }
    ;
    this.WriteReviewpop = function() {
        if ($("#WriteReviewPop").html() == null || $("#WriteReviewPop").html() == "") {
            var t = {
                sku: n.Sku,
                fileName: n.FileName,
                starSelected: n.starSelected
            };
            $.ajax({
                url: "/Reviews/GetWriteReviewForm",
                type: "get",
                data: t,
                success: function(t) {
                    var r = $("#WriteReviewPop").html(t)
                      , i = $("#WriteReviewPop").find("form");
                    i.ValidateForm();
                    $("#WriteReviewPop .QRProductName").text(n.ProductName);
                    QuillReview.SelectRating(n.starSelected);
                    i.bind("preValidation", function() {});
                    i.bind("postServerValidation", function(n, t, r) {
                        if (r.toLowerCase() == "false")
                            i = $(this);
                        else if (r.toLowerCase() == "true")
                            var u = $(this);
                        QuillReview.SelectRating($("#Rating").val())
                    })
                },
                error: function() {}
            })
        } else
            $("#WriteReviewPop").show()
    }
    ;
    this.CloseRatingPopup = function() {
        $("#clearReviewSection").length > 0 ? $("#WriteReviewPop").html("") : $("#WriteReviewPop").hide()
    }
}
;
