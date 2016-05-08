# jQuery.Validate unobtrusive extensions
Exetnsions to the [jquery.validate.unobtrusive library](https://github.com/aspnet/jquery-validation-unobtrusive) that prvides:
1. Globalization support to both format verification, min, max, and range validation rules
2. range, min, max are enhanced to work aith all inputs(number, date, time, datetime, weak, month).
3. Enhancement of inputs with validation rules is applied easily to dynamically generated Html
4. Format validation of positive integers, integers, floats, dates, datetimes, time, weeks, months, and colours.
5. Dynamic range validation where the validated input value (number, date, time, datetime, weak, month) must fall inside
a list of inputs defining minimum values and a list of inputs defining maximum values.

Points 1 and 2 relies on the [mvcct.enhancer](https://github.com/MvcControlsToolkit/mvcct-enhancer) library and on the 
[Globalize](https://github.com/jquery/globalize) library. So please refers to the [mvcct.enhancer](https://github.com/MvcControlsToolkit/mvcct-enhancer) 
documentation about how to apply validation also to dynamic Html. Please notice also that both the Globalize library and the mvcct.enhancer.basic.input optional module
must be loaded and registred for this library to work properly.

This module has been designed to work with Asp.net core Mvc and with the [Mvc Controls Tollkit Core version](https://github.com/MvcControlsToolkit/MvcControlsToolkit.Core) that 
fill autoamtically all validation data- attributes based on .Net property validation attributes. 
However, it can be used with any server technology if all needed data- attributes are somehow inserted 
in the input fields.

**jquery-validation-unobtrusive-extensions is available both on bower and npm** 

## Validation rules

All rules work both with Html5 inputs whose value format is international ISO, and falled back inputs 
working with current locale formats. The mvcct.enhancer fallback module takes care of not supported input 
fallback.

### Range extension
In order to have range, min, max support globalization and work with all types new validation rules have been defined,
namely: `rangeE`, `minE`, `maxE`.
Parameters names are: `min`, `max`. Thus accordingly, associated attributes are `data-rangeE-min`, `data-minE-min`, etc.
`min`, `max` must contain data in international iso format.

### Dynamic range
Rule name is: rdranger.
Parameters names are: `dmins`, `dminds`, `dmaxs`, and `dmaxds`, `go`. Thus, accordingly, associated attributes are `data-drange-dmins`, `data-drange-dmaxs`, etc.

`dmins`, and `dmax` are the space separated lists of the input names that define all minimum and maximum 
constraints(`"minInput1 minInput2",..`).

`dminds` and `dmaxd`s are the space separated lists of all margins between mins and maxs and the controlled value.
For instance if `dminds="2 4"`, then the controlled value must have a distance of `2` from `minInput1`, and of `4` from `minInput2`.
All dates/times related delays are expressed in milliseconds, and all numbers are expressed in international ISO format.

`go` is a parameter that if set to `true`(ie `data-drange-go='true'`), instead of causing a validation error
let the controlled value be change to remain in the allowed range. This feature exploits the mvcct.enhancer dependency propagation module.

### Correct type format rule.
Rule name is: `correcttype`
Unique parameter name is: `type`. Thus, associated attribute is `data-correcttype-type`.

`type` contains a number between `0` and `8` that encodes the type:
0 free format, 1 positive integer, 2 integer, 3 float, 4 time, 5 date, 6 datetime, 7 week, 8 month.




