/* 

HOT DEALS NAV BAR

v.1.0	7/28/16	Andy Edmonds
v.1.1	10/31/16	Andy Edmonds
v.1.2	2/2/17	Andy Edmonds
v.1.3	6/29/17	Andy Edmonds - added menuTabUrl for free gifts. remove after test
v.1.4	1/12/18	Andy Edmonds
v.1.5	4/4/18	Andy Edmonds

*/

var navBar = {
	"scType" : "scLink",
	"items" : [
		{
			"menuTabText" : "Hot Deals",
			"menuTabUrl" : "/daily-deals/cbx/35.html",
			"menuDropDown" : ""
		},
		{
			"menuTabText" : "Coupons",
			"menuTabUrl" : "/coupon-codes/cbx/327.html",
			"menuDropDown" : ""
		},
		{
			"menuTabText" : "Free Gifts",
			"menuTabUrl" : "/coupon-codes/cbx/327.html",
			"menuDropDown" : ""
		},
		{
			"menuTabText" : "Clearance",
			"menuTabUrl" : "/clearance-deals/cbx/36.html",
			"menuDropDown" : ""
		},
		{
			"menuTabText" : "Bulk Center",
			"menuTabUrl" : "/content/index/buy-in-bulk/default.cshtml",
			"menuDropDown" : ""
		},
		{
			"menuTabText" : "Quill Family of Brands",
			"menuTabUrl" : "/quill-guaranteed-brands/cbx/344.html",
			"menuDropDown" : [
				{
					"menuItemText" : "Quill Brand",
					"menuItemUrl" : "/quill-office-supplies/cbx/343.html"
				},
				{
					"menuItemText" : "Brighton Professional",
					"menuItemUrl" : "/brighton-professional/cbx/345.html"
				},
				{
					"menuItemText" : "Medical Arts Press",
					"menuItemUrl" : "/medical-arts-press/cbx/161.html"
				}
			]
		}
	]
}