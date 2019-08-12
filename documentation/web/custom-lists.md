# Custom Lists
_Last updated 7/29/19_

Many of our ADCore-based templates include data pulled from back-end databases. We use custom lists to do that.

## The `CarouselDynTemplate()` Script
The `CarouselDynTemplate()` script is the tool we use to grab dynamic data from the back-end. It accepts an array of values that control how the dynamic data is rendered.

### Elements
In the 

```javascript
CarouselDynTemplate(['1','2','3','4','5','6','7','8','9'])
```

#### 1. Dynamic List Name or ID
Unique value which defines what it will render

#### 2. Data Type
Data type (always 0)

#### 3. Number of Items
items displayed per pane

#### 4. Display Type
0 = carousel, 1 = carousel with pictures only, 3 = inline list, 9 = hot deals page

#### 5. Maximum Number of Items
maximum items to be displayed (optional), if you want to restrict the number of items returned by the list.

#### 6. ?

#### 7. Sort Option
display sorting dropdown (0 = no dropdown, 1 = display dropdown)

#### 8. Accordion Collapse
accordion open default (0 = list open, 1 = only first row visible)

#### 9. Enable Accordion
enable accordion default (0 = no accordion, 1 = display accordion)
