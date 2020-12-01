# Custom Lists
_Last updated 7/29/19_

Many of our ADCore-based templates include data pulled from back-end databases. We use custom lists to do that.

## The `CarouselDynTemplate()` Script
The `CarouselDynTemplate()` script is the tool we use to grab dynamic data from the back-end. It accepts an [array](https://developer.mozilla.org/en-US/docs/Glossary/array) of values that control how the dynamic data is rendered.

### Elements
The values in the [array](https://developer.mozilla.org/en-US/docs/Glossary/array) passed to the `CarouselDynTemplate()` script are organized in a specific order. Below is an example of the script with explanations of each element.

```javascript
CarouselDynTemplate(['Element 1','Element 2','Element 3','Element 4','Element 5','Element 6','Element 7','Element 8','Element 9'])
```

#### Element 1 &ndash; Dynamic List Name or ID
Unique value which defines what it will render. This is left blank. The custom list that `CarouselDynTemplate()` renders is assigned in CMS by the Web Specialist.

#### Element 2 &ndash; Data Type
Data type (always 0).

#### Element 3 &ndash; Number of Items
items displayed per pane
6

#### Element 4 &ndash; Display Type
0 = carousel, 1 = carousel with pictures only, 3 = inline list, 9 = hot deals page

#### Element 5 &ndash; Maximum Number of Items
maximum items to be displayed (optional), if you want to restrict the number of items returned by the list.
50

#### Element 6 &ndash; ?

#### Element 7 &ndash; Sort Option
display sorting dropdown (0 = no dropdown, 1 = display dropdown)

#### Element 8 &ndash; Accordion Collapse
accordion open default (0 = list open, 1 = only first row visible)

#### Element 9 &ndash; Enable Accordion
enable accordion default (0 = no accordion, 1 = display accordion)


custom_list_css: width:100%;