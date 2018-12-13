# SDS Scripts
_Last updated 12/12/18_

## Custom list
`<$= CarouselDynTemplate(['$%dynamic_list_id%$','0','$%custom_list_numb_items%$','$%custom_list_display_type%$','$%custom_list_numb_items_max%$','','$%custom_list_accordion_sort%$','$%custom_list_accordion_state%$']) $>`

### Element 1
`$%dynamic_list_id%$`
Unique value which defines what custom list it will render. This field is left blank.

### Element 2
`0`
This element represents the data type. It is not  (always 0)

### Element 3
`$%custom_list_numb_items%$`
items per page

### Element 4
`$%custom_list_display_type%$`
display type (0 = default, 1 = dynamic list with pictures only, 3 = 
inline list)

### Element 5
`$%custom_list_numb_items_max%$`
maximum items to be displayed (optional), if you want to restrict the 
number of items returned by the list.

### Element 6

### Element 7
`$%custom_list_sort_option%$`


### Element 8
`0`
accordion default (0 = list open, 1 = only first row visible)