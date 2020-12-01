# Daily omniture tag error report email
_last updated 10/5/20_

For anyone that doesn't know what the _Quill: Daily Omniture Tag Error Report_ email is all about, here's a refresher.
 
Every day ADCore runs through all of the offer codes and checks to see that the offer code in the tracking data matches the offer code it is part of.
 
To use today's report as an example:

xxx


The Offer Code column is the offer code in question.  The U_Ad_Link_Url is a link from the offer code.  In the link above, everything after the question mark is the Omniture tag.  The Omniture tag is how we use Omniture to track clicks, etc. for web ads.
 
There are three ways to add the Omniture tag to a link in an offer code:
* Save an offer code in ADCore which will add it automatically (most common)
* Click the button on the far right of the link field in ADCore before saving
* Type or paste a custom Omniture tag directly
 
The third method is what causes problems.  If you copy a link from one offer code and paste it into another you will bring the Omniture tag with it if you aren't careful.  If you do, tracking for the offer code you are building will be attributed to the offer code you copied the link from.
 
To avoid this, don't copy the Omniture tags from one offer code to another.
 
In the example above the link for W20_10_968_SSNLFCAT prior to saving it should have been /custom-holiday/cbc/1205.html. 
 
As a rule of thumb, anything after the question mark shouldn't be copied into ADCore.  Exceptions include nbss, search result, and effort-specific links.  When in doubt please ask.
 
Specifically, never copy ?cm_sp=W19_09_003_CPBN (where W19_09_003_CPBN is any offer code) into an ADCore field.

Links should also not include https://www.quill.com in them.  This causes issues with cart contents.  Let me know if you want more information on this.
 
Hope that helps.  Let me know if you have any questions.


