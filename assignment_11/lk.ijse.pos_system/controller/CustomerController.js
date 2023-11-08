import {CustomerModel} from "../model/CustomerModel.js";
import {customer_db} from "../db/db.js";


var row_index = null;
const clear = () => {
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#contactNo").val("");
}
const loadStudentData = () => {
    $('#customer-tbl-body').empty();
    customer_db.map((item, ) =>{
        let record = `<tr><td class="customer_id">${item.customer_id}</td><td class="customer_name">${item.customer_name}</td><td class="customer_address">${item.customer_address}</td><td class="customer_contact">${item.customer_contact}</td></tr>`;
        $('#customer-tbl-body').append(record);
    });
}
// submit
$("#customerButton>button[type='button']").eq(0).on("click", () =>{
    let customer_id = $("#customerId").val();
    let customer_name = $("#customerName").val();
    let customer_address = $("#customerAddress").val();
    let customer_contact = $("#contactNo").val();

    console.log(customer_id,customer_name);

    let customer_obj = new CustomerModel(customer_id,customer_name,customer_address,customer_contact);

    customer_db.push(customer_obj);

    loadStudentData();

    clear();

})

//update
$("#customerButton>button[type='button']").eq(1).on("click", () =>{
    let customer_id = $("#customerId").val();
    let customer_name = $("#customerName").val();
    let customer_address = $("#customerAddress").val();
    let customer_contact = $("#contactNo").val();

    let customer_obj = new CustomerModel(customer_id,customer_name,customer_address,customer_contact);

    let index = customer_db.findIndex(item => item.customer_id === customer_id);

    customer_db[index] = customer_obj;

    loadStudentData();

    clear();
})

//delete
$("#customerButton>button[type='button']").eq(2).on("click", () =>{
    let customer_id = $("#customerId").val();

    let index = customer_db.findIndex(item => item.customer_id === customer_id);

    customer_db.splice(index, 1);

    loadStudentData();

    clear();
})
$("#customer-tbl-body").on("click", "tr", function () {
    row_index = $(this).index();

    let customer_id = $(this).find(".customer_id").text();
    let customer_name = $(this).find(".customer_name").text();
    let customer_address = $(this).find(".customer_address").text();
    let customer_contact = $(this).find(".customer_contact").text();

    $("#customerId").val(customer_id);
    $('#customerName').val(customer_name);
    $('#customerAddress').val(customer_address);
    $('#contactNo').val(customer_contact);
})