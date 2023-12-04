document.addEventListener("DOMContentLoaded", function() {
    //this array will store arrays of each meal for each week
    //each array represents a week and the data represents the meals the user inputs
    let meals = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ];

    document.getElementById("day").addEventListener("change", function(){
        const inputFields = document.querySelectorAll(".food");
        inputFields.forEach((inputBox, index) => {
            inputBox.value = meals[getDayNum()][index];
        });
    });

    //gathers the contents of all the data in the meal inputs
    const weeksMeals = document.querySelectorAll(".food");

    //function for adding the meals for the given day
    document.getElementById("add").addEventListener("click", function(){
        let count = 0;
        weeksMeals.forEach(food => {
            if (food.value === ""){
                meals[getDayNum()][count] = "nothing";
            }
            else{
                meals[getDayNum()][count] = food.value;
            }
            count += 1;
            });
        document.getElementById(document.getElementById("day").value).style.backgroundColor = "darkgreen";
        console.log(meals);
    });


    document.getElementById("clear").addEventListener("click", function(){
        meals = [
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
        ];
        document.getElementById("sunday").style.backgroundColor = "dimgray";
        document.getElementById("monday").style.backgroundColor = "dimgray";
        document.getElementById("tuesday").style.backgroundColor = "dimgray";
        document.getElementById("wednesday").style.backgroundColor = "dimgray";
        document.getElementById("thursday").style.backgroundColor = "dimgray";
        document.getElementById("friday").style.backgroundColor = "dimgray";
        document.getElementById("saturday").style.backgroundColor = "dimgray";
    });


    //this function returns the day number to tell which nested array to modify/read
    function getDayNum(){
        let dayNum = null;
        switch (document.getElementById("day").value){
            case "sunday":
                dayNum = 0;
                break;
            case "monday":
                dayNum = 1;
                break;
            case "tuesday":
                dayNum = 2;
                break;
            case "wednesday":
                dayNum = 3;
                break;
            case "thursday":
                dayNum = 4;
                break;
            case "friday":
                dayNum = 5;
                break;
            case "saturday":
                dayNum = 6;
                break;
        }
        return dayNum;
    }



    document.getElementById("submit").addEventListener("click", function(){
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        for (let i = 0; i < meals.length; i++) {
            // Iterate through each column in the row
            for (let j = 0; j < meals[i].length; j++) {
                if (meals[i][j] === "") {
                    meals[i][j] = "nothing"; // Replace empty string with "nothing"
                }
            }
        }
        
        mealPlan = window.open('', '_blank', 'width=600,height=400');
        mealPlan.document.write('<html><head><link rel="stylesheet" href="finalProject.css"><title>Final Project</title></head><body>');
        const username = document.getElementById("name").value;

        //header content display
        const headerContent = `
        <header>
        <table class="header-table">
            <tr>
                <td>Zachary Jones</td>
                <td>WEB-115</td>
                <td>Section 3</td>
            </tr>
            <tr>
                <td colspan="3"><h1>${username}'s Meal Plan</h1></td>
            </tr>
        </table>
         </header>
         `;
         mealPlan.document.write(headerContent);



        //meal plan display
        const tableContent = `
        <table class="meal-table">
        <tr>
            <td></td>
            <td>Breakfast</td>
            <td>Snack #1</td>
            <td>Lunch</td>
            <td>Snack #2</td>
            <td>Dinner</td>
        </tr>
        <tr id="sunday">
            <td>Sunday</td>
            <td>${meals[0][0]}</td>
            <td>${meals[0][1]}</td>
            <td>${meals[0][2]}</td>
            <td>${meals[0][3]}</td>
            <td>${meals[0][4]}</td>
        </tr>
        <tr id="monday">
            <td>Monday</td>
            <td>${meals[1][0]}</td>
            <td>${meals[1][1]}</td>
            <td>${meals[1][2]}</td>
            <td>${meals[1][3]}</td>
            <td>${meals[1][4]}</td>
        </tr>
        <tr id="tuesday">
            <td>Tuesday</td>
            <td>${meals[2][0]}</td>
            <td>${meals[2][1]}</td>
            <td>${meals[2][2]}</td>
            <td>${meals[2][3]}</td>
            <td>${meals[2][4]}</td>
        </tr>
        <tr id="wednesday">
            <td>Wednesday</td>
            <td>${meals[3][0]}</td>
            <td>${meals[3][1]}</td>
            <td>${meals[3][2]}</td>
            <td>${meals[3][3]}</td>
            <td>${meals[3][4]}</td>
        </tr>
        <tr id="thursday">
            <td>Thursday</td>
            <td>${meals[4][0]}</td>
            <td>${meals[4][1]}</td>
            <td>${meals[4][2]}</td>
            <td>${meals[4][3]}</td>
            <td>${meals[4][4]}</td>
        </tr>
        <tr id="friday">
            <td>Friday</td>
            <td>${meals[5][0]}</td>
            <td>${meals[5][1]}</td>
            <td>${meals[5][2]}</td>
            <td>${meals[5][3]}</td>
            <td>${meals[5][4]}</td>
        </tr>
        <tr id="saturday">
            <td>Saturday</td>
            <td>${meals[6][0]}</td>
            <td>${meals[6][1]}</td>
            <td>${meals[6][2]}</td>
            <td>${meals[6][3]}</td>
            <td>${meals[6][4]}</td>
        </tr>
    </table>
        `;
        mealPlan.document.write(tableContent);

        mealPlan.document.write('<button id="print">Print Page</button>');
        mealPlan.document.getElementById("print").addEventListener('click', function(){
            mealPlan.print();
        })
        //write the end of the document
        mealPlan.document.write("</body></html>");     
    });
});

