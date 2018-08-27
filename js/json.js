function jsonFetch(obj, term){
	/* 	recursive function that searches json object/array for given value
			parameters:
				obj/array: object to be searched
				term: term to be searched for
			returns: object or array containing term | undefined
	*/
	var result;
	$.each(obj, function(index, value){	// go through each element of object or array
		if(Array.isArray(value) || typeof value === 'object'){	// if element contains an array or an object
			result = jsonFetch(value, term);	// call this function passing the array or object
			if(result) return false;	// if data returned break loop
		} else {
			if(value === term){	// if element value matched search term
				result = obj;	// add data to result variable
			}
		}
	});
	return result;	// return data
}
function jsonLoad(fileUrl, callback){
	/* 	loads json file and adds it to array of loaded json
		parameters:
			fileUrl: url of json file to load
			callback: function to call after successful load
			additional undeclared parameters for callback
	*/
	var data = jsonFetch(objBank, fileUrl),	// call jsonFetch to see if json already loaded
		args = Array.prototype.slice.call(arguments).splice(2);	// copy undeclared parameters to pass to callback function
	if(data){	// if json already loaded
        console.log('json already loaded');
		callback(data.obj, args);	// call callback function passing json object and undeclared parameters
	} else {
		$.ajax({ // load json
            url: fileUrl,
            dataType: 'json',
            success: function(data){	// if json load succeeds
            	console.log('json loaded');
				objBank.push({'url':fileUrl, 'obj':data});	// add json to objBank
				if(typeof callback === 'function'){	// if callback is a function
					callback(data, args);	// call callback function passing json object and undeclared parameters
				}
            },
            error: function(jqXHR, textStatus, errorThrown){	// is json load fails
            	console.log('json failed to load');
                alert('Error: ' + textStatus + ' - ' + errorThrown);	// alert message
            }
        });
	}
}