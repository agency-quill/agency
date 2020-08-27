# Dynamic Dynamic Alley HTML
_Last updated 7/17/20_

The new Dynamic Dynamic Alley ADCore module allows us to respond rapidly to changing customer needs. The module accepts raw `HTML`, allowing it to generate nearly anything we want.

Instructions on how to make real-time changes to the live offer code, as well as the code currently in place to promote high-demand products are below.

## ADCore

[ADCore](http://adcore.quillcorp.com/AdCoreCalendar.aspx) is the system that houses snippets of `CSS`, `HTML`, and `JavaScript` code managed by the content management system.

### Module

The ADCore module `2020-html-block-full` accepts raw `HTML`. It has five empty fields in a row with no spaces. The fields separate the `HTML` to circumvent character limits and improve readability.

```html
$%u_ad_html_01%$$%u_ad_html_02%$$%u_ad_html_03%$$%u_ad_html_04%$$%u_ad_html_05%$
```

### Offer Code

The offer code currently programmed in the dynamic alley position is __W20_06_980_DYNTST0H__. To update it, overwrite its contents in ADCore. _To remove the ad remove all of the content from the offer code._

### Data

The __Dymanic Dynamic Alley__ is a single block of `HTML` and `CSS`. Even though we could put all of the code in one field, breaking it up across all five improves readability and makes editing easier.

For the ad to display correctly, populate the five fields of the offer code as outlined below. Only the `u_ad_html_02` and `u_ad_html_04` fields should be customized. ___Do not change the other three___.

__To hide the ad from users, all of the fields in the offer code must be empty.__

#### u_ad_html_01

This code contains the HTML and CSS necessary for the ad to render on the site. __Do not modify this code.__

```html
<style type="text/css">.agency.grid__unit--100 {align-self: stretch;background-image: none;box-sizing: border-box;display: flex;flex-wrap: wrap;overflow: hidden;padding-bottom: 0;padding-top: 0;position: relative;padding-left: 1%;padding-right: 1%;width: 98%;}.agency .webModInner {box-sizing: border-box;height: 100%;overflow: hidden;padding-bottom: 0;padding-left: 0;padding-right: 0;padding-top: 0;position: relative;width: 100%;}.agency .div__html--static {box-sizing: border-box;position: static;width: 100%;}.agency .align--center {justify-content: center; margin-left: auto; margin-right: auto; text-align: center;}.agency .a--noHighlight:hover,.agency .a--noHighlight:active {text-decoration: none;}.agency .p--small {font-family: neue-haas-unica, helvetica, arial, sans-serif;font-size: 18px;font-stretch: normal; font-style: normal;font-variant: normal;line-height:1.5em;}</style><div class="agency grid__unit--100 searchOffer"><div class="webModInner" style="margin-bottom:0;"><div class="div__html--static" style="background-color:#fff;"><div style="padding:1px 0;"><a href="
```
###### Triple-click the above code to select it for Copy and Paste purposes.

#### u_ad_html_02

This field contains the `href` attribute, Omniture tag, and the `title` attribute for the anchor tag. These values change depending on the offer.

```html
xxxx_LINK_URL_xxxx?cm_sp=xxxx_OMNITURE_TAG_xxxx" title="Shop our selection of xxxx_ITEM_NAME_xxxx
```
###### Triple-click the above code to select it for Copy and Paste purposes.

##### Example
```html
/non-contact-infrared-thermometer-jxb-178/cbs/55381373.html?cm_sp=W20_06_980_DYNTSTDA0608" title="Shop our selection of Non-Contact Infrared Thermometers
```

#### u_ad_html_03

This field has more of the `HTML` necessary for the ad to render correctly. __Do not modify this code.__

```html
" class="a--noHighlight"><div class="align--center" style="width:80%;"><p class="p--small" style="color:#e4002b;font-weight:500;margin:10px 0;padding-bottom:0;">
```
###### Triple-click the above code to select it for Copy and Paste purposes.

#### u_ad_html_04
This field holds the offer text for the ad. Update the item name based on the current offer.

```html
xxxx_ITEM_NAME_xxxx now available.
```
###### Triple-click the above code to select it for Copy and Paste purposes.

##### Example
```html
Non-Contact Infrared Thermometers now available.
```

#### u_ad_html_05

The final field finishes off the `HTML` of the dynamic dynamic alley. __Do not modify this code.__

```html
<span style="color:#333;margin-left:10px;text-decoration:underline;">Shop Now</span></p></div></a></div></div></div></div>
```
###### Triple-click the above code to select it for Copy and Paste purposes.

## GMP (Genesis Management Portal)

The [GMP](http://gmp-quill.quillcorp.com/) is where we can update the offer codes in real-time. Offer codes update overnight automatically, but if you want to update one before that, the GMP is the place to do it. Why it is called "Genesis Management Portal" is a story too long to tell here. :)

1. The dashboard to update offer codes in real-time is under the __"CSR"__ drop-down menu. Select __"Sync Offer Code (Pull from Backend)".__

2. Type or paste the offer code you want to update into the "Enter Adcore Offer Code:" field and click the "Search" button. ___Do not include any spaces. These can cause issues with finding and updating offer codes.___

3. If the offer code exists, it will load a table with all the offer code fields and their values. Below it is the button "Update Offer Code." Press it to post the offer code content to the staging server. The process can take a while. ___Don't click anything until the operation finishes and the page reloads.___ Red text reading: "Offer Code Content Successfully Updated," appears at the top of the page if the update was successful.

4. Under the "STEP 2 / 2" heading is a checklist of all the Quill servers. If you want to push an update to an individual server, click the checkbox next to it. To select every server, scroll to the bottom of the list and check the "Select All" box.

5. Click the "Update Server" button to finish the update. As each server is updated, you will see the word "Success" in green appear next to it.

If you have any questions, please reach out to the Agency Development Team: [Seyi Owolabi](mailto:seyi.owolabi@quill.com) and [Andy Edmonds](mailto:andrew.edmonds@quill.com).