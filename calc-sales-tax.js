
// object of keys with tax values
var salesTaxRates = {
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

function calculateSalesTax(companySalesData, salesTaxRate) {

}

function totalSalesPerCompany() {
  var sales = [];

  for (var i = 0; i < companySalesData.length; i++) {
    sales = companySalesData[i].sales;
    console.log(sumSales(sales));
  };
};


function sumSales(salesArray) {
  var sum = 0;
  for (var i = 0; i < salesArray.length; i++) {
    sum += salesArray[i];
  };
  return sum;
};



/*
  function calculateSalesTax(salesData, taxRates) {
  companiesWithTotalSales = calculateSalesPerCompany(salesData)
  companiesWithTotalSalesAndTaxes = calculateSalesTaxes(companiesWithTotalSales, taxRates)
  sumSalesDataOverProvinces(companiesWithTotalSalesAndTaxes)
}

function calculateSalesPerCompany(salesData) {
  //loop or map through each company
    //for this company run sum on the 'sales'element
  //oupput
}

//var results = calculateSalesTax(companySalesData, salesTaxRates);

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
