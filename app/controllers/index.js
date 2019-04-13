import products from '../models/mockProducts';
import users from '../models/mockUsers';
import db from '../models';

function allProducts(request, response) {
	response.send(JSON.stringify(products));
};

function singleProduct(request, response) {
	const { id } = request.params;
	// if (!id) response.send('No product id provided');
	// const searchedProduct = product.filter((product) => product.id === id);
	// if (!searchedProduct.length) response.send('No products found with the given id');
    // response.send(JSON.stringify(searchedProduct));
    
	if (!id) response.send('Pass a product id');
	return db.productModel.findById(id)
		.then(product => response.json(product))
		.catch(error => response.status(400).send('No products found'));
};

function addProduct(request, response) {
	// products.push(request.body);
    // response.send(request.body);
    
    return db.productModel.create(request.body)
		.then(product => response.status(201).send(product))
		.catch(error => response.status(400).send(error));
};

function allUsers(request, response) {
	response.send(JSON.stringify(users));
};

export default { allProducts, singleProduct, addProduct, allUsers };