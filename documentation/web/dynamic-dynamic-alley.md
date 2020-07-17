# Dynamic Dynamic Alley HTML
_Last updated 7/17/20_

The new Dynamic Dynamic Alley ADCore module allows us to update dynamic alley content quickly to respond to rapidly changing customer needs. The module accepts raw `HTML`, allowing it to generate nearly anything we want. This document contains the `HTML` currently used to promote high-demand products.

To update the dynamic dynamic alley on demand, ADCore needs to be updated as described below. After that, the offer code needs to be pushed to production using the GMP. The following sections cover each in order.

## ADCore

[ADCore](http://adcore.quillcorp.com/AdCoreCalendar.aspx) is the system that houses all of the snippets of `CSS`, `HTML`, and `JavaScript` code managed by the content management system.

### Module

The ADCore module `2020-html-block-full` accepts raw `HTML`. It has five empty fields in a row with no spaces. The five fields separate the `HTML` to avoid individual field character limits and improve readability.

```html
$%u_ad_html_01%$$%u_ad_html_02%$$%u_ad_html_03%$$%u_ad_html_04%$$%u_ad_html_05%$
```

### Offer Code

The offer code currently programmed in the dynamic alley position is __W20_06_980_DYNTST0H__. To update the ad, we need to overwrite its contents. _To remove the ad we need to remove all of the content from the offer code._

### Data

For the __Dymanic Dynamic Alley__, the `HTML` is one block of code. However, the offer code breaks that code across five fields to improve readability and make editing easier. For the ad to display correctly, populate the five fields of the offer code as outlined below. Only the `u_ad_html_02` and `u_ad_html_04` fields should be customized. The other three do not change.

___To hide the ad from users, all of the fields in the offer code must be empty.___

#### u_ad_html_01

This code contains the HTML and CSS necessary for the ad to render on the site. __Do not modify this code.__

```html
<style type="text/css">.agency.grid__unit--100 {align-self: stretch;background-image: none;box-sizing: border-box;display: flex;flex-wrap: wrap;overflow: hidden;padding-bottom: 0;padding-top: 0;position: relative;padding-left: 1%;padding-right: 1%;width: 98%;}.agency .webModInner {box-sizing: border-box;height: 100%;overflow: hidden;padding-bottom: 0;padding-left: 0;padding-right: 0;padding-top: 0;position: relative;width: 100%;}.agency .div__html--static {box-sizing: border-box;position: static;width: 100%;}.agency .align--center {justify-content: center; margin-left: auto; margin-right: auto; text-align: center;}.agency .a--noHighlight:hover,.agency .a--noHighlight:active {text-decoration: none;}.agency .p--small {font-family: neue-haas-unica, helvetica, arial, sans-serif;font-size: 18px;font-stretch: normal; font-style: normal;font-variant: normal;line-height:1.5em;}</style><div class="agency grid__unit--100 searchOffer"><div class="webModInner" style="margin-bottom:0;"><div class="div__html--static" style="background-color:#fff;"><div style="padding:1px 0;"><a href="
```
#### u_ad_html_02

This field contains the `href` attribute, Omniture tag, and the `title` attribute for the anchor tag. These values change depending on the offer.

```html
xxxx_LINK_URL_xxxx?cm_sp=xxxx_OMNITURE_TAG_xxxx" title="Shop our selection of xxxx_ITEM_NAME_xxxx
```

##### Example
```html
/non-contact-infrared-thermometer-jxb-178/cbs/55381373.html?cm_sp=W20_06_980_DYNTSTDA0608" title="Shop our selection of Non-Contact Infrared Thermometers
```

#### u_ad_html_03

This field has more of the `HTML` necessary for the ad to render correctly. __Do not modify this code.__

```html
" class="a--noHighlight"><div class="align--center" style="width:80%;"><p class="p--small" style="color:#e4002b;font-weight:500;margin:10px 0;padding-bottom:0;">
```

#### u_ad_html_04
This field holds the offer text for the ad. Update the item name based on the current offer.

```html
xxxx_ITEM_NAME_xxxx now available.
```

##### Example
```html
Non-Contact Infrared Thermometers now available.
```

#### u_ad_html_05

The final field finishes off the `HTML` of the dynamic dynamic alley. __Do not modify this code.__

```html
<span style="color:#333;margin-left:10px;text-decoration:underline;">Shop Now</span></p></div></a></div></div></div></div>
```

## GMP (Genesis Management Portal)

The [GMP](http://gmp-quill.quillcorp.com/) houses the dashboard we use to update the offer codes in real-time. Offer codes update overnight automatically, but if you want one to update before that, the GMP has the tools to do so. Why it is called "Genesis Management Portal" is a story too long to tell here. :)

To access the dashboard to post offer codes to production find the __"CSR"__ drop-down menu and select __"Sync Offer Code (Pull from Backend)".__

On the page headed "Update Offer Code Content," you will be able to update offer codes. Type or paste the offer code you want to update into the "Enter Adcore Offer Code:" field and click the "Search" button. ___Do not include any spaces. These can cause issues with finding and updating offer codes.___

If the offer code exists, it will load a table with all the offer code fields and their values. Below are two buttons "Back" and "Update Offer Code."

The "Back" button takes you back to the GMP home page. The "Update Offer Code" is the button you need to press to post the offer code content to the staging server. The process can take a while. ___Don't click anything until the operation finishes and the page reloads.___ Red text, above the "Enter Adcore Offer Code:" field reading: "Offer Code Content Successfully Updated," lets you know the update was successful.

The data is now on the staging server. To copy it to all of the Quill.com and QuillConnect servers, you need to continue to step 2: "Update / Refresh data on each server."

Under the "Back" and "Update Offer Code" buttons is the "STEP 2 / 2" section, a vertical checklist of all of the Quill servers. If you want to push an update to an individual server, click the checkbox next to it. To select every server, scroll to the bottom of the list and check the "Select All" box.

Click the "Update Server" button to finish the update. As each server is updated, you will see "Success" in green appear next to it.

If you have any questions, please reach out to the Agency Development Team: [Seyi Owolabi](mailto:seyi.owolabi@quill.com) and [Andy Edmonds](mailto:andrew.edmonds@quill.com).