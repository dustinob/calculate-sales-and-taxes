
// object of keys with tax values
var salesTaxRates = {
  //key: value
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

// array of objects with company name, province and sales numbers
var companySalesData = [

  //object
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]  // BC Tax Rate
  },

  //object
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ] // Alberta tax rate
  },

  //object
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ] // Saskatchewana tax rate
  }
];

// Goal is calculate: total sales & total tax grouped by company.
function calculateSalesTax(salesData, taxRates) {
  var result = {};

  for(var i = 0; i < salesData.length; i++) {
    var name = salesData[i].name;
    var totalSales = sumSales(salesData[i].sales)

    if(result[name] === undefined) {
      result[name] = {
        totalSales: 0,
        totalTaxes: 0
      };
    }

    result[name].totalSales += totalSales;
    result[name].totalTaxes += totalSales * taxRates[salesData[i].province];
  }

  return result;
}

// sums all sales
function sumSales(salesArray) {
  var sum = 0;
  for (var i = 0; i < salesArray.length; i++) {
    sum += salesArray[i];
  };
  return sum;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));


/* Expected Results:

{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
