# Dynamic Dynamic Alley HTML
_Last updated 7/17/20_

The new Dynamic Dynamic Alley ADCore module allows us to update the content in real time to respond to rapidly changing customer needs. The module accepts raw `HTML` allowing it to generate, nearly anything we want. Below is the current `HTML` that is being used to promote high-demand products.

To update the dynamic dynamic alley in real-time, ADCore needs to be updated as described below. After that, the offer code needs to be pushed to production using the GMP. The following sections cover each in that order.

##ADCore

[ADCore](http://adcore.quillcorp.com/AdCoreCalendar.aspx) is the system that houses all of the snippets of `CSS`, `HTML` and `JavaScript` code managed by the content management system.

### Module

The ADCore Module is `2020-html-block-full`. It accepts raw `HTML`. The module has 5 empty fields in a row with no spaces. This is to allow the `HTML` to be split up to avoid individual field character limits, and to improve readability.

```html
$%u_ad_html_01%$$%u_ad_html_02%$$%u_ad_html_03%$$%u_ad_html_04%$$%u_ad_html_05%$
```

### Offer Code

The ofer code currently programmed in the dynamic alley position is __W20_06_980_DYNTST0H__. To update the ad we need to overwrite its contents. _To remove the ad we need to remove all of the content from the offer code._

### Data

For the __Dymanic Dynamic Alley__, the `HTML` is really one block of code, but the offer code breaks that code across five fields in order to improve readability and make editing easier. For the ad to display on the site, the five fields of the offer code need to be populated as outlined below. Only the `u_ad_html_02` and `u_ad_html_04` fields should be customized. The other three do not change.

___To hide the ad from users, all of the fields in the offer code must be empty.___

#### u_ad_html_01

This field houses the `CSS` and all of the `HTML` needed for the dynamic dynamic alley up to the `URL` for the `href` attribute. __This field should not be edited.__

```html
<style type="text/css">.agency.grid__unit--100 {align-self: stretch;background-image: none;box-sizing: border-box;display: flex;flex-wrap: wrap;overflow: hidden;padding-bottom: 0;padding-top: 0;position: relative;padding-left: 1%;padding-right: 1%;width: 98%;}.agency .webModInner {box-sizing: border-box;height: 100%;overflow: hidden;padding-bottom: 0;padding-left: 0;padding-right: 0;padding-top: 0;position: relative;width: 100%;}.agency .div__html--static {box-sizing: border-box;position: static;width: 100%;}.agency .align--center {justify-content: center; margin-left: auto; margin-right: auto; text-align: center;}.agency .a--noHighlight:hover,.agency .a--noHighlight:active {text-decoration: none;}.agency .p--small {font-family: neue-haas-unica, helvetica, arial, sans-serif;font-size: 18px;font-stretch: normal; font-style: normal;font-variant: normal;line-height:1.5em;}</style><div class="agency grid__unit--100 searchOffer"><div class="webModInner" style="margin-bottom:0;"><div class="div__html--static" style="background-color:#fff;"><div style="padding:1px 0;"><a href="
```
#### u_ad_html_02

This field contains the `href` attribute, Omniture tag, and the `title` attribute for the anchor tag. These values change depending of the offer.

```html
xxxx_LINK_URL_xxxx?cm_sp=xxxx_OMNITURE_TAG_xxxx" title="Shop our selection of xxxx_ITEM_NAME_xxxx
```

##### Example
```html
/non-contact-infrared-thermometer-jxb-178/cbs/55381373.html?cm_sp=W20_06_980_DYNTSTDA0608" title="Shop our selection of Non-Contact Infrared Thermometers
```

#### u_ad_html_03

This field has more of the `HTML` necessary for the ad to render correctly. __This field should not be edited.__

```html
" class="a--noHighlight"><div class="align--center" style="width:80%;"><p class="p--small" style="color:#e4002b;font-weight:500;margin:10px 0;padding-bottom:0;">
```

#### u_ad_html_04
This field holds the offer text for the ad. The item name changes depending on the offer.

```html
xxxx_ITEM_NAME_xxxx now available.
```

##### Example
```html
Non-Contact Infrared Thermometers now available.
```

#### u_ad_html_05

The final field finishes off the `HTML` of the dynamic dynamic alley. __This field should not be edited.__

```html
<span style="color:#333;margin-left:10px;text-decoration:underline;">Shop Now</span></p></div></a></div></div></div></div>
```

## GMP (Genesis Management Portal)

The [GMP](http://gmp-quill.quillcorp.com/) houses the dashboard we use to update offer codes in real time. Offer codes update overnight automatically, but if you want one to update before that, the GMP has the tools to do so. Why it is called "Genesis Management Portal" is a story too long to tell here. :)

To access the dashboard to post offer codes to production find the __"CSR"__ drop down menu and select __"Sync Offer Code (Pull from Backend)".__

On the page headed "Update Offer Code Content" you will be able to update offer codes. Type or paste the offer code you want to update into the "Enter Adcore Offer Code:" field and click the "Search" button. ___Do not include any spaces. These can cause issue with finding and updating offer codes.___

If the offer code exists, it will load a table with all of the offer code fields and their values. Below that are two buttonsL "Back" and "Update Offer Code."

The "Back" button takes you back to the GMP home page. The "Update Offer Code" is the button you need to press to post the offer code content to the staging server. This can take a while. ___Don't click anything until the process finishes, and the page reloads.___ You will know it was successful if the is a line of text, in red, above the "Enter Adcore Offer Code:" field that reads: "Offer Code Content Successfully Updated."

The data has now been pushed to the staging server. To copy it to all of the Quill.com and QuillConnect servers you need to continue to step 2: "Update / Refresh data on each server."

Under the "Back" and "Update Offer Code" buttons is the "STEP 2 / 2" section, a vertical checklist of all of the Quill servers. If you want to push an update to an individual server you can click the check box next to it. More likely you will want to select all of the servers. To do that without having to manually click each one, scroll to the bottom of the list and check the "Select All" box.

Click the "Update Server" button and you are done. As each server is updated you will see, in green, the text "Success" appear next to it.

If you have any questions please reach out to the Agency Development Team: [Seyi Owolabi](mailto:seyi.owolabi@quill.com) and [Andy Edmonds](mailto:andrew.edmonds@quill.com).



