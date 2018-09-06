// ROCEDate
jQuery.validator.addMethod("ROCEDate", function(value, element, param) {
	var value = $.trim(value);
	var valueList = value.split(new RegExp('/'));
	if (valueList.length != 3 ) { return false; }
	for (i = 0; i < valueList.length; i++) {
		if (!valueList[i]) { return false; }
	}
	valueList[0] = Number(valueList[0]) + 1911;
	var convertToCEDate = valueList.join('/');
	return !/Invalid|NaN/.test(new Date(convertToCEDate));
}, "${dateValidYYYMMDD}");