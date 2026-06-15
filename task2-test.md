# TASK 2 — Automated Testing Scenarios

---

## Add Item (Valid Data)

### Steps

- Open the application.
- Enter name, description, mobile number and category.
- Click Add Item.

### Expected Result

- Item is saved successfully.
- Item appears in the list.
- Mobile information is stored correctly.

---

## Add Item (Required Fields Missing)

### Steps

- Leave name or description empty.
- Click Add Item.

### Expected Result

- Validation error is displayed.
- Item is not saved.

---

## Add Item (Invalid Mobile Number)

### Steps

- Enter an invalid mobile number.
- Click Add Item.

### Expected Result

- Mobile validation fails.
- Error message is displayed.
- Item is not saved.

---

## Add Item (Empty Mobile Number)

### Steps

- Leave the mobile number empty.
- Fill the required fields.
- Click Add Item.

### Expected Result

- Item is saved successfully.
- Mobile number is null or empty.
- Country code, country name and operator name remain empty.

---

## Update Item

### Steps

- Click Edit.
- Modify item information.
- Click Update.

### Expected Result

- Item is updated successfully.
- If the mobile number is valid, mobile information is updated.
- If the mobile number is invalid, an error message is returned.
- Required fields cannot be empty.

---

## Delete Item

### Steps

- Click Delete.

### Expected Result

- Item is removed from the database.
- Item disappears from the UI.

---

## Get All Items

### Steps

- Open the application.

### Expected Result

- All items are displayed successfully.

---

## Mobile Validation Service

### Steps

- Send a mobile number to the validation API.

### Expected Result

- Valid numbers return:
  - Country Code
  - Country Name
  - Operator Name
- Invalid numbers return an error.

---

## Add Category

### Steps

- Enter a category name.
- Click Add Category.

### Expected Result

- Category is saved successfully.
- Category appears in the categories list.
- Category becomes available in the item dropdown.

---

## Get All Categories

### Steps

- Open the application.

### Expected Result

- All categories are loaded successfully.

---

## Delete a specific category
### Steps

- Give category id.

### Expected Result

- If id exists deleted successfully.
- Else category not found.

## Delete all categories
### Steps

- Delete

### Expected Result

- All categories are deleted successfully.

## Add Item with Category

### Steps

- Select a category.
- Enter item information.
- Click Add Item.

### Expected Result

- Item is saved successfully.
- The selected category is linked to the item.
- The category name is displayed in the item list.

---

