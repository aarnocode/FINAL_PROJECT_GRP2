<div class="loginPop">
     		<h3>${resultMessage}</h3>
		</div>
		<div class="row">
		    <div id="pnlControl"class="col-lg-2 bg-light">
		      <input id="btnAddProduct" type="button" value="Add Product" class="bg-light"><br>
		      <input id="btnUpdateProduct" type="button" value="Update Product" class="bg-light"><br>
		      <input id="btnLogout" type="button" value="Logout" class="bg-light">
		    </div>
		    <div id="pnlContentAdd" class="col-lg-10">
			    <h2>Add Product</h2><br>
			    <div class="row">
			    	<div class="col-lg-4 ms-4">
				    	<label>Product Name</label><label id="warnNameAdd" class="warn"></label><br>
				    	<input id="txtAddName" type="text" placeholder="Product Name" maxlength="50" class="mb-2"><br>
				    	<label>Category</label><label id="warnCategoryAdd" class="warn"></label><br>
			    		<input id="txtAddCategory" type="text" placeholder="Category"  maxlength="50" class="mb-2"><br>
			    		<label>Price</label><label id="warnPriceAdd" class="warn" ></label><br>
			    		<input id="txtAddPrice" type="number" placeholder="Price" maxlength="12" class="mb-2"><br>
			    		<label>Stock</label><label id="warnStockAdd" class="warn"></label><br>
			    		<input id="txtAddStock" type="number" placeholder="Stock" maxlength="6" class="mb-2"><br>
			    		<input id="btnAdd" type="button" value="Add Product">
			    	</div>
			    	<div class="col-lg-6">
				    	<label>Description</label><label id="warnDescAdd" class="warn"></label><br>
				    	<input id="txtAddDescription" type="text" placeholder="description" maxlength="500" class="mb-2"><br>
				    	<label>Image link</label><label id="warnImageAdd" class="warn"></label><br>
			   			<input id="txtAddImage" type="text" placeholder="link?" maxlength="500" class="mb-2"><br>
			    	</div>
			    </div>
		    </div>
		    <div id="pnlContentUpdate" class="col-lg-10">
			    <h2>Update Product</h2>
			    <div class="ms-4">
				    <h4>Search a product:</h4>
				    <select id="selSearchOption">
				    	<option value="byID">By ID</option>
				    	<option value="byName">By Name</option>
				    </select>
				    <input id="txtSearchValue" type="text" placeholder="values">
				    <input id="btnSearch" type="button" value="Search"><br>
			    </div>
			    
			    <div id="result" class="ms-4">
			    	<label>Product ID: </label><label id="lblProductId">${product.getId()}</label><br>
			    	<label>Product Name</label><label id="warnName" class="warn"></label><br>
				    <input id="txtSearchName" class="mb-2" type="text" placeholder="Product Name" disabled="disabled" value="${product.getName()}"><br>
				    <label>Price</label><label id="warnPrice" class="warn"></label><br>
				    <input id="txtSearchPrice" class="mb-2" type="number" placeholder="Price" disabled="disabled" value="${product.getPrice()}"><br>
				    <label>Stock</label><label id="warnStock" class="warn"></label><br>
				    <input id="txtSearchStock" class="mb-2" type="number" placeholder="Stock" disabled="disabled" value="${product.getStock()}"><br>
				    <label>Image link</label><label id="warnImage" class="warn"></label><br>
				    <input id="txtSearchLink" class="mb-2" type="text" placeholder="link?" disabled="disabled" value="${product.getImage()}"><br>
				    <input id="btnUpdate" type="button" value="Update Product" disabled="disabled">
			    </div>
		    </div>
		</div>
<script src="../js/adminTabsScript.js"></script>