var flg=0;
function myFunc(value) {
  //  alert("Added to cart");
      var urldata = [
          {
      "id": 1,
      "name": "Adult Male Bike",
      "price": 20.50,
      "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
      "product_type": "bike"
    },
    {
      "id": 2,
      "name": "Adult Female Bike",
      "price": 20.50,
      "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      "product_type": "bike"
    },
    {
      "id": 3,
      "name": "Kids Unisex Bike",
      "price": 12.75,
      "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
      "product_type": "bike"
    },
    {
      "id": 4,
      "name": "Adult Unisex Helmet",
      "price": 4.00,
      "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
      "product_type": "accessory"
    },
    {
      "id": 5,
      "name": "Kids Unisex Helmet",
      "price": 3.50,
      "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      "product_type": "accessory"
    },
    {
      "id": 6,
      "name": "Insurance",
      "price": 9.99,
      "image": "http://via.placeholder.com/250x250?text=Insurance",
      "product_type": "addon"
    }
    ];
    
   
        switch(value)
         {
             case 0:i=0;
                 break;
             case 1:i=1;
                 break;
             case 2:i=2;
                 break;
             case 3:i=3;
                 break;
             case 4:i=4;
                 break;
             case 5:i=5;
                 break;
             case 6:i=6;
                 break;
         }
  var table = document.getElementById("carttable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);   
 // cell1.innerHTML = document.getElementById(id6).value;
  cell1.innerHTML=urldata[i].id;
  cell2.innerHTML =urldata[i].name;
  cell3.innerHTML =urldata[i].price;
  cell4.innerHTML =urldata[i].product_type;
    var str1=cell4.innerHTML;
    var str2="bike";
    
    if(str1==str2)
        {
            flg=1;
        }
}
function validate()
{
    if(flg==0)
        {
            alert("select atleast one bike");
        }else{
            alert("Rented successfully");
            window.location.href = "index.html";
        }
    
}