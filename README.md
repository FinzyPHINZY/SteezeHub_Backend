### SteezeHub Backend API Documentation

#### Base URL

```
http://localhost:3000/api
```

### Endpoints

#### 1. List All Products

**Endpoint:** `/products`  
**Method:** `GET`  
**Description:** Retrieves a list of all products.

**Response:**

```json
[
  {
    "id": "1",
    "title": "Men's Casual Shirt",
    "category": "men",
    "old_price": 30.0,
    "new_price": 25.0
  },
  {
    "id": "2",
    "title": "Women's Summer Dress",
    "category": "women",
    "old_price": 45.0,
    "new_price": 40.0
  }
  // more products
]
```

#### 2. Get Product by ID

**Endpoint:** `/products/{id}`  
**Method:** `GET`  
**Description:** Retrieves details of a product by its ID.

**Parameters:**

- `id` (string, required): The ID of the product.

**Response:**

```json
{
  "id": "1",
  "title": "Men's Casual Shirt",
  "category": "men",
  "old_price": 30.0,
  "new_price": 25.0
}
```

#### 3. Create a New Product

**Endpoint:** `/products`  
**Method:** `POST`  
**Description:** Creates a new product.

**Request Body:**

```json
{
  "title": "New Product",
  "category": "men",
  "old_price": 50.0,
  "new_price": 45.0
}
```

**Response:**

```json
{
  "id": "3",
  "title": "New Product",
  "category": "men",
  "old_price": 50.0,
  "new_price": 45.0,
  "message": "Product created successfully"
}
```

#### 4. Update an Existing Product

**Endpoint:** `/products/{id}`  
**Method:** `PUT`  
**Description:** Updates an existing product.

**Parameters:**

- `id` (string, required): The ID of the product.

**Request Body:**

```json
{
  "title": "Updated Product",
  "category": "women",
  "old_price": 60.0,
  "new_price": 55.0
}
```

**Response:**

```json
{
  "id": "3",
  "title": "Updated Product",
  "category": "women",
  "old_price": 60.0,
  "new_price": 55.0,
  "message": "Product updated successfully"
}
```

#### 5. Delete a Product

**Endpoint:** `/products/{id}`  
**Method:** `DELETE`  
**Description:** Deletes a product by its ID.

**Parameters:**

- `id` (string, required): The ID of the product.

**Response:**

```json
{
  "id": "3",
  "message": "Product deleted successfully"
}
```

### Error Responses

**4xx Client Errors:**

- `400 Bad Request`: The request could not be understood or was missing required parameters.
- `404 Not Found`: The requested resource could not be found.
- `422 Unprocessable Entity`: Validation failed for the request data.

**5xx Server Errors:**

- `500 Internal Server Error`: An error occurred on the server.

### Example Requests

#### List All Products

```sh
curl -X GET http://localhost:3000/api/products
```

#### Get Product by ID

```sh
curl -X GET http://localhost:3000/api/products/1
```

#### Create a New Product

```sh
curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{
  "title": "New Product",
  "category": "men",
  "old_price": 50.00,
  "new_price": 45.00
}'
```

#### Update an Existing Product

```sh
curl -X PUT http://localhost:3000/api/products/3 -H "Content-Type: application/json" -d '{
  "title": "Updated Product",
  "category": "women",
  "old_price": 60.00,
  "new_price": 55.00
}'
```

#### Delete a Product

```sh
curl -X DELETE http://localhost:3000/api/products/3
```
