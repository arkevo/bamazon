# bamazon-app

**Creator**: `Ivo Kolev`

**Created on**: `Jan 25th 2020`

- - -

## ABOUT THE APP
The app will take in orders from customers and deplete stock from the store's inventory.

- - -
## HOW TO USE bamazon

1. When you run the application, it will display all of the items available for sale:
    ![Results](/screenshots/pic1.PNG)

2. Then it inquires:
    - Enter the ID of the product you would like to buy:
    - How many units would you like to buy?

If there’s not enough in stock then you’ll get an “Sold Out!” message:
    ![Results](/screenshots/pic3.PNG)

If there is enough in stock, the stock quantity is updated in the table and user is presented
how much they owe:
    ![Results](/screenshots/pic1.PNG)

### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Run the `spotifySearch` command
    
        node liri.js spotifysearch <name of song>
    
    Output: The system will display a list of information associated with the song. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/screenshots/spotifysearch.PNG)

- - -

## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * mysql
    * inquirer
    * cli-table
* Git
* GitHub