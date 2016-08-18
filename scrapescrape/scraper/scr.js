var Xray 	= require('x-ray');
var x 		= Xray();

x('http://toronto.craigslist.ca/search/tor/mis', '#sortable-results .rows .row .txt .pl', [{

  title: '#titletextonly',
  details: x('a@href', '#postingbody')

}])

.paginate('a.button.next@href')
.limit(15)
.write('results.txt')