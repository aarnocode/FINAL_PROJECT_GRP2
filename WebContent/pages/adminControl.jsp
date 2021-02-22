<div class="row">
    <div id="pnlControl"class="col-lg-2">
      <input id="btnAddProduct" type="button" value="Add Product">
      <input id="btnUpdateProduct" type="button" value="Update Product">
    </div>
    <div id="pnlContentAdd" class="col-lg-10">
    <h2>Add Product</h2><br>
    <label>Product Name</label><br>
    <input type="text" placeholder="Product Name"><br>
    <label>Price</label><br>
    <input type="text" placeholder="Price"><br>
    <label>Stock</label><br>
    <input type="text" placeholder="Stock"><br>
    <label>Image link</label><br>
    <input type="text" placeholder="link?"><br>
    <input type="button" value="Add Product">
    </div>
    <div id="pnlContentUpdate" class="col-lg-10">
    <h2>Update Product</h2>
    </div>
</div>
<style>
input[type=button]{
	border:0px;
	background-color: white;
	margin:1em;
}

#pnlControl {
	border-right:1px solid black;
}
</style>
<script href="js/adminControlScript.js"></script>"