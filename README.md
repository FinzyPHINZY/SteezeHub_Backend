# Steezehub Backend

## Description

Steezehub is an online store that handles user authentication, cart operations, product uploads by admins, and fetches available products from the database. The backend is built using Node.js, Express, and MongoDB, following the MVC architecture.

The frontend code for Steezehub can be found [here](https://github.com/FinzyPHINZY/SteezeHub).

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/FinzyPHINZY/SteezeHub_Backend.git
   cd SteezeHub_Backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `config` directory with the following variables:

   ```plaintext
   DATABASE_URI=your_mongodb_uri
   PORT=8080
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:8080`.

## Usage

### Running the Server

To start the server, use:

```bash
npm start
```

### API Endpoints

#### Home Routes

- **Homepage**

  - `GET /`
  - **Description**: Renders the homepage.

- **Sign In**

  - `POST /login`
  - **Description**: User login.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "userpassword"
    }
    ```
  - **Response**: JSON with authentication token.

- **Sign Up**
  - `POST /signup`
  - **Description**: User registration.
  - **Request Body**:
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "userpassword"
    }
    ```
  - **Response**: JSON with authentication token.

#### Product Routes

- **Fetch All Products**

  - `GET /product/`
  - **Description**: Fetches all products from the database.

- **Fetch New Collections**

  - `GET /product/newcollections`
  - **Description**: Fetches the latest collections.

- **Fetch Popular Products for Women**

  - `GET /product/popularwomen`
  - **Description**: Fetches popular products in the women category.

- **Get Cart Data**

  - `POST /product/getcart`
  - **Description**: Retrieves cart data for the logged-in user.
  - **Request Body**: None
  - **Response**: JSON with cart data.

- **Add Product to Cart**

  - `POST /product/addtocart`
  - **Description**: Adds a product to the user's cart.
  - **Request Body**:
    ```json
    {
      "itemId": "product_id"
    }
    ```
  - **Response**: JSON indicating success.

- **Remove Product from Cart**

  - `POST /product/removefromcart`
  - **Description**: Removes a product from the user's cart.
  - **Request Body**:
    ```json
    {
      "itemId": "product_id"
    }
    ```
  - **Response**: JSON indicating success.

- **Add Product**

  - `POST /product/addProduct`
  - **Description**: Adds a new product to the database (Admin only).
  - **Request Body**:
    ```json
    {
      "name": "Product Name",
      "image": "Product Image URL",
      "category": "Product Category",
      "new_price": "New Price",
      "old_price": "Old Price"
    }
    ```
  - **Response**: JSON indicating success.

- **Remove Product**
  - `POST /product/removeProduct`
  - **Description**: Removes a product from the database (Admin only).
  - **Request Body**:
    ```json
    {
      "id": "product_id"
    }
    ```
  - **Response**: JSON indicating success.

#### Upload Routes

- **Upload Product Image**
  - `POST /upload`
  - **Description**: Uploads an image for a product.
  - **Request**: Multipart/form-data with a single file field named `product`.
  - **Response**: JSON with the URL of the uploaded image.

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **EJS**
- **JWT (JsonWebToken)**
- **Multer**
- **Cloudinary**
- **dotenv**

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
