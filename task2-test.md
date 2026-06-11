# TASK 2 — Automated Testing Scenarios

---

## Add Item (Valid Data)

### Steps:
- Open application
- Enter name, description, and mobile number
- Click Add Item

### Expected Result:
- Item is saved in database
- Item appears in the list immediately

---

## Add Item (With at least 1 field is empty name or description)

### Steps:
-click add item

### Expected Result:

- fields are required

---

## Add Item (Invalid Mobile Number)

### Steps:
- Enter invalid mobile number
- Submit form

### Expected Result:
- Backend calls mobile validation microservice
- API returns invalid mobile number
- Item is not saved or warning is shown

## Add Item (Invalid Mobile Number)

### Steps:
- Enter empty mobile number
- Submit form

### Expected Result:
- item saved with mobilenumber null,countrycode,countryname and operatorname are empty


---

##  Update Item

### Steps:
- Click Edit on an item
- Modify data in form
- Click Update

### Expected Result:
- check if mobile is valid :
- Item is updated in database
- UI refreshes automatically with new data
- if not valid mobile number is not valid
- if one field name or description are empty return name and description are required

---

## Delete Item

### Steps:
- Click Delete button on an item

### Expected Result:
- Item is removed from database
- Item disappears from UI immediately

---

## Get All Items

### Steps:
- Open application

### Expected Result:
- All items from database are displayed on screen

---





### Mobile Validation Microservice

### Steps:
- Send mobile number to validation API

### Expected Result:
- API returns:
  - countryCode
  - countryName
  - operatorName

- If number is invalid:
  - Error response is returned