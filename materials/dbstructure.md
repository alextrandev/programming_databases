# Multiple tables db

A sample bd structure using 3 tables to place order by connect product to customer

## Product table

| productId | name     | price |
| :-------- | :------- | ----: |
| 1         | computer |   200 |
| 2         | mouse    |    30 |

## Customer table

| customerId | name | address |
| :--------- | :--- | :-----: |
| 1          | Mary |   abc   |
| 2          | Matt |   def   |

## Order table

| orderId | customerId | productId |
| :------ | :--------- | :-------- |
| 1       | 1          | 1         |
| 2       | 2          | 1         |
