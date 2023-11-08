import {ItemModel} from "../model/ItemModel.js";
import {customer_db, item_db} from "../db/db.js";

var row_index = null;
$("#itemButton>button[type='button']").eq(0).on("click", () =>{
   let item_code = $("#itemId").val();
   let item_name = $("#itemName").val();
   let item_qty = $("#itemQty").val();
   let item_price = $("#itemPrice").val();

   let item_obj = new ItemModel(item_code,item_name,item_qty,item_price);

   item_db.push(item_obj);

    loadStudentData();

   clear();

});

const clear = () =>{
   $("#itemId").val("");
   $("#itemName").val("");
   $("#itemQty").val("");
   $("#itemPrice").val("");

}
const loadStudentData = () =>{
   $('#item_table_body').empty();
   item_db.map((item, ) =>{
      let record = `<tr><td class="item_code">${item.item_code}</td><td class="item_description">${item.item_description}</td>
      <td class="item_qty">${item.item_qty}</td><td class="item_price">${item.item_price}</td> `
      $('#item_table_body').append(record);
   });
}

$("#itemButton>button[type='button']").eq(1).on("click", () =>{
   let item_code = $("#itemId").val();
   let item_name = $("#itemName").val();
   let item_qty = $("#itemQty").val();
   let item_price = $("#itemPrice").val();

   let item_obj = new ItemModel(item_code,item_name,item_qty,item_price);

   let index = item_db.findIndex(item => item.item_code === item_code);

   item_db[index] = item_obj;

   loadStudentData();

   clear();

});

$("#itemButton>button[type='button']").eq(2).on("click", () => {
   let item_code = $("#itemId").val();

   let index = item_db.findIndex(item => item.item_code === item_code);

   item_db.splice(index,1);

   loadStudentData();

   clear();

})
$("#item_table_body").on("click","tr", function () {
   row_index = $(this).index();

   let item_id = $(this).find(".item_code").text();
   let item_description = $(this).find(".item_description").text();
   let item_qty = $(this).find(".item_qty").text();
   let item_price = $(this).find(".item_price").text();

   $("#itemId").val(item_id);
   $("#itemName").val(item_description);
   $("#itemQty").val(item_qty);
   $("#itemPrice").val(item_price);
})