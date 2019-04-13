import models from '../models';
import mocks from '../mocks';


function formatAndInsert(model, arr) {
    arr.forEach(data => {
        model.update(
            { _id: data._id },
			{ $setOnInsert: data },
			{ upsert: true })
    })
}

export default function fillInDB() {
    formatAndInsert(models.Product, mocks.products);
	formatAndInsert(models.User, mocks.users);
	formatAndInsert(models.City, mocks.cities);
}